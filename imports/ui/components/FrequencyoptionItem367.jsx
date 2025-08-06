import React from 'react';
import FrequencyradiocardItem359 from './FrequencyradiocardItem359';

const FrequencyoptionItem367 = ({ title, divText, divText1, src }) => {
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
      <FrequencyradiocardItem359
        title={'Daily'}
        divText={'Best for consistent engagement'}
        divText1={'Post once every day'}
        src={'../images/smarties-frequency-daily.svg'}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        Radio
      </span>
    </label>
  );
};

export default FrequencyoptionItem367;
