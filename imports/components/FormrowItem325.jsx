import React from 'react';
import FormcontrolItem324 from './FormcontrolItem324';

const FormrowItem325 = ({ label, name, dataName, placeholder, type, id }) => {
  return (
    <div className="form-row">
      <FormcontrolItem324
        label={label || 'Email'}
        name={name || 'email'}
        dataName={dataName || 'email'}
        placeholder={placeholder || 'Enter Email'}
        type={type || 'email'}
        id={id || 'email'}
      />
    </div>
  );
};

export default FormrowItem325;
