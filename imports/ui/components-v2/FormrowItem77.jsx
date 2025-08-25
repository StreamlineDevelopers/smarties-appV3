import React from 'react';

// Component: FormrowItem77
// Type: repetition
// Props: ["textDiv","name","dataName","placeholder","type","id"]

const FormrowItem77 = ({ textDiv, name, dataName, placeholder, type, id, isRequired = false, value = "", onChange }) => {
  return (
    <div className="form-row"><div className="form-control"><div className="form-label">{textDiv || 'Email'}</div><input className="textfield w-input" maxlength="256" name={name || "email"} data-name={dataName || "email"} placeholder={placeholder || "Enter Email"} type={type || "email"} id={id || "email"} value={value} onChange={onChange} /></div></div>
  );
};

export default FormrowItem77;