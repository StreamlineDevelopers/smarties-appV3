import React from 'react';
import FormcontrolItem_22a60a2a from './FormcontrolItem_22a60a2a';

const FormrowItem_7e32d29e = ({ id, value, onChange = () => { } }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem_22a60a2a id={'assistant-description'} value={value} onChange={onChange} />
    </div>
  );
};

export default FormrowItem_7e32d29e;
