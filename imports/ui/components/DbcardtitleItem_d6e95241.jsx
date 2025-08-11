import React from 'react';

const DbcardtitleItem_d6e95241 = ({ strongText, title }) => {
  return (
    <div className={'db-card-title'}>
      <strong>{strongText || 'Weekly report'}</strong>
      {title || 'generated'}
    </div>
  );
};

export default DbcardtitleItem_d6e95241;
