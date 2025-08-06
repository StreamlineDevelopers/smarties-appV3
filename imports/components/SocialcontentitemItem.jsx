import React from 'react';
import SocialcontentradiocardItem from './SocialcontentradiocardItem';

const SocialcontentitemItem = ({ divText, divText1, divText2, divText3 }) => {
  return (
    <label className="social-content-item w-radio">
      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input"></div>
      <input
        type="radio"
        data-name="Radio"
        id="radio"
        name="radio"
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value="Radio"
      />
      <SocialcontentradiocardItem
        divText={
          divText ||
          'Discover how AI is transforming customer service with real-time personalization. Our latest case study shows a 45% increase in satisfaction scores!'
        }
        divText1={divText1 || '#DigitalMarketing'}
        divText2={divText2 || '#WorkSmarter'}
        divText3={divText3 || 'Professional'}
      />
      <span className="radio-button-label-2 w-form-label" htmlFor="radio">
        Radio
      </span>
    </label>
  );
};

export default SocialcontentitemItem;
