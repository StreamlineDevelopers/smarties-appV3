import React from 'react';

// Component: FormcontrolItem103
// Type: repetition
// Props: ["htmlFor","textLabel","name","dataName","id","type"]

const FormcontrolItem103 = ({ htmlFor, textLabel, name, dataName, id, type}) => {
  return (
    <div className="form-control"><label htmlFor={htmlFor || "parameter-name-2"} className="form-label">{textLabel || 'Name'}</label><input className="form-input w-input" maxlength="256" name={name || "parameter-name-2"} data-name={dataName || "Parameter Name 2"} placeholder="" type={type || "text"} id={id || "parameter-name-2"} /></div>
  );
};

export default FormcontrolItem103;