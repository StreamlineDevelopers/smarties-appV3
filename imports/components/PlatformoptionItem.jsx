import React from 'react';
import PlatformradiocardItem from './PlatformradiocardItem';

const PlatformoptionItem = ({ d, label }) => {
  return (
    <label className="platform-option w-radio">
      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input"></div>
      <input
        type="radio"
        data-name="social-platform"
        id="radio"
        name="social-platform"
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value="Radio"
      />
      <PlatformradiocardItem
        d={
          d ||
          'M12.8,15.66c-4.74,0-8.58,3.85-8.58,8.58,0,2.7,1.27,5.24,3.43,6.87l38.92,29.19c2.04,1.52,4.83,1.52,6.87,0l38.92-29.19c2.16-1.63,3.43-4.17,3.43-6.87,0-4.74-3.84-8.58-8.58-8.58H12.8ZM4.21,35.69v37.2c0,6.31,5.13,11.45,11.45,11.45h68.68c6.31,0,11.45-5.13,11.45-11.45v-37.2l-38.92,29.19c-4.08,3.06-9.66,3.06-13.74,0L4.21,35.69Z'
        }
        label={label || 'Email'}
      />
      <span className="radio-button-label-2 w-form-label" htmlFor="radio">
        Radio
      </span>
    </label>
  );
};

export default PlatformoptionItem;
