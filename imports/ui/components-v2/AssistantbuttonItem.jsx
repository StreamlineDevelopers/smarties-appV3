import React from 'react';

// Component: AssistantbuttonItem
// Type: repetition
// Props: ["id","href","src","textDiv"]

const AssistantbuttonItem = ({ id, href, src, textDiv}) => {
  return (
    <a id={id || "model"} href={href || "#section-model"} className="assistant-button w-inline-block"><img width="24" height="24" alt="" src={src || "https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce453b478ee39320e500b_smarties-icon-model.svg"} loading="lazy" className="smarties-icon-nav" /><div className="text-assisttant-nav">{textDiv || 'Model'}</div></a>
  );
};

export default AssistantbuttonItem;