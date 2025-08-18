import React from 'react';
import FrequencyradiocardItem_2b9d4f8f from './FrequencyradiocardItem_2b9d4f8f';

const FrequencyoptionItem_eb7b5348 = ({ title, divText, divText1, src, value, checked, onChange = () => { } }) => {
  return (
    <label className={'frequency-option w-radio'}>
      <div
        className={
          `w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input ${checked && 'w--redirected-checked'} `
        }
      ></div>
      <input
        type={'radio'}
        name={'social-frequency'}
        id={'radio'}
        data-name={'social-frequency'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <FrequencyradiocardItem_2b9d4f8f
        title={title}
        divText={divText}
        divText1={divText1}
        src={src}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        {'Radio'}
      </span>
    </label>
  );
};

export default FrequencyoptionItem_eb7b5348;
