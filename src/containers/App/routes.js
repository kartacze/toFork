import React from 'react';
import {Switch, Route } from 'react-router';

import Welcome from '../Welcome';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
  </Switch>
);

export default Router;
