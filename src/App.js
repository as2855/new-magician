import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Steps, Button, message } from 'antd';

import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/home';
import Upload from './components/upload';
import Reference from './components/reference';
import Magician from './components/magician';

const { Step } = Steps;

const steps = [
  {
    title: 'Home',
    conent: 'Home-content',
    component: <Home />,
  },
  {
    title: 'Upload Input Image',
    content: 'Upload-content',
    component: <Upload />,
  },
  {
    title: 'Upload Reference Image',
    content: 'Reference-content',
    component: <Reference />,
  },
  {
    title: 'Magician',
    content: 'Magician-content',
    component: <Magician />,
  },
];

// var homePage = '<div className="intro-container">' +
// '<div className="logo"><img src="../logo/app-icon.png"/></div>' +
// '<h4 className="intro">Welcome to Magic Hat!</h4>' +
// '<h6 className="intro">Generates the “perfect” filter to enhance engagement based on image characteristics</h6>' +
// '</div>';

// var pageContent = [homePage]


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.myRef = React.createRef();
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  // getContent() {
  //   document.getElementById("steps-content").innerHTML = pageContent[this.state.current];
  // }

  render() {
    const { current } = this.state;

    return (


      <div className="content-container">

      <div className="title-img"><img src="../logo/magic_hat_text.png"/></div>

        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="steps-content">{steps[current].component}</div>
        {/* <div className="steps-content" id="steps-content">{steps[current].content}</div> */}

        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Magic Hat is editing your photo!')}>
              Run Magic Hat
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>

        {/* {this.refs.stepsContent.innerHTML = 'test'} */}
      </div>




      // <Router>
      //   <div>
          // <div className="title-img"><img src="../logo/magic_hat_text.png"/></div>

      //     {/* <h1>Magic Hat</h1> */}
      //     <nav className="custom-navbar">
      //       <ul className="navbar">
      //         <li><Link to={'/'} className="link"> Home </Link></li>
      //         <li><Link to={'/upload'} className="link">Upload</Link></li>
      //         <li><Link to={'/reference'} className="link">Reference</Link></li>
      //         <li><Link to={'/magician'} className="link">Magician</Link></li>
      //       </ul>
      //     </nav>
      //     {/* <hr /> */}
      //     <Switch>
      //         <Route exact path='/' component={Home} />
      //         <Route path='/upload' component={Upload} />
      //         <Route path='/reference' component={Reference} />
      //         <Route path='/magician' component={Magician} />
      //     </Switch>
      //   </div>
      // </Router>


    );


  }


}


export default App;
