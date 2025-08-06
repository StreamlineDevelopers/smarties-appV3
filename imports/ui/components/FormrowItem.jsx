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
    <div className={'form-row horizontal'}>
      <Formcol2Item
        label={'Full Name'}
        name={'full-name'}
        dataName={'full name'}
        type={'text'}
        id={'full-name'}
      />
      <Formcol2Item
        label={'Email Address'}
        name={'email-address'}
        dataName={'email address'}
        type={'email'}
        id={'email-address'}
      />
    </div>
  );
};

export default FormrowItem;
