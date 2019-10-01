import React from 'react';
import {BrowserRouter as Router, Route,Link, withRouter} from 'react-router-dom';

import './nav.css';
import Modal from './modal.component.js';
import Microgreens from './microgreens.component.js'


class Nav extends React.Component {

  render() {
    const linkTitle = this.props.value;
    var comp;
    const linksnRoutes = linkTitle.map((number) =>
      <li key={number[0]}>
        {console.log(number)}
        <Link to={number[0]} className='nav nav-link'>
          {number[1]}
        </Link>
        {comp = '<' + number[1] + '/>'}
        <Route path={number[0]}>{comp}</Route>
      </li>
    );


    return (
      <Router>
        <div className="navbar">
          <ul className="nav">
            {linksnRoutes}
            <Modal class='nav-link' btn='Login' title="signIn"/>
          </ul>
        </div>
      </Router>
    );
  }
}



export default withRouter(Nav);
