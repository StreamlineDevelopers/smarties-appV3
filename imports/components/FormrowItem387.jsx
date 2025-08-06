import React from 'react';
import FormcontrolItem386 from './FormcontrolItem386';

const FormrowItem387 = ({ id, name, dataName }) => {
  return (
    <div className="form-row">
      <FormcontrolItem386
        id={id || 'inbound-assistant-description'}
        name={name || 'inbound-assistant-description'}
        dataName={dataName || 'inbound assistant description'}
      />
    </div>
  );
};

export default FormrowItem387;
