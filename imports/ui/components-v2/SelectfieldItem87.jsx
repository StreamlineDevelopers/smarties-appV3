import React from 'react';

// Component: SelectfieldItem87
// Type: repetition
// Props: ["id","name","dataName"]

const SelectfieldItem87 = ({ id, name, dataName}) => {
  return (
    <select id={id || "inbound-assistant-description"} name={name || "inbound-assistant-description"} data-name={dataName || "inbound assistant description"} className="selectfield _w-100 w-select"><option value="">Customer Service Assistant</option><option value="First">First choice</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select>
  );
};

export default SelectfieldItem87;