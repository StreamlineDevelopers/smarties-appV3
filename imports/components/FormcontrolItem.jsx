import React from 'react';

const FormcontrolItem = ({ label, name, dataName, type, id }) => {
  return (
    <div className="form-control">
      <div className="form-label">{label || 'Full Name'}</div>
      <input
        className="form-input w-input"
        maxlength="256"
        name={name || 'full-name'}
        data-name={dataName || 'full name'}
        placeholder=""
        type={type || 'text'}
        id={id || 'full-name'}
      />
    </div>
  );
};

export default FormcontrolItem;
