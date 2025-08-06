import React from 'react';
import SidebarsessionsummaryicondivItem from './SidebarsessionsummaryicondivItem';
import SidebarsessionsummarytextcontentItem from './SidebarsessionsummarytextcontentItem';

const SidebarsessionsummarycolItem = ({
  src,
  width,
  height,
  divText,
  divText1,
}) => {
  return (
    <div className={'sidebar-sessionsummary-col'}>
      <SidebarsessionsummaryicondivItem
        src={'images/icon-park-outlinepage.svg'}
        width={'15'}
        height={'15'}
        divText={'5'}
      />
      <SidebarsessionsummarytextcontentItem divText={'Pages Visited'} />
    </div>
  );
};

export default SidebarsessionsummarycolItem;
