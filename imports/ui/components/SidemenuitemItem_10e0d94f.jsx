import React from 'react';
import SvgiconItem from './SvgiconItem';

const SidemenuitemItem_10e0d94f = ({ href, iconSrc, divText }) => {
  return (
    <a
      href={href || '../journey/build-loyalty.html'}
      className={'sidemenu-item w-inline-block'}
    >
      <SvgiconItem
        iconSrc={'/svgs/icon-b74c42fbb80e694f54992551fd026fb0.svg'}
      />
      <div>{divText || 'Build Loyalty'}</div>
    </a>
  );
};

export default SidemenuitemItem_10e0d94f;
