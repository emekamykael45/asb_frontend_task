import React from "react";
import "./spinner.scss";

const Spinner = ({ full }) => (
  <div className={`spinner_overlay${full ? " full" : ""}`}>
    <div className="spinner_container" />
  </div>
);

export default Spinner;
