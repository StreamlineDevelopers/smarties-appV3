import React from 'react';

const FormcontrolItem77 = ({ id }) => {
  return (
    <div className="form-control">
      <div className="form-label">Assistant Name</div>
      <input
        className="form-input w-input"
        maxlength="256"
        name="assistant-name"
        data-name="assistant name"
        placeholder=""
        type="text"
        id={id || 'assistant-name'}
      />
    </div>
  );
};

export default FormcontrolItem77;
