import React from 'react';

const WcheckboxItem283 = ({ name, id, dataName, htmlFor, label }) => {
  return (
    <label className={'w-checkbox filtercheckbox_container'}>
      <input
        type={'checkbox'}
        name={name || 'checkbox-10'}
        id={id || 'checkbox-10'}
        data-name={dataName || 'Checkbox 10'}
        className={'w-checkbox-input filtercheckbox'}
      />
      <span
        className={'filtercheckbox_label w-form-label'}
        htmlFor={htmlFor || 'checkbox-10'}
      >
        {label || 'Prospect'}
      </span>
    </label>
  );
};

export default WcheckboxItem283;
