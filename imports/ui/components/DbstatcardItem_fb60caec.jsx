import React from 'react';
import DbstatcardleftItem_19af86ef from './DbstatcardleftItem_19af86ef';

const DbstatcardItem_fb60caec = ({ title, divText, src, divText1 }) => {
  return (
    <div className={'db-stat-card'}>
      <DbstatcardleftItem_19af86ef
        title={title || 'Engagement Rate'}
        divText={divText || '38.2%'}
        src={
          src || 'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
        }
        divText1={divText1 || '5.3%'}
      />
    </div>
  );
};

export default DbstatcardItem_fb60caec;
