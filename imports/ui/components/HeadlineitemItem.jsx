import React from 'react';
import HeadlineradiocardItem from './HeadlineradiocardItem';

const HeadlineitemItem = ({ label, divText, divText1, divText2 }) => {
  return (
    <label className={'headline-item w-radio'}>
      <div
        className={
          'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
        }
      ></div>
      <input
        type={'radio'}
        data-name={'Radio'}
        id={'radio'}
        name={'radio'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value={'Radio'}
      />
      <HeadlineradiocardItem
        label={'10 Ways AI is Transforming Digital Marketing in 2023'}
        divText={'SEO: 92'}
        divText1={
          'Explore the latest AI tools and techniques that are revolutionizing how marketers connect with their audience.'
        }
        divText2={'5 min read'}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        Radio
      </span>
    </label>
  );
};

export default HeadlineitemItem;
