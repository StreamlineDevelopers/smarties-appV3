import React from 'react';

const WcheckboxItem471 = ({ label }) => {
  return (
    <label className="w-checkbox">
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        data-name="Checkbox"
        className="w-checkbox-input"
      />
      <span className="w-form-label" htmlFor="checkbox">
        {label || 'SEO Optimize'}
      </span>
    </label>
  );
};

export default WcheckboxItem471;
