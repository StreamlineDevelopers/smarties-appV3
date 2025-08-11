import React from 'react';
import DraftsitemtopItem_016b4c46 from './DraftsitemtopItem_016b4c46';

const SuggestedideasitemItem = ({ strongText, title, aText }) => {
  return (
    <div className={'suggestedideas-item'}>
      <DraftsitemtopItem_016b4c46 strongText={'Blog Post Idea'} />
      <div className={'db-card-title'}>
        {title || '"7 Ways Retail Brands Can Leverage AI in 2025”'}
      </div>
      <a href={'#'} className={'link-brown'}>
        {aText || 'Use Idea'}
      </a>
    </div>
  );
};

export default SuggestedideasitemItem;
