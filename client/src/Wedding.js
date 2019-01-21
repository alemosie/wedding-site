import React, { Component } from "react";
import Header from './Header'
import { Image } from 'react-bootstrap'
import headerImage from './images/std-square.jpg'

import './stylesheets/Wedding.css';

class Wedding extends Component {
  googleMapsLink = "https://www.google.com/maps/place/Lyman+Estate/@42.383114,-71.228233,15z/data=!4m5!3m4!1s0x0:0xf5ae171d528e9814!8m2!3d42.3831144!4d-71.228233?hl=en-US"
  googleCalLink = "https://calendar.google.com/calendar/r/eventedit?dates=20190121/20190122&text=Mike+and+Alex%27s+Wedding&location=185+Lyman+St,+Waltham,+MA+02452&details&sf=true"

  render() {
    return (
      <div>
        <Header />
        <div className="content wedding-content-base-container">
          {/* <div className="triangle">
            <span className="top right">◤</span>
            <span className="top left">◥</span>
          </div> */}
          <div className="wedding-content-container">
            <div className="wedding-content">
              <div className="wedding-content-image">
                <Image src={headerImage} circle />
              </div>
              <div className="wedding-content-text">
                <h1>Mike & Alex's Wedding</h1>
                <h3>Saturday, <span className="date">September 21, 2019</span></h3>
                <h3>Lyman Estate</h3>
                <div className="address-container">
                  <a href={this.googleCalLink}>
                    <p>185 Lyman St</p>
                    <p>Waltham, MA 02452</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="emphasis">More details to follow</p>

        </div>
      </div>
    );
  }
}

export default Wedding;