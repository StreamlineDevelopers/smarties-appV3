import React from 'react';

// Component: SelectfieldItem
// Type: repetition
// Props: ["id","name","dataName","value","textOption","textOption1"]

const SelectfieldItem = ({ id, name, dataName, value, textOption, textOption1}) => {
  return (
    <select id={id || "Provider"} name={name || "Provider"} data-name={dataName || "Provider"} className="select-field w-select"><option value="">{textOption1 || 'Select one...'}</option><option value={value || "openai"}>{textOption || 'openai'}</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select>
  );
};

export default SelectfieldItem;