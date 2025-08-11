import React from 'react';
import FormcontrolItem_6715e134 from './FormcontrolItem_6715e134';

const FormrowItem_ce4d5db1 = ({ id, value = '', onChange = () => { } }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem_6715e134 id={'assistant-name'} value={value} onChange={onChange} />
    </div>
  );
};

export default FormrowItem_ce4d5db1;
