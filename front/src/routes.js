import React from 'react';
import { Route } from 'react-router';
//import pages
import {HomePage} from './components/HomePage.js'
import {Profile} from './components/Profile.js'
import {Listing} from './components/Listing.js'

const routes = (
  <Route path="/" component={HomePage}>
    <Route path="Profile" component={Profile} />
    <Route path="Listing" component={Listing} />
  </Route>    
);

export default routes;