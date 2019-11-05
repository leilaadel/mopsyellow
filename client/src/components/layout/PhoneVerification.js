import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import "./PhoneVerification.css";

class PhoneVerification extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images,
            selectAllChecked: false
        };

    }
    phoneSubmit(){
        alert("The form was submitted");
    }
    render () {
        return (
                <div style={{backgroundColor: "#c0aa3d"}}>
                    <div className="row welcome-header-row">
                        <div className="col-sm-12 welcome-header">
                            <img style={{
                            width:"60px",
                            display:"inline",
                            marginLeft:"auto",
                            marginTop: "-15px",
                            marginRight:"20px"}} src="https://i.imgur.com/mSFQdT6.png" alt="PhotoSwami" />
                            <h1 className="font-1" style={{display: "inline", paddingTop: "20px", fontFamily: "Michroma", fontSize: "20pt"}}>PhotoSwami</h1>
                        </div>
                    </div>
                    <div style={{margin: "10px", marginTop: "50px", marginBottom:"30px", textAlign: "center"}}>
                        <h3>Verify your phone number to access your photos</h3>
                    </div>
                    
                    <div id="form-main1">
                        <div id="form-div">
                            <form class="form" id="form1" onsubmit="phoneSubmit()">
                            
                            <p class="phone">
                                <input name="phone" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Phone Number" id="phone" />
                            </p>

                            <div class="submit">
                                <input type="submit" value="Send Verification Code" id="button-blue"/>
                                <div class="ease"></div>
                            </div>
                            </form>
                        </div>

                    </div>

                    <div id="form-main2">
                        <div id="form-div">
                            <form class="form" id="form1">
                            
                            <p class="verCode">
                                <input name="verCode" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Verification Code" id="verCode" />
                            </p>

                            <div class="submit">
                                <input type="submit" value="Validate Phone Number" id="button-blue"/>
                                <div class="ease"></div>
                            </div>
                            </form>
                        </div>

                    </div>
            </div>           
            
        );
    }
}

//ReactDOM.render(<PhoneVerification />, document.getElementById('YourPhotos'));
export default PhoneVerification;