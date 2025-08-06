import React from 'react';
import FileattachmentitemItem from './FileattachmentitemItem';

const FileattachmentgroupItem = ({ divText }) => {
  return (
    <div className={'fileattachment-group'}>
      <div className={'fileattachment-group-hd'}>
        {divText || 'From John Smith'}
      </div>
      <FileattachmentitemItem />
      <FileattachmentitemItem />
    </div>
  );
};

export default FileattachmentgroupItem;
