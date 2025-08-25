import React from 'react';

// Component: FormrowItem98
// Type: repetition
// Props: ["name","id","dataName","htmlFor","name1","id1","dataName1","htmlFor1"]

const FormrowItem98 = ({ name, id, dataName, htmlFor, name1, id1, dataName1, htmlFor1, isAsyncOpt = false, onChangeAsyncOpt = () => { }, isStrictOpt = false, onChangeStrictOpt = () => { } }) => {
  return (
    <div className="form-row horizontal align-left">
      <label className="w-checkbox checkbox-field-2">
        <div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${isAsyncOpt ? "w--redirected-checked" : ""}`}></div>
        <input
          type="checkbox"
          name={name || "check-async-2"}
          id={id || "check-async-2"}
          data-name={dataName || "Check Async 2"}
          checked={isAsyncOpt}
          onChange={(e) => onChangeAsyncOpt(e)}
          style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }}
        />
        <span className="checkbox-label w-form-label" htmlFor={htmlFor || "check-async-2"}>Async</span>
      </label>
      <label className="w-checkbox checkbox-field-2">
        <div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${isStrictOpt ? "w--redirected-checked" : ""}`}></div>
        <input
          type="checkbox"
          name={name1 || "check-strict-2"}
          id={id1 || "check-strict-2"}
          data-name={dataName1 || "Check Strict 2"}
          checked={isStrictOpt}
          onChange={(e) => onChangeStrictOpt(e)}
          style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }}
        />
        <span className="checkbox-label w-form-label" htmlFor={htmlFor1 || "check-strict-2"}>Strict</span>
      </label>
    </div>
  );
};

export default FormrowItem98;