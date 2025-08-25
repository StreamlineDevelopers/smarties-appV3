import React from 'react';

// Component: FormcontrolItem
// Type: repetition
// Props: ["textDiv","name","dataName","type","id"]

const FormcontrolItem = ({ textDiv, name, dataName, type, id}) => {
  return (
    <div className="form-control"><div className="form-label">{textDiv || 'Full Name'}</div><input className="form-input w-input" maxlength="256" name={name || "full-name"} data-name={dataName || "full name"} placeholder="" type={type || "text"} id={id || "full-name"} /></div>
  );
};

export default FormcontrolItem;