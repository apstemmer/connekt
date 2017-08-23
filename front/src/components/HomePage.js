import React, { Component } from 'react';
import '../css/HomePage.css';

import { catPic } from '../images/cute-kittens.jpg';
/*
  Description:
    Homepage-button that is on the top bar. It will take the user back to the
    home page.
*/

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <img src={catPic} alt="cat pic" />
      </div>
    );
  }
}
