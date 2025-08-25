import React from 'react';

// Component: FormcelldivItem8
// Type: repetition
// Props: ["textLabel","id","name","dataName","value","textOption","textOption1"]

const FormcelldivItem8 = ({ textLabel, id, name, dataName, value, textOption, textOption1}) => {
  return (
    <div className="form--cell-div"><label htmlFor="" className="form-label-2">{textLabel || 'Provider'}</label><div className="form-control-2"><select id={id || "Provider"} name={name || "Provider"} data-name={dataName || "Provider"} className="select-field w-select"><option value="">{textOption1 || 'Select one...'}</option><option value={value || "openai"}>{textOption || 'openai'}</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select></div></div>
  );
};

export default FormcelldivItem8;