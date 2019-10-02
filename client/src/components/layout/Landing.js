import React, { Component } from "react";
import { Link } from "react-router-dom";
import photographerImg from "/Users/shaina/Desktop/mopsyellow/client/src/images/adult-backpack-camera-305086.jpg";
import photoShootImg from "/Users/shaina/Desktop/mopsyellow/client/src/images/adorable-black-and-white-blur-260175.jpg";

import "./Landing.css";
class Landing extends Component {
  render() {
    return (
      <div style={{ 
          marginLeft:"0px", 
          marginRight:"0px", 
          width:"100%",
          background: "#2D2F33",
          color:"white",
          maxWidth: "inherit"
           }} className="container">
        <div className="row top-banner-row" 
        style={{
          display: "flex",
          paddingTop: "20px",
          backgroundColor: "#c0aa3d",
          position: "relative",
          height: "fit-content"//,
          //width: "fit-content"//,
          //padding: "0 1.05rem"//,
         // clipPath: polygon( 0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw) )
                }}>
          <div className="col m4 info-box-banner">
            <div className="row">
              <div className="col s12 info-box-banner-client" style={{textAlign: "center"}}>
                <h2 className="banner-client-h2">Take A Vacation</h2>
              </div>
            </div>
            <hr className="header-hr" style={{width:"50%", color:"white"}} />
            <div className="row">
              <div className="col s12 info-box-banner-photographer" style={{textAlign: "center"}}>
                <h2 className="banner-photographer-h2">Grab your Camera</h2>
              </div>
            </div>
          </div>
          <div className="col m4 info-box-banner">
            <div className="row">
              <div className="col s12 info-box-banner-client" style={{textAlign: "center"}}>
                <h2 className="banner-client-h2">Find a Scenic Location</h2>
              </div>
            </div>
            <hr className="header-hr" style={{width:"50%", color:"white"}} />
            <div className="row">
              <div className="col s12 info-box-banner-photographer" style={{textAlign: "center"}}>
                <h2 className="banner-photographer-h2">Look for the Crowds</h2>
              </div>
            </div>
          </div>
          <div className="col m4 info-box-banner">
            <div className="row">
              <div className="col s12 info-box-banner-client" style={{textAlign: "center"}}>
                <h2 className="banner-client-h2">Get a Timeless Memory</h2>
              </div>
            </div>
            <hr className="header-hr" style={{width:"50%", color:"white"}} />
            <div className="row">
              <div className="col s12 info-box-banner-photographer" style={{textAlign: "center"}}>
                <h2 className="banner-photographer-h2">Snap the Smiles</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6" style={{color:"white", textAlign: "center"}}>
            <h2 className="post-box-h2">Make Memories that will last a lifetime</h2>
            <div className="post-box-desc" style={{fontSize:"20px"}}>
              <p>Wish you had access to high quality photography when and where you need it?</p>
              <p>With PhotoSwami all you have to do is show up and photographers will be there ready to snap the perfect shot everytime</p>
              <p>It's simple! Once they take your photos it will be texted to you and you can choose your favorites to purchase</p>
              <p>Don't like the photos? No problem, have more taken or decide not to buy them there is no obligation</p>
            </div>
          </div>
          <div className="col-sm-6" style={{color:"white", textAlign: "center"}}>
          <img style={{width:"100%",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} 
                src={photoShootImg} alt="PhotoSwami" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6" style={{color:"white", textAlign: "center"}}>
          <img style={{width:"100%",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} 
                src={photographerImg} alt="PhotoSwami" />
          </div>
          <div className="col-sm-6" style={{color:"white", textAlign: "center"}}>
            <h2 className="post-box-h2">Channel your passions into a Career</h2>
            <div className="post-box-desc" style={{fontSize:"20px"}}>
              <p>Wish you could spend more time taking meaningful photos?</p>
              <p>Become a PhotoSwami and help people make memories wherever and whenever you would like</p>
              <p>Choose your pricing per photo, work hours, and location to see how much fun being a PhotoSwami can be</p>
              <p>There is no commitment and you can work how much or as little as you would like!</p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="footer-banner row" style={{
          marginTop: "20px",
          //clippath
          minHeight:"200px",
          backgroundColor:"#c0aa3d"
        }}>
        </div>
      </div>
    );
  }
}

export default Landing;
