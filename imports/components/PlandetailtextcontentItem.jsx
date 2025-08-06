import React from 'react';

const PlandetailtextcontentItem = ({ title, description }) => {
  return (
    <div className="plandetail-textcontent">
      <div className="plandetail-item-title">
        {title || 'Social content + buzz generation'}
      </div>
      <div className="plandetail-item-description">
        {description || 'Automatically generate blogs around trending topics'}
      </div>
    </div>
  );
};

export default PlandetailtextcontentItem;
