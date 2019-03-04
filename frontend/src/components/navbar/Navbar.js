import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../../img/reddit_logo.png";
import Navbar_Scroll from "./Navbar_Scroll.js";
import popularPosts from "../../img/popular_posts_blue.png";
import allPosts from "../../img/all_posts_blue.png";

const Navbar = props => {
  // console.log("Props", props)
  return (
    <nav className="navbar">
      <NavLink to={"/"}>
        <img src={LogoImg} alt="" className="reddit_logo" />
      </NavLink>
      <Navbar_Scroll />
      <input className="search_bar_nav" value="Search Reddit" />
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
      <NavLink to={"/"}>
        <button className="login_button" onClick={props.toggleLogin}>
          Log In
        </button>
      </NavLink>
      <NavLink to={"/"}>
        <button className="signup_button" onClick={props.toggleSignup}>
          Sign Up
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
