import React from 'react';
import MaincontentLayout from '../components/MaincontentLayout';
import SidebarLayout from '../components/SidebarLayout';
import TopbarLayout from '../components/TopbarLayout';

const Account = () => {
  return (
    <>
      <div className="page-wrap">
        <MaincontentLayout />
        <SidebarLayout />
        <TopbarLayout />
      </div>
    </>
  );
};

export default Account;
