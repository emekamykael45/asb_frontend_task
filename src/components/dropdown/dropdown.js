import React from "react";

import "./dropdown.scss";

const DropDown = ({ children }) => (
  <div className="dropdown_div">
    <button
      className="drop"
      id="dropdown001"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Action
      <img
        src="https://res.cloudinary.com/the-now-entity/image/upload/q_auto/v1611588109/Lendha/arrow_down_fl8joq.svg"
        alt=""
      />
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdown001">
      {children}
    </div>
  </div>
);

export default DropDown;
