import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Salary from '../Salary';
import Page2 from '../Page2';
import Page3 from '../Page3';

class NavBar extends Component {
  render() {
    return (
      <div className='top-menu'>
        <div className='top-menu-item'>
          <Link to='/'>Home</Link>
        </div>
        <div className='top-menu-item'>
          <Link to='/salary'>Зарплата</Link>
        </div>
        <div className='top-menu-item'>
          <Link to='/page2'>Page2</Link>
        </div>
        <div className='top-menu-item'>
          <Link to='/page3'>Page3</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
