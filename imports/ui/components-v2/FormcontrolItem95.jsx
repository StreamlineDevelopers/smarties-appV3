import React from 'react';

// Component: FormcontrolItem95
// Type: repetition
// Props: ["textDiv","name","dataName","type","id"]

const FormcontrolItem95 = ({ textDiv, name, dataName, type, id}) => {
  return (
    <div className="form-control"><div className="form-label">{textDiv || 'Tool Name'}</div><input className="form-input w-input" maxlength="256" name={name || "tool-name-2"} data-name={dataName || "Tool Name 2"} placeholder="" type={type || "text"} id={id || "tool-name-2"} /></div>
  );
};

export default FormcontrolItem95;