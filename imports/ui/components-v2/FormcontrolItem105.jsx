import React from 'react';

// Component: FormcontrolItem105
// Type: repetition
// Props: ["htmlFor","textLabel","id","name","dataName","value","textOption"]

const FormcontrolItem105 = ({ htmlFor, textLabel, id, name, dataName, value, textOption}) => {
  return (
    <div className="form-control"><label htmlFor={htmlFor || "parameter-type-2"} className="form-label">{textLabel || 'Type'}</label><select id={id || "parameter-type-2"} name={name || "parameter-type-2"} data-name={dataName || "Parameter Type 2"} className="select-field w-select"><option value={value || "string"}>{textOption || 'string'}</option><option value="number">number</option><option value="boolean">boolean</option><option value="object">object</option><option value="array">array</option></select></div>
  );
};

export default FormcontrolItem105;