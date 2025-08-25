import React from 'react';

// Component: FormrowItem
// Type: repetition
// Props: ["textDiv","name","dataName","type","id","textDiv1","name1","dataName1","type1","id1"]

const FormrowItem = ({ value1, value2, handleInputChange, textDiv, name, dataName, type, id, textDiv1, name1, dataName1, type1, id1 }) => {
  return (
    <div className="form-row horizontal">
      <div className="formcol2">
        <div className="form-control">
          <div className="form-label">{textDiv || 'Full Name'}</div>
          <input value={value1} onChange={handleInputChange} className="form-input w-input" maxlength="256" name={name || "full-name"} data-name={dataName || "full name"} placeholder="" type={type || "text"} id={id || "full-name"} />
        </div>
      </div>
      <div className="formcol2">
        <div className="form-control">
          <div className="form-label">{textDiv1 || 'Email Address'}</div>
          <input value={value2} onChange={handleInputChange} className="form-input w-input" maxlength="256" name={name1 || "email-address"} data-name={dataName1 || "email address"} placeholder="" type={type1 || "email"} id={id1 || "email-address"} />
        </div>
      </div>
    </div>
  );
};

export default FormrowItem;