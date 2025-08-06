import React from 'react';
import FileattachmentitemtextcontentItem from './FileattachmentitemtextcontentItem';

const FileattachmentitemItem = ({ props }) => {
  return (
    <div className="fileattachment-item">
      <div className="fileattachment-item-icon">
        <img
          src="images/Frame_1.svg"
          loading="lazy"
          width="20"
          height="20"
          alt=""
        />
      </div>
      <FileattachmentitemtextcontentItem />
    </div>
  );
};

export default FileattachmentitemItem;
