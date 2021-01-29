import React from "react";

import "./status.scss";

const Status = ({ type, text }) => (
  <div className={`status_div ${type}`}>
    <p>{text}</p>
  </div>
);

export default Status;
