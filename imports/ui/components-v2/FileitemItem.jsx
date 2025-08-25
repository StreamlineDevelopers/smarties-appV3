import React from 'react';

// Component: FileitemItem
// Type: repetition
// Props: []

const FileitemItem = ({ name = 'Sample.txt' }) => {
  return (
    <div className="file-item"><div className="file-item-left"><div className="table-fileicon"><img src="../images/smarties-file-dark.svg" loading="lazy" alt="" /></div><div className="table-doctitle-text">{name}</div></div><div className="property-item-right"><div className="property-icon"><img loading="lazy" src="../images/Download.svg" alt="" /></div></div></div>
  );
};

export default FileitemItem;