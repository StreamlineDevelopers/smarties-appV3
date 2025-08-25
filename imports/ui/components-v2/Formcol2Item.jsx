import React from 'react';

// Component: Formcol2Item
// Type: repetition
// Props: ["textDiv","name","dataName","type","id"]

const Formcol2Item = ({ textDiv, name, dataName, type, id}) => {
  return (
    <div className="formcol2"><div className="form-control"><div className="form-label">{textDiv || 'Full Name'}</div><input className="form-input w-input" maxlength="256" name={name || "full-name"} data-name={dataName || "full name"} placeholder="" type={type || "text"} id={id || "full-name"} /></div></div>
  );
};

export default Formcol2Item;