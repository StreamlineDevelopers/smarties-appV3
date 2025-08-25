import React from 'react';

// Component: FormcolItem
// Type: repetition
// Props: ["textLabel","id","name","dataName","textOption"]

const FormcolItem = ({ textLabel, id, name, dataName, textOption, options = [], value, onChange = () => { }, }) => {
  return (
    <div className="form-col"><div className="form--cell-div"><label htmlFor="" className="form-label-2">{textLabel || 'Provider'}</label>
      <div className="form-control-2">
        <option value="">Select an option</option>
        <select value={value} onChange={onChange} id={id || "Voice-Provider"} name={name || "Voice-Provider"} data-name={dataName || "Voice Provider"} className="select-field w-select">
          {options.length && options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          }
          )}
        </select>
      </div>
    </div>
    </div>
  );
};

export default FormcolItem;