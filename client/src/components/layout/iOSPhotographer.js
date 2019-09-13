import React, { Component } from "react";
import { Link } from "react-router-dom";

class iOSPhotographer extends Component {
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
        <div className="row" style={{
            backgroundColor: "#c0aa3d",
            textAlign:"center"}}>
            <div className="col s12">
                <div className="row">
                    <div className="col s12">
                        <h1 style={{marginBottom:"0px"}}>
                            Photographer iOs Release Info
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h3 style={{marginTop:"0px"}}>01/01/2020</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col s6" style={{color:"white", textAlign: "center"}}>
                <h2 className="post-box-h2">Make Memories that will last a lifetime</h2>
                <div className="post-box-desc" style={{fontSize:"20px"}}>
                    <p>Wish you had access to high quality photography when and where you need it?</p>
                    <p>With PhotoSwami all you have to do is show up and photographers will be there ready to snap the perfect shot everytime</p>
                    <p>It's simple! Once they take your photos it will be texted to you and you can choose your favorites to purchase</p>
                    <p>Don't like the photos? No problem, have more taken or decide not to buy them there is no obligation</p>
                </div>
            </div>
            <div className="col s6">
                <img style={{
                    width:"inherit",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} src="https://i.imgur.com/0yjYi8J.jpg" alt="PhotoSwami" />
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

export default iOSPhotographer;
