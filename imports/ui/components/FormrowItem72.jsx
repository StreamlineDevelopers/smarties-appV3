import React from 'react';
import FormcontrolItem68 from './FormcontrolItem68';

const FormrowItem72 = ({ id, value = '', onChange = () => { } }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem68 id={'assistant-description'} value={value} onChange={onChange} />
    </div>
  );
};

export default FormrowItem72;
