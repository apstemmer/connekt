import React, { Component } from 'react';
import Menu from 'react-burger-menu/lib/menus/slide'

import { SearchBar } from './SearchBar';
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
		    <div id="outer-container" className="NavBar-list-menu">
              <Menu right outerContainerId={ "outer-container" } >
			    <a href='/'>Home</a>
			    <a href='/Profile'>Profile</a>
			  </Menu>
			</div>
            <a href='/'>Home</a>
            <a href='/Profile'>Profile</a>
			<SearchBar className="NavBar-searchBar" />
          </ul>
        </div>
    );
  }
}


/*
<Link to="/Menu">Menu</Link>
<Link to="/">Home Page</Link>
*/
