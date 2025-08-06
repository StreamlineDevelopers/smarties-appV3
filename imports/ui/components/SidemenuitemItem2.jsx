import React from 'react';
import SvgiconItem from './SvgiconItem';

const SidemenuitemItem2 = ({ href, iconSrc, divText }) => {
  return (
    <a
      href={href || '../journey/convert-buyers.html'}
      className={'sidemenu-item w-inline-block'}
    >
      <SvgiconItem
        iconSrc={'/svgs/icon-f54e204991b7cae82451cb9895d0558b.svg'}
      />
      <div>{divText || 'Convert Buyers'}</div>
    </a>
  );
};

export default SidemenuitemItem2;
