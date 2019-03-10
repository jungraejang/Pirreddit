import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Auth from "./Auth";
import SigninAuthForm from "./../components/login/SigninAuthForm.js"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Switch>
          <Redirect to='/'/>
          <Route path='/' component={SigninAuthForm}/>
        </Switch>
      )
    }
  />
);

export default PrivateRoute;
