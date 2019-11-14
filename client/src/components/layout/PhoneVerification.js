import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import "./PhoneVerification.css";
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';
var phoneNumber = '';
class PhoneVerification extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitPhone = this.handleSubmitPhone.bind(this);
        this.handleSubmitCode = this.handleSubmitCode.bind(this);
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
        
        // phoneNumber = event.target.value;
        // console.log(phoneNumber);
        // value => this.setState({ value });
    }

    handleSubmitPhone(event) {
    // alert('A name was submitted: ' + this.state.value);
    // window.location.href("./CodeVerification");
        event.preventDefault();
        //axios connecting to server and sending phone number to http://photoswami.com:3000/api/auth/user/verify_phone
        console.log(this.state.value+"test");

        axios.post('https://photoswami.com/api/verifyphone', {
            phoneNumber: this.state.value,
          })
          .then(function (response) {
            console.log(response);
            console.log("success");
            // this.props.history.push('/codeverification/');
          })
          .catch(function (error) {
            console.log(error);
            console.log("error");
          });
        document.getElementById("form-main1").style.display = "none";
        document.getElementById("form-main2").style.display = "";
        document.getElementById("access-info").style.display="";
        // this.props.history.push('/codeverification/');
        phoneNumber = this.state.value;
        // this.state.value = "";
        // console.log(this.state.value);
    }

    handleSubmitCode(event) {
        // alert('A name was submitted: ' + this.state.value);
        // window.location.href("./CodeVerification");
            event.preventDefault();
            //axios connecting to server and sending phone number to http://photoswami.com:3000/api/auth/user/verify_phone
    
            axios.post('https://photoswami.com/api/verifycode', {
                phoneNumber: phoneNumber,    
                validationCode: this.state.value,
              })
              .then(function (response) {
                console.log(response);
                console.log("success");
                // this.props.history.push('/codeverification/');
              })
              .catch(function (error) {
                console.log(error);
                console.log("error");
              });
            this.props.history.push('/postcheckout/');

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
                        <div id="access-info" style={{display: "none"}}>
                            <h4>You should receive a code within the next 5 minutes</h4>
                        </div>
                    </div>
                    
                    <div id="form-main1" style={{textAlign: "center"}}>
                        <div id="form-div">
                            <form class="form" id="form1" onSubmit={this.handleSubmitPhone}>
                            <p class="phone">
                                <input name="phone" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Phone Number" id="phone" value={this.state.value} onChange={this.handleChange} />
                                {/* <PhoneInput name="phone" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Phone Number" id="phone" value={this.state.value} onChange={this.handleChange} /> */}
                            </p>

                            <div class="submit">
                                <input type="submit" value="Send Verification Code" id="button-blue"/>
                                <div class="ease"></div>
                            </div>
                            </form>
                        </div>

                    </div>

                    <div id="form-main2" style={{display: "none", textAlign: "center"}}>
                        <div id="form-div">
                            <form class="form2" id="form2" onSubmit={this.handleSubmitCode}>
                            <p class="code">
                                <input name="code" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Verification Code" id="code" value={this.state.value} onChange={this.handleChange}/>
                            </p>

                            <div class="submit">
                                <input type="submit" value="Verify Phone Number" id="button-blue"/>
                                <div class="ease"></div>
                            </div>
                            </form>
                        </div>

                    </div>

                    <h4 style={{textAlign: "center", paddingBottom: "-20px"}}>Join PhotoSwami today for no membership fee and unlimited cloud storage</h4> 
            </div>           
            
        );
    }
}

//ReactDOM.render(<PhoneVerification />, document.getElementById('YourPhotos'));
export default PhoneVerification;