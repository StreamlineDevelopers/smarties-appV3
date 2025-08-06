import React from 'react';
import FileitemleftItem from './FileitemleftItem';
import PropertyitemrightItem from './PropertyitemrightItem';

const FileitemItem = ({ props }) => {
  return (
    <div className="file-item">
      <FileitemleftItem />
      <PropertyitemrightItem />
    </div>
  );
};

export default FileitemItem;
