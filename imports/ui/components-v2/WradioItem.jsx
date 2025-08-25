import React from 'react';

// Component: WradioItem
// Type: repetition
// Props: ["id","value","htmlFor","textSpan"]

const WradioItem = ({ id, value, htmlFor, textSpan, inputRef, defaultChecked }) => {
  return (
    <label className="w-radio">
      <input
        type="radio"
        name="outbound-settings-radio"
        id={id || "call-one-number"}
        data-name="outbound settings radio"
        className="w-form-formradioinput w-radio-input"
        value={value || "call one number"}
        ref={inputRef}
        defaultChecked={defaultChecked}
      />
      <span className="radio-button-label w-form-label" htmlFor={htmlFor || "call-one-number"}>
        {textSpan || 'Call one number'}
      </span>
    </label>
  );
};

export default WradioItem;