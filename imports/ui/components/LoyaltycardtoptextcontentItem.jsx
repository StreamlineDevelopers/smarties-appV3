import React from 'react';

const LoyaltycardtoptextcontentItem = ({ divText, divText1 }) => {
  return (
    <div className="loyalty-card-top-textcontent">
      <div className="loyalty-card-tiertext">{divText || 'Bronze Tier'}</div>
      <div className="loyalty-card-level-text">{divText1 || 'Entry level'}</div>
    </div>
  );
};

export default LoyaltycardtoptextcontentItem;
