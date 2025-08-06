import React from 'react';

const SidemenuitemItem257 = ({ href, iconSrc, divText }) => {
  return (
    <a
      href={href || 'settings/billing.html'}
      className={'sidemenu-item w-inline-block'}
    >
      <div className={'svg-icon w-embed'}>
        <img src={iconSrc} alt="icon" />
      </div>
      <div>{divText || 'Billing'}</div>
    </a>
  );
};

export default SidemenuitemItem257;
