import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import $ from 'jquery'; 
//import "../../node_modules/jquery/dist/jquery.min.js";
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import iOSUser from "./components/layout/iOSUser";
import iOSPhotographer from "./components/layout/iOSPhotographer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import YourPhotos from "./components/layout/YourPhotos";
import PostCheckOut from "./components/layout/PostCheckOut";
import Footer from "./components/layout/Footer";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/iosuser" component={iOSUser} />
            <Route exact path="/iosphotographer" component={iOSPhotographer} />
            <Route exact path="/yourphotos" component={YourPhotos} />
            <Route exact path="/postcheckout" component={PostCheckOut} />
            <Footer />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

// <Route exact path="/yourphotos" component={YourPhotos} />
