import React from 'react';
import FormcolItem30 from './FormcolItem30';

const Formrow2Item32 = ({ id, name, dataName, optionText }) => {
  return (
    <div className="form-row-2 flex">
      <FormcolItem30
        label="Server URL"
        id={id || 'Analysis-Structured-Data-Type-2'}
        name={name || 'Analysis-Structured-Data-Type-2'}
        dataName={dataName || 'Analysis Structured Data Type 2'}
        optionText={optionText || 'String'}
      />
    </div>
  );
};

export default Formrow2Item32;
