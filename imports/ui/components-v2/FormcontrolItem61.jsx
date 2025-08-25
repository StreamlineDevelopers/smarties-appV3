import React from 'react';

// Component: FormcontrolItem61
// Type: repetition
// Props: ["id"]

const FormcontrolItem61 = ({ id}) => {
  return (
    <div className="form-control"><div className="form-label">Assistant Description</div><textarea placeholder="" maxlength="5000" id={id || "assistant-description"} name="assistant-description" data-name="assistant description" className="form-textarea w-input"></textarea></div>
  );
};

export default FormcontrolItem61;