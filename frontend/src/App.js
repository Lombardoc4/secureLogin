import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './allComponents/nav.component.js';
import Microgreens from './allComponents/microgreens.component.js'
import Home from './allComponents/home.component.js'

class App extends React.Component {

  render(){

    return (
      <Router>
      <div className="App">
        <header className="App-header">

          <Nav/>

          <Route exact path="/" component={Home}/>
          <Route path="/micros" component={Microgreens} />
          <Route path="/natives" component={Natives} />
          <Route path="/team" component={Team} />

        </header>

      </div>
      </Router>
    );
  }
}


function Natives() {
  return (
    <div>
      <h2>Natives</h2>
    </div>
  );
}
function Team() {
  return (
    <div>
      <h2>Team</h2>
    </div>
  );
}


export default App;
