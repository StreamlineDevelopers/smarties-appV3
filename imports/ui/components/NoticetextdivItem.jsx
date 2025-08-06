import React from 'react';
import NoticeactionlinkItem from './NoticeactionlinkItem';

const NoticetextdivItem = ({ label, divText }) => {
  return (
    <div className={'notice-textdiv'}>
      <div className={'form-label notice-yellow'}>
        {label || 'No Webhook available'}
      </div>
      <div className={'notice-text'}>
        {divText ||
          'Create a webhook to receive real-time updates about call events.'}
      </div>
      <NoticeactionlinkItem />
    </div>
  );
};

export default NoticetextdivItem;
