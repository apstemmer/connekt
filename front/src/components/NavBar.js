import React, { Component } from 'react';
import '../css/NavBar.css';

//import images
import { connektLogo } from '../images/connekt-logo.svg';

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
        <ul>
          <li>
            <a>Menu   </a>
          </li>
          <li>
            <img src={connektLogo} alt="logo"/>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
    );
  }
}
