import React from "react";
import { withRouter } from "react-router";
import reddit_logo from "../../img/reddit_logo.png"
const SigninForm = ({
  match,
  username,
  password,
  email,
  age,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  // const path = match.path;
  return (
    <React.Fragment>
    <img src={reddit_logo} className="signin_logo_img" alt="" />
    <h2>Sign In</h2>
      <form onSubmit={loginUser}>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default withRouter(SigninForm);
