import React from 'react';

const FormcontrolItem_44b91375 = ({ id, value, onChange }) => {
  return (
    <div className={'form-control'}>
      <div className={'form-label'}>{'Assistant Name'}</div>
      <input
        className={'form-input w-input'}
        maxlength={'256'}
        name={'assistant-name'}
        data-name={'assistant name'}
        placeholder={''}
        type={'text'}
        id={id || 'assistant-name'}
        value={value || ''}
        onChange={onChange}
      />
    </div>
  );
};

export default FormcontrolItem_44b91375;
