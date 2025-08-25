import React from 'react';

// Component: FormrowItem89
// Type: repetition
// Props: ["textDiv","name","dataName","id"]

const FormrowItem89 = ({ textDiv, name, dataName, id}) => {
  return (
    <div className="form-row"><div className="form-control"><div className="form-label">{textDiv || 'New Password'}</div><input className="textfield w-input" maxlength="256" name={name || "new-password"} data-name={dataName || "new password"} placeholder="" type="password" id={id || "new-password"} /></div></div>
  );
};

export default FormrowItem89;