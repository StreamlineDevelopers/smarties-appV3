import React from 'react';

const FormhddivleftItem = ({ divText }) => {
  return (
    <div className={'form-hd-div-left'}>
      <div className={'table-date-hd-text'}>
        {divText || 'Data Enrichment Permissions'}
      </div>
    </div>
  );
};

export default FormhddivleftItem;
