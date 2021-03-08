import React from 'react';
import { Switch } from 'react-router-dom';

import Cities from '../pages/cities';
import LogIn from '../pages/LogIn';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/cities" isPrivate component={Cities} />
  </Switch>
);

export default Routes;
