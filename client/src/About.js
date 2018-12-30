import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import timelineData from './data/dates.json';
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
      <Grid>
        <Row className="show-grid">
          <Col xs={10} md={8}>
            <h1>How we met</h1>
            <h4>BLUF: Food and Dostoyevsky on a train makes for a successful pick-up scheme.</h4>
            <p>
              We apparently met at an internship orientation. 
              Neither of us remembers this (and only discovered this searching through G-mail history), 
              so how we <span>really</span> met is on a train platform heading back from work to Washington, D.C., where we were both living at the time.
            </p>
            <p>
              Mike was part of the elite "Club MARC", a band of coworkers that brought wine and cheese every Friday to enjoy on the train back home to D.C.
              Alex was not part of this club, but had heard rumors and wanted in. (Obviously.) 
              She spotted the group on the train platform, approached them, and became part of the fold. 
              In addition to scoring some delicious train cheese, she got to sit next to Mike on the way back home. 
            </p>
            <p>
              On that train ride, we somehow landed on the topic of Russian literature. 
              Alex was a Russian Studies major, and had recently read Crime and Punishment by Fyodor Dostoyevsky.
              One of Mike's favorite novels was The Brothers Karamazov, also by Dostoyevsky. 
              Neither had read the other, and Mike proposed the idea of swapping books and meeting up at a coffeeshop to discuss them when we were finished.
              Mike intended this to be a date, and read Crime and Punishment in a week.
              Alex didn't realize that it was a date, and took 3 months to read The Brothers Karamazov.
            </p>
            <p>
              At least we got there in the end.
            </p>
          </Col>
          <Col xs={8} md={4} className="timeline-container">
            <h2 className="center">Timeline</h2>
            {this.createTable(timelineData)}
          </Col>
        </Row>
      </Grid>
    );
  }
}
 
export default About;