import React from 'react';
import FormcontrolItem380 from './FormcontrolItem380';

const FormrowItem385 = ({ label, name, dataName, type, id }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem380
        label={'Tool Name'}
        name={'tool-name-2'}
        dataName={'Tool Name 2'}
        type={'text'}
        id={'tool-name-2'}
      />
    </div>
  );
};

export default FormrowItem385;
