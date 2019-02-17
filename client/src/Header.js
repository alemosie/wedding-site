import React, { Component } from "react";
import logo from './images/header-logo.jpg';
import { NavLink } from "react-router-dom";
import './stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
      <section>
        <div className="nav-header-container">
        </div>
        <div className="nav-header">
          <div className="nav-logo-container">
            <NavLink to="/"><img src={logo} className="logo" alt="logo" /></NavLink>
          </div>
          <div className="nav-link-container">
            <NavLink to="/wedding">The Wedding</NavLink>
            <div className="header-space"></div>
            <NavLink to="/about">About Us</NavLink>
            <div className="header-space"></div>
            <NavLink to="/logistics">Logistics</NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;