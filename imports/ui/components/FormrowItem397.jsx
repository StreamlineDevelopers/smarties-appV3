import React from 'react';
import FormcolItem383 from './FormcolItem383';
import FormcolItem395 from './FormcolItem395';

const FormrowItem397 = ({
  htmlFor,
  name,
  dataName,
  id,
  htmlFor1,
  id1,
  name1,
  dataName1,
}) => {
  return (
    <div className={'form-row horizontal g-15'}>
      <FormcolItem383
        htmlFor={'parameter-name-2'}
        label={'Name'}
        name={'parameter-name-2'}
        dataName={'Parameter Name 2'}
        id={'parameter-name-2'}
        type={'text'}
      />
      <FormcolItem395
        htmlFor={'parameter-type-2'}
        id={'parameter-type-2'}
        name={'parameter-type-2'}
        dataName={'Parameter Type 2'}
      />
    </div>
  );
};

export default FormrowItem397;
