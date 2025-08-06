import React from 'react';

const DbcardtitleItem212 = ({ strongText, title }) => {
  return (
    <div className={'db-card-title'}>
      <strong>{strongText || 'Weekly report'}</strong>
      {title || 'generated'}
    </div>
  );
};

export default DbcardtitleItem212;
