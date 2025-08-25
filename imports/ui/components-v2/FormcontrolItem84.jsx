import React from 'react';

// Component: FormcontrolItem84
// Type: repetition
// Props: ["textDiv","name","dataName","id"]

const FormcontrolItem84 = ({ textDiv, name, dataName, id}) => {
  return (
    <div className="form-control"><div className="form-label">{textDiv || 'Inbound Phone Number'}</div><input className="form-input w-input" maxlength="256" name={name || "inbound-form-number"} data-name={dataName || "inbound form number"} placeholder="" type="text" id={id || "inbound-form-number"} /></div>
  );
};

export default FormcontrolItem84;