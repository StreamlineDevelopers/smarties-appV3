import React from 'react';
import FormcontrolItem436 from './FormcontrolItem436';

const FormrowItem441 = ({ label, name, dataName, type, id }) => {
  return (
    <div className="form-row">
      <FormcontrolItem436
        label={label || 'Tool Name'}
        name={name || 'tool-name-2'}
        dataName={dataName || 'Tool Name 2'}
        type={type || 'text'}
        id={id || 'tool-name-2'}
      />
    </div>
  );
};

export default FormrowItem441;
