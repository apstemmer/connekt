import React, { Component } from 'react';
import '../css/Profile.css';

import { NavBar } from './NavBar.js';

export class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="NavBar">
          <NavBar />
        </div>
        <h1>Profile</h1>
      </div>
    );
  }
}
