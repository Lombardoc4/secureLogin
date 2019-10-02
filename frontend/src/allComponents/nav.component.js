import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import './nav.css';
import Modal from './modal.component.js';


class Nav extends React.Component {

  render() {


    return (
        <div className="navbar">
          <ul className="nav">
            <li>
              <Link to='/' className='nav nav-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/micros' className='nav nav-link'>
                Microgreens
              </Link>
            </li>
            <li>
              <Link to='/natives' className='nav nav-link'>
                Native Plants
              </Link>
            </li>
            <li>
              <Link to='/' className='nav nav-link'>
                Our Team
              </Link>
            </li>

            <Modal class='nav-link' btn='Login'/>
          </ul>

        </div>
    );
  }
}



export default withRouter(Nav);
