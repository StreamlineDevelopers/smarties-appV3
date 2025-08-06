import React from 'react';
import SmsattachmentpopupItem from './SmsattachmentpopupItem';
import DocumentattachmentleftItem from './DocumentattachmentleftItem';
import DocumentdownloadItem from './DocumentdownloadItem';

const DocumentattachmentItem = ({ src, title }) => {
  return (
    <div className="document-attachment">
      <SmsattachmentpopupItem header="SampleFilename.mp4" />
      <DocumentattachmentleftItem
        src={src || 'images/smarties-icon-asset2.svg'}
        title={title || 'sample.txt'}
      />
      <DocumentdownloadItem />
    </div>
  );
};

export default DocumentattachmentItem;
