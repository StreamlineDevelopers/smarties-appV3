import React from 'react';

const FormcontrolItem_f7d7b8e7 = ({
  htmlFor,
  label,
  name,
  dataName,
  id,
  type,
}) => {
  return (
    <div className={'form-control'}>
      <label htmlFor={htmlFor || 'parameter-name-2'} className={'form-label'}>
        {label || 'Name'}
      </label>
      <input
        className={'form-input w-input'}
        maxlength={'256'}
        name={name || 'parameter-name-2'}
        data-name={dataName || 'Parameter Name 2'}
        placeholder={''}
        type={type || 'text'}
        id={id || 'parameter-name-2'}
      />
    </div>
  );
};

export default FormcontrolItem_f7d7b8e7;
