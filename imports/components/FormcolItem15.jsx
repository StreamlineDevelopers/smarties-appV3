import React from 'react';
import FormcelldivItem10 from './FormcelldivItem10';

const FormcolItem15 = ({ label, name, dataName, id }) => {
  return (
    <div className="form-col">
      <FormcelldivItem10
        label={label || 'Name'}
        name={name || 'Background-Sound-URL-3'}
        dataName={dataName || 'Background Sound URL 3'}
        id={id || 'Background-Sound-URL-3'}
      />
    </div>
  );
};

export default FormcolItem15;
