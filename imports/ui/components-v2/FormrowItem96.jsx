import React from 'react';

// Component: FormrowItem96
// Type: repetition
// Props: ["textDiv","id","name","dataName"]

const FormrowItem96 = ({ textDiv, id, name, dataName, value = "", onChange = () => { } }) => {
  return (
    <div className="form-row"><div className="form-control"><div className="form-label">{textDiv || 'Tool Description'}</div><textarea value={value} onChange={onChange} id={id || "tool-description-2"} name={name || "tool-description-2"} maxlength="5000" data-name={dataName || "Tool Description 2"} placeholder="" className="form-textarea w-input"></textarea></div></div>
  );
};

export default FormrowItem96;