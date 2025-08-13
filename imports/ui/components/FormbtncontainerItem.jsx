import React from 'react';
import Btnstyle1Item_9db8e4f6 from './Btnstyle1Item_9db8e4f6';
import Btnstyle1Item_b5ebc500 from './Btnstyle1Item_b5ebc500';

const FormbtncontainerItem = ({ handleSubmit = () => { }, handleCancel = () => { } }) => {
  return (
    <div className={'form-btn-container'}>
      <Btnstyle1Item_9db8e4f6 handleCancel={handleCancel} />
      <Btnstyle1Item_b5ebc500 handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormbtncontainerItem;
