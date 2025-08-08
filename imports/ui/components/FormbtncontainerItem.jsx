import React from 'react';
import Btnstyle1Item65 from './Btnstyle1Item65';
import Btnstyle1Item66 from './Btnstyle1Item66';

const FormbtncontainerItem = ({ handleSubmit = () => { }, handleCancel = () => { } }) => {
  return (
    <div className={'form-btn-container'}>
      <Btnstyle1Item65 handleCancel={handleCancel} />
      <Btnstyle1Item66 handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormbtncontainerItem;
