import React from 'react';

const TonebtnItem = ({ divText }) => {
  return (
    <div className={'tone-btn'}>
      <div>{divText || 'Informative'}</div>
    </div>
  );
};

export default TonebtnItem;
