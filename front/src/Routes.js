import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import pages
import {HomePage} from './containers/HomePage';
import {Profile} from './containers/Profile';
import {Listing} from './containers/Listing';
import {Login} from './containers/Login';
import {Signup} from './containers/Signup';
import {AddListing} from './containers/AddListing';

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />   
      <Route path="/Profile" component={Profile} />
      <Route path="/Listing" component={Listing} />
      <Route path="/Login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="/AddListing" component={AddListing} />
    </Switch>
  </Router>
);

export default Routes;