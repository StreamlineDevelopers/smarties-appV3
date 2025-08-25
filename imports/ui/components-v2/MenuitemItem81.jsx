import React from 'react';

// Component: MenuitemItem81
// Type: repetition
// Props: ["src","textDiv"]

const MenuitemItem81 = ({ src, textDiv}) => {
  return (
    <div className="menu-item"><div className="menu-item-icon"><img loading="lazy" src={src || "../images/smarties-icon-version.svg"} alt="" /></div><div>{textDiv || 'Version History'}</div></div>
  );
};

export default MenuitemItem81;