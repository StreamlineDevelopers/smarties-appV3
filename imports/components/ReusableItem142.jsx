import React from 'react';
import ReusableItem104 from './ReusableItem104';
import ReusableItem115 from './ReusableItem115';

const ReusableItem142 = ({ clipPath, d, id, transform }) => {
  return (
    <svg
      width="15"
      height="14"
      viewbox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ReusableItem104
        clipPath={clipPath || 'url(#clip0_2400_1989)'}
        d={
          d ||
          'M7.37533 3.50008V7.00008L9.70866 8.16675M13.2087 7.00008C13.2087 10.2217 10.597 12.8334 7.37533 12.8334C4.15366 12.8334 1.54199 10.2217 1.54199 7.00008C1.54199 3.77842 4.15366 1.16675 7.37533 1.16675C10.597 1.16675 13.2087 3.77842 13.2087 7.00008Z'
        }
      />
      <ReusableItem115
        id={id || 'clip0_2400_1989'}
        transform={transform || 'translate(0.375)'}
      />
    </svg>
  );
};

export default ReusableItem142;
