import React from 'react';

const DocumentfilenamecontainerItem = ({ title }) => {
  return (
    <div className="documentfilename_container">
      <div className="convo-fileattachment-title">{title || 'sample.txt'}</div>
    </div>
  );
};

export default DocumentfilenamecontainerItem;
