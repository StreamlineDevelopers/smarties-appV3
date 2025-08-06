import React from 'react';
import FormcolItem439 from './FormcolItem439';

const FormrowItem448 = ({
  htmlFor,
  name,
  dataName,
  id,
  htmlFor1,
  name1,
  dataName1,
  id1,
}) => {
  return (
    <div className="form-row horizontal g-15">
      <FormcolItem439
        htmlFor={htmlFor || 'secret-token-2'}
        label="Secret Token"
        name={name || 'secret-token-2'}
        dataName={dataName || 'Secret Token 2'}
        id={id || 'secret-token-2'}
        type="text"
      />
      <FormcolItem439
        htmlFor={htmlFor1 || 'timeout-2'}
        label="Timeout (seconds)"
        name={name1 || 'timeout-2'}
        dataName={dataName1 || 'Timeout 2'}
        id={id1 || 'timeout-2'}
        type="number"
      />
    </div>
  );
};

export default FormrowItem448;
