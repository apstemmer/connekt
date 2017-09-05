import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {createHashHistory} from 'history';
//import './Menu.css';
//import { Menu } from './components/Menu';
import { HomePage } from './components/HomePage';
//import { Profile } from './components/Profile';
import { NavBar } from './components/NavBar';

import {Router} from 'react-router';
import routes from './routes';

var history = createHashHistory();

class App extends Component {
  render() {
    return (
      <Router routes={routes} history={history} />
    );
  }
}
/*
      <div className="App">
        <HomePage />
      </div>
*/
export default App;
