import React from "react";

import { lowRiskIcon, midRiskIcon, highRiskIcon } from "../../assets/svg";

import "./status.scss";

const Risk = ({ type }) => (
  <React.Fragment>
    {type === "low" && (
      <div className={`risk_div ${type}`}>
        <img src={lowRiskIcon} alt="Risk icon" />
        <p>Low Risk</p>
      </div>
    )}
    {type === "mid" && (
      <div className={`risk_div ${type}`}>
        <img src={midRiskIcon} alt="Risk icon" />
        <p>Mid Risk</p>
      </div>
    )}
    {type === "high" && (
      <div className={`risk_div ${type}`}>
        <img src={highRiskIcon} alt="Risk icon" />
        <p>High Risk</p>
      </div>
    )}
  </React.Fragment>
);

export default Risk;
