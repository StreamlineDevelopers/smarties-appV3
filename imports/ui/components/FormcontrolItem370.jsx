import React from 'react';

const FormcontrolItem370 = ({ label, name, dataName, id }) => {
  return (
    <div className={'form-control'}>
      <div className={'form-label'}>{label || 'New Password'}</div>
      <input
        className={'textfield w-input'}
        maxlength={'256'}
        name={name || 'new-password'}
        data-name={dataName || 'new password'}
        placeholder={''}
        type={'password'}
        id={id || 'new-password'}
      />
    </div>
  );
};

export default FormcontrolItem370;
