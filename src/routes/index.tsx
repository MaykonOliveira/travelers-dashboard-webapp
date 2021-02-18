import React from 'react';
import { Switch } from 'react-router-dom';

import LogIn from '../pages/LogIn';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
  </Switch>
);

export default Routes;
