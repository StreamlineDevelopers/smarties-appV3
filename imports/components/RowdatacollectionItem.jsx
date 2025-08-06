import React from 'react';
import RowdatacollectionmainItem from './RowdatacollectionmainItem';

const RowdatacollectionItem = ({ label, divText }) => {
  return (
    <div className="row-data-collection">
      <RowdatacollectionmainItem
        label={label || 'Referral Source'}
        divText={divText || 'Google Search'}
      />
      <div className="edit-data">
        <img loading="lazy" src="images/smarties-icon-edit.svg" alt="" />
      </div>
    </div>
  );
};

export default RowdatacollectionItem;
