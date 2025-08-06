import React from 'react';
import SmartassitanttagItem from './SmartassitanttagItem';

const DraftsitemtopItem = ({ title }) => {
  return (
    <div className={'drafts-item-top'}>
      <div className={'db-card-title'}>
        {title || 'The Future of AI in Marketing'}
      </div>
      <SmartassitanttagItem />
    </div>
  );
};

export default DraftsitemtopItem;
