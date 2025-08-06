import React from 'react';
import FormcelldivItem20 from './FormcelldivItem20';

const FormcolItem24 = ({ label, id, name, dataName, optionText }) => {
  return (
    <div className={'form-col'}>
      <FormcelldivItem20
        label={'Provider'}
        id={'Voice-Provider'}
        name={'Voice-Provider'}
        dataName={'Voice Provider'}
        value={'deepgram'}
        optionText={'deepgram'}
        optionText1={'Select one...'}
      />
    </div>
  );
};

export default FormcolItem24;
