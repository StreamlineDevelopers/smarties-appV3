import React from 'react';

// Component: FormrowItem94
// Type: repetition
// Props: ["textDiv","name","dataName","type","id"]

const FormrowItem94 = ({ textDiv, name, dataName, type, id, value="", onChange=()=>{} }) => {
  return (
    <div className="form-row"><div className="form-control"><div className="form-label">{textDiv || 'Tool Name'}</div><input value={value} onChange={onChange} className="form-input w-input" maxlength="256" name={name || "tool-name-2"} data-name={dataName || "Tool Name 2"} placeholder="" type={type || "text"} id={id || "tool-name-2"} /></div></div>
  );
};

export default FormrowItem94;