import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  let nav = props.user ?
    <div className='NavBar-container'>
      <Link to='/dropoff' className='NavBar-link'>Dropoff</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

      <Link to='/view' className='NavBar-link'>View Drops</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default Navbar;