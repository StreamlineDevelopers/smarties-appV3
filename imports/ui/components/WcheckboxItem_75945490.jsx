import React from 'react';

const WcheckboxItem_75945490 = ({ name, id, dataName, htmlFor, label }) => {
  return (
    <label className={'w-checkbox checkbox-field-2'}>
      <div
        className={
          'w-checkbox-input w-checkbox-input--inputType-custom checkbox'
        }
      ></div>
      <input
        type={'checkbox'}
        name={name || 'check-async-2'}
        id={id || 'check-async-2'}
        data-name={dataName || 'Check Async 2'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
      />
      <span
        className={'checkbox-label w-form-label'}
        htmlFor={htmlFor || 'check-async-2'}
      >
        {label || 'Async'}
      </span>
    </label>
  );
};

export default WcheckboxItem_75945490;
