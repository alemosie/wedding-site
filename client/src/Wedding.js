import React, { Component } from "react";
import Header from './Header'
import { Image } from 'react-bootstrap'
import headerImage from './images/std-square.jpg'
import ZolaTileImage from './images/zola-logo.jpg'
import PlaneTileImage from './images/plane-tile.jpg'
import LymanTileImage from './images/lyman.jpg'

import './stylesheets/Wedding.css';

class WeddingTile extends Component {
  styles = {
    hide: {
      display: 'none'
    },
    show: {
      display: 'block'
    },
    full: {
      opacity: 1
    },
    fade: {
      opacity: 0.1
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      textDisplay: 'hide',
      imageOpacity: 'full'
    };
  }
  hideText() {
    this.setState({
      textDisplay: 'hide',
      imageOpacity: 'full'
    });
  }
  showText() {
    this.setState({
      textDisplay: 'show',
      imageOpacity: 'fade'
    });
  }
  render() {
    return (
      <div className="wedding-tile">
        <h3>{this.props.header}</h3>
        <a href={this.props.link}>
          <div
            onMouseEnter={this.showText.bind(this)}
            onMouseLeave={this.hideText.bind(this)}
          >
            <img
              src={this.props.img}
              alt={this.props.alt}
              style={{ ...this.styles[this.state.imageOpacity] }}
            />
            <div
              className="text"
              style={{ ...this.styles[this.state.textDisplay] }}
            >
              <p>{this.props.text}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

class Wedding extends Component {
  googleMapsLink = "https://www.google.com/maps/place/Lyman+Estate/@42.383114,-71.228233,15z/data=!4m5!3m4!1s0x0:0xf5ae171d528e9814!8m2!3d42.3831144!4d-71.228233?hl=en-US"

  render() {
    return (
      <div>
        <Header />
        <div className="content wedding-content-base-container">
          <div className="wedding-infobox-container">
            <div className="wedding-infobox">
              <div className="wedding-infobox-image">
                <Image src={headerImage} circle />
              </div>
              <div className="wedding-infobox-text">
                <h1>Mike & Alex's Wedding</h1>
                <h3>Saturday, <span className="date">September 21, 2019</span></h3>
                <h3>Lyman Estate</h3>
                <div className="address-container">
                  <a href={this.googleMapsLink} target="_blank" rel="noopener noreferrer">
                    <p>185 Lyman St</p>
                    <p>Waltham, MA 02452</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wedding-tile-container">
            <WeddingTile
              header="Event"
              img={LymanTileImage}
              alt="Lyman Estate"
              text="We're celebrating at the historic Lyman Estate in Waltham, MA. Click for more event details ➤"
              link="/logistics"
            />
            <WeddingTile
              header="Registry"
              img={ZolaTileImage}
              alt="Zola logo"
              text="Your presence is the most important thing to us! If you do wish to give us gifts, click for our registry on Zola ➤"
              link="https://www.zola.com/registry/mike-and-alex/"
            />
            <WeddingTile
              header="More Info"
              img={PlaneTileImage}
              alt="Plane in flight"
              text="Click for info on where to stay, how to get there, and what to expect ➤"
              link="/logistics"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Wedding;