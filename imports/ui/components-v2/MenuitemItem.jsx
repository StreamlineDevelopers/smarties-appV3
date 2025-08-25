import React from 'react';

// Component: MenuitemItem
// Type: repetition
// Props: ["src","textDiv"]

const MenuitemItem = ({ src, textDiv}) => {
  return (
    <div className="menu-item"><div className="menu-item-icon"><img src={src || "../images/smarties-icon-version.svg"} loading="lazy" alt="" /></div><div>{textDiv || 'Version History'}</div></div>
  );
};

export default MenuitemItem;