import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar/Navbar.js";
import { Route } from "react-router-dom";
import PostDisplayContainer from "./components/posts/PostDisplayContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import PopularPostDisplayContainer from "./components/posts/PopularPostDisplayContainer";
import AdDisplay from "./components/ad_space/AdDisplay.js";
// import AuthForm from "./login/AuthForm";
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";
import AuthForm from "./components/login/AuthForm.js";
import SigninAuthForm from "./components/login/SigninAuthForm.js"

class App extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    signupToggle: false,
    loginToggle: false
  };

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  toggleSignup = () => {
    debugger;
    this.setState({
      signupToggle: !this.state.signupToggle,
      loginToggle: false
    });
  };

  toggleLogin = () => {
    debugger;
    this.setState({
      signupToggle: false,
      loginToggle: !this.state.loginToggle
    })
  }

  checkAuthenticateStatus = () => {
    const config = {
      method: "get",
      withCredentials: true
    }
    debugger;
    axios.get("/users/isLoggedIn")
    .then(user => {
      console.log("username:", user);
      debugger;
      if (user.data.username === Auth.getToken()) {
        debugger
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        debugger;
        if (user.data.username) {
          this.logoutUser();
        } else {
          debugger;
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    debugger;
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    console.log("is user authenticated?", Auth.isUserAuthenticated())
    return (
      <div className="App">
        <NavbarContainer toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />
        {this.state.signupToggle ? (
          <AuthForm
            checkAuthenticateStatus={this.checkAuthenticateStatus}
            isLoggedIn={this.state.isLoggedIn}
            toggleSignup={this.toggleSignup}
            toggleLogin={this.toggleLogin}
          />
        ) : null}
        {this.state.loginToggle ? (
          <SigninAuthForm
          checkAuthenticateStatus={this.checkAuthenticateStatus}
          isLoggedIn={this.state.isLoggedIn}
          toggleSignup={this.toggleSignup}
          toggleLogin={this.toggleLogin}
          />
        ) : null}
        <div className="all_contents_div">
          <div className="all_post_display">
            <Route exact path="/" component={PostDisplayContainer} />
            <Route exact path="/r/all" component={PostDisplayContainer} />
            <Route
              exact
              path="/r/popular"
              component={PopularPostDisplayContainer}
            />
          </div>
          <AdDisplay />
        </div>
      </div>
    );
  }
}

export default App;
