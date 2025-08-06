import React from 'react';

const FormcontrolItem381 = ({ label, id, name, dataName }) => {
  return (
    <div className={'form-control'}>
      <div className={'form-label'}>{label || 'Tool Description'}</div>
      <textarea
        id={id || 'tool-description-2'}
        name={name || 'tool-description-2'}
        maxlength={'5000'}
        data-name={dataName || 'Tool Description 2'}
        placeholder={''}
        className={'form-textarea w-input'}
      ></textarea>
    </div>
  );
};

export default FormcontrolItem381;
