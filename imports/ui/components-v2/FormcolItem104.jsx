import React from 'react';

// Component: FormcolItem104
// Type: repetition
// Props: ["htmlFor","id","name","dataName"]

const FormcolItem104 = ({ htmlFor, id, name, dataName}) => {
  return (
    <div className="form-col"><div className="form-control"><label htmlFor={htmlFor || "parameter-type-2"} className="form-label">Type</label><select id={id || "parameter-type-2"} name={name || "parameter-type-2"} data-name={dataName || "Parameter Type 2"} className="select-field w-select"><option value="string">string</option><option value="number">number</option><option value="boolean">boolean</option><option value="object">object</option><option value="array">array</option></select></div></div>
  );
};

export default FormcolItem104;