import React from 'react';

// Component: AssistanthdItem
// Type: repetition
// Props: ["src","textDiv","width","height"]

const AssistanthdItem = ({ src, textDiv, width, height}) => {
  return (
    <div className="assistant-hd"><img width={width || "24"} height={height || "24"} alt="" src={src || "https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb3039ccd3756bdd97431_smarties-icon-model.svg"} loading="lazy" className="smarties-icon-nav grayscale" /><div className="title-style">{textDiv || 'Model'}</div><div className="line"></div></div>
  );
};

export default AssistanthdItem;