import React from 'react';

const DbquickactiontextcontentItem = ({ title, divText }) => {
  return (
    <div className="db-quickaction-textcontent">
      <div className="insights-title">{title || 'Volume Leveling'}</div>
      <div className="insights-subtext">
        {divText ||
          'Applied automatic volume normalization for consistent levels.'}
      </div>
    </div>
  );
};

export default DbquickactiontextcontentItem;
