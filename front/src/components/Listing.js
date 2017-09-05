import React, { Component } from 'react';
import '../css/Listing.css';


export class Listing extends Component {
  render() {
    //function nothing();

    return (
      <div className="Listing">
        <div className="Listing-text">
          <h1>{this.props.title}</h1>
          <p>{this.props.desc}</p>
          <h2>{"Distance: "+this.props.dist}</h2>
        </div>
        <img
          src={this.props.img}
          alt={this.props.title}
        />
      </div>
    );
  }
}
