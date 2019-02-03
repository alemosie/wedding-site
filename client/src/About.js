import React, { Component } from "react";
import Header from './Header'
import Slider from "react-slick";
import './stylesheets/About.css';

import timelineData from './data/dates.json';
import photoData from './data/photos.json'
import ringPhoto from './images/engagement-ring.jpg'

class Slides extends React.Component {

  createPhoto(photo) {
    return (
      <div key={photo}>
        <img alt={photo} src={require('./images/photos/' + photo + '.jpg')} />
      </div>
    )
  }

  createGrid(data) {
    let photos = [];
    for (let path in data) {
      photos.push(this.createPhoto(path))
    }
    return photos;
  }

  render() {
    var settings = {
      dots: this.props.hasDots,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.numSlides,
      slidesToScroll: this.props.numSlides,
    };
    return (
      <Slider {...settings}>
        {this.createGrid(photoData)}
      </Slider>
    );
  }
}

class About extends Component {

  createCell = (element, index, important) => {
    if (important && index === 1) {
      return <td className="highlight">{element}</td>
    } else {
      return <td>{element}</td>
    }
  }

  createTable = (data) => {
    let tableRows = data.map(row => {
      let tableRow = row.slice(0, 3).map((element, index) => {
        let cell = this.createCell(element, index, row[3])
        return React.cloneElement(cell, { key: row[0] + row[1] + index })
      })
      return <tr key={row[0] + row[1]}>{tableRow}</tr>
    })

    return <table id="timeline"><tbody>{tableRows}</tbody></table>
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content about-container">
          <div className="about-content-container">
            <div className="slides-container">
              <div className="slides-large">
                <Slides numSlides={3} hasDots={true} />
              </div>
              <div className="slides-small">
                <Slides numSlides={2} hasDots={true} />
              </div>
            </div>
            <div className="about-content">
              <h1>How we met</h1>
              <p>
                Alex and Mike met in Washington DC when she inserted herself into his Friday evening commute.
                He and a few friends were partaking in their tradition of Friday wine and cheese on the train,
                and Alex was hungry. Cheese led to conversation, and culminated in an agreement to swap their
                favorite Russian novels and meet up to discuss over coffee. (Naturally, Alex didn’t realize
                this was a date and took three months to read <span className="emphasis">The Brothers Karamazov</span>.)
              </p>
              <p>
                Since then, they’ve shared many adventures: visiting sloths in Costa Rica, trekking in the
                Himalayas, and feeding as many friends as they could pack into their city apartment. Alex
                converted Mike into a dog lover, and Mike introduced Alex to
                <span className="emphasis">&nbsp;Rollercoaster Tycoon</span>. They
              moved to Manhattan, switched careers, then moved to Brooklyn and joined a grocery cooperative.
              </p>
              <h1 className="section-header">The rings</h1>
              <div className="image-container">
                <img src={ringPhoto} alt="Engagement ring" />
                <p>
                  Inspired by his childhood rock collection and <span className="emphasis">The Lord of the Rings</span>,
                  Mike decided to forge the rings himself with the help of a local metalworker. He finished and
                  set the stone for the engagement ring in December. After a cold, suspicious walk through Central Park
                  near their first New York apartment, Mike offered his handiwork. After babbling for a good minute,
                  Alex remembered to say yes.
              </p>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            <h1>Timeline</h1>
            {this.createTable(timelineData)}
          </div>
        </div>
      </div >
    );
  }
}

export default About;