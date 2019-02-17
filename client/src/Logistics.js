import React, { Component } from "react";
import Header from './Header'

import ZolaLogo from './images/zola-logo-small.jpg'
import './stylesheets/Logistics.css';

class Logistics extends Component {
  googleMapsLink = "https://www.google.com/maps/place/Lyman+Estate/@42.383114,-71.228233,15z/data=!4m5!3m4!1s0x0:0xf5ae171d528e9814!8m2!3d42.3831144!4d-71.228233?hl=en-US"

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="logistics-content-container">
            <div className="logistics-content-column">
              <div className="logistics-content-section">
                <h2>Event Details</h2>
                <div className="logistics-content-section-text">
                  <p id="event-description">
                    The&nbsp;
                    <a href="https://www.historicnewengland.org/property/lyman-estate/">
                      Lyman Estate
                    </a>
                    &nbsp;is a historic country house built in 1793 near Boston, Massachusetts.
                    We plan on celebrating both inside and outside throughout the day.
                    Please come prepared for outdoor entertainment and a slight evening chill
                    in the last hours of summer!
                  </p>
                  <p><b>Time & Date:</b>&nbsp;Evening of September 21, 2019</p>
                  <p>
                    <b>Location:</b> Lyman Estate,&nbsp;
                    <a href={this.googleMapsLink} target="_blank" rel="noopener noreferrer">
                      185 Lyman St, Waltham, MA 02452
                    </a>
                  </p>
                  <p>
                    <b>Attire:</b> Cocktail
                  </p>
                </div>
              </div>
              <div className="logistics-content-section">
                <h2>Registry</h2>
                <div className="logistics-content-section-text registry-container">
                  <div>
                    <p>
                      We're truly grateful for your presence at our wedding --
                      seriously, we're so excited that all of our people will be in one place!</p>
                    <p>
                      If you do wish to give a gift, we've created a registry on&nbsp;
                      <a
                        href="https://zola.com/registry/mike-and-alex"
                        target="_blank" rel="noopener noreferrer">
                        Zola
                      </a>
                      .
                    </p>
                  </div>
                  <a
                    href="https://www.zola.com/registry/mike-and-alex"
                    target="_blank" rel="noopener noreferrer"
                    className="zola-logo-container"
                  >
                    <img src={ZolaLogo} id="zola-logo" alt="Zola logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="logistics-content-column large">
              <div className="logistics-content-section">
                <h2>Where to Stay</h2>
                <div className="logistics-content-section-text">
                  <p>
                    We've reserved a hotel block at the&nbsp;
                  <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://www.hyatt.com/en-US/hotel/massachusetts/hyatt-house-boston-waltham/bosxw">
                      Hyatt House
                  </a> in Waltham, Massachusetts.
                </p>
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.hyatt.com/en-US/hotel/massachusetts/hyatt-house-boston-waltham/bosxw">
                    <img
                      alt="Hyatt House"
                      id="hyatt-house-image"
                      src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/01/11/1505/Hyatt-House-P019-Exterior.jpg/Hyatt-House-P019-Exterior.16x9.adapt.1920.1080.jpg"
                    />
                  </a>
                  <p className="emphasis">Booking details will be included in personal communications.</p>
                  <h4>Other accommodations</h4>
                  <p>There are other hotels in the area that equally close to the venue, including:</p>
                  <ul>
                    <li>
                      <a href="https://www.marriott.com/hotels/maps/travel/boswm-courtyard-boston-waltham/">
                        Courtyard Boston Waltham
                    </a>
                    </li>
                    <li>
                      <a href="https://www.marriott.com/hotels/travel/bosww-the-westin-waltham-boston/">
                        Westin Waltham Boston
                    </a>
                    </li>
                    <li>
                      <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/waltham/wtmma/hoteldetail">
                        Holiday Inn Express Boston-Waltham
                    </a>
                    </li>
                    <li>
                      <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/waltham/wtmma/hoteldetail">
                        Hilton Garden Inn Boston/Waltham
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="logistics-content-section">
                <h2>Getting There</h2>
                <div className="logistics-content-section-text">

                  <p>
                    <span role="img" aria-label="globe">🌎</span><b>Out of town:</b> Fly into Boston Logan (BOS) or take a train or bus into Boston's South Station.
                  </p>
                  <p>
                    <span role="img" aria-label="car">🚗</span><b>Local:</b> There's plenty of parking at both the hotel and venue.
                  </p>
                  <p><span role="img" aria-label="shuttle">🚐</span><b>Day of:</b> We'll provide transportation between the hotel and the venue, a 5-6 minute journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logistics;