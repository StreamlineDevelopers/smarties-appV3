import React from 'react';
import FormcolItem_6fdf690d from './FormcolItem_6fdf690d';
import FormcolItem_3cc328a5 from './FormcolItem_3cc328a5';

const FormrowItem_d9037b86 = ({
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
      <FormcolItem_6fdf690d
        htmlFor={'parameter-name-2'}
        label={'Name'}
        name={'parameter-name-2'}
        dataName={'Parameter Name 2'}
        id={'parameter-name-2'}
        type={'text'}
      />
      <FormcolItem_3cc328a5
        htmlFor={'parameter-type-2'}
        id={'parameter-type-2'}
        name={'parameter-type-2'}
        dataName={'Parameter Type 2'}
      />
    </div>
  );
};

export default FormrowItem_d9037b86;
