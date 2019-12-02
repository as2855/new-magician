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
        // const { current } = this.state;

        return (
            <div className="intro-container">
              <div className="logo"><img src="../logo/app-icon.png"/></div>

              {/* <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
              </Steps> */}

              {/* <div className="steps-content"> */}
                <h4 className="intro">Welcome to Magic Hat!</h4>
                <h6 className="intro">Generates the “perfect” filter to enhance engagement based on image characteristics</h6>
                {/* Navigation Buttons */}
                {/* <Link to={'/upload'} className="btn btn-primary btn-sm btn-block">Next</Link> */}
              {/* </div> */}

              {/* <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                    Next
                    </Button>
                    // <Link to={'/upload'} className="btn btn-primary btn-sm btn-block">Next</Link>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                    </Button>
                )}
              </div> */}

              

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