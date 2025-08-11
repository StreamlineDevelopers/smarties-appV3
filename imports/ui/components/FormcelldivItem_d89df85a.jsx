import React from 'react';

const FormcelldivItem_d89df85a = ({ label, name, dataName, id }) => {
  return (
    <div className={'form--cell-div'}>
      <label htmlFor={''} className={'form-label-2'}>
        {label || 'Name'}
      </label>
      <div className={'form-control-2'}>
        <input
          className={'form-input white w-input'}
          maxlength={'256'}
          name={name || 'Background-Sound-URL-3'}
          data-name={dataName || 'Background Sound URL 3'}
          placeholder={''}
          type={'text'}
          id={id || 'Background-Sound-URL-3'}
          required
        />
      </div>
    </div>
  );
};

export default FormcelldivItem_d89df85a;
