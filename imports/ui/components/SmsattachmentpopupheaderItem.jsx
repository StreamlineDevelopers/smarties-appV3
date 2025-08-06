import React from 'react';

const SmsattachmentpopupheaderItem = ({ header }) => {
  return (
    <div className="sms-attachment-popup_header">
      <p className="sms-attachment-popup_headertext">
        {header || 'SampleFilename.jpg'}
      </p>
    </div>
  );
};

export default SmsattachmentpopupheaderItem;
