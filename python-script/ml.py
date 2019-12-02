import skimage
from skimage import io, filters
# from skimage.viewer import ImageViewer
import numpy as np
import matplotlib.pyplot as plt
from skimage.color import rgb2hsv, hsv2rgb
import sys


def split_image_into_channels(image):
    """Look at each image separately"""
    red_channel = image[:, :, 0]
    green_channel = image[:, :, 1]
    blue_channel = image[:, :, 2]
    return red_channel, green_channel, blue_channel


def merge_channels(red, green, blue):
    """Merge channels back into an image"""
    return np.stack([red, green, blue], axis=2)


def channel_adjust(channel, values):
    # preserve the original size, so we can reconstruct at the end
    orig_size = channel.shape
    # flatten the image into a single array
    flat_channel = channel.flatten()

    # this magical numpy function takes the values in flat_channel
    # and maps it from its range in [0, 1] to its new squeezed and
    # stretched range
    adjusted = np.interp(flat_channel, np.linspace(0, 1, len(values)), values)

    # put back into the original image shape
    return adjusted.reshape(orig_size)


def color_tuning_with_ref(original_img, ref_img, intensity):
  # ===== reading in the original image ===== #
  original_image = skimage.io.imread(original_img)
  original_image = skimage.util.img_as_float(original_image)
  r_o, g_o, b_o = split_image_into_channels(original_image)
  # calculate rbg means for original image
  rm_o = np.mean(r_o)
  gm_o = np.mean(g_o)
  bm_o = np.mean(b_o)

  rm_o = rm_o/(rm_o + gm_o + bm_o)
  gm_o = gm_o/(rm_o + gm_o + bm_o)
  bm_o = bm_o/(rm_o + gm_o + bm_o)

  # print(rm_o, gm_o, bm_o)

  # ===== reading in the reference image ===== #
  ref_image = skimage.io.imread(ref_img)
  ref_image = skimage.util.img_as_float(ref_image)
  r_r, g_r, b_r = split_image_into_channels(ref_image)
  # calculate rgb means for reference image
  rm_r = np.mean(r_r)
  gm_r = np.mean(g_r)
  bm_r = np.mean(b_r)

  rm_r = rm_r/(rm_r + gm_r + bm_r)
  gm_r = gm_r/(rm_r + gm_r + bm_r)
  bm_r = bm_r/(rm_r + gm_r + bm_r)

  # print(rm_r, gm_r, bm_r)

  # ===== start adjusting the original image ===== #

  r_amount = 0.5 + intensity * (0.5 * rm_r / rm_o - 0.5)
  g_amount = 0.5 + intensity * (0.5 * gm_r / gm_o - 0.5)
  b_amount = 0.5 + intensity * (0.5 * bm_r / bm_o - 0.5)

  # print(r_amount, g_amount, b_amount)
  #print('r: %d, g: %d, b: %d'%(r_amount, g_amount, b_amount))

  r_interp = channel_adjust(r_o, [0, np.min([r_amount, 1.0]), 1.0])
  g_interp = channel_adjust(g_o, [0, np.min([g_amount, 1.0]), 1.0])
  b_interp = channel_adjust(b_o, [0, np.min([b_amount, 1.0]), 1.0])

  img_color_tunned = merge_channels(r_interp, g_interp, b_interp)

  return img_color_tunned


def brightness_tuning_no_sep(im_o, ref_image, intensity):

  # ===== reading in the original image ===== #
  # im_o = skimage.io.imread(original_image)
  # im_o = skimage.util.img_as_float(im_o)
  hsv_img_o = rgb2hsv(im_o)
  h_o, s_o, v_o = split_image_into_channels(hsv_img_o)
  # print('original image brightness:', np.mean(v_o))

  # ===== reading in the reference image ===== #
  im_r = skimage.io.imread(ref_image)
  im_r = skimage.util.img_as_float(im_r)
  hsv_img_r = rgb2hsv(im_r)
  h_r, s_r, v_r = split_image_into_channels(hsv_img_r)
  # print('ref image brightness:',np.mean(v_r))

  # ===== Calculation Begins! ====== #

  vm_o = np.mean(v_o)
  vm_r = np.mean(v_r)

  vm_amount = 0.5 + intensity * (0.5 * vm_r / vm_o - 0.5)

  v_interp = channel_adjust(v_o, [0, np.min([vm_amount, 1.0]), 1.0])

  hsv_img = merge_channels(h_o, s_o, v_interp)
  img = hsv2rgb(hsv_img)

  return img


def magic_hat(input_img, ref_img, output_path):
    img_color_tunned = color_tuning_with_ref(input_img, ref_img, 0.5)
    img_brightness_tunned = brightness_tuning_no_sep(img_color_tunned, ref_img, 1)
    skimage.io.imsave(output_path, img_brightness_tunned)

if __name__ == "__main__":
    magic_hat(sys.argv[1], sys.argv[2], './public/output.jpg')
    print("connected to python")
    sys.stdout.flush()

# input_filename = sys.argv[1]
# reference_filename = sys.argv[2]

# img_color_tunned = color_tuning_with_ref(
#     input_filename, reference_filename, 0.6)
    
# skimage.io.imshow(img_color_tunned)
# skimage.io.imsave('./public/output.jpg', img_color_tunned)

