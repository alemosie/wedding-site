import React, { Component } from "react";
import logo from './images/header-logo.png';
import { NavLink } from "react-router-dom";
import './stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-header">
          <div className="nav-logo-container">
            <NavLink to="/"><img src={logo} className="logo" alt="logo"/></NavLink>
          </div>
          <div className="nav-link-container">
            <NavLink to="/wedding">The Wedding</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <div id="sloth-space"></div>
            <NavLink to="/rsvp">RSVP</NavLink>
            <NavLink to="/registry">Registry</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Header;