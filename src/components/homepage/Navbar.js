import React from 'react';

import logo from '../../assets/homepage/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar main-navbar navbar-expand-md navbar-dark  fixed-top px-0 pt-0">
      <img
        className="logo mr-auto"
        src={logo}
        alt="logo"
        height="60"
        width="110"
      />
      <button
        className="navbar-toggler bg-transparent"
        type="button"
        data-toggle="collapse"
        data-target="#Navbar"
      >
        <span>
          <i className="fa fa-bars" style={{color:'black'}}/>
        </span>
      </button>

      <div className="collapse navbar-collapse flex-grow-0 px-2" id="Navbar">
        <ul className="navbar-nav ml-auto" >

          <li className="nav-item active">
            <Link to="/" className="btn navbar-btn-half nav-link" style={{ color:'black',fontSize:'20', textShadow:'1px 1px 0px black',fontWeight:"bold",fontFamily:'poppins'}} href="#">
              Home
            </Link>
          </li>        
         
          <li className="nav-item ">
            <Link to="/" className="btn navbar-btn-half nav-link"  style={{ color:'black',fontSize:'20', textShadow:'1px 1px 0px black',fontWeight:"bold",fontFamily:'poppins'}} href="#">
              Events
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/" className="btn navbar-btn-half nav-link"  style={{ color:'black',fontSize:'20', textShadow:'1px 1px 0px black',fontWeight:"bold",fontFamily:'poppins'}} href="#">
              Login
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;