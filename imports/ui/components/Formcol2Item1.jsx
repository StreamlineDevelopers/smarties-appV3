import React from 'react';
import FileinforowItem from './FileinforowItem';

const Formcol2Item1 = ({ label, divText }) => {
  return (
    <div className="formcol2">
      <FileinforowItem
        label={label || 'Member Since'}
        divText={divText || 'March 2023'}
      />
    </div>
  );
};

export default Formcol2Item1;
