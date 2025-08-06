import React from 'react';

const DbcardtitleItem254 = ({ strongText, title }) => {
  return (
    <div className="db-card-title">
      <strong>{strongText || 'Weekly report'}</strong>
      {title || 'generated'}
    </div>
  );
};

export default DbcardtitleItem254;
