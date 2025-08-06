import React from 'react';
import NoticetextdivItem from './NoticetextdivItem';

const NoticedivItem = ({ label, divText }) => {
  return (
    <div className="notice-div">
      <div className="notice-icon">
        <img loading="lazy" src="../images/smarties-alert-circle.svg" alt="" />
      </div>
      <NoticetextdivItem
        label={label || 'No Webhook available'}
        divText={
          divText ||
          'Create a webhook to receive real-time updates about call events.'
        }
      />
    </div>
  );
};

export default NoticedivItem;
