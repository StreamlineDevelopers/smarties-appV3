import React from 'react';
import FormcelldivItem from './FormcelldivItem';

const FormcolItem = ({ label, name, dataName, id }) => {
  return (
    <div className="form-col">
      <FormcelldivItem
        label={label || 'Background Sound URL'}
        name={name || 'Background-Sound-URL'}
        dataName={dataName || 'Background Sound URL'}
        placeholder=""
        id={id || 'Background-Sound-URL'}
      />
    </div>
  );
};

export default FormcolItem;
