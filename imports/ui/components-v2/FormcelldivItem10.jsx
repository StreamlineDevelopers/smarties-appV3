import React from 'react';

// Component: FormcelldivItem10
// Type: repetition
// Props: ["textLabel","textDiv","id","name","dataName","textOption"]

const FormcelldivItem10 = ({ textLabel, textDiv, id, name, dataName, textOption}) => {
  return (
    <div className="form--cell-div"><div><label htmlFor="" className="form-label-2">{textLabel || 'Model'}</label><div className="text-assistant-card-description">{textDiv || 'This is the model that will be used.'}</div></div><div className="form-control-2"><select id={id || "Voice-Model"} name={name || "Voice-Model"} data-name={dataName || "Voice Model"} className="select-field w-select"><option value="">{textOption || 'Select one...'}</option><option value="deepgram">deepgram</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select></div></div>
  );
};

export default FormcelldivItem10;