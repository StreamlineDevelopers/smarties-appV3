import React from 'react';
import SvgiconItem from './SvgiconItem';

const SidemenuitemItem1 = ({ href, iconSrc, divText }) => {
  return (
    <a
      href={href || '../journey/dashboard.html'}
      className={'sidemenu-item w-inline-block'}
    >
      <SvgiconItem
        iconSrc={'/svgs/icon-b9fd28ccaea912381c112e174d8aae36.svg'}
      />
      <div>{divText || 'Journey Dashboard'}</div>
    </a>
  );
};

export default SidemenuitemItem1;
