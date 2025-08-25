import React from 'react';

// Component: ListitemItem
// Type: repetition
// Props: ["textDiv"]

const ListitemItem = ({ textDiv }) => {
  return (
    <li className="list-item"><div className="notice-text">{textDiv || 'Speak clearly and at a normal pace'}</div></li>
  );
};

export default ListitemItem;