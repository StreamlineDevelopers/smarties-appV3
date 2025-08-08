import React from 'react';
import { NavLink } from 'react-router-dom';

const SidemenuitemItem = ({ href, iconSrc, divText }) => {
  return (
    <NavLink
      to={href || '../index.html'}
      className={({ isActive }) => `sidemenu-item w-inline-block ${isActive ? 'w--current' : ''}`}
    >
      <div className={'svg-icon w-embed'}>
        <img src={iconSrc} alt="icon" />
      </div>
      <div>{divText || 'Dashboard'}</div>
    </NavLink>
  );
};

export default SidemenuitemItem;
