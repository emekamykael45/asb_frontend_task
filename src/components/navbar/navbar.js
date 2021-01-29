import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  logoIcon,
  navMenuIcon,
  homeIcon,
  entriesIcon,
  divisionsIcon,
} from "../../assets/svg";

import "./navbar.scss";

const NavBar = () => {
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  const navLinks = [
    { to: "/", exact: true, icon: homeIcon, name: "Home" },
    { to: "/entries", exact: false, icon: entriesIcon, name: "Entries" },
    { to: "/divisions", exact: false, icon: divisionsIcon, name: "Divisions" },
  ];

  const toggleNavbarCollapse = () => {
    if (window.innerWidth <= 767) {
      setCollapseNavbar(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <Link to="/">
          <img src={logoIcon} className="logo" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setCollapseNavbar(false)}
        >
          <span className="navbar-toggler-icon">
            <img className="menu" alt="" src={navMenuIcon} />
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapseNavbar && "hide"}`}
          id="navbarsExample08"
        >
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav mr-right">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                exact={link.exact}
                className="nav-item"
                to={link.to}
                onClick={() => toggleNavbarCollapse()}
              >
                {link.name}
              </NavLink>
            ))}
            <li className="nav-item dropdown signed_in_div">
              <Link
                className="nav-link"
                to="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="username">
                  <p>Hello</p>
                  <img src="" alt="" />
                </div>
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <NavLink className="dropdown-item" to="/">
                  Home
                </NavLink>
                <hr />
                <button className="dropdown-item">Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
