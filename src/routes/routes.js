import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppComponent from '../components/AppComponent';
import MainComponent from '../components/MainComponent';

export default (
  <Route path="/" component={AppComponent}>
    <IndexRoute component={MainComponent} />
  </Route>
);
