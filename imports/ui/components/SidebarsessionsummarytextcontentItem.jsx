import React from 'react';

const SidebarsessionsummarytextcontentItem = ({ divText }) => {
  return (
    <div className={'sidebar-sessionsummary-textcontent'}>
      <div>{divText || 'Pages Visited'}</div>
    </div>
  );
};

export default SidebarsessionsummarytextcontentItem;
