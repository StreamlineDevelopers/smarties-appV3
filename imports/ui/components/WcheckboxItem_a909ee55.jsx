import React from 'react';

const WcheckboxItem_a909ee55 = ({ dataWId }) => {
  return (
    <label className={'w-checkbox'}>
      <div
        className={
          'w-checkbox-input w-checkbox-input--inputType-custom contacts-checkbox'
        }
        data-w-id={dataWId || 'e126a55e-d39a-9fdc-2dc4-f201db972168'}
      ></div>
      <input
        type={'checkbox'}
        id={'checkbox'}
        name={'checkbox'}
        data-name={'Checkbox'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
      />
      <span className={'checkbox-label-3 w-form-label'} htmlFor={'checkbox'}>
        Checkbox
      </span>
    </label>
  );
};

export default WcheckboxItem_a909ee55;
