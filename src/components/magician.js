import React, { Component } from 'react';
import { Button } from 'antd';

import "antd/dist/antd.css";


class Magician extends Component {
    constructor(props) {
    super(props);
    this.state = {
        output: null,
        firstblockshown: true,
        secblockshown: false,
        instashown: false
    }
}

magic_onClickHandler = () => {
    console.log('The magic button was clicked.');
    this.setState({
        output: "./output.jpg",
        firstblockshown: false,
        secblockshown: true
    })
}

preview_onClickHanler = () => {
    this.setState({
        instashown: true
    })
}

download_onClickHandler = () => {
    <a href="./output.jpg" download></a>
    console.log('The download link was clicked.');
}

share_onClickHanler = () => {
    window.open("https://www.instagram.com/wenyi616", "_blank") //to open new page
}

render() {
    const { firstblockshown } = this.state;
    const { secblockshown } = this.state;
    const { instashown } = this.state;

    return (
        <div class="container">
            <div className="magic-block">
            <div class="row">
                <div class="col">
                
                    {/* display two inputs */}
                    <div className="img-row">
                        <div className="img-col">
                        <img src={"./input.jpg"} width={200} mode='fit' alt='input image' />
                        <p className="magic-p">Input Image</p>
                        </div>
                        
                        <div className="img-col">
                        <img src={"./reference.jpg"} width={200} mode='fit' alt='reference image' />
                        <p className="magic-p">Reference Image</p>
                        </div>
                    </div>

                    {/* display outuput image */}
                    <div className="img-row">
                        <div className="img-col">
                        <img src={this.state.output} width={405} mode='fit'/>
                        </div>
                    </div>


                    <div className="img-row">
                        <div className="img-col">
                        {firstblockshown && (<div>
                            
                            <Button type="primary" onClick={this.magic_onClickHandler}>Magic  🍄</Button>

                        </div>)}

                        {/* hide or shown download button  */}
                        {secblockshown && (<div><br></br>
                            
                            <Button disabled type="primary" onClick={this.magic_onClickHandler}>Magic  🍄</Button>
                            <label className="magic-br">hhh</label>
                          
                            <Button type="primary" onClick={this.download_onClickHandler}>
                                <a href="./output.jpg" download>Download</a></Button>
                            
                            <label className="magic-br">hhh</label>

                            <Button type="primary" onClick={this.preview_onClickHanler}>Preview on Instagram</Button>

                        </div>)}
                        </div>
                    </div>

                </div>
                <p className="magic-vertical-line"></p>
                
                <div class="col">
                    {instashown && (<div>
                        <img src="./screen.png" width={300} mode='fit'/>
                        <br></br><br></br>
                        <Button type="primary" onClick={this.share_onClickHanler}>Share on instagram 📷</Button>
                    </div>
                    )}
                </div>

            </div>
            </div>
        </div>

    );
    }
}

export default Magician;
