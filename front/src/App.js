import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { HomePage } from './components/HomePage';
import { Profile } from './components/Profile';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Routes />     
    );
  }
}
/*
      <div className="App">
        <HomePage />
      </div>
*/
export default App;
