import React from 'react';

import './sub-section-header.scss';

const SubSectionHeader = ({ headText, rule, close }) => {
  return (
    <div className="sub_section_header">
      <h4>{headText}</h4>
      {rule && <hr />}
      {close && <img src="https://res.cloudinary.com/the-now-entity/image/upload/q_auto/v1610444093/Lendha/x_icon_ihn2xz.svg" className="close" alt='Close' onClick={close} />}
    </div>
  )
};

export default SubSectionHeader;