import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import "./PhoneVerification.css";
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';

class PhoneVerification extends React.Component {
    // var phoneNumber = '';
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
        
        // phoneNumber = event.target.value;
        // console.log(phoneNumber);
        // value => this.setState({ value });
    }

    handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    // window.location.href("./CodeVerification");
        event.preventDefault();
        //axios connecting to server and sending phone number to http://photoswami.com:3000/api/auth/user/verify_phone
        console.log(this.state.value+"test");

        axios.post('http://photoswami.com:3000/api/auth/user/verify_phone', {
            phoneNumber: this.state.value,
          })
          .then(function (response) {
            console.log(response);
            console.log("success");
            // console.log(phoneNumber);
          })
          .catch(function (error) {
            console.log(error);
            console.log("error");
            // console.log(phoneNumber);
          });
          
        this.props.history.push('/codeverification/');
    
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
                            <form class="form" id="form1" onSubmit={this.handleSubmit}>
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
            </div>           
            
        );
    }
}

//ReactDOM.render(<PhoneVerification />, document.getElementById('YourPhotos'));
export default PhoneVerification;