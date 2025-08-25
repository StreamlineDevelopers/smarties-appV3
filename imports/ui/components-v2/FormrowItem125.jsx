import React from 'react';

// Component: FormrowItem125
// Type: repetition
// Props: ["textDiv","name","dataName","type","id"]

const FormrowItem125 = ({ textDiv, name, dataName, type, id}) => {
  return (
    <div className="form-row"><div className="form-control"><div className="form-label">{textDiv || 'Domain'}</div><input className="form-input w-input" maxlength="256" name={name || "domain-name"} data-name={dataName || "domain name"} placeholder="" type={type || "url"} id={id || "domain-name-2"} /></div></div>
  );
};

export default FormrowItem125;