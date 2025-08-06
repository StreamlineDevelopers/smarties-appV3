import React from 'react';
import SocialradiocardItem from './SocialradiocardItem';

const PodcasttopicitemItem = ({ label, dataWId }) => {
  return (
    <label className="podcast-topic-item w-radio">
      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input"></div>
      <input
        type="radio"
        name="radio"
        id="radio"
        data-name="Radio"
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value="Radio"
      />
      <SocialradiocardItem
        label={label || '5 Strategies for Effective Team Management'}
        dataWId={dataWId || '183aca65-1bf9-f04d-110c-920eb3d9fda9'}
      />
      <span className="radio-button-label-2 w-form-label" htmlFor="radio">
        Radio
      </span>
    </label>
  );
};

export default PodcasttopicitemItem;
