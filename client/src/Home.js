import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-content-container">
          <div className="home-content">
            <h1><span className="triangle">◤</span> Mike & Alex <span className="triangle">◥</span></h1>
            <h2>September 21, 2019</h2>
            <h2>at the Lyman Estate</h2>
            <h3><NavLink to="/wedding">More info ➤</NavLink></h3>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;