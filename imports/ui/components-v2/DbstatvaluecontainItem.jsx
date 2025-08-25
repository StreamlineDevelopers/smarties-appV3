import React from 'react';

// Component: DbstatvaluecontainItem
// Type: repetition
// Props: ["textDiv","src","textDiv1"]

const DbstatvaluecontainItem = ({ textDiv, src, textDiv1}) => {
  return (
    <div className="db-stat-value-contain"><div className="stat-value">{textDiv || '12'}</div><div className="db-stat-tag"><img src={src || "https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg"} loading="lazy" width="7" height="5" alt="" className="db-stat-tag-chevron" /><div className="db-stat-percent">{textDiv1 || '+33%'}</div></div></div>
  );
};

export default DbstatvaluecontainItem;