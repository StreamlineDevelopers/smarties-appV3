import React from 'react';
import EngagementvaluecontainerItem from './EngagementvaluecontainerItem';

const EngagementcontainerItem = ({ src, divText }) => {
  return (
    <div className={'engagement-container'}>
      <div className={'engagement-label'}>{'Predicted Engagement:'}</div>
      <EngagementvaluecontainerItem
        src={'../images/mdiflame.svg'}
        divText={'91'}
      />
    </div>
  );
};

export default EngagementcontainerItem;
