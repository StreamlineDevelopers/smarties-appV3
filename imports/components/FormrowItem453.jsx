import React from 'react';
import FormcolItem439 from './FormcolItem439';
import FormcolItem451 from './FormcolItem451';

const FormrowItem453 = ({
  htmlFor,
  name,
  dataName,
  id,
  htmlFor1,
  id1,
  name1,
  dataName1,
}) => {
  return (
    <div className="form-row horizontal g-15">
      <FormcolItem439
        htmlFor={htmlFor || 'parameter-name-2'}
        label="Name"
        name={name || 'parameter-name-2'}
        dataName={dataName || 'Parameter Name 2'}
        id={id || 'parameter-name-2'}
        type="text"
      />
      <FormcolItem451
        htmlFor={htmlFor1 || 'parameter-type-2'}
        id={id1 || 'parameter-type-2'}
        name={name1 || 'parameter-type-2'}
        dataName={dataName1 || 'Parameter Type 2'}
      />
    </div>
  );
};

export default FormrowItem453;
