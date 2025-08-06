import React from 'react';
import FormcontrolItem428 from './FormcontrolItem428';

const FormcolItem439 = ({ htmlFor, label, name, dataName, id, type }) => {
  return (
    <div className="form-col">
      <FormcontrolItem428
        htmlFor={htmlFor || 'parameter-name-2'}
        label={label || 'Name'}
        name={name || 'parameter-name-2'}
        dataName={dataName || 'Parameter Name 2'}
        id={id || 'parameter-name-2'}
        type={type || 'text'}
      />
    </div>
  );
};

export default FormcolItem439;
