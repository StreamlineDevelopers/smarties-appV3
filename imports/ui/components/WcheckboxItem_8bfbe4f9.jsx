import React from 'react';
import ReusableItem_c979e3f9 from './ReusableItem_c979e3f9';

const WcheckboxItem_8bfbe4f9 = ({}) => {
  return (
    <label className={'w-checkbox checkbox-field-2'}>
      <div
        className={
          'w-checkbox-input w-checkbox-input--inputType-custom checkbox'
        }
      ></div>
      <input
        type={'checkbox'}
        name={'checkbox-2'}
        id={'checkbox-2'}
        data-name={'Checkbox 2'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
      />
      <ReusableItem_c979e3f9 />
      <span
        className={'checkbox-label hide w-form-label'}
        htmlFor={'checkbox-2'}
      >
        (Select All)
      </span>
    </label>
  );
};

export default WcheckboxItem_8bfbe4f9;
