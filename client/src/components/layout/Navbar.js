import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black">
            <div className="row">
            <div className="col s8">
            <Link
                to="/"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="hoverable accent-3"
              >
                PhotoSwami
              </Link>
              <Link
                to="/iosuser"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="hoverable accent-3"
              >
                iOs User
              </Link>
              <Link
                to="/iosphotographer"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="hoverable accent-3"
              >
                iOs Photographer
              </Link>
              {/* <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="hoverable accent-3"
              >
                Download the App Now
              </Link>
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="hoverable accent-3"
              >
                About
              </Link> */}
              <Link
                to="/yourphotos"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="hoverable accent-3"
              >
                Your Photos
              </Link>
            </div>
              <div className="col s4" style={{textAlign:"right"}}>
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="hoverable accent-3"
              >
                <span className="glyphicon glyphicon-user"></span>Register
              </Link>
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="hoverable accent-3"
              >
                Log In
              </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
