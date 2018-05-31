import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Page2 from '../Page2';
import Page3 from '../Page3';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <NavBar />
      </div>
    );
  }
}

export default Header;
