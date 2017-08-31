import React, { Component } from 'react';
import '../css/HomePage.css';

import { NavBar } from './NavBar.js';
import { SearchBar } from './SearchBar.js';
/*
  Description:
    Homepage-button that is on the top bar. It will take the user back to the
    home page.
*/

export class HomePage extends Component {
  render() {

    //

    return (
      <div className="HomePage">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="SearchBar">
          <SearchBar />
        </div>
        <div className="MainBanner">
          <img src={require('../images/cute-kittens.jpg')}
            alt="cat pic"
            href="/some-link"
          />
        </div>
        <div className="homePageListings">

        </div>
        <div className="FilterAds">
        </div>
      </div>
    );
  }
}
