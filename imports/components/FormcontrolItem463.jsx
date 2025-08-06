import React from 'react';

const FormcontrolItem463 = ({ label, name, dataName, type, id }) => {
  return (
    <div className="form-control">
      <div className="form-label">{label || 'Domain'}</div>
      <input
        className="form-input w-input"
        maxlength="256"
        name={name || 'domain-name'}
        data-name={dataName || 'domain name'}
        placeholder=""
        type={type || 'url'}
        id={id || 'domain-name-2'}
      />
    </div>
  );
};

export default FormcontrolItem463;
