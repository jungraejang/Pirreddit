import React from "react";
import axios from "axios";
// import { withRouter } from "react-router";
// import { Route, Switch } from "react-router-dom";
import Auth from "../../utils/Auth";
import Form from "./Form"
// import SigninForm from "./SigninForm"
import signin_side_img from "../../img/signin_side_img.png"
import signin_x_mark from "../../img/x-mark-thin-240.png"



class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      age: "",
      email: "",
      userRegistered: false,
      registrationFailed: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  registerUser = async event => {
    event.preventDefault();
    const { username, password, email, age } = this.state;
    await axios.post("/users/new", { username, password, age, email })
    .then(user => {
      if(user.data.message) {
        console.log("hit this one: registration success")
      this.setState({
        userRegistered: true,
        registrationFailed: false
      })
    } else {

      this.setState({
        userRegistered: false,
        registrationFailed: true
      })
    }
    })
    .catch(user => {

      this.setState({
        userRegistered: false,
        registrationFailed: true
      })
    })
    await axios.post("/users/login", { username, password })

    Auth.authenticateUser(username);

    await this.props.checkAuthenticateStatus();

    this.setState({
      username: "",
      password: "",
      email: "",
      age: "",
      userRegistered: false
    });
  };

  signupForm = () => {
    const { username, password } = this.state;
    const { isLoggedIn } = this.props;
    return (
    <div className="authform_div">
    <div className="authform">
    <img src={signin_side_img} className="signin_side_img" alt="" />
    <div className="authform_contents">
    <h3>Join the worldwide conversation.</h3>
    <p>By having a Reddit account, you can subscribe, vote, and comment on all your favorite Reddit content.
        Sign up in just seconds.</p>
    {this.state.userRegistered ? <h1>User Successfully Registered</h1> : <Form
      username={username}
      password={password}
      isLoggedIn={isLoggedIn}
      loginUser={this.loginUser}
      registerUser={this.registerUser}
      handleChange={this.handleChange}
    />}
    {this.state.registrationFailed ? null : <p>Registration Failed</p>}
    </div>
    <img src={signin_x_mark} alt="" className="signin_x_mark" onClick={this.props.toggleSignup} />
    </div>
    </div>
  )
  }

  render() {
    const { signupToggle } = this.props;
    console.log("login toggle: ", signupToggle)
    console.log("auth props", this.props)
    return (
    this.signupForm()
    )
  }
}

export default AuthForm
