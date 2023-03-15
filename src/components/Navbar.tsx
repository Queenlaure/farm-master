import React, { useState } from "react";
import { Link } from "react-router-dom";

import colors from "../consts/colors";
import "../styles/navbar.css";

// import "./styles.css";

interface Navbar { }

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(current => !current);
  };


  return (
    <nav className="navbar navbar-expand-md navbar-light nav fixed-top" style={{ background: colors.green }}>
      <div className="container-fluid">
        <div>
          <a href="/" className="navbar-brand text-white fw-bolder">
            <img src="/logo/logo-white-trans.png" className="img-fluid" width={"45"} alt="" />
            Farm master
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 'none' }}
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="d-flex collapse navbar-collapse justify-content-end align-center d-none d-md-block" id="main-nav" >
          {/* <link rel="stylesheet" href="Home" /> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="links text-light nav-link " href="/" onClick={handleCardClick} >Home</a> */}
              <Link to={'/'} className="links text-light nav-link" onClick={handleCardClick} >Home</Link>
            </li>
            <li>
              {/* <a className="links text-light nav-link" href="/projects">Projects</a> */}
              <Link to={'/projects'} className="links text-light nav-link" >Projects</Link>
            </li>
            <li>
              {/* <a className="links text-light nav-link" href="/waste-marketplace">Market</a> */}
              <Link to={'/Market'} className="links text-light nav-link" >Market</Link>
            </li>
            <li>
              <button className="text-light btn nav-link" style={{ backgroundColor: colors.black }}>Calendar</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
