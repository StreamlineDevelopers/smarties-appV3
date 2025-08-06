import React from 'react';

const ListitemassistantItem = ({ divText }) => {
  return (
    <div className="list-item-assistant">
      <div>{divText || 'Assistant 2'}</div>
    </div>
  );
};

export default ListitemassistantItem;
