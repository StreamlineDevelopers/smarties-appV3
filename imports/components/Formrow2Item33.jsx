import React from 'react';
import FormcelldivItem31 from './FormcelldivItem31';

const Formrow2Item33 = ({
  label,
  description,
  id,
  name,
  dataName,
  optionText,
}) => {
  return (
    <div className="form-row-2">
      <FormcelldivItem31
        label={label || 'Model'}
        description={description || 'This is the model that will be used.'}
        id={id || 'Voice-Model'}
        name={name || 'Voice-Model'}
        dataName={dataName || 'Voice Model'}
        optionText={optionText || 'Select one...'}
      />
    </div>
  );
};

export default Formrow2Item33;
