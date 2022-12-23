import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center py-5 mb-5"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              Sahyadri<span>.</span>
            </h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <Link to='/' className="pe-2">
              <li>
                <a>Home</a>
              </li>
              </Link>
              <Link to='/about' className="px-2">  
              <li>
                <a >About</a>
              </li>
              </Link>
              <Link to='/menu' className="px-2">
              <li>
                <a>Menu</a>
              </li>
              </Link>
              <Link to='/events' className="px-2">
              <li>
                <a>Events</a>
              </li>
              </Link >
              <Link className="px-2">
              <li>
                <a href="#chefs">Chefs</a>
              </li>
              </Link>
              <Link to='/gallery' className="px-2">
              <li>
                <a>Gallery</a>
              </li>
              </Link>
              <Link to="/contact" className="ps-2">
              <li>
                <a>Contact</a>
              </li>
              </Link>
            </ul>
          </nav>
          {/* .navbar */}
          <a className="btn-book-a-table" href="#book-a-table">
            Book a Table
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>
    </>
  );
};

export default Header;
