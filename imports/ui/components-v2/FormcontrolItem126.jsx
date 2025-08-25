import React from 'react';

// Component: FormcontrolItem126
// Type: repetition
// Props: ["textDiv","name","dataName","type","id"]

const FormcontrolItem126 = ({ textDiv, name, dataName, type, id}) => {
  return (
    <div className="form-control"><div className="form-label">{textDiv || 'Domain'}</div><input className="form-input w-input" maxlength="256" name={name || "domain-name"} data-name={dataName || "domain name"} placeholder="" type={type || "url"} id={id || "domain-name-2"} /></div>
  );
};

export default FormcontrolItem126;