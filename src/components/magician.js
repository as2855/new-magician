import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Magician extends Component {

    onClickHandler = () => {
        console.log('The link was clicked.');
        window.location.reload();


        // generate the photo from the server side
        // python

        // get photo from server
        // axios.get("http://localhost:8000")
        //     .then(res => {
        //         const photo = res.data;
        //         this.setState({ photo });
        // })
        alert("Your edited photo is generating... ");

    }

    render() {
        return (
            <div>
                {/* Navigation Buttons */}
                <div className="col-md-6">
                    {/* <div className="row">
                        <div className="col">
                            <span className="float-left">
                                <Link to={'/reference'} className="btn btn-primary btn-sm">Back</Link>
                            </span>
                        </div>
                    </div> */}
                    <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Magic Happens Here</button>
                    <br></br>
                    <img src={"./output.jpg"} width={500} height={300} mode='fit' alt='Your output image is loading...' />
                    {/* <h4 className="magician">The Magic Hat will edit your photo.</h4>
                    <Link to={'/magician'} className="btn btn-success btn-block">Run Magic Hat</Link> */}
                </div>
                
              {/* <Link to={'/reference'} className="btn btn-primary btn-sm">Back</Link> */}
              
            </div>
        );
    }
}
 
export default Magician;