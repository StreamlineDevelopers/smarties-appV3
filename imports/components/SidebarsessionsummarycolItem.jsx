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
    <div className="sidebar-sessionsummary-col">
      <SidebarsessionsummaryicondivItem
        src={src || 'images/icon-park-outlinepage.svg'}
        width={width || '15'}
        height={height || '15'}
        divText={divText || '5'}
      />
      <SidebarsessionsummarytextcontentItem
        divText={divText1 || 'Pages Visited'}
      />
    </div>
  );
};

export default SidebarsessionsummarycolItem;
