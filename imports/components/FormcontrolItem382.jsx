import React from 'react';

const FormcontrolItem382 = ({ label, name, dataName, id }) => {
  return (
    <div className="form-control">
      <div className="form-label">{label || 'Inbound Phone Number'}</div>
      <input
        className="form-input w-input"
        maxlength="256"
        name={name || 'inbound-form-number'}
        data-name={dataName || 'inbound form number'}
        placeholder=""
        type="text"
        id={id || 'inbound-form-number'}
      />
    </div>
  );
};

export default FormcontrolItem382;
