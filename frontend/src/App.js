import React from 'react';
import './App.css';
import secure from './fortKnox.jpg'

import Nav from './allComponents/nav.component.js';
import Login from './allComponents/login';

class App extends React.Component {

  render(){
    var nav1 = [
      ['/', 'Home'],
      ['/micros/', 'Microgreens'],
      ['/natives/', 'Modal'],
      ['/team/', 'EUG']
    ];

    return (
      <div className="App">
        <header className="App-header">
          <Login/>

          <Nav value={nav1}/>
          <img src={secure} alt='...'/>
          <h1 style={{fontFamily: 'papyrus',fontSize: '50px'}}>Secure Login</h1>

        </header>
      </div>
    );
  }
}

export default App;
