import React from 'react';

const SidebarhddivItem = ({ divText }) => {
  return (
    <div className="sidebar-hd-div">
      <div className="messaging-sidebar-h2">{divText || 'Tags'}</div>
    </div>
  );
};

export default SidebarhddivItem;
