import React from 'react';

const FormcontrolItem_91c38106 = ({ label, name, dataName, type, id }) => {
  return (
    <div className={'form-control'}>
      <div className={'form-label'}>{label || 'Tool Name'}</div>
      <input
        className={'form-input w-input'}
        maxlength={'256'}
        name={name || 'tool-name-2'}
        data-name={dataName || 'Tool Name 2'}
        placeholder={''}
        type={type || 'text'}
        id={id || 'tool-name-2'}
      />
    </div>
  );
};

export default FormcontrolItem_91c38106;
