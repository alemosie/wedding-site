import React, { Component } from "react";
import Header from './Header'

import ZolaLogo from './images/zola-logo-small.jpg'
import './stylesheets/Logistics.css';

class Logistics extends Component {
  lymanLink = "https://www.google.com/maps/place/Lyman+Estate/@42.383114,-71.228233,15z/data=!4m5!3m4!1s0x0:0xf5ae171d528e9814!8m2!3d42.3831144!4d-71.228233?hl=en-US"
  brelundiLink = "https://www.google.com/maps/place/Brelundi/@42.3679511,-71.2453554,17z/data=!3m1!4b1!4m5!3m4!1s0x89e383211c145805:0xb3d0cedb4dcc8ab6!8m2!3d42.3679472!4d-71.2431667"
  hyattHouseLink = "https://www.google.com/maps/place/Hyatt+House+Boston%2FWaltham/@42.3944268,-71.2594944,17z/data=!3m1!4b1!4m8!3m7!1s0x89e39cc8fe39ac49:0x494f7dcbcd599915!5m2!4m1!1i2!8m2!3d42.3944229!4d-71.2573057"

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="logistics-content-container">
            <div className="logistics-content-column large">
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
                  <div className="event-details-day">
                    <h4>Saturday, September 21st (the wedding)</h4>
                    <p>This is when we, y'know, get married. Music, lawn games, and the grounds open and start at 5:00 PM!</p>
                    <ul>
                      <li><b>Ceremony time:</b>&nbsp;5:30 PM</li>
                      <li>
                        <b>Location:</b> Lyman Estate,&nbsp;
                      <a href={this.lymanLink} target="_blank" rel="noopener noreferrer">
                          185 Lyman St, Waltham, MA 02452
                      </a>
                      </li>
                      <li>
                        <b>Attire:</b> Cocktail (semiformal)
                    </li>
                    </ul>
                  </div>
                  <div className="event-details-day">
                    <h4>Friday, September 20th</h4>
                    <p>
                      For those who are traveling from near and far to celebrate with us on Saturday,
                      please join us for a welcome toast, coffee, and dessert the night before!
                    </p>
                    <ul>
                      <li><b>Time:</b>&nbsp;8:00 to 10:00 PM</li>
                      <li>
                        <b>Location:</b> Brelundi,&nbsp;
                      <a href={this.brelundiLink} target="_blank" rel="noopener noreferrer">
                          185 Crescent St, Waltham, MA 02453
                      </a>
                      </li>
                      <li>
                        <b>Attire:</b> Casual
                    </li>
                    </ul>
                  </div>
                  <div className="event-details-day">
                    <h4>Sunday, September 22nd</h4>
                    <p>
                      A casual, come-and-go brunch for out-of-town guests staying at the hotel or nearby.
                      We're so grateful that you've traveled from afar to be with us!
                      This is also our chance to introduce the uninitiated to one of the best
                      parts of New England Fall: the cider donut.
                    </p>
                    <ul>
                      <li><b>Time:</b>&nbsp;9:30 AM to 11:30 AM</li>
                      <li>
                        <b>Location:</b> Hyatt House,&nbsp;
                      <a href={this.hyattHouseLink} target="_blank" rel="noopener noreferrer">
                          54 4th Ave, Waltham, MA 02451
                      </a>
                      </li>
                      <li>
                        <b>Attire:</b> Casual
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="logistics-content-column">
              <div className="logistics-content-section">
                <h2>Getting There</h2>
                <div className="logistics-content-section-text">
                  <p>
                    <span role="img" aria-label="shuttle" className="logistics-icon">🚐</span>
                    <b>Day of:</b> There's a shuttle that will be going to and from the venue at the following times:</p>
                  <div id="shuttle-times">
                    <table>
                      <thead>
                        <tr>
                          <th>Hyatt House to<br />Lyman Estate</th>
                          <th>Lyman Estate to<br />Hyatt House</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            4:45 PM
                        </td>
                          <td>
                            10:00 PM
                            <br />
                            11:15 PM
                          </td>
                        </tr>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <span role="img" aria-label="car" className="logistics-icon">🚗</span><b>Local:</b> There's plenty of parking at both the hotel and venue.
                  </p>
                  <p>
                    <span role="img" aria-label="globe" className="logistics-icon">🌎</span><b>Out of town:</b> Fly into Boston Logan (BOS) or take a train or bus into Boston's South Station.
                  </p>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Logistics;