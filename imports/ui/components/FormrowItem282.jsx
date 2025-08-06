import React from 'react';
import FormcontrolItem281 from './FormcontrolItem281';

const FormrowItem282 = ({ label, name, dataName, placeholder, type, id }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem281
        label={'Email'}
        name={'email'}
        dataName={'email'}
        placeholder={'Enter Email'}
        type={'email'}
        id={'email'}
      />
    </div>
  );
};

export default FormrowItem282;
