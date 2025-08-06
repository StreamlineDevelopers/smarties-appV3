import React from 'react';
import DbstatvaluecontainItem258 from './DbstatvaluecontainItem258';

const DbstatcardleftItem260 = ({ title, divText, src, divText1 }) => {
  return (
    <div className={'db-stat-card-left'}>
      <div className={'stat-title'}>{title || 'Total Assistants'}</div>
      <DbstatvaluecontainItem258
        divText={'12'}
        src={
          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        divText1={'+33%'}
      />
    </div>
  );
};

export default DbstatcardleftItem260;
