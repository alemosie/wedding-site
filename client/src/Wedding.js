import React, { Component } from "react";
import Header from './Header'

class Wedding extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <h2>The Wedding</h2>
        </div>
      </div>
    );
  }
}
 
export default Wedding;