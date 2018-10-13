import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
// Router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// Components
import CreateMeso from "./CreateMeso";
import SelectMeso from "./SelectMeso";
// import notFound from "./notFound";
import Home from "./Home";


class App extends Component {
  constructor() {
    super();
    this.state = {
      meso: {
        mesoFrame: {}
      },
    }
  }

  addMesoFrame = (mesoFrame) => {
    // Add meso object from CreateMeso to state
    // Copy existing state
    const meso = { ...this.state.meso }
    // Add meso weeks and days as an object on the copy
    meso.mesoFrame = mesoFrame;
    // Set state with the new verison of the meso object
    this.setState({
      meso: meso
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />

          <Route path="/create-meso" render={() => (<CreateMeso addMesoFrame={this.addMesoFrame} />)} />

          <Route path="/select-meso" component={SelectMeso} />

          {/* <Route component={notFound} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
