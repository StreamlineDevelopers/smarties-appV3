import React from 'react';
import DurationdivItem from './DurationdivItem';

const ConvoinbounddurationItem = ({ dataWId, divText }) => {
  return (
    <div className="convo-inbound-duration">
      <DurationdivItem
        dataWId={dataWId || 'd2601b0f-93ed-ec78-d431-297ce3d04872'}
        divText={divText || '10:30 AM'}
      />
    </div>
  );
};

export default ConvoinbounddurationItem;
