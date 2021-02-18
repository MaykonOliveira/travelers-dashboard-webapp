import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
