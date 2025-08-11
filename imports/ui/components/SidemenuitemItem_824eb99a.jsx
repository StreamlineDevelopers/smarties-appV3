import React from 'react';
import SvgiconItem from './SvgiconItem';

const SidemenuitemItem_824eb99a = ({ href, iconSrc, divText }) => {
  return (
    <a
      href={href || '../journey/buzz-builder-hub.html'}
      className={'sidemenu-item w-inline-block'}
    >
      <SvgiconItem
        iconSrc={'/svgs/icon-72a5605a634239d347fe5da1a4ed975e.svg'}
      />
      <div>{divText || 'Buzz Builder'}</div>
    </a>
  );
};

export default SidemenuitemItem_824eb99a;
