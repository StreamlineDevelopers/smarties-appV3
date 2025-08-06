import React from 'react';

const DbtrendingtopichdItem = ({ src, divText }) => {
  return (
    <div className={'db-trendingtopic-hd'}>
      <div className={'db-topic-icon'}>
        <img
          src={src || '../images/smarties-icon-dailytrend.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || 'Daily Trends'}</div>
    </div>
  );
};

export default DbtrendingtopichdItem;
