import React from 'react';
import PlatformradiocardItem_995327b4 from './PlatformradiocardItem_995327b4';

const PlatformoptionItem_22755cca = ({ src, label }) => {
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
      <PlatformradiocardItem_995327b4
        src={'../images/smarties-social-twitter.svg'}
        label={'Twitter/X'}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        Radio
      </span>
    </label>
  );
};

export default PlatformoptionItem_22755cca;
