import React from 'react';
import SmsattachmentpopupheaderItem from './SmsattachmentpopupheaderItem';
import ReusableItem_c73a7407 from './ReusableItem_c73a7407';

const SmsattachmentpopupItem = ({ header }) => {
  return (
    <div className={'sms-attachment-popup'}>
      <SmsattachmentpopupheaderItem header={'SampleFilename.jpg'} />
      <ReusableItem_c73a7407 />
    </div>
  );
};

export default SmsattachmentpopupItem;
