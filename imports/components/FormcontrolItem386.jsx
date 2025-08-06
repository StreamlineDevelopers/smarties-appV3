import React from 'react';
import SelectfieldItem385 from './SelectfieldItem385';

const FormcontrolItem386 = ({ id, name, dataName }) => {
  return (
    <div className="form-control">
      <div className="form-label">Assistant Description</div>
      <div className="settings-row-formdata">
        <SelectfieldItem385
          id={id || 'inbound-assistant-description'}
          name={name || 'inbound-assistant-description'}
          dataName={dataName || 'inbound assistant description'}
        />
      </div>
    </div>
  );
};

export default FormcontrolItem386;
