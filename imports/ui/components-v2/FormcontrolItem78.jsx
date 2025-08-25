import React from 'react';

// Component: FormcontrolItem78
// Type: repetition
// Props: ["textDiv","name","dataName","placeholder","type","id"]

const FormcontrolItem78 = ({ textDiv, name, dataName, placeholder, type, id}) => {
  return (
    <div className="form-control"><div className="form-label">{textDiv || 'Email'}</div><input className="textfield w-input" maxlength="256" name={name || "email"} data-name={dataName || "email"} placeholder={placeholder || "Enter Email"} type={type || "email"} id={id || "email"} /></div>
  );
};

export default FormcontrolItem78;