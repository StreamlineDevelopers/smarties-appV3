import React from 'react';
import SelectfieldItem_f5719ef5 from './SelectfieldItem_f5719ef5';

const FormcontrolItem_c7e266cb = ({
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
      <SelectfieldItem_f5719ef5
        id={'parameter-type-2'}
        name={'parameter-type-2'}
        dataName={'Parameter Type 2'}
        value={'string'}
        optionText={'string'}
      />
    </div>
  );
};

export default FormcontrolItem_c7e266cb;
