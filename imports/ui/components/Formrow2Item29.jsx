import React from 'react';
import FormcelldivItem26 from './FormcelldivItem26';

const Formrow2Item29 = ({
  label,
  id,
  name,
  dataName,
  value,
  optionText,
  optionText1,
}) => {
  return (
    <div className="form-row-2">
      <FormcelldivItem26
        label={label || 'Provider'}
        id={id || 'Provider'}
        name={name || 'Provider'}
        dataName={dataName || 'Provider'}
        value={value || 'openai'}
        optionText={optionText || 'openai'}
        optionText1={optionText1 || 'Select one...'}
      />
    </div>
  );
};

export default Formrow2Item29;
