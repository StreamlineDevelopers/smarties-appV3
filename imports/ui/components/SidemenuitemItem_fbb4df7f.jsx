import React from 'react';

const SidemenuitemItem_fbb4df7f = ({ href, iconSrc, divText }) => {
  return (
    <a href={href || 'index.html'} className={'sidemenu-item w-inline-block'}>
      <div className={'svg-icon w-embed'}>
        <img src={iconSrc} alt="icon" />
      </div>
      <div>{divText || 'Dashboard'}</div>
    </a>
  );
};

export default SidemenuitemItem_fbb4df7f;
