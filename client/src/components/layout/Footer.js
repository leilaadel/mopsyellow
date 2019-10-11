import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";


class FooterComponent extends Component {
    render() {
      return (
        <div className="footer-fixed" style={{ textAlign: "center", marginTop: "50px"}}>
                <div className="row">
                <div className="col m8">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    </link>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    {/* <a href="#" class="fa fa-pinterest"></a>
                    <a href="#" class="fa fa-android"></a>
                    <a href="#" class="fa fa-vimeo"></a>
                    <a href="#" class="fa fa-tumblr"></a>
                    <a href="#" class="fa fa-flickr"></a>
                    <a href="#" class="fa fa-reddit"></a> */}
                </div>
                </div>
            
        </div>
      );
    }
  }
  
  export default FooterComponent;