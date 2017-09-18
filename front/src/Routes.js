import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import pages
import {HomePage} from './components/HomePage'
import {Profile} from './components/Profile'
import {Listing} from './components/Listing'

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />   
      <Route path="/Profile" component={Profile} />
      <Route path="/Listing" component={Listing} />
    </Switch>
  </Router>
);

export default Routes;