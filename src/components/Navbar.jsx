import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/dropoff' className='NavBar-link'>Dropoff</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

      <Link to='/profile' className='NavBar-link'>Profile</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

      <Link to='/admin' className='NavBar-link'>Admin
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
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