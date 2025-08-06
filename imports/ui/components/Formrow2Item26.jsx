import React from 'react';
import FormcolItem24 from './FormcolItem24';

const Formrow2Item26 = ({ id, name, dataName, optionText }) => {
  return (
    <div className={'form-row-2 flex'}>
      <FormcolItem24
        label={'Server URL'}
        id={'Analysis-Structured-Data-Type-2'}
        name={'Analysis-Structured-Data-Type-2'}
        dataName={'Analysis Structured Data Type 2'}
        optionText={'String'}
      />
    </div>
  );
};

export default Formrow2Item26;
