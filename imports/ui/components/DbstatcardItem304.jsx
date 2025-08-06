import React from 'react';
import DbstatcardleftItem302 from './DbstatcardleftItem302';

const DbstatcardItem304 = ({ title, divText, src, divText1 }) => {
  return (
    <div className="db-stat-card">
      <DbstatcardleftItem302
        title={title || 'Total Assistants'}
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

export default DbstatcardItem304;
