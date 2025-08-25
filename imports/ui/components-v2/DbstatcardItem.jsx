import React from 'react';

// Component: DbstatcardItem
// Type: repetition
// Props: ["textDiv","textDiv1","src","textDiv2"]

const DbstatcardItem = ({ textDiv, textDiv1, src, textDiv2 }) => {
  return (
    <div className="db-stat-card">
      <div className="db-stat-card-left">
        <div className="stat-title">{textDiv || 'Total Assistants'}</div>
        <div className="db-stat-value-contain">
          <div className="stat-value">{textDiv1 || '12'}</div>
          <div className="db-stat-tag">
            {/* <img src={src || "https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg"} loading="lazy" width="7" height="5" alt="" className="db-stat-tag-chevron" /> */}
            {/* <div className="db-stat-percent">{textDiv2 || '+33%'}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbstatcardItem;