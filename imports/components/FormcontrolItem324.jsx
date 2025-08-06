import React from 'react';

const FormcontrolItem324 = ({
  label,
  name,
  dataName,
  placeholder,
  type,
  id,
}) => {
  return (
    <div className="form-control">
      <div className="form-label">{label || 'Email'}</div>
      <input
        className="textfield w-input"
        maxlength="256"
        name={name || 'email'}
        data-name={dataName || 'email'}
        placeholder={placeholder || 'Enter Email'}
        type={type || 'email'}
        id={id || 'email'}
      />
    </div>
  );
};

export default FormcontrolItem324;
