import React, { Component } from "react";
import { Link } from "react-router-dom";
/*
import {
  Collapse,
  //Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
*/
  //import Navbar from 'react-bootstrap/Navbar';
  //import Nav from 'react-bootstrap/Nav';
  //import NavDropdown from 'react-boostrap/NavDropdown';


import "./Navbar.css";

class NavbarComponent extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0" id="nav-full-screen">
          <div className="nav-wrapper black">
            <div className="row">
            <div className="col m8">
            <Link
                to="/"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"//,
                  //fontSize: "2.8vw"
                }}
                className="hoverable accent-3 navbar-link"
              >
                PhotoSwami
              </Link>
              {/* <Link
                to="/iosuser"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="hoverable accent-3"
              >
                iOS User
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
                iOS Photographer
              </Link> */}
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
                className="hoverable accent-3 navbar-link"
              >
                Your Photos
              </Link>
            </div>
              <div className="col m4" style={{textAlign:"right"}}>
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="hoverable accent-3 navbar-link"
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
                className="hoverable accent-3 navbar-link"
              >
                Login
              </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black custom-nav">
        <Link
                to="/"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="pad-left"
                id="photoswami-home-link"
              >
                PhotoSwami
              </Link>
          <button className="navbar-toggler marg-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-black parent-ht" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto bg-black parent-ht">
              <li className="nav-item bg-black pad-left">
              <Link
                to="/yourphotos"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="nav-link custom-nav-link"
              >
                Your Photos
              </Link>
              </li>
            </ul>
            <ul className="navbar-nav bg-black parent-ht">
              <li className="nav-item bg-black pad-left">
              <Link
                to="/register"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="nav-link custom-nav-link"
              >Register
              </Link>
              </li>
              <li className="nav-item bg-black pad-left">
              <Link
                to="/login"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft:"15px"
                }}
                className="nav-link custom-nav-link"
              >
                Login
              </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarComponent;
