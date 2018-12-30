import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Wedding from "./Wedding";
import Rsvp from "./Rsvp";
import Registry from "./Registry";
import logo from './images/header-logo.png';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="nav-header">
            <div className="nav-logo-container">
              <NavLink to="/"><img src={logo} className="logo" alt="logo"/></NavLink>
            </div>
            <div className="nav-link-container">
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/wedding">Wedding</NavLink>
              <NavLink to="/rsvp">RSVP</NavLink>
              <NavLink to="/registry">Registry</NavLink>
            </div>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/wedding" component={Wedding}/>
            <Route path="/rsvp" component={Rsvp}/>
            <Route path="/registry" component={Registry}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
