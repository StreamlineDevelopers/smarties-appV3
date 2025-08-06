import React from 'react';
import FormcontrolItem382 from './FormcontrolItem382';

const FormrowItem384 = ({ label, name, dataName, id }) => {
  return (
    <div className="form-row">
      <FormcontrolItem382
        label={label || 'Inbound Phone Number'}
        name={name || 'inbound-form-number'}
        dataName={dataName || 'inbound form number'}
        id={id || 'inbound-form-number'}
      />
    </div>
  );
};

export default FormrowItem384;
