import React from 'react';

const WcheckboxItem = ({ name, id, dataName, htmlFor, label }) => {
  return (
    <label className={'w-checkbox checkbox-field-2'}>
      <div
        className={
          'w-checkbox-input w-checkbox-input--inputType-custom checkbox'
        }
      ></div>
      <input
        type={'checkbox'}
        name={name || 'checkbox'}
        id={id || 'checkbox'}
        data-name={dataName || 'Checkbox'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
      />
      <span
        className={'checkbox-label w-form-label'}
        htmlFor={htmlFor || 'checkbox'}
      >
        {label || 'Add Voice ID Manually'}
      </span>
    </label>
  );
};

export default WcheckboxItem;
