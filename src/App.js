import React, { Component } from 'react';
import './App.css';
import { Steps, Button, message } from 'antd';

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

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };
  
  onMagicHandler() {
    message.success('Magic Hat is editing your photo!')
  }

  render() {
    const { current } = this.state;

    return (


      <div className="content-container">

      <div className="title-img"><img src="../logo/magic_hat_text.png"/></div>
      
      <Steps current={current} 
            size="small"
            onChange={this.onChange}
            style={{paddingBottom:30}}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].component}</div>

      <div className="steps-action">
        <div class="float-right">
          {current > 0 && (
            <Button variant="outline-secondary"
                    onClick={() => this.prev()}
                    >
              Previous
            </Button>
          )}

          {current < steps.length - 1 && (
            <Button 
                    style={{marginLeft: 8}} 
                    onClick={() => this.next()}
                    >
              Next
            </Button>
          )}

          {/* remove next in the magician page */}
          {current === steps.length - 1 
          // && (
          //   <Button type="primary" onClick={this.onMagicHandler}>
          //     Run Magic Hat
          //   </Button>
          // )
          }  
        </div>

      </div>
      
      {/* insert blank lines to fix background color issue in the bottom */}
      <div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>);


  }


}


export default App;
