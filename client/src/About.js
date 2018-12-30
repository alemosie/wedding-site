import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';

class About extends Component {
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
          </Col>
        </Row>
      </Grid>
    );
  }
}
 
export default About;