import React from 'react';

// Component: FormcolItem12
// Type: repetition
// Props: ["textLabel","name","dataName","id"]

const FormcolItem12 = ({ textLabel, name, dataName, id}) => {
  return (
    <div className="form-col"><div className="form--cell-div"><label htmlFor="" className="form-label-2">{textLabel || 'Background Sound URL'}</label><div className="form-control-2"><input className="form-input w-input" maxlength="256" name={name || "Background-Sound-URL"} data-name={dataName || "Background Sound URL"} placeholder="" type="text" id={id || "Background-Sound-URL"} required /></div></div></div>
  );
};

export default FormcolItem12;