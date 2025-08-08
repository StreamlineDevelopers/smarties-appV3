import React from 'react';
import FormcontrolItem67 from './FormcontrolItem67';

const FormrowItem71 = ({ id, value = '', onChange = () => { } }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem67 id={'assistant-name'} value={value} onChange={onChange} />
    </div>
  );
};

export default FormrowItem71;
