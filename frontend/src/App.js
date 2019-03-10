import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import Navbar from "./components/navbar/Navbar.js";
import { Route, Switch } from "react-router-dom";
import PostDisplayContainer from "./components/posts/PostDisplayContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import PopularPostDisplayContainer from "./components/posts/PopularPostDisplayContainer";
import AdDisplay from "./components/ad_space/AdDisplay.js";
import FrontPage from "./components/side_items/FrontPage.js";
// import AuthForm from "./login/AuthForm";
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";
import AuthForm from "./components/login/AuthForm.js";
import SigninAuthForm from "./components/login/SigninAuthForm.js";
// import SinglePostDisplay from "./components/posts/SinglePostDisplay.js"
import SinglePostContainer from "./components/posts/SinglePostContainer.js";

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
    this.setState({
      signupToggle: !this.state.signupToggle,
      loginToggle: false
    });
  };

  toggleLogin = () => {
    this.setState({
      signupToggle: false,
      loginToggle: !this.state.loginToggle
    });
  };

  checkAuthenticateStatus = () => {
    // const config = {
    //   method: "get",
    //   withCredentials: true
    // }

    axios.get("/users/isLoggedIn").then(user => {
      console.log("username:", user);

      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  displaySideItems = () => {
    if (
      (window.location.pathname === "/" ||
        window.location.pathname === "/r/all" ||
        window.location.pathname === "/r/popular") &&
      this.state.isLoggedIn === true
    ) {
      return (
        <>
          <FrontPage />
          <AdDisplay />
        </>
      );
    } else if (
      window.location.pathname === "/" ||
      window.location.pathname === "/r/all" ||
      window.location.pathname === "/r/popular"
    ) {
      return (
        <>
          <AdDisplay />
        </>
      );
    } else {
      return null;
    }
  };

  switchClass = () => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/r/all" ||
      window.location.pathname === "/r/popular"
    ) {
      return "all_post_display";
    } else {
      return "all_post_display_ext";
    }
  };

  render() {
    console.log("is user authenticated?", Auth.isUserAuthenticated());
    console.log("Window Location: ", window.location.pathname);
    console.log("username: ", this.state.username);
    return (
      <div className="App">
        <NavbarContainer
          toggleSignup={this.toggleSignup}
          toggleLogin={this.toggleLogin}
          isLoggedIn={this.state.isLoggedIn}
          username={this.state.username}
          logoutUser={this.logoutUser}
        />
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
          <div className={this.switchClass()}>
            <Route exact path="/" component={PostDisplayContainer} />
            <Route exact path="/r/all" component={PostDisplayContainer} />
            <Route
              exact
              path="/r/popular"
              component={PopularPostDisplayContainer}
            />
            <Route
              path="/r/:subreddit/comments/:id/:post_title"
              render={props => (
                <SinglePostContainer
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  username={this.state.username}
                />
              )}
            />
          </div>
          <div className="side_items_div">{this.displaySideItems()}</div>
        </div>
      </div>
    );
  }
}

export default App;
