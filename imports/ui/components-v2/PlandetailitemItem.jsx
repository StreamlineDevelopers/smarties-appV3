import React from 'react';

// Component: PlandetailitemItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const PlandetailitemItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="plandetail-item"><div className="plandetail-icon"><img src="https://cdn.prod.website-files.com/681a00468b98375f74c9201b/681df156a4287c3b2984d73c_icon-park-solid%3Acheck-one.svg" loading="lazy" width="21" height="21" alt="" className="icon-check" /></div><div className="plandetail-textcontent"><div className="plandetail-item-title">{textDiv || 'Social content + buzz generation'}</div><div className="plandetail-item-description">{textDiv1 || 'Automatically generate blogs around trending topics'}</div></div></div>
  );
};

export default PlandetailitemItem;