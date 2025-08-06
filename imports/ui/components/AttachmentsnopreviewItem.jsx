import React from 'react';
import DocumentattachmentItem from './DocumentattachmentItem';

const AttachmentsnopreviewItem = ({ src, title }) => {
  return (
    <div className={'attachments-nopreview height-auto'}>
      <DocumentattachmentItem
        src={'images/smarties-icon-asset2.svg'}
        title={'sample.txt'}
      />
    </div>
  );
};

export default AttachmentsnopreviewItem;
