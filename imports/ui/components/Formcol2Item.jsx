import React from 'react';
import FormcontrolItem from './FormcontrolItem';

const Formcol2Item = ({ label, name, dataName, type, id }) => {
  return (
    <div className={'formcol2'}>
      <FormcontrolItem
        label={'Full Name'}
        name={'full-name'}
        dataName={'full name'}
        type={'text'}
        id={'full-name'}
      />
    </div>
  );
};

export default Formcol2Item;
