import React from 'react';
import Selectfield2Item from './Selectfield2Item';

const Col2formItem = ({ optionText }) => {
  return (
    <div className="col-2-form">
      <div className="select-field-div">
        <Selectfield2Item optionText={optionText || 'All Status'} />
      </div>
    </div>
  );
};

export default Col2formItem;
