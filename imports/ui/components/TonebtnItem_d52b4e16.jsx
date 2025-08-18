import React from 'react';

const TonebtnItem_d52b4e16 = ({ divText, isActive = false, onClick = () => { } }) => {
  return (
    <div className={`tone-btn ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div>{divText || 'Published'}</div>
    </div>
  );
};

export default TonebtnItem_d52b4e16;
