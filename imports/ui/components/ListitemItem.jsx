import React from 'react';

const ListitemItem = ({ divText }) => {
  return (
    <li className="list-item">
      <div className="notice-text">
        {divText || 'Speak clearly and at a normal pace'}
      </div>
    </li>
  );
};

export default ListitemItem;
