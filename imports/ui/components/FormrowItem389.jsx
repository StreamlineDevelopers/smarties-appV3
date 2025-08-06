import React from 'react';
import WcheckboxItem382 from './WcheckboxItem382';

const FormrowItem389 = ({
  name,
  id,
  dataName,
  htmlFor,
  name1,
  id1,
  dataName1,
  htmlFor1,
}) => {
  return (
    <div className={'form-row horizontal align-left'}>
      <WcheckboxItem382
        name={'check-async-2'}
        id={'check-async-2'}
        dataName={'Check Async 2'}
        htmlFor={'check-async-2'}
        label={'Async'}
      />
      <WcheckboxItem382
        name={'check-strict-2'}
        id={'check-strict-2'}
        dataName={'Check Strict 2'}
        htmlFor={'check-strict-2'}
        label={'Strict'}
      />
    </div>
  );
};

export default FormrowItem389;
