import React, { Component } from 'react';
import '../css/Footer.css';

export class Footer extends Component {
  render() {
    return (      
      <div className="Footer">
		<div className="Footer-header">
		  <ul>
		    <a>Home</a>
		  </ul>
		</div>
		<div className="Footer-bottom">
		  <div className="Footer-bottom-contact">
			<h3>Contact</h3>
			<a>contact</a>
		  </div>
		  <div className="Footer-bottom-address">
			<h3>Address</h3>
			<a>address</a>
		  </div>
		</div>
      </div>
    );
  }
}