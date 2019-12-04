import React, { Component } from 'react';
// import axios from 'axios';
// import {Progress} from 'reactstrap';
// import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Magician extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: null,
      buttontext: null,
      buttonhidden: "btn hide"
    }
  }

  magic_onClickHandler = () => {
    console.log('The magic button was clicked.');
    this.setState({
      output: "./output.jpg",
      buttontext: "Download",
      buttonhidden: "btn btn-success btn-block"
    })
  }

  download_onClickHandler = () => {
    console.log('The download link was clicked.');
  }

  render() {
    return (
      <div className="col-container">
          {/* Navigation Buttons */}
          <div className="col-md-6">
            <div className="img-row">
              <div className="img-col">
                <img src={"./input.jpg"} width={250} mode='fit' alt='input image' />
                <p>Input Image</p>
              </div>
              <div className="img-col">
                <img src={"./reference.jpg"} width={250} mode='fit' alt='reference image' />
                <p>Reference Image</p>
              </div>
            </div>

            {/* Display Image Before Uploading */}
            <div className="img-row">
                <img src={this.state.output} width={500} mode='fit'/>
            </div>

            {/* <div className="img-row">
              <img src={"./output.jpg"} width={500} mode='fit' alt='Your output image is loading...' />
            </div> */}

          <div className="img-row">
            <div className="col">
              <button type="button" className="btn btn-success btn-block" onClick={this.magic_onClickHandler}>Magic</button>
            </div>

            <div className="col">
              <a href="./output.jpg" download>
                <button type="button" onClick={this.download_onClickHandler}
                        class={this.state.buttonhidden}>{this.state.buttontext}</button>
              </a>
            </div>
          </div>
          </div>
      </div>
        );
    }
}

export default Magician;
