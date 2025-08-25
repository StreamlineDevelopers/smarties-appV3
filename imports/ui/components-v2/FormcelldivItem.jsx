import React from 'react';

// Component: FormcelldivItem
// Type: repetition
// Props: ["textLabel","name","dataName","placeholder","id"]

const FormcelldivItem = ({ textLabel, name, dataName, placeholder, id, value = "", onChange = () => { } }) => {
  return (
    <div className="form--cell-div"><label htmlFor="" className="form-label-2">{textLabel || 'Assistant Name'}</label><div className="form-control-2"><input className="form-input w-input" maxlength="256" name={name || "Assistant-Name"} data-name={dataName || "Assistant Name"} placeholder={placeholder || "Leo"} type="text" id={id || "Assistant-Name"} value={value} onChange={onChange} required /></div></div>
  );
};

export default FormcelldivItem;