import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Dropdown from "../dropdown/dropdown";
import SearchInput from "../search-input/search-input";

import {
  logoIcon,
  navMenuIcon,
  homeIcon,
  entriesIcon,
  divisionsIcon,
  notificationIcon,
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
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link to="/" className="logo_div">
          <img src={logoIcon} alt="" />
          <p>FE Engineer Test 1</p>
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
            <img className="menu" src={navMenuIcon} alt="" />
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapseNavbar && "hide"}`}
          id="navbarsExample08"
        >
          <ul className="navbar-nav mr-auto">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                exact={link.exact}
                className="nav-item"
                to={link.to}
                onClick={() => toggleNavbarCollapse()}
              >
                <img className="icon" src={link.icon} alt="" />
                <p>{link.name}</p>
              </NavLink>
            ))}
          </ul>
          <ul className="navbar-nav mr-right">
            <li className="nav-item">
              <SearchInput />
            </li>
            <div className="d-flex">
              <li className="nav-item">
                <img
                  className="notification_img"
                  src={notificationIcon}
                  alt=""
                />
              </li>
              <li className="nav-item">
                <Dropdown inNavbar>
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                  <hr />
                  <button className="dropdown-item">Logout</button>
                </Dropdown>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
