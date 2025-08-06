import React from 'react';
import ReusableItem9 from './ReusableItem9';
import SelectfieldItem from './SelectfieldItem';

const FormcelldivItem31 = ({
  label,
  description,
  id,
  name,
  dataName,
  optionText,
}) => {
  return (
    <div className="form--cell-div">
      <ReusableItem9
        label={label || 'Model'}
        description={description || 'This is the model that will be used.'}
      />
      <div className="form-control-2">
        <SelectfieldItem
          id={id || 'Voice-Model'}
          name={name || 'Voice-Model'}
          dataName={dataName || 'Voice Model'}
          value="deepgram"
          optionText="deepgram"
          optionText1={optionText || 'Select one...'}
        />
      </div>
    </div>
  );
};

export default FormcelldivItem31;
