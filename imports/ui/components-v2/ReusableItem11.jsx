import React from 'react';

// Component: ReusableItem11
// Type: repetition
// Props: ["textLabel","textDiv"]

const ReusableItem11 = ({ textLabel, textDiv}) => {
  return (
    <div><label htmlFor="" className="form-label-2">{textLabel || 'Model'}</label><div className="text-assistant-card-description">{textDiv || 'This is the model that will be used.'}</div></div>
  );
};

export default ReusableItem11;