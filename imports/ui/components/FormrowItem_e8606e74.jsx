import React from 'react';
import FormcontrolItem_b5c12d0a from './FormcontrolItem_b5c12d0a';

const FormrowItem_e8606e74 = ({
  label,
  name,
  dataName,
  placeholder,
  type,
  id,
}) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem_b5c12d0a
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

export default FormrowItem_e8606e74;
