import React from "react";
import { Link } from "react-router-dom";

import SubSectionHeader from "../sub-section-header/sub-section-header";

import { towerIcon } from "../../assets/svg";

import "./division-summary.scss";

const DivisionSummary = ({ summaryDetails }) => {
  return (
    <div className="division_summary">
      <SubSectionHeader icon={towerIcon} text="Division Summary" />

      <div className="summary_details">
        {summaryDetails?.map((item, i) => (
          <div key={i} className="info">
            <img className="icon" src={item.icon} alt="" />
            {item.to ? (
              <Link to={item.to}>{item.text}</Link>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DivisionSummary;
