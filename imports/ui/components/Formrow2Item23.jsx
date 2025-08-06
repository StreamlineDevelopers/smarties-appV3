import React from 'react';
import FormcelldivItem20 from './FormcelldivItem20';

const Formrow2Item23 = ({
  label,
  id,
  name,
  dataName,
  value,
  optionText,
  optionText1,
}) => {
  return (
    <div className={'form-row-2'}>
      <FormcelldivItem20
        label={'Provider'}
        id={'Provider'}
        name={'Provider'}
        dataName={'Provider'}
        value={'openai'}
        optionText={'openai'}
        optionText1={'Select one...'}
      />
    </div>
  );
};

export default Formrow2Item23;
