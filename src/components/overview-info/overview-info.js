import React from "react";

import { infoIcon } from "../../assets/svg";

import "./overview-info.scss";

const OverviewInfo = ({ metric }) => (
  <div className="overview_info_container">
    <div className="overview_data">
      <h6>{metric.value}</h6>
      <p>{metric.label}</p>
    </div>
    <img
      src={infoIcon}
      alt="Metric info"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title={metric.info}
    />
  </div>
);

export default OverviewInfo;
