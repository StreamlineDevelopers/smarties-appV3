import React from 'react';
import DbstattagItem_72f38d0d from './DbstattagItem_72f38d0d';

const DbstatvaluecontainItem_014d62a1 = ({ divText, src, divText1 }) => {
  return (
    <div className={'db-stat-value-contain'}>
      <div className={'stat-value'}>{divText || '12'}</div>
      <DbstattagItem_72f38d0d
        src={
          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        divText={'+33%'}
      />
    </div>
  );
};

export default DbstatvaluecontainItem_014d62a1;
