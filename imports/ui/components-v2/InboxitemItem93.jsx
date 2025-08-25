import React from 'react';

// Component: InboxitemItem93
// Type: repetition
// Props: ["textDiv"]

const InboxitemItem93 = ({ textDiv, onClick, isCurrent = false }) => {
  return (
    <a href="#" className="inbox-item w-inline-block" style={{ backgroundColor: isCurrent && "#e1d5d1" }} onClick={onClick}><div>{textDiv || 'send_text_tool'}</div></a>
  );
};

export default InboxitemItem93;