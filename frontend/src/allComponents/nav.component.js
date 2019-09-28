import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './auth.js';

import './nav.css';
import Modal from './modal.component.js'

class Nav extends React.Component {

  render() {
    const linkTitle = this.props.value;
    const links = linkTitle.map((number) =>
      <li>
        <Link to={number[0]} className='nav nav-link'>
          {number[1]}
        </Link>
      </li>
    );

    const signOut = () => {
    auth0Client.signOut();
    this.props.history.replace('/');
  };

  return (
    <div className="navbar">
        <ul className="nav">
          {links}
          <Modal class='nav-link' btn='Login' title="signIn"/>
          {
            !auth0Client.isAuthenticated() &&
            <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
          }
          {
            auth0Client.isAuthenticated() &&
            <div>
            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
            <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
            </div>
          }
        </ul>
      </div>
  );
}
}

export default withRouter(Nav);
