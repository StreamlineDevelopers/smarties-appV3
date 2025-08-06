import React from 'react';
import SmsattachmentpopupheaderItem from './SmsattachmentpopupheaderItem';
import ReusableItem306 from './ReusableItem306';

const SmsattachmentpopupItem = ({ header }) => {
  return (
    <div className={'sms-attachment-popup'}>
      <SmsattachmentpopupheaderItem header={'SampleFilename.jpg'} />
      <ReusableItem306 />
    </div>
  );
};

export default SmsattachmentpopupItem;
