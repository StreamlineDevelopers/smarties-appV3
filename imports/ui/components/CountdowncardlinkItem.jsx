import React from 'react';

const CountdowncardlinkItem = ({ divText }) => {
  return (
    <a href={'#'} target={'_blank'} className={'countdown-card-link'}>
      <div className={'text-72'}>{divText || 'Edit'}</div>
    </a>
  );
};

export default CountdowncardlinkItem;
