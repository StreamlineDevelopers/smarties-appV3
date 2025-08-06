import React from 'react';
import FormcelldivItem26 from './FormcelldivItem26';

const FormcolItem30 = ({ label, id, name, dataName, optionText }) => {
  return (
    <div className="form-col">
      <FormcelldivItem26
        label={label || 'Provider'}
        id={id || 'Voice-Provider'}
        name={name || 'Voice-Provider'}
        dataName={dataName || 'Voice Provider'}
        value="deepgram"
        optionText="deepgram"
        optionText1={optionText || 'Select one...'}
      />
    </div>
  );
};

export default FormcolItem30;
