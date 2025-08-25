import React from 'react';

// Component: FormrowItem101
// Type: repetition
// Props: ["htmlFor","name","dataName","id","htmlFor1","id1","name1","dataName1"]

const FormrowItem101 = ({ htmlFor, name, dataName, id, htmlFor1, id1, name1, dataName1}) => {
  return (
    <div className="form-row horizontal g-15"><div className="form-col"><div className="form-control"><label htmlFor={htmlFor || "parameter-name-2"} className="form-label">Name</label><input className="form-input w-input" maxlength="256" name={name || "parameter-name-2"} data-name={dataName || "Parameter Name 2"} placeholder="" type="text" id={id || "parameter-name-2"} /></div></div><div className="form-col"><div className="form-control"><label htmlFor={htmlFor1 || "parameter-type-2"} className="form-label">Type</label><select id={id1 || "parameter-type-2"} name={name1 || "parameter-type-2"} data-name={dataName1 || "Parameter Type 2"} className="select-field w-select"><option value="string">string</option><option value="number">number</option><option value="boolean">boolean</option><option value="object">object</option><option value="array">array</option></select></div></div></div>
  );
};

export default FormrowItem101;