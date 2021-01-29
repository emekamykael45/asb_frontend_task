import React from "react";

import SubSectionHeader from "../sub-section-header/sub-section-header";

import { soundIcon } from "../../assets/svg";
import { formatDate } from "../utils/helper";

import "./module-history.scss";

const ModuleHistory = ({ historyDetails }) => {
  return (
    <div className="module_history">
      <SubSectionHeader icon={soundIcon} text="Module History" />

      <div className="history_details">
        {historyDetails.map((item, i) => (
          <div key={i} className="info">
            <h6>{item.text}</h6>
            <div className="sub_text">
              {formatDate(item.date)} <div className="dot"></div> {item.channel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleHistory;
