import React from "react";
import { Link } from "react-router-dom";

import { chevronIcon } from "../../assets/svg";

import "./breadcrumbs.scss";

const Breadcrumbs = ({ routes }) => (
  <div className="breadcrumbs_container">
    {routes?.map((item, i) => (
      <div key={i} className="crumb">
        <Link className="crumb" to={item.to}>
          {item.label}
        </Link>
        <img src={chevronIcon} alt="Icon" />
      </div>
    ))}
  </div>
);

export default Breadcrumbs;
