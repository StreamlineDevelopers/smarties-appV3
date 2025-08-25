import React from 'react';

// Component: InboxitemItem119
// Type: repetition
// Props: ["textDiv"]

const InboxitemItem119 = ({ textDiv, onClick = () => { }, isCurrent = false }) => {
  return (
    <a onClick={onClick} href="#" className="inbox-item w-inline-block" style={{ backgroundColor: isCurrent && "#e1d5d1" }}><div>{textDiv || 'Configuration 01'}</div></a>
  );
};

export default InboxitemItem119;