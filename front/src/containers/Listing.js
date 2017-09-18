import React, { Component } from 'react';
import '../css/Listing.css';


export class Listing extends Component {
  render() {
    //function nothing();

    return (
      <div className="Listing">
        <div className="Listing-img">
          <img
            src={this.props.img}
            alt={this.props.title}
          />
        </div>
        <div className="Listing-text">
          <h2>{this.props.title}</h2>
          <span>{this.props.price}</span>
          <div>
            <h3>{this.props.user}</h3>
            <h4>{this.props.dist}</h4>
          </div>
        </div>
      </div>
    );
  }
}
