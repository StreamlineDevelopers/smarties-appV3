import React from 'react';
import SelectfieldItem from './SelectfieldItem';

const FormcelldivItem20 = ({
  label,
  id,
  name,
  dataName,
  value,
  optionText,
  optionText1,
}) => {
  return (
    <div className={'form--cell-div'}>
      <label htmlFor={''} className={'form-label-2'}>
        {label || 'Provider'}
      </label>
      <div className={'form-control-2'}>
        <SelectfieldItem
          id={'Provider'}
          name={'Provider'}
          dataName={'Provider'}
          value={'openai'}
          optionText={'openai'}
          optionText1={'Select one...'}
        />
      </div>
    </div>
  );
};

export default FormcelldivItem20;
