import React from 'react';
import FormcontrolItem450 from './FormcontrolItem450';

const FormrowItem452 = ({ htmlFor, id, name, dataName }) => {
  return (
    <div className="form-row horizontal g-15">
      <FormcontrolItem450
        htmlFor={htmlFor || 'message-type-2'}
        label="Add Message"
        id={id || 'message-type-2'}
        name={name || 'message-type-2'}
        dataName={dataName || 'Message Type 2'}
        value=""
        optionText="Select Message Type"
      />
    </div>
  );
};

export default FormrowItem452;
