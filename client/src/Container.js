import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Wedding from "./Wedding";
import './stylesheets/App.css';

class Container extends Component {
  render() {
    const { location } = this.props
    return (
      <div>
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/wedding" component={Wedding} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(Container);