import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './Menu.css';
import { Menu } from './components/Menu';
import { HomePage } from './components/HomePage';
import { Profile } from './components/Profile';
import { NavBar } from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
