import React from 'react';
import { Switch } from 'react-router-dom';
import Categories from '../pages/Categories';

import Cities from '../pages/Cities';

import LogIn from '../pages/LogIn';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/cities" exact isPrivate component={Cities} />

    <Route path="/categories" isPrivate component={Categories} />
  </Switch>
);

export default Routes;
