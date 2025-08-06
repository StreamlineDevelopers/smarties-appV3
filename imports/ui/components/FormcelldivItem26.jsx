import React from 'react';
import SelectfieldItem from './SelectfieldItem';

const FormcelldivItem26 = ({
  label,
  id,
  name,
  dataName,
  value,
  optionText,
  optionText1,
}) => {
  return (
    <div className="form--cell-div">
      <label htmlFor="" className="form-label-2">
        {label || 'Provider'}
      </label>
      <div className="form-control-2">
        <SelectfieldItem
          id={id || 'Provider'}
          name={name || 'Provider'}
          dataName={dataName || 'Provider'}
          value={value || 'openai'}
          optionText={optionText || 'openai'}
          optionText1={optionText1 || 'Select one...'}
        />
      </div>
    </div>
  );
};

export default FormcelldivItem26;
