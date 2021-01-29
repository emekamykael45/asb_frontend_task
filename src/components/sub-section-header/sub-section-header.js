import React from "react";

import "./sub-section-header.scss";

const SubSectionHeader = ({ icon, text }) => {
  return (
    <div className="sub_section_header">
      <img src={icon} className="icon" alt="Sub-section Icon" />
      <h4>{text}</h4>
    </div>
  );
};

export default SubSectionHeader;
