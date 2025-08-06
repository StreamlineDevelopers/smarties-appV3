import React from 'react';

const DbstattagItem169 = ({ src, divText }) => {
  return (
    <div className={'db-stat-tag'}>
      <img
        src={
          src ||
          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        loading={'lazy'}
        width={'7'}
        height={'5'}
        alt={''}
        className={'db-stat-tag-chevron'}
      />
      <div className={'db-stat-percent'}>{divText || '2.4%'}</div>
    </div>
  );
};

export default DbstattagItem169;
