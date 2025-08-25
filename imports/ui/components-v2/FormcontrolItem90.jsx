import React from 'react';

// Component: FormcontrolItem90
// Type: repetition
// Props: ["textDiv","name","dataName","id"]

const FormcontrolItem90 = ({ textDiv, name, dataName, id}) => {
  return (
    <div className="form-control"><div className="form-label">{textDiv || 'New Password'}</div><input className="textfield w-input" maxlength="256" name={name || "new-password"} data-name={dataName || "new password"} placeholder="" type="password" id={id || "new-password"} /></div>
  );
};

export default FormcontrolItem90;