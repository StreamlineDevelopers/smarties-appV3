import React from 'react';

const FormcolItem_f952aba4 = ({ name, dataName, placeholder, id }) => {
  return (
    <div className={'form-col'}>
      <div className={'form-control'}>
        <input
          className={'form-input w-input'}
          maxlength={'256'}
          name={name || 'header-name-2'}
          data-name={dataName || 'Header Name 2'}
          placeholder={placeholder || 'Header Name'}
          type={'text'}
          id={id || 'header-name-2'}
        />
      </div>
    </div>
  );
};

export default FormcolItem_f952aba4;
