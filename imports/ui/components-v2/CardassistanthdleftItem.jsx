import React from 'react';

// Component: CardassistanthdleftItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const CardassistanthdleftItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="card-assistant-hd-left"><div className="text-assistant-card-hd">{textDiv || 'Model'}</div><div className="text-assistant-card-description">{textDiv1 || 'Configure the behavior of the assistant.'}</div></div>
  );
};

export default CardassistanthdleftItem;