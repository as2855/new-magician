import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Magician extends Component {

    onClickHandler = () => {
        console.log('The download link was clicked.');
        // this.setState(3);
        // window.location.reload();


        // generate the photo from the server side
        // python

        // get photo from server
        axios.get("http://localhost:8000")
            .then(res => {
                const photo = res.data;
                this.setState({ photo });
        })
        alert("Your edited photo is generating... ");

    }

    render() {
        return (
            <div className="col-container">
                {/* Navigation Buttons */}
                <div className="col-md-6">
                    {/* <div className="row">
                        <div className="col">
                            <span className="float-left">
                                <Link to={'/reference'} className="btn btn-primary btn-sm">Back</Link>
                            </span>
                        </div>
                    </div> */}
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

                    <div className="img-row">
                      <img src={"./output.jpg"} width={500} mode='fit' alt='Your output image is loading...' />
                    </div>


                    <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Download</button>
                    {/* <h4 className="magician">The Magic Hat will edit your photo.</h4>
                    <Link to={'/magician'} className="btn btn-success btn-block">Run Magic Hat</Link> */}
                </div>

              {/* <Link to={'/reference'} className="btn btn-primary btn-sm">Back</Link> */}

            </div>
        );
    }
}

export default Magician;
