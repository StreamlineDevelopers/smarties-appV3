import React from 'react';

// Component: PlandetailtextcontentItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const PlandetailtextcontentItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="plandetail-textcontent"><div className="plandetail-item-title">{textDiv || 'Social content + buzz generation'}</div><div className="plandetail-item-description">{textDiv1 || 'Automatically generate blogs around trending topics'}</div></div>
  );
};

export default PlandetailtextcontentItem;