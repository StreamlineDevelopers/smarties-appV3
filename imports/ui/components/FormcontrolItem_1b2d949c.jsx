import React from 'react';
import SelectfieldItem_0b2c64ac from './SelectfieldItem_0b2c64ac';

const FormcontrolItem_1b2d949c = ({
  htmlFor,
  label,
  id,
  name,
  dataName,
  value,
  optionText,
}) => {
  return (
    <div className={'form-control'}>
      <label htmlFor={htmlFor || 'parameter-type-2'} className={'form-label'}>
        {label || 'Type'}
      </label>
      <SelectfieldItem_0b2c64ac
        id={'parameter-type-2'}
        name={'parameter-type-2'}
        dataName={'Parameter Type 2'}
        value={'string'}
        optionText={'string'}
      />
    </div>
  );
};

export default FormcontrolItem_1b2d949c;
