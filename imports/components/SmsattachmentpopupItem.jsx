import React from 'react';
import SmsattachmentpopupheaderItem from './SmsattachmentpopupheaderItem';
import ReusableItem350 from './ReusableItem350';

const SmsattachmentpopupItem = ({ header }) => {
  return (
    <div className="sms-attachment-popup">
      <SmsattachmentpopupheaderItem header={header || 'SampleFilename.jpg'} />
      <ReusableItem350 />
    </div>
  );
};

export default SmsattachmentpopupItem;
