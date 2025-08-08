import React from 'react';

const FormcontrolItem68 = ({ id, value, onChange }) => {
  return (
    <div className={'form-control'}>
      <div className={'form-label'}>Assistant Description</div>
      <textarea
        placeholder={''}
        maxlength={'5000'}
        id={id || 'assistant-description'}
        name={'assistant-description'}
        data-name={'assistant description'}
        className={'form-textarea w-input'}
        value={value || ''}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default FormcontrolItem68;
