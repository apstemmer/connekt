import React, { Component } from 'react';
import '../css/NavBar.css';

//import images
import { connektLogo } from './logo.svg';

/*
  Description:
    This is the top navigation bar component. It should link to the respective
    pages.
  TODO:
    - create links to different pages/components from each a
    - create a router (?)
    - (other things?)
*/

export class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-list">
          <ul>
            <li>
              <a>Menu   </a>
            </li>
            <li>
              <img src={require('./logo.svg')} className="NavBar-logo" alt="connektlogo"/>
            </li>
            <li>
              <a>Profile</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
