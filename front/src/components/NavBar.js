import React, { Component } from 'react';
import '../css/NavBar.css';

/*
  Description:
    This is the top navigation bar component. It should link to the respective
    pages.
  TODO:
    - create links to different pages/components from each a
    - create a router (?)
    - (other things?)
*/

//<Link to="/Profile">Profile</Link>

export class NavBar extends Component {
  render() {
    return (      
        <div className="NavBar-list">
          <ul>
            <li>
              <a href='/'>HomePage</a>
            </li>
            <li>
              <a href='/Profile'>Profile</a>
            </li>
            <li>
              <a href='/Menu'>Menu</a>
            </li>
          </ul>
        </div>
    );
  }
}


/*
<Link to="/Menu">Menu</Link>
<Link to="/">Home Page</Link>
*/
