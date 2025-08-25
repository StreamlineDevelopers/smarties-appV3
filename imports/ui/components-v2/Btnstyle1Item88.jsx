import React from 'react';

// Component: Btnstyle1Item88
// Type: repetition
// Props: ["textDiv"]

const Btnstyle1Item88 = ({ textDiv, onClick = () => { } }) => {
  return (
    <a href="#" className="btn-style1 outline" onClick={onClick}><div>{textDiv || 'Schedule a Call'}</div></a>
  );
};

export default Btnstyle1Item88;