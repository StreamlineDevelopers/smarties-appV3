import React from 'react';

const HeadlinedurationItem473 = ({ divText }) => {
  return (
    <div className="headline-duration">
      <img
        src="../images/smarties-icon-time.svg"
        loading="lazy"
        width="20"
        height="20"
        alt=""
        className="bb-icon-edit"
      />
      <div>{divText || '5 min read'}</div>
    </div>
  );
};

export default HeadlinedurationItem473;
