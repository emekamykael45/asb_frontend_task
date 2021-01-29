import React from "react";

import { IMAGE_BASE_URL } from "../../api/constants";

import "./overview-info.scss";

const OverviewInfo = ({
  headText,
  headTextSpan,
  currentProgress,
  totalProgress,
  imageUrl,
  subText,
  subTextSpan,
  children,
}) => {
  const progressbar = (100 * currentProgress) / totalProgress;

  return (
    <div className="overview_info">
      <h6 className="head_text">
        {headText}
        <span>{headTextSpan}</span>
      </h6>
      {imageUrl && <img src={`${IMAGE_BASE_URL}/${imageUrl}`} alt="Document" />}
      {currentProgress && (
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width:
                currentProgress === totalProgress ? "100%" : progressbar + "%",
            }}
            aria-valuenow={progressbar}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      )}
      <p className="sub_text">
        {subText}
        <span>{subTextSpan}</span>
      </p>
      {children}
    </div>
  );
};

export default OverviewInfo;
