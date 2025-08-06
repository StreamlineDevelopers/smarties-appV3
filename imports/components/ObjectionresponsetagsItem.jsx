import React from 'react';

const ObjectionresponsetagsItem = ({ divText }) => {
  return (
    <div className="objection-response-tags">
      <div>{divText || 'Pricing'}</div>
    </div>
  );
};

export default ObjectionresponsetagsItem;
