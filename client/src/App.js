import React, { Component } from "react";
import Container from './Container'
import './stylesheets/App.css';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
            <Container/>
        </Router>
      </div>
    );
  }
}

export default App;
