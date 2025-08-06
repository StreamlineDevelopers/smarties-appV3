import React from 'react';
import DbstatcardleftItem223 from './DbstatcardleftItem223';

const DbstatcardItem225 = ({ title, divText, src, divText1 }) => {
  return (
    <div className={'db-stat-card'}>
      <DbstatcardleftItem223
        title={'Engagement Rate'}
        divText={'38.2%'}
        src={
          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        divText1={'5.3%'}
      />
    </div>
  );
};

export default DbstatcardItem225;
