import React from 'react';
import FormcelldivItem_086acbba from './FormcelldivItem_086acbba';

const Formrow2Item_ca8f763a = ({
  label,
  description,
  id,
  name,
  dataName,
  optionText,
}) => {
  return (
    <div className={'form-row-2'}>
      <FormcelldivItem_086acbba
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

export default Formrow2Item_ca8f763a;
