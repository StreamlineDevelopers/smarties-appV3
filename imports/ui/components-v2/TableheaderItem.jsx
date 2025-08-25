import React from 'react';

// Component: TableheaderItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const TableheaderItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="table-header"><div className="table-cell-div stretch"><div className="table-date-text">Name</div></div><div className="table-cell-div stretch"><div className="table-date-text">{textDiv || 'ID'}</div></div><div className="table-cell-div stretch"><div className="table-date-text">{textDiv1 || 'Date Created'}</div></div><div className="table-cell-div _w-5"></div></div>
  );
};

export default TableheaderItem;