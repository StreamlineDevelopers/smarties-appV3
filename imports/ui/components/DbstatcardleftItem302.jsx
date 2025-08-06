import React from 'react';
import DbstatvaluecontainItem300 from './DbstatvaluecontainItem300';

const DbstatcardleftItem302 = ({ title, divText, src, divText1 }) => {
  return (
    <div className="db-stat-card-left">
      <div className="stat-title">{title || 'Total Assistants'}</div>
      <DbstatvaluecontainItem300
        divText={divText || '12'}
        src={
          src ||
          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        divText1={divText1 || '+33%'}
      />
    </div>
  );
};

export default DbstatcardleftItem302;
