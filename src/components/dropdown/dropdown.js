import React from "react";

import { userIcon, chevronIcon, menuIcon } from "../../assets/svg";

import "./dropdown.scss";

const DropDown = ({ inNavbar, children }) => (
  <div className="dropdown_container">
    <button
      className="dropdown_toggle"
      id="dropdown001"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <div className="toggle_div">
        {inNavbar ? (
          <React.Fragment>
            <img className="user" src={userIcon} alt="" />
            <img className="chevron" src={chevronIcon} alt="" />
          </React.Fragment>
        ) : (
          <img className="menu_icon" src={menuIcon} alt="" />
        )}
      </div>
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdown001">
      {children}
    </div>
  </div>
);

export default DropDown;
