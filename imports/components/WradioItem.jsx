import React from 'react';

const WradioItem = ({ id, value, htmlFor, label }) => {
  return (
    <label className="w-radio">
      <input
        type="radio"
        name="outbound-settings-radio"
        id={id || 'call-one-number'}
        data-name="outbound settings radio"
        className="w-form-formradioinput w-radio-input"
        value={value || 'call one number'}
      />
      <span
        className="radio-button-label w-form-label"
        htmlFor={htmlFor || 'call-one-number'}
      >
        {label || 'Call one number'}
      </span>
    </label>
  );
};

export default WradioItem;
