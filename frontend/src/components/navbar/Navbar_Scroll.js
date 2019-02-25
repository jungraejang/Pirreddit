import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import popularPosts from "../../img/popular_posts_blue.png";
import allPosts from "../../img/all_posts_blue.png"


class Navbar_Scroll extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      scrollMenuToggled: false,
      menuSelection: "Home"
    }
  }

  scrolldownMenuDisplay = () => {
    return (
      <div className="scrolldown_menu_tabs">
      <input />
      <p>REDDIT FEEDS</p>
      <div>
        <Link to="/" name="Home" onClick={this.selectScrollMenuChoice}>Home</Link>
        <br />
        <Link to="/r/popular" name="Popular" onClick={this.selectScrollMenuChoice}>
        <img src={popularPosts} alt="" className="popular_logo_scrollmenu" />Popular</Link>
        <br />
        <Link to="/r/all" name="All" onClick={this.selectScrollMenuChoice}>
        <img src={allPosts} alt="" className="allPosts_logo_scrollmenu" />All</Link>
      </div>
      </div>
    )
  }

  selectScrollMenuChoice = (event) => {
    console.log(event.target.name)
    this.setState({
      menuSelection: event.target.name
    })
  }

  toggleScrollMenu = () => {
    this.setState({
      scrollMenuToggled: !this.state.scrollMenuToggled
    })
  }

  render() {
    console.log("Navbar Props", this.props)
    console.log("Menu Selection", this.state.menuSelection)
    return (
      <div className="scrolldown_menu">
        <div className="scrolldown_menu_button">
          <button onClick={this.toggleScrollMenu}>{this.state.menuSelection}</button>
        </div>
        {this.state.scrollMenuToggled ? this.scrolldownMenuDisplay() : null}
      </div>
    );
  }
}

export default withRouter(Navbar_Scroll);
