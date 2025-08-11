import React from 'react';
import Btnstyle1Item_60e3e2b9 from './Btnstyle1Item_60e3e2b9';
import Btnstyle1Item_1b562aaa from './Btnstyle1Item_1b562aaa';

const FormbtncontainerItem = ({ handleSubmit = () => { }, handleCancel = () => { } }) => {
  return (
    <div className={'form-btn-container'}>
      <Btnstyle1Item_60e3e2b9 handleCancel={handleCancel} />
      <Btnstyle1Item_1b562aaa handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormbtncontainerItem;
