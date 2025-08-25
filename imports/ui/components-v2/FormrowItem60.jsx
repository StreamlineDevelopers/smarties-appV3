import React from 'react';

// Component: FormrowItem60
// Type: repetition
// Props: ["id"]

const FormrowItem60 = ({ id}) => {
  return (
    <div className="form-row"><div className="form-control"><div className="form-label">Assistant Description</div><textarea placeholder="" maxlength="5000" id={id || "assistant-description"} name="assistant-description" data-name="assistant description" className="form-textarea w-input"></textarea></div></div>
  );
};

export default FormrowItem60;