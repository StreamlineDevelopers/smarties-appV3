import React from 'react';

// Component: FormcolItem22
// Type: repetition
// Props: ["textLabel","name","dataName","id"]

const FormcolItem22 = ({ textLabel, name, dataName, id}) => {
  return (
    <div className="form-col"><div className="form--cell-div"><label htmlFor="" className="form-label-2">{textLabel || 'Name'}</label><div className="form-control-2"><input className="form-input white w-input" maxlength="256" name={name || "Background-Sound-URL-3"} data-name={dataName || "Background Sound URL 3"} placeholder="" type="text" id={id || "Background-Sound-URL-3"} required /></div></div></div>
  );
};

export default FormcolItem22;