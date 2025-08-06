import React from 'react';
import SelectfieldItem446 from './SelectfieldItem446';

const FormcontrolItem450 = ({
  htmlFor,
  label,
  id,
  name,
  dataName,
  value,
  optionText,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={htmlFor || 'parameter-type-2'} className="form-label">
        {label || 'Type'}
      </label>
      <SelectfieldItem446
        id={id || 'parameter-type-2'}
        name={name || 'parameter-type-2'}
        dataName={dataName || 'Parameter Type 2'}
        value={value || 'string'}
        optionText={optionText || 'string'}
      />
    </div>
  );
};

export default FormcontrolItem450;
