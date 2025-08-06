import React from 'react';
import FormcontrolItem463 from './FormcontrolItem463';

const FormrowItem466 = ({ label, name, dataName, type, id }) => {
  return (
    <div className="form-row">
      <FormcontrolItem463
        label={label || 'Domain'}
        name={name || 'domain-name'}
        dataName={dataName || 'domain name'}
        type={type || 'url'}
        id={id || 'domain-name-2'}
      />
    </div>
  );
};

export default FormrowItem466;
