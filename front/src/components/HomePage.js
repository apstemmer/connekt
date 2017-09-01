import React, { Component } from 'react';
import '../css/HomePage.css';

import { NavBar } from './NavBar.js';
import { SearchBar } from './SearchBar.js';
import { Listing } from './Listing.js';

/*
  Description:
    Homepage-button that is on the top bar. It will take the user back to the
    home page.
*/

export class HomePage extends Component {
  render() {

    function getListings(){
      return [
        {
          title : "Ad 1",
          desc  : "this is ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg')
        },
        {
          title : "Ad 2",
          desc  : "this is ad 2",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg')
        }
      ];
    };

    var listings = getListings();

    return (
      <div className="HomePage">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="searchbar-home">
          <h1>Order stuff on Connekt</h1>
          <SearchBar />
        </div>
        <div className="banner">
          <img src={require('../images/khaled.jpg')} alt="banner" />
        </div>
        <div className="homePageListings">
          <ul>
            {listings.map(function (listing) {
              return <Listing
                      title={listing.title}
                      desc={listing.desc}
                      dist={listing.dist}
                      img={listing.img}
                    />;
            })}
          </ul>
        </div>
        <div className="FilterAds">
        </div>
      </div>
    );
  }
}


/*
<Listing
  title="free guitar!"
  desc="im giving away a free guitar guys"
  dist="500 miles"
  img={require('../images/cute-kittens.jpg')}
/>
*/
