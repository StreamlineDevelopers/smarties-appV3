import React from 'react';
import FormcolItem383 from './FormcolItem383';

const FormrowItem392 = ({
  htmlFor,
  name,
  dataName,
  id,
  htmlFor1,
  name1,
  dataName1,
  id1,
}) => {
  return (
    <div className={'form-row horizontal g-15'}>
      <FormcolItem383
        htmlFor={'secret-token-2'}
        label={'Secret Token'}
        name={'secret-token-2'}
        dataName={'Secret Token 2'}
        id={'secret-token-2'}
        type={'text'}
      />
      <FormcolItem383
        htmlFor={'timeout-2'}
        label={'Timeout (seconds)'}
        name={'timeout-2'}
        dataName={'Timeout 2'}
        id={'timeout-2'}
        type={'number'}
      />
    </div>
  );
};

export default FormrowItem392;
