import React, { Component } from 'react';
import Slider from 'react-slick';

import '../css/Profile.css';

import { NavBar } from '../components/NavBar.js';
import { Footer } from '../components/Footer.js';

export class Profile extends Component {
  render() {
	function getProfile(){
	  return [
		{
          name 		  : "AlexMontgomerie",
          rating  	  : "9000",
          profilePic  : require('../images/cute-kittens.jpg'),
          Description : "Muscian and so on"
        }
	  ]
	}
	
	var profile=getProfile();
	  
	var carouselSettings = {
	  dots: true
	};
	
    return (
      <div className="Profile">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="Profile-top">
		  <div className="Profile-top-left">
			<img src={profile[0].profilePic} />
		  </div>
		  <div className="Profile-top-right">
			<div className="Profile-top-right-header">
			  <h1>{profile[0].name}</h1>
			  <h2>{profile[0].rating}</h2>
			</div>
			<p>{profile[0].Description}</p>
		  </div>
		</div>
		<div className="Profile-social">
		  <ul>
			<li>facebook</li>
			<li>soundcloud</li>
			<li>twitter</li>
		  </ul>
		</div>
		<div className="Profile-media">
		  <Slider {...carouselSettings}>
		    <div><h3>1</h3></div>
			<div><h3>2</h3></div>
			<div><h3>3</h3></div>
			<div><h3>4</h3></div>
			<div><h3>5</h3></div>
			<div><h3>6</h3></div>
		  </Slider>
		</div>
		<div className="Profile-ads">
		
		</div>
		<div className="Profile-footer">
		  <footer>
		    <Footer />
		  </footer>
		</div>
      </div>
    );
  }
}
