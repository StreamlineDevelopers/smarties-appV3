import React from 'react';
import FormcontrolItem from './FormcontrolItem';

const Formcol2Item = ({ label, name, dataName, type, id }) => {
  return (
    <div className="formcol2">
      <FormcontrolItem
        label={label || 'Full Name'}
        name={name || 'full-name'}
        dataName={dataName || 'full name'}
        type={type || 'text'}
        id={id || 'full-name'}
      />
    </div>
  );
};

export default Formcol2Item;
