import React from 'react';

const DbstatcardleftItem205 = ({ title, divText }) => {
  return (
    <div className={'db-stat-card-left'}>
      <div className={'stat-title small'}>{title || 'Lifetime Value'}</div>
      <div className={'stat-value smaller'}>{divText || '$1,450'}</div>
    </div>
  );
};

export default DbstatcardleftItem205;
