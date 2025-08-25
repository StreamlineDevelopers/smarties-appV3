import React from 'react';

// Component: Btnstyle1Item
// Type: repetition
// Props: ["src","textDiv"]

const Btnstyle1Item = ({ src, textDiv }) => {
  return (
    <button href="#" className="btn-style1 outline w-inline-block" disabled style={{ opacity: 0.5 }}><div className="btn-icon"><img src={src || "../images/smarties-copy.svg"} loading="lazy" alt="" /></div><div>{textDiv || 'Copy URL'}</div></button>
  );
};

export default Btnstyle1Item;