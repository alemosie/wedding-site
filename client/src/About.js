import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import timelineData from './data/dates.json';

class About extends Component {

  createTable = (data) => {
    let tableRows = data.map(row => {
      let tableRow = row.map((element, index) => {
        return <td key={row[0] + row[1] + index}>{element}</td>
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
            <h1>About Us</h1>
            <p>
              We're cool people.
            </p>
          </Col>
          <Col xs={8} md={4}>
            <h2>Timeline</h2>
            {this.createTable(timelineData)}
          </Col>
        </Row>
      </Grid>
    );
  }
}
 
export default About;