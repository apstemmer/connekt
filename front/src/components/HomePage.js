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
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        },
        {
          title : "Ad 1",
          dist  : "100 miles",
          img   : require('../images/cute-kittens.jpg'),
          price : '50',
          user : 'apstemmer'
        }
      ];
    };

    var listings = getListings();

    return (
      <div className="HomePage">
        <div className="NavBar">
          <NavBar />
        </div>
        <header>
          <div className="searchbar-home">
            <h1>Order stuff on Connekt</h1>
            <SearchBar />
          </div>
        </header>
        <div className="banner">
          <img src={require('../images/khaled.jpg')} alt="banner" />
        </div>
        <div className="homePageListings">
            {listings.map(function (listing) {
              return <Listing
                      title={listing.title}
                      dist={listing.dist}
                      img={listing.img}
                      user={listing.user}
                      price={listing.price}
                    />;
            })}
        </div>
        <footer>
        </footer>
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
