import React from 'react';
import SvgiconItem from './SvgiconItem';

const SidemenuitemItem134 = ({ href, iconSrc, divText }) => {
  return (
    <a
      href={href || 'messaging.html'}
      className={'sidemenu-item w-inline-block'}
    >
      <SvgiconItem
        iconSrc={'/svgs/icon-9dc01055fe8eb33ef2ff434eb4cbc374.svg'}
      />
      <div>{divText || 'Messaging'}</div>
    </a>
  );
};

export default SidemenuitemItem134;
