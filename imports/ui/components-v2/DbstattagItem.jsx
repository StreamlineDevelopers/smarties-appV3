import React from 'react';

// Component: DbstattagItem
// Type: repetition
// Props: ["src","textDiv"]

const DbstattagItem = ({ src, textDiv}) => {
  return (
    <div className="db-stat-tag"><img src={src || "https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg"} loading="lazy" width="7" height="5" alt="" className="db-stat-tag-chevron" /><div className="db-stat-percent">{textDiv || '+33%'}</div></div>
  );
};

export default DbstattagItem;