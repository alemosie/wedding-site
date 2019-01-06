import React, { Component } from "react";
import Header from './Header'
import { Grid, Row, Col } from 'react-bootstrap';
import timelineData from './data/dates.json';
import Slideshow from './Slideshow'
import './stylesheets/About.css';

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
      let tableRow = row.map((element, index) => {
        let cell = this.createCell(element, index, row[3])
        return React.cloneElement(cell, {key:  row[0] + row[1] + index})
      })
      return <tr key={row[0] + row[1]}>{tableRow}</tr>
    })
    
    return <table id="timeline"><tbody>{tableRows}</tbody></table>
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <Grid>
            <Row className="show-grid">
              <Col xs={10} md={8}>
                <div id="how-we-met">
                  <h1>How we met</h1>
                  <h4>BLUF: Food and Dostoevsky on a train make for a bizarre but effective start of something grand.</h4>
                  <p>
                    They apparently met at an internship orientation. 
                    Neither of them remembers this (and only discovered it via Gmail history), 
                    so where they <span className="emphasis">really</span> met is on a train after work one day.
                  </p>
                  <p>
                    Mike was part of the elite "Club <a href="https://en.wikipedia.org/wiki/MARC_Train">MARC</a>", 
                    a band of coworkers that brought wine and cheese to enjoy on the train back home to Washington, D.C. every Friday.
                    Alex was not part of this club, but had heard rumors and wanted in. (Obviously.) 
                    She approached the group on the train platform and asked to join.
                    In addition to scoring some delicious train cheese, she got to sit next to Mike on the way home. 
                  </p>
                  <p>
                    On that train ride, they somehow landed on the topic of Russian literature. 
                    Alex was a Russian Studies major, and had recently 
                    read <a href="https://en.wikipedia.org/wiki/Crime_and_Punishment">Crime and Punishment</a> by Fyodor Dostoevsky.
                    One of Mike's favorite novels was <a href="https://en.wikipedia.org/wiki/The_Brothers_Karamazov">The Brothers Karamazov</a>, 
                    also by Dostoevsky. Neither had read the other, and Mike proposed the idea of swapping books and meeting up at a coffeeshop 
                    to discuss them when they were finished.
                    Mike intended for this to be a date, and read Crime and Punishment in a week in anticipation.
                    Alex didn't realize this, and instead took 3 months to read The Brothers Karamazov.
                    But it worked out in the end!
                  </p>
                </div>
                <div>
                  <h2>Through the years...</h2>
                  <Slideshow />
                </div>
              </Col>
              <Col xs={8} md={4} className="timeline-container">
                <h2 className="center">Timeline</h2>
                {this.createTable(timelineData)}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
 
export default About;