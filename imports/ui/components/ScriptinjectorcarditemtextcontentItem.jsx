import React from 'react';

const ScriptinjectorcarditemtextcontentItem = ({ title, description }) => {
  return (
    <div className="scriptinjector-card-item-textcontent">
      <div className="scriptinjector-title">
        {title || 'Subscription Troubleshooting'}
      </div>
      <div className="scriptinjector-description">
        {description ||
          'Guide the customer through subscription issues and billing problems'}
      </div>
    </div>
  );
};

export default ScriptinjectorcarditemtextcontentItem;
