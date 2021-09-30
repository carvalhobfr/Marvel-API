import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { Home } from '../pages/Home';
import { Character } from '../pages/Character';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/character/:id" component={Character} />
  </Switch>
);

export default Routes;
