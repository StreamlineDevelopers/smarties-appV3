import React from 'react';
import DocumentfilenamecontainerItem from './DocumentfilenamecontainerItem';

const DocumentattachmentleftItem = ({ src, title }) => {
  return (
    <div className="document-attachment_left">
      <div className="document-icon">
        <img
          loading="lazy"
          src={src || 'images/smarties-icon-asset2.svg'}
          alt=""
        />
      </div>
      <DocumentfilenamecontainerItem title={title || 'sample.txt'} />
    </div>
  );
};

export default DocumentattachmentleftItem;
