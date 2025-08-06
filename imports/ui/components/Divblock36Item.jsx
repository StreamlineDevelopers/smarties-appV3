import React from 'react';

const Divblock36Item = ({ src, divText }) => {
  return (
    <div className={'div-block-36'}>
      <div className={'history-avatar'}>
        <img
          loading={'lazy'}
          src={src || 'images/smarties-bot-avatar.svg'}
          alt={''}
        />
      </div>
      <div>{divText || 'Handled by Bot'}</div>
    </div>
  );
};

export default Divblock36Item;
