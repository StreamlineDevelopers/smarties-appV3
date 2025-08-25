import React from 'react';

// Component: InboxitemItem
// Type: repetition
// Props: []

const InboxitemItem = ({ name, onClick = () => { } }) => {
  return (
    <a href="#" className="inbox-item w-inline-block" onClick={onClick}>
      <div>{name}</div>
    </a>
  );
};

export default InboxitemItem;