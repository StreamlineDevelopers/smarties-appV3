import React from 'react';

// Component: FormhddivItem82
// Type: repetition
// Props: ["textDiv","textDiv1"]

const FormhddivItem82 = ({ textDiv, textDiv1}) => {
  return (
    <div className="form-hd-div"><div className="table-date-hd-text">{textDiv || 'Inbound Settings'}</div><div className="settings-sublabel">{textDiv1 || 'You can assign an assistant to the phone number so that whenever someone calls this phone number, the assistant will automatically be assigned to the call.'}</div></div>
  );
};

export default FormhddivItem82;