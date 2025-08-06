import React from 'react';
import ReusableItem from './ReusableItem';
import SelectfieldItem from './SelectfieldItem';

const FormcelldivItem25 = ({
  label,
  description,
  id,
  name,
  dataName,
  optionText,
}) => {
  return (
    <div className={'form--cell-div'}>
      <ReusableItem
        label={'Model'}
        description={'This is the model that will be used.'}
      />
      <div className={'form-control-2'}>
        <SelectfieldItem
          id={'Voice-Model'}
          name={'Voice-Model'}
          dataName={'Voice Model'}
          value={'deepgram'}
          optionText={'deepgram'}
          optionText1={'Select one...'}
        />
      </div>
    </div>
  );
};

export default FormcelldivItem25;
