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

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
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
