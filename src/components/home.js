import React, { Component } from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import { Steps, Button, message } from 'antd';

// const { Step } = Steps;

// const steps = [
//   {
//     title: 'Home',
//     content: 'Home-content',
//   },
//   {
//     title: 'Upload Input Image',
//     content: 'Upload-content',
//   },
//   {
//     title: 'Upload Reference Image',
//     content: 'Reference-content',
//   },
//   {
//     title: 'Magician',
//     content: 'Magician-content',
//   },
// ];

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       current: 0,
    //     };
    // }

    // next() {
    //     const current = this.state.current + 1;
    //     this.setState({ current });
    // }
    
    // prev() {
    //     const current = this.state.current - 1;
    //     this.setState({ current });
    // }

    render() {
        return (
          <div className="intro-container" 
          style={{ paddingTop: 100, paddingBottom: 100}}>
            <div className="logo"><img src="../logo/app-icon.png"/></div>
              <h4 className="intro">Welcome to Magic Hat!</h4>
              <h6 className="intro">Generates the “perfect” filter to enhance engagement based on image characteristics</h6>
            </div>

        );
    }
}

// const home = () => {
//     return (
//        <div>
//           <h1>Home</h1>
//            <p>Home page body content</p>
//        </div>
//     );
// }
 
export default Home;