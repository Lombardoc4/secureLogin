import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Nav from './allComponents/nav.component.js';

class App extends React.Component {

  render(){
    var nav1 = [
      ['/', 'Home'],
      ['/micros/', 'Microgreens'],
      ['/natives/', 'Native Plants'],
      ['/team/', 'The Team']
    ];

    return (
      <div className="App">
        <header className="App-header">

          <Nav value={nav1}/>

          <p>
              This will soon be EUG
          </p>
          <a
            className="App-link"
            href="http://evogrows.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about EUG
          </a>
        </header>
      </div>
    );
  }
}

export default App;
