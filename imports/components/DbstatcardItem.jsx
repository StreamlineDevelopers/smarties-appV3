import React from 'react';
import DbstatcardleftItem from './DbstatcardleftItem';

const DbstatcardItem = ({ title, divText }) => {
  return (
    <div className="db-stat-card leadinfo">
      <DbstatcardleftItem
        title={title || 'Lead Time'}
        divText={divText || '12m 45s'}
      />
    </div>
  );
};

export default DbstatcardItem;
