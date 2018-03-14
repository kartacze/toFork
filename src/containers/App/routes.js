import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import AuthProvider from '../AuthProvider';
import Welcome from '../Welcome';
import Login from '../Login';

import AuthService from '../../auth/AuthService';

// w opcjach musi byc podane co zrobic jezeli user nie ma dostepu

window.authService = new AuthService();

const Router = () => (
  <AuthProvider
    options={{auth: window.authService.isAuthorized}}
    noAuth={() => <Redirect to="/login" />}
    render={(check, {prot}) => (
      <Switch>
        <Route exact path="/" component={check(() => <Welcome />)} />
        <Route path="/login" component={Login} />
      </Switch>
    )}
  />
);

export default Router;
