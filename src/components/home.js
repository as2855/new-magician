import React, { Component } from 'react';
import "antd/dist/antd.css";



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
              <h6 className="intro">Generates the “perfect” filter to enhance engagement based on image characteristics 🎩</h6>
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