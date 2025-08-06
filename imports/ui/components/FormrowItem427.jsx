import React from 'react';
import FormcontrolItem426 from './FormcontrolItem426';

const FormrowItem427 = ({ label, name, dataName, id }) => {
  return (
    <div className="form-row">
      <FormcontrolItem426
        label={label || 'New Password'}
        name={name || 'new-password'}
        dataName={dataName || 'new password'}
        id={id || 'new-password'}
      />
    </div>
  );
};

export default FormrowItem427;
