import React from 'react';
import FormcelldivItem25 from './FormcelldivItem25';

const Formrow2Item27 = ({
  label,
  description,
  id,
  name,
  dataName,
  optionText,
}) => {
  return (
    <div className={'form-row-2'}>
      <FormcelldivItem25
        label={'Model'}
        description={'This is the model that will be used.'}
        id={'Voice-Model'}
        name={'Voice-Model'}
        dataName={'Voice Model'}
        optionText={'Select one...'}
      />
    </div>
  );
};

export default Formrow2Item27;
