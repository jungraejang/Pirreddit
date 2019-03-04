import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Auth from "../../utils/Auth";
import Form from "./Form"
import SigninForm from "./SigninForm"
import signin_side_img from "../../img/signin_side_img.png"
import signin_x_mark from "../../img/x-mark-thin-240.png"



class SigninAuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      age: "",
      email: "",
      userRegistered: false,
      registrationFailed: false,
      isLoggedIn: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loginUser = event => {
    debugger
    event.preventDefault();
    const { username, password } = this.state;
    debugger
    axios
      .post("/users/login", { username, password })
      .then(() => {
        debugger
        Auth.authenticateUser(username);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: ""
        })
      });
  };

  loginForm = () => {
    const { username, password } = this.state;
    const { isLoggedIn, signupToggle, loginToggle } = this.props;
    return (
    <div className="authform_div">
    <div className="authform">
    <img src={signin_side_img} className="signin_side_img" />
    <div className="authform_contents">
    <SigninForm
      username={username}
      password={password}
      isLoggedIn={isLoggedIn}
      loginUser={this.loginUser}
      handleChange={this.handleChange}
    />
    {this.state.registrationFailed ? <p>Registration Failed</p> : null}
    </div>
    <img src={signin_x_mark} className="signin_x_mark" onClick={this.props.toggleLogin} />
    </div>
    </div>
  )
  }

  render() {
    const { isLoggedIn, signupToggle } = this.props;
    console.log("login toggle: ", signupToggle)
    console.log("auth props", this.props)
    return (
    this.loginForm()
    )
  }
}

export default SigninAuthForm
