import React from 'react';
import DbstatcardleftItem260 from './DbstatcardleftItem260';

const DbstatcardItem262 = ({ title, divText, src, divText1 }) => {
  return (
    <div className={'db-stat-card'}>
      <DbstatcardleftItem260
        title={'Total Assistants'}
        divText={'12'}
        src={
          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        divText1={'+33%'}
      />
    </div>
  );
};

export default DbstatcardItem262;
