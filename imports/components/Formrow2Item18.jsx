import React from 'react';
import FormcelldivItem14 from './FormcelldivItem14';

const Formrow2Item18 = ({ id, name, dataName }) => {
  return (
    <div className="form-row-2 prompt">
      <FormcelldivItem14
        id={id || 'System-Prompt'}
        name={name || 'System-Prompt'}
        dataName={dataName || 'System Prompt'}
      />
    </div>
  );
};

export default Formrow2Item18;
