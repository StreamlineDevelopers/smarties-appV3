import React from 'react';
import DbstatvaluecontainItem from './DbstatvaluecontainItem';

const DbstatcardleftItem_19af86ef = ({ title, divText, src, divText1 }) => {
  return (
    <div className={'db-stat-card-left'}>
      <div className={'stat-title'}>{title || 'Engagement Rate'}</div>
      <DbstatvaluecontainItem
        divText={divText}
        src={
          src
        }
        divText1={divText1}
      />
    </div>
  );
};

export default DbstatcardleftItem_19af86ef;
