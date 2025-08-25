import React from 'react';

// Component: SelectfieldItem106
// Type: repetition
// Props: ["id","name","dataName","value","textOption"]

const SelectfieldItem106 = ({ id, name, dataName, value, textOption}) => {
  return (
    <select id={id || "parameter-type-2"} name={name || "parameter-type-2"} data-name={dataName || "Parameter Type 2"} className="select-field w-select"><option value={value || "string"}>{textOption || 'string'}</option><option value="number">number</option><option value="boolean">boolean</option><option value="object">object</option><option value="array">array</option></select>
  );
};

export default SelectfieldItem106;