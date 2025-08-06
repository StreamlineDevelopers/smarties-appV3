import React from 'react';
import FrequencyradiocardItem from './FrequencyradiocardItem';

const FrequencyoptionItem = ({ title, iconSrc }) => {
  return (
    <label className={'frequency-option w-radio'}>
      <div
        className={
          'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
        }
      ></div>
      <input
        type={'radio'}
        name={'social-frequency'}
        id={'radio'}
        data-name={'social-frequency'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value={'Radio'}
      />
      <FrequencyradiocardItem
        title={'Send Now'}
        iconSrc={'/svgs/icon-462e6e1d6679c32391924fe86b535d52.svg'}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        Radio
      </span>
    </label>
  );
};

export default FrequencyoptionItem;
