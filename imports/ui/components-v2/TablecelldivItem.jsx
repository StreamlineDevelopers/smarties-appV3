import React from 'react';

// Component: TablecelldivItem
// Type: repetition
// Props: ["textDiv"]

const TablecelldivItem = ({ textDiv}) => {
  return (
    <div className="table-cell-div stretch"><div className="table-date-text">{textDiv || 'Date'}</div></div>
  );
};

export default TablecelldivItem;