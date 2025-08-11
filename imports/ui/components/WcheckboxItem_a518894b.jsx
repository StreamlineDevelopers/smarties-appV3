import React from 'react';

const WcheckboxItem_a518894b = ({}) => {
  return (
    <label className={'w-checkbox'}>
      <div
        className={
          'w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked'
        }
      ></div>
      <input
        type={'checkbox'}
        name={'checkbox'}
        id={'checkbox'}
        data-name={'Checkbox'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        checked
      />
      <span className={'checkbox-label-hide w-form-label'} htmlFor={'checkbox'}>
        Checkbox
      </span>
    </label>
  );
};

export default WcheckboxItem_a518894b;
