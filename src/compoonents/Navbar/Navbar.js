import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
          <nav className="sticky-top navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
    <Link  className="navbar-brand  Brand_name" to='/'> 
          
            Aurpon</Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="links navbar-nav ms-auto mb-2 mb-lg-0 pd-10%">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/blogs'>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/videos'>Videos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/about'>About Me</Link>
            </li>
          
          </ul>
          {/* <span className="navbar-text">
            Navbar text with an inline element
          </span> */}
        </div>
      </div>
    </nav>  
        </>
    );
};

export default Navbar;