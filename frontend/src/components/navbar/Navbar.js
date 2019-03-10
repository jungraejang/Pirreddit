import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../../img/reddit_logo.png";
import NavbarScroll from "./Navbar_Scroll.js";
import popularPosts from "../../img/popular_posts_blue.png";
import allPosts from "../../img/all_posts_blue.png";
import { withRouter } from "react-router";

const Navbar = props => {

  console.log("Navbar props: ", window.location.pathname)
  return (
    <nav className="navbar">
      <NavLink to={"/"}>
        <img src={LogoImg} alt="" className="reddit_logo" />
      </NavLink>
      <NavbarScroll />
      <input className="search_bar_nav" />
      <NavLink to={"/r/popular"}>
        <img
          src={popularPosts}
          alt=""
          className="popular_posts_logo_blue_nav"
        />
      </NavLink>
      <NavLink to={"/r/all"}>
        <img src={allPosts} alt="" className="all_posts_logo_blue_nav" />
      </NavLink>
      {!props.isLoggedIn ? (<><NavLink to={window.location.pathname}>
        <button className="login_button" onClick={props.toggleLogin}>
          Log In
        </button>
      </NavLink>
      <NavLink to={window.location.pathname}>
        <button className="signup_button" onClick={props.toggleSignup}>
          Sign Up
        </button>
      </NavLink></>) : null}
      <p>{props.isLoggedIn ? props.username : null}</p>
      {props.isLoggedIn ? (<button onClick={props.logoutUser}>Logout</button>) : null}
    </nav>
  );
};

export default withRouter(Navbar);
