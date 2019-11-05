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
                            Purchased Photos
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
        <h2 className="post-box-h2">October, 2019</h2>
        <div className="row">
            <div className="col s6" style={{color:"white", textAlign: "center"}}>
                <div className="post-box-desc" style={{fontSize:"20px"}}>
                <img style={{
                    width:"150px",
                    display:"inlineBlock",
                    marginLeft:"5px",
                    marginRight:"5px"}} src="https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg" alt="PhotoSwami" />
                    <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="col s6">
                <img style={{
                    width:"150px",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
            </div>
        </div>
        <div className="row">
            <div className="col s6" style={{color:"white", textAlign: "center"}}>
                <div className="post-box-desc" style={{fontSize:"20px"}}>
                <img style={{
                    width:"150px",
                    display:"inlineBlock",
                    marginLeft:"5px",
                    marginRight:"5px"}} src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="col s6">
                <img style={{
                    width:"150px",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} src="https://images.unsplash.com/photo-1518159357049-bb438a340932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
            </div>
        </div>
        <h2 className="post-box-h2">September, 2019</h2>
        <div className="row">
            <div className="col s6" style={{color:"white", textAlign: "center"}}>
                <div className="post-box-desc" style={{fontSize:"20px"}}>
                <img style={{
                    width:"150px",
                    display:"inlineBlock",
                    marginLeft:"5px",
                    marginRight:"5px"}} src="https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg" alt="PhotoSwami" />
                    <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="col s6">
                <img style={{
                    width:"150px",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
            </div>
        </div>
        <div className="row">
            <div className="col s6" style={{color:"white", textAlign: "center"}}>
                <div className="post-box-desc" style={{fontSize:"20px"}}>
                <img style={{
                    width:"150px",
                    display:"inlineBlock",
                    marginLeft:"5px",
                    marginRight:"5px"}} src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="col s6">
                <img style={{
                    width:"150px",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} src="https://images.unsplash.com/photo-1518159357049-bb438a340932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="ntainer">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
            </div>
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
                        <h1 style={{marginBottom:"0px", marginTop: "50px", textAlign: "left"}}>
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
        <h2 className="post-box-h2">October, 2019</h2>
        <div className="row">
            <div className="col s6" style={{color:"white", textAlign: "center"}}>
                <div className="post-box-desc" style={{fontSize:"20px"}}>
                <img style={{
                    width:"150px",
                    display:"inlineBlock",
                    marginLeft:"5px",
                    marginRight:"5px"}} src="https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="PhotoSwami" />
                    <label class="ntainer">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="col s6">
                <img style={{
                    width:"150px",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} src="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="ntainer">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
            </div>
        </div>
        <div className="row">
            <div className="col s6" style={{color:"white", textAlign: "center"}}>
                <div className="post-box-desc" style={{fontSize:"20px"}}>
                <img style={{
                    width:"150px",
                    display:"inlineBlock",
                    marginLeft:"5px",
                    marginRight:"5px"}} src="https://images.unsplash.com/photo-1508214406285-c765025445df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="PhotoSwami" />
                    <label class="ntainer">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="col s6">
                <img style={{
                    width:"150px",
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto"}} src="https://images.unsplash.com/photo-1503431153573-96e959f4d9b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="PhotoSwami" />
                    <label class="ntainer">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
            </div>
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
