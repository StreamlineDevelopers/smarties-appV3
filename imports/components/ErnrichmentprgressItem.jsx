import React from 'react';
import PercentagebarItem from './PercentagebarItem';

const ErnrichmentprgressItem = ({ props }) => {
  return (
    <div className="ernrichment-prgress">
      <PercentagebarItem />
      <div>92% confidence</div>
    </div>
  );
};

export default ErnrichmentprgressItem;
