import React from 'react';
import Formcol2Item from './Formcol2Item';

const FormrowItem = ({
  label,
  name,
  dataName,
  type,
  id,
  label1,
  name1,
  dataName1,
  type1,
  id1,
}) => {
  return (
    <div className="form-row horizontal">
      <Formcol2Item
        label={label || 'Full Name'}
        name={name || 'full-name'}
        dataName={dataName || 'full name'}
        type={type || 'text'}
        id={id || 'full-name'}
      />
      <Formcol2Item
        label={label1 || 'Email Address'}
        name={name1 || 'email-address'}
        dataName={dataName1 || 'email address'}
        type={type1 || 'email'}
        id={id1 || 'email-address'}
      />
    </div>
  );
};

export default FormrowItem;
