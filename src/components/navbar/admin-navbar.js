import React from "react";
import { Link } from "react-router-dom";

import { user, logoutUser } from "../utils/auth";
import { firstLetter } from "../utils/helper";

import "./navbar.scss";

const AdminNavBar = ({ toggleSidebar, isSidebarOpen }) => (
  <nav className="navbar admin_navbar navbar-expand-md fixed-top">
    <div className="container-fluid">
      <div className="navigation">
        <img
          className="menu"
          alt=""
          src={
            isSidebarOpen
              ? "https://res.cloudinary.com/the-now-entity/image/upload/q_auto/v1609939220/Lendha/menu_3_ur6plq.svg"
              : "https://res.cloudinary.com/the-now-entity/image/upload/q_auto/v1611313856/Lendha/menu_2_5_upliq0.svg"
          }
          onClick={toggleSidebar}
        />
        <Link to="/">
          <img
            src="https://res.cloudinary.com/the-now-entity/image/upload/v1609935009/Lendha/logo_white_utlmzm.svg"
            className="logo"
            alt=""
          />
        </Link>
      </div>
      <div className="nav-item dropdown signed_in_div">
        <Link
          className="nav-link"
          to="#"
          id="dropdown01"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="username">
            <p>{firstLetter(user.name)}</p>
          </div>
        </Link>
        <div className="dropdown-menu" aria-labelledby="dropdown01">
          <hr />
          <button className="dropdown-item" onClick={() => logoutUser()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default AdminNavBar;
