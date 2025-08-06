import React from 'react';
import IconembedfavoritItem from './IconembedfavoritItem';

const DraftsitemtopItem99 = ({ strongText }) => {
  return (
    <div className="drafts-item-top">
      <div className="uploadeditem-filesize">
        <strong>{strongText || 'Blog Post Idea'}</strong>
      </div>
      <IconembedfavoritItem />
    </div>
  );
};

export default DraftsitemtopItem99;
