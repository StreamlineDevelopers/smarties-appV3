import React from 'react';

// Component: Formrow2Item34
// Type: repetition
// Props: ["id","name","dataName","textOption"]

const Formrow2Item34 = ({ id, name, dataName, textOption}) => {
  return (
    <div className="form-row-2 flex"><div className="form-col"><div className="form--cell-div"><label htmlFor="" className="form-label-2">Server URL</label><div className="form-control-2"><select id={id || "Analysis-Structured-Data-Type-2"} name={name || "Analysis-Structured-Data-Type-2"} data-name={dataName || "Analysis Structured Data Type 2"} className="select-field w-select"><option value="">{textOption || 'String'}</option><option value="deepgram">deepgram</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select></div></div></div></div>
  );
};

export default Formrow2Item34;