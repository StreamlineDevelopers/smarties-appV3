import React from 'react';

// Component: FormcontrolItem86
// Type: repetition
// Props: ["id","name","dataName"]

const FormcontrolItem86 = ({ id, name, dataName}) => {
  return (
    <div className="form-control"><div className="form-label">Assistant Description</div><div className="settings-row-formdata"><select id={id || "inbound-assistant-description"} name={name || "inbound-assistant-description"} data-name={dataName || "inbound assistant description"} className="selectfield _w-100 w-select"><option value="">Customer Service Assistant</option><option value="First">First choice</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select></div></div>
  );
};

export default FormcontrolItem86;