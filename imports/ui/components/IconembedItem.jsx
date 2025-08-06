import React from 'react';

const IconembedItem = ({ iconSrc }) => {
  return (
    <div className={'icon-embed w-embed'}>
      <img src={iconSrc} alt="icon" />
    </div>
  );
};

export default IconembedItem;
