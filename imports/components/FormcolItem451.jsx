import React from 'react';
import FormcontrolItem450 from './FormcontrolItem450';

const FormcolItem451 = ({ htmlFor, id, name, dataName }) => {
  return (
    <div className="form-col">
      <FormcontrolItem450
        htmlFor={htmlFor || 'parameter-type-2'}
        label="Type"
        id={id || 'parameter-type-2'}
        name={name || 'parameter-type-2'}
        dataName={dataName || 'Parameter Type 2'}
        value="string"
        optionText="string"
      />
    </div>
  );
};

export default FormcolItem451;
