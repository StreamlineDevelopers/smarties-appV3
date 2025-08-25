import React from 'react';

// Component: Formrow2Item9
// Type: repetition
// Props: ["textLabel","textDiv","id","name","dataName","textOption"]

const Formrow2Item9 = ({ textLabel, textDiv, id, name, dataName, textOption}) => {
  return (
    <div className="form-row-2"><div className="form--cell-div"><div><label htmlFor="" className="form-label-2">{textLabel || 'Model'}</label><div className="text-assistant-card-description">{textDiv || 'This is the model that will be used.'}</div></div><div className="form-control-2"><select id={id || "Voice-Model"} name={name || "Voice-Model"} data-name={dataName || "Voice Model"} className="select-field w-select"><option value="">{textOption || 'Select one...'}</option><option value="deepgram">deepgram</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select></div></div></div>
  );
};

export default Formrow2Item9;