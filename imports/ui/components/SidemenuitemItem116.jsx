import React from 'react';

const SidemenuitemItem116 = ({ href, iconSrc, divText }) => {
  return (
    <a href={href || 'index.html'} className={'sidemenu-item w-inline-block'}>
      <div className={'svg-icon w-embed'}>
        <img src={iconSrc} alt="icon" />
      </div>
      <div>{divText || 'Dashboard'}</div>
    </a>
  );
};

export default SidemenuitemItem116;
