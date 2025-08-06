import React from 'react';
import FavoriteembedItem from './FavoriteembedItem';

const FavoriteembeddivItem = ({ iconSrc }) => {
  return (
    <div className={'favoriteembed-div'}>
      <FavoriteembedItem
        iconSrc={'/svgs/icon-e2716f5f18e642828d77ad0134559963.svg'}
      />
    </div>
  );
};

export default FavoriteembeddivItem;
