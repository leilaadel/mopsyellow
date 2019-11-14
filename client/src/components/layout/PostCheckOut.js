import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PostCheckOut.css";


class PostCheckOut extends Component {
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
        <div class="photo-block" style={{width: "100%"}}>
            <img src="https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg" alt="photoswami"/>
            <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
            </label>
        </div>
        <div class="photo-block" style={{width: "100%"}}>
            <img src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="photoswami"/>
            <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
            </label>
        </div>
        <div class="photo-block" style={{width: "100%"}}>
            <img src="https://images.unsplash.com/photo-1518159357049-bb438a340932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="photoswami"/>
            <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
            </label>
        </div>
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
        <div class="photo-block" style={{width: "100%"}}>
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="photoswami"/>
            <label class="container">
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
    );
  }
}

export default PostCheckOut;
