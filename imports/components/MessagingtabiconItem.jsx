import React from 'react';
import ReusableItem103 from './ReusableItem103';

const MessagingtabiconItem = ({
  width,
  height,
  viewbox,
  d,
  stroke,
  strokeWidth,
}) => {
  return (
    <div className="messaging-tab-icon">
      <div className="code-embed w-embed">
        <ReusableItem103
          width={width || '15'}
          height={height || '14'}
          viewbox={viewbox || '0 0 15 14'}
          d={
            d ||
            'M11.2087 12.25V11.0833C11.2087 10.4645 10.9628 9.871 10.5252 9.43342C10.0877 8.99583 9.49416 8.75 8.87533 8.75H5.37533C4.75649 8.75 4.16299 8.99583 3.72541 9.43342C3.28782 9.871 3.04199 10.4645 3.04199 11.0833V12.25M9.45866 4.08333C9.45866 5.372 8.41399 6.41667 7.12533 6.41667C5.83666 6.41667 4.79199 5.372 4.79199 4.08333C4.79199 2.79467 5.83666 1.75 7.12533 1.75C8.41399 1.75 9.45866 2.79467 9.45866 4.08333Z'
          }
          stroke={stroke || '#E14617'}
          strokeWidth={strokeWidth || '1.5'}
        />
      </div>
    </div>
  );
};

export default MessagingtabiconItem;
