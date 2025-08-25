import React from 'react';

// Component: Btnstyle1Item114
// Type: repetition
// Props: ["textDiv"]

const Btnstyle1Item114 = ({ textDiv, type, onClick = () => { } }) => {
  return (
    <button type={type} className="btn-style1" onClick={onClick}><div>{textDiv || 'Apply'}</div></button>
  );
};

export default Btnstyle1Item114;