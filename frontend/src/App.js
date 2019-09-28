import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import secure from './fortKnox.jpg'

import Nav from './allComponents/nav.component.js';
import Question from './allComponents/question.component.js';
import Questions from './allComponents/questions.component.js';
import Callback from './allComponents/callback';

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
          <img src={secure} alt='...'/>
          <h1 style={{fontFamily: 'papyrus',fontSize: '50px'}}>Secure Login</h1>
          <Route exact path='/' component={Question}/>
          <Route exact path='/question/:questionId' component={Questions}/>
          <Route exact path='/callback' component={Callback}/>

        </header>
      </div>
    );
  }
}

export default App;
