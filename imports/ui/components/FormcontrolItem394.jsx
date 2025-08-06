import React from 'react';
import SelectfieldItem390 from './SelectfieldItem390';

const FormcontrolItem394 = ({
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
      <SelectfieldItem390
        id={'parameter-type-2'}
        name={'parameter-type-2'}
        dataName={'Parameter Type 2'}
        value={'string'}
        optionText={'string'}
      />
    </div>
  );
};

export default FormcontrolItem394;
