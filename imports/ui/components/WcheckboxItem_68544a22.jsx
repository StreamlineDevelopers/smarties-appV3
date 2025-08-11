import React from 'react';

const WcheckboxItem_68544a22 = ({ name, id, dataName, htmlFor }) => {
  return (
    <label className={'w-checkbox table-checkbox-field'}>
      <div
        className={
          'w-checkbox-input w-checkbox-input--inputType-custom tablecheckbox'
        }
      ></div>
      <input
        type={'checkbox'}
        name={name || 'check-add-file'}
        id={id || 'check-add-file'}
        data-name={dataName || 'check add file'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
      />
      <span
        className={'checkbox-label-2 w-form-label'}
        htmlFor={htmlFor || 'check-add-file'}
      >
        Checkbox
      </span>
    </label>
  );
};

export default WcheckboxItem_68544a22;
