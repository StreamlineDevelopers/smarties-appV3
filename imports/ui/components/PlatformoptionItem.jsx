import React from 'react';
import PlatformradiocardItem from './PlatformradiocardItem';

const PlatformoptionItem = ({ iconSrc, label }) => {
  return (
    <label className={'platform-option w-radio'}>
      <div
        className={
          'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
        }
      ></div>
      <input
        type={'radio'}
        data-name={'social-platform'}
        id={'radio'}
        name={'social-platform'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value={'Radio'}
      />
      <PlatformradiocardItem
        iconSrc={'/svgs/icon-6ab1f2e32174e1b4097c9d765cc80c69.svg'}
        label={'Email'}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        {'Radio'}
      </span>
    </label>
  );
};

export default PlatformoptionItem;
