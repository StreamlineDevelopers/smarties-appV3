import React from 'react';
import FormcontrolItem_c7e266cb from './FormcontrolItem_c7e266cb';

const FormrowItem_d526f8a5 = ({ htmlFor, id, name, dataName }) => {
  return (
    <div className={'form-row horizontal g-15'}>
      <FormcontrolItem_c7e266cb
        htmlFor={'message-type-2'}
        label={'Add Message'}
        id={'message-type-2'}
        name={'message-type-2'}
        dataName={'Message Type 2'}
        value={''}
        optionText={'Select Message Type'}
      />
    </div>
  );
};

export default FormrowItem_d526f8a5;
