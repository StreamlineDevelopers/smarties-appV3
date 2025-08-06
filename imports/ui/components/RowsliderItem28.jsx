import React from 'react';
import SlidercontainerItem from './SlidercontainerItem';

const RowsliderItem28 = ({}) => {
  return (
    <div className={'row-slider'}>
      <SlidercontainerItem divText={'1 (sec)'} divText1={'20 (sec'} />
      <div className={'form-control-2 small'}>
        <input
          className={'form-input small w-input'}
          maxlength={'256'}
          name={'Temperature-2'}
          data-name={'Temperature 2'}
          placeholder={'0.7'}
          type={'number'}
          id={'Temperature-2'}
          required
        />
      </div>
    </div>
  );
};

export default RowsliderItem28;
