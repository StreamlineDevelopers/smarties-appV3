import React from 'react';

const SmsattachmentlinkItem = ({ src, divText }) => {
  return (
    <div className={'sms-attachment_link _2'}>
      <div className={'sms-attachment_icon _2'}>
        <img loading={'lazy'} src={src || 'images/attached_15.svg'} alt={''} />
      </div>
      <div>{divText || 'Info'}</div>
    </div>
  );
};

export default SmsattachmentlinkItem;
