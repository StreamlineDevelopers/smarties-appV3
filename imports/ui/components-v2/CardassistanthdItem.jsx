import React from 'react';

// Component: CardassistanthdItem
// Type: repetition
// Props: ["dataWId","textDiv","textDiv1"]

const CardassistanthdItem = ({ dataWId, textDiv, textDiv1}) => {
  return (
    <div data-w-id={dataWId || "379fe386-af88-ed7e-3780-62a6bbc10999"} className="card-assistant-hd"><div className="card-assistant-hd-left"><div className="text-assistant-card-hd">{textDiv || 'Model'}</div><div className="text-assistant-card-description">{textDiv1 || 'Configure the behavior of the assistant.'}</div></div><div className="assistant-arrow"><img width="16" height="16.000688552856445" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cc3b22a53d368aff451c3_smarties-icon-arrow-down.svg" loading="lazy" className="smarties-icon-arrow-down" /></div></div>
  );
};

export default CardassistanthdItem;