import React from 'react';
import FormcelldivItem from './FormcelldivItem';

const FormcolItem = ({ label, name, dataName, id }) => {
  return (
    <div className={'form-col'}>
      <FormcelldivItem
        label={'Background Sound URL'}
        name={'Background-Sound-URL'}
        dataName={'Background Sound URL'}
        placeholder={''}
        id={'Background-Sound-URL'}
      />
    </div>
  );
};

export default FormcolItem;
