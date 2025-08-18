import React from 'react';
import PlatformradiocardItem_995327b4 from './PlatformradiocardItem_995327b4';

const PlatformoptionItem_f97190d2 = ({ src, label, value, checked, onChange = () => { } }) => {
  return (
    <label className={'platform-option w-radio'}>
      <div
        className={
          `w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input ${checked && 'w--redirected-checked'} `
        }
      ></div>
      <input
        type={'radio'}
        data-name={'social-platform'}
        id={'radio'}
        name={'social-platform'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <PlatformradiocardItem_995327b4
        src={src}
        label={label}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        {'Radio'}
      </span>
    </label>
  );
};

export default PlatformoptionItem_f97190d2;
