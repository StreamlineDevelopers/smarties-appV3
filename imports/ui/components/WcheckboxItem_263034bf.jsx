import React from 'react';
import ReusableItem_0cf934ba from './ReusableItem_0cf934ba';

const WcheckboxItem_263034bf = ({}) => {
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
      <ReusableItem_0cf934ba />
      <span
        className={'checkbox-label hide w-form-label'}
        htmlFor={'checkbox-2'}
      >
        {'(Select All)'}
      </span>
    </label>
  );
};

export default WcheckboxItem_263034bf;
