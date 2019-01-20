import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Wedding from "./Wedding";
import Rsvp from "./Rsvp";
import Registry from "./Registry";
import './stylesheets/App.css';
// import { TransitionGroup, CSSTransition } from "react-transition-group";

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
            <Route path="/rsvp" component={Rsvp} />
            <Route path="/registry" component={Registry} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(Container);