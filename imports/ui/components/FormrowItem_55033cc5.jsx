import React from 'react';
import FormcontrolItem_25fe8ffb from './FormcontrolItem_25fe8ffb';

const FormrowItem_55033cc5 = ({ id, value = '', onChange = () => { } }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem_25fe8ffb id={'assistant-description'} value={value} onChange={onChange} />
    </div>
  );
};

export default FormrowItem_55033cc5;
