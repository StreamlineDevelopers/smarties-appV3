import React from 'react';

const ObjectionsresponsecardbodyItem = ({ divText }) => {
  return (
    <div className="objections-response-card-body">
      <div className="objections-response-body-text">
        {divText ||
          'Thanks for your interest! For a team of 15, you\'d be on our "Growth" plan at $29/user/month, which comes to $435 monthly or $4,350 annually (saving 17%). I\'d be happy to set up a quick call to walk through all included features and any available discounts for your specific needs!'}
      </div>
    </div>
  );
};

export default ObjectionsresponsecardbodyItem;
