import React from 'react';

// Component: FormcolItem102
// Type: repetition
// Props: ["htmlFor","textLabel","name","dataName","id","type"]

const FormcolItem102 = ({ htmlFor, textLabel, name, dataName, id, type}) => {
  return (
    <div className="form-col"><div className="form-control"><label htmlFor={htmlFor || "parameter-name-2"} className="form-label">{textLabel || 'Name'}</label><input className="form-input w-input" maxlength="256" name={name || "parameter-name-2"} data-name={dataName || "Parameter Name 2"} placeholder="" type={type || "text"} id={id || "parameter-name-2"} /></div></div>
  );
};

export default FormcolItem102;