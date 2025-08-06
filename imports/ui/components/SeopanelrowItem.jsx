import React from 'react';

const SeopanelrowItem = ({ label, divText }) => {
  return (
    <div className="seo-panel-row">
      <div className="seo-label">{label || 'Word Count'}</div>
      <div className="seo-value">{divText || '234 words'}</div>
    </div>
  );
};

export default SeopanelrowItem;
