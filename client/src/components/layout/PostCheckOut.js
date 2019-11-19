import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PostCheckOut.css";
import axios from 'axios';

class PostCheckOut extends Component {
    constructor(props){
        super(props);
    
    axios.get(
        'https://photoswami.com/api/library/', {
            headers: {
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjE4NTg0MTQ3NTQ1IiwiaWF0IjoxNTc0MTk5ODc1LCJleHAiOjE1NzQyMDM0NzV9.0pmdVFLV2z29jI1RgmSBhRjcXIW3lUWtqGoI0pAWFjM'
          }
        }
      )
      .then((response) => {
          var response = response.data;
          console.log(response);
          console.log("success");
          console.log(response.results);
        },
        (error) => {
          var status = error.response.status
          console.log(status);
          console.log("error");
        }
      );
    }
    // axios.get(
    //     'https://photoswami.com/api/user/library/',
    //     {headers: {
    //         "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Ijg1ODQxNDc1NDUiLCJpYXQiOjE1NzM3NjUyNzksImV4cCI6MTU3Mzc2ODg3OX0.qgUoVe8Y_yMLmVe554KlcXoV2nz_qAqjspt_P6G4BfQ"
    //     }
    // })
    // .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    // .finally(function () {
    //     // always executed
    // });

  render() {
    return (
      <div style={{ 
          marginTop: "20px",
          marginLeft:"0px", 
          marginRight:"0px", 
          width:"100%",
          background: "#2D2F33",
          color:"white",
          maxWidth: "inherit"
           }} className="container">
        <div className="row" style={{
            backgroundColor: "#c0aa3d",
            textAlign:"center"}}>
            <div className="col s12">
                <div className="row">
                    <div className="col s12">
                        <h1 style={{marginBottom:"0px", textAlign: "Left"}}>
                            Available for Purchase
                        </h1>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col s12">
                        <h3 style={{marginTop:"0px"}}>01/01/2020</h3>
                    </div>
                </div> */}
            </div>
        </div>
        <h4>Select your photos below to purchase</h4>
        <h5 style={{textAlign: "left"}}>November 2019</h5>
        <div class="photos">
            <div class="photo-block" style={{width: "100%"}}>
                <img src="http://res.cloudinary.com/midnight-oil-developers/image/private/c_scale,w_300/a_19,co_rgb:b8a859,fl_tiled,l_text:Michroma_20_bold:photoSwami.com,o_80/v1/5dcdd4a7a2773527d1a35db0/20191114_022647_0" alt="photoswami"/>
                {/* <div class="price-box"></div> */}
                    <label class="container1">
                        <input type="checkbox"/>  
                        <span class="checkmark">$1</span>
                    </label>
                {/* </div> */}
            </div>
            <div class="photo-block" style={{width: "100%"}}>
                <img src="http://res.cloudinary.com/midnight-oil-developers/image/private/c_scale,w_300/a_19,co_rgb:b8a859,fl_tiled,l_text:Michroma_20_bold:photoSwami.com,o_80/v1/5dcdd4a7a2773527d1a35db0/20191114_022649_1" alt="photoswami"/>
                        <label class="container1">
                        <input type="checkbox"/>  
                        <span class="checkmark">$1</span>
                    </label>
            </div>
            <div class="photo-block" style={{width: "100%"}}>
                <img src="http://res.cloudinary.com/midnight-oil-developers/image/private/c_scale,w_300/a_19,co_rgb:b8a859,fl_tiled,l_text:Michroma_20_bold:photoSwami.com,o_80/v1/5dcdd4a7a2773527d1a35db0/20191114_022651_2" alt="photoswami"/>
                <label class="container1">
                        <input type="checkbox"/>  
                        <span class="checkmark">$1</span>
                </label>
            </div>
    {/* </div> */}
        <div className="row">
            {/* <form>
                <div class="select-image">
                    <img src="https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg" alt="image>"
                    <input type="checkbox" name="vehicle1" value="Bike"/> I have a bike<br>
                </div>
                <input type="checkbox" name="vehicle2" value="Car"/> I have a car
            </form>  */}
        </div>
        <button type="button" style={{
            backgroundColor: "gray", /* Green */
            border: "none",
            marginBottom: "5px",
            color: "black",
            padding: "15px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "S",
            borderRadius: "5px"
        }}>Purchase</button>     

        <div className="row" slstyle={{
            backgroundColor: "#c0aa3d",
            textAlign:"center"}}>
            <div className="col s12">
                <div className="row">
                    <div className="col s12">
                        <h1 style={{marginBottom:"0px", marginTop: "50px", textAlign: "left"}}>
                            Available for Download
                        </h1>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col s12">
                        <h3 style={{marginTop:"0px"}}>01/01/2020</h3>
                    </div>
                </div> */}
            </div>
        </div>
        <h5 style={{textAlign: "left"}}>October 2019</h5>
        <div class="photo-block" style={{width: "100%"}}>
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="photoswami"/>
            <label class="container1">
                        <input type="checkbox"/>  
                        <span class="checkmark"></span>
            </label>
        </div>
        <button type="button" style={{
            backgroundColor: "gray", /* Green */
            border: "none",
            marginBottom: "5px",
            color: "black",
            padding: "15px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "S",
            borderRadius: "5px"
        }}>Download</button>           

        <div className="row" style={{
            backgroundColor: "#c0aa3d",
            textAlign:"center"}}>
            <div className="col s12">
                <div className="row">
                    <div className="col s12">
                        <h2 style={{marginBottom:"0px", marginTop: "30px"}}>
                            Download the app to access your full library and purchase photos at a later date
                        </h2>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                        </link>
                        <a href="#" class="fa fa-android"></a>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col s12">
                        <h3 style={{marginTop:"0px"}}>01/01/2020</h3>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default PostCheckOut;
