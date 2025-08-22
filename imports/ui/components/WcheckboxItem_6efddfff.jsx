import React from 'react';

const WcheckboxItem_6efddfff = ({ dataWId }) => {
  return (
    <label className={'w-checkbox togglecheck_container'}>
      <div
        className={
          'w-checkbox-input w-checkbox-input--inputType-custom togglecheck w--redirected-checked'
        }
        data-w-id={dataWId || '29ed52c6-4b8b-54d0-8d09-eecab356bbd0'}
      ></div>
      <input
        type={'checkbox'}
        name={'checkbox-8'}
        id={'checkbox-8'}
        data-name={'Checkbox 8'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        checked
      />
      <span className={'checkbox-label-3 w-form-label'} htmlFor={'checkbox-8'}>
        {'I Agree'}
      </span>
      <div className={'toggletext-active'}>{'Active'}</div>
      <div className={'toggletext-inactive'}>{'Inactive'}</div>
    </label>
  );
};

export default WcheckboxItem_6efddfff;
