import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './Menu.css';
import { Menu } from './Menu';
import { HomePage } from './HomePage';
import { Profile } from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <HomePage />
        <Profile />
      </div>
    );
  }
}

export default App;
