import React from 'react';
import DbstattagItem259 from './DbstattagItem259';

const DbstatvaluecontainItem = ({ divText, src, divText1 }) => {
  return (
    <div className="db-stat-value-contain">
      <div className="stat-value">{divText || '38.2%'}</div>
      <DbstattagItem259
        src={
          src ||
          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        divText={divText1 || '5.3%'}
      />
    </div>
  );
};

export default DbstatvaluecontainItem;
