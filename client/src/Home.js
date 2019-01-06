import React, { Component } from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap';
import engagementPhoto from './images/engagement-photo.jpg';
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid className="home-container">
          <Row>
            <Col xs={6} sm={12} md={6} lg={6} className="image-container">
              <a href={engagementPhoto}><Image src={engagementPhoto} responsive /></a>
            </Col>
            <Col xs={6} sm={12} md={6} lg={6} className="home-content">
              <h1>
                <span role="img" aria-label="sneaker">👟</span>
                <span role="img" aria-label="heart-exclamation">❣️</span>
                <span role="img" aria-label="rocket">🚀</span>
              </h1>
              <h1>We're getting married!</h1>
              <h2>September 21, 2019</h2>
              <h3>Lyman Estate in <a href="https://bit.ly/2RsRbSk">Waltham, MA</a></h3>
              <NavLink to="/wedding">More info</NavLink>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
 
export default Home;