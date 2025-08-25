import React from 'react';

// Component: FormcontrolItem97
// Type: repetition
// Props: ["textDiv","id","name","dataName"]

const FormcontrolItem97 = ({ textDiv, id, name, dataName}) => {
  return (
    <div className="form-control"><div className="form-label">{textDiv || 'Tool Description'}</div><textarea id={id || "tool-description-2"} name={name || "tool-description-2"} maxlength="5000" data-name={dataName || "Tool Description 2"} placeholder="" className="form-textarea w-input"></textarea></div>
  );
};

export default FormcontrolItem97;