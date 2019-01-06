import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import slideshowInfo from './data/slideshow.json'
import './stylesheets/Slideshow.css';

class Slideshow extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  createPhoto(photo)  {
    return (
      <Carousel.Item key={photo}>
        <img alt={photo} className="about-slideshow-item" src={require('./images/slideshow/' + photo + '.jpg') } />
        <Carousel.Caption>
          <h3>{slideshowInfo[photo].header}</h3>
          <p>{slideshowInfo[photo].tagline}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  createSlides(data) {
    let photos = [];
    for (let path in data) {
      photos.push(this.createPhoto(path))
    }
    return photos;
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        id="about-slideshow"
      >
        {this.createSlides(slideshowInfo)}
      </Carousel>
    );
  }
}

export default Slideshow;