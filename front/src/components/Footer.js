import React, { Component } from 'react';
import { SocialIcon } from'react-social-icons';

import '../css/Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
    		<div className="Footer-header">
    		  <ul>
    		    <a href='/'>Home</a>
      			<div>
      			  <SocialIcon url="https://www.facebook.com/alex.montgomeriecorcoran"
      			    style={{ height: 35, width: 35 }}
      			    color="white"
      			  />
      			  <SocialIcon url="https://www.youtube.com/channel/UCGfueKrUnV_RY32IxBT8nNA?view_as=subscriber"
      			   style={{ height: 35, width: 35 }}
      			    color="white"
      			  />
      			</div>
		      </ul>
        </div>
    		<div className="Footer-bottom">
    		  <div className="Footer-bottom-contact">
    			<h3>CONTACT</h3>
    			<a>info@collabo.co.uk</a>
    		  </div>
    		  <div className="Footer-bottom-address">
    			<h3>ADDRESS</h3>
    			<p>
    			  EE Computer Labs <br/>
    			  Imperial College London <br/>
    			  South Kensington <br/>
    			  SW7 2AZ <br/>
    			  London, UK
    			</p>
    		  </div>
    		</div>
      </footer>
    );
  }
}
