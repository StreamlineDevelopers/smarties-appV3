import React from 'react';
import SwitchdivItem from './SwitchdivItem';

const DistributiondivrightItem = ({ divText }) => {
  return (
    <div className="distribution-divright">
      <div className="distribution-reach">{divText || '2.3M'}</div>
      <SwitchdivItem />
    </div>
  );
};

export default DistributiondivrightItem;
