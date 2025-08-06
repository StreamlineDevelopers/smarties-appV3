import React from 'react';

const FavoriteembedItem = ({ iconSrc }) => {
  return (
    <div className={'favorite-embed w-embed'}>
      <img src={iconSrc} alt="icon" />
    </div>
  );
};

export default FavoriteembedItem;
