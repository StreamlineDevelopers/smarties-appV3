import React from 'react';
import DraftsitemtopItem99 from './DraftsitemtopItem99';

const SuggestedideasitemItem = ({ strongText, title, aText }) => {
  return (
    <div className="suggestedideas-item">
      <DraftsitemtopItem99 strongText={strongText || 'Blog Post Idea'} />
      <div className="db-card-title">
        {title || '"7 Ways Retail Brands Can Leverage AI in 2025”'}
      </div>
      <a href="#" className="link-brown">
        {aText || 'Use Idea'}
      </a>
    </div>
  );
};

export default SuggestedideasitemItem;
