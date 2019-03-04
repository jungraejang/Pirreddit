import React from "react";
import { withRouter } from "react-router";

const Form = ({
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
  const path = match.path;
  return (
    <React.Fragment>
      <form onSubmit={registerUser}>
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
        <br />
        <input
          type="text"
          value={email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={age}
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Next</button>
      </form>
    </React.Fragment>
  );
};

export default withRouter(Form);
