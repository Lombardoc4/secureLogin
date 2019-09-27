import React from 'react';
import './nav.css';
import Modal from './modal.component.js'

class Nav extends React.Component {

  render() {
    const linkTitle = this.props.value;
    const links = linkTitle.map((number) =>
      <li>
        <a className='nav nav-link' href={number[0]}>
          {number[1]}
        </a>
      </li>
    );

  return (
    <div className="navbar">
        <ul className="nav">
          {links}
          <Modal class='nav-link' btn='Login' title="signIn"/>
        </ul>
      </div>
  );
}
}

export default Nav;
