import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/page1'>Page1</Link></li>
            <li><Link to='/page2'>Page2</Link></li>
            <li><Link to='/page3'>Page3</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
