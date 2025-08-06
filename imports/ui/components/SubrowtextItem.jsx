import React from 'react';

const SubrowtextItem = ({ divText, description }) => {
  return (
    <div className={'subrow-text'}>
      <div className={'card-form-row-text'}>
        {divText || 'Background Denoising Enabled'}
      </div>
      <div className={'card-form-row-description'}>
        {description || 'Filter background noise while the user is talking.'}
      </div>
    </div>
  );
};

export default SubrowtextItem;
