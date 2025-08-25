import React from 'react';

// Component: WcheckboxItem99
// Type: repetition
// Props: ["name","id","dataName","htmlFor","textSpan"]

const WcheckboxItem99 = ({ name, id, dataName, htmlFor, textSpan}) => {
  return (
    <label className="w-checkbox checkbox-field-2"><div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div><input type="checkbox" name={name || "check-async-2"} id={id || "check-async-2"} data-name={dataName || "Check Async 2"} style={{"opacity":"0","position":"absolute","zIndex":"-1"}} /><span className="checkbox-label w-form-label" htmlFor={htmlFor || "check-async-2"}>{textSpan || 'Async'}</span></label>
  );
};

export default WcheckboxItem99;