import React from 'react';
import { NavLink } from 'react-router-dom';
// Component: SidemenuitemItem
// Type: repetition
// Props: ["href","d","textDiv"]

const SidemenuitemItem = ({ name = "dashboard", path = "/", icon = 'images/smarties-icon-dashboard.svg', disabled = false }) => {
  // if (disabled && name != "Billing") {
  //   return (
  //     <div className="sidemenu-item w-inline-block" style={{ pointerEvents: 'none', opacity: 0.5, cursor: 'not-allowed', display: 'flex', alignItems: 'center' }}>
  //       <img src={icon} className="svg-icon w-embed" />
  //       <div>{name}</div>
  //       <img src="images/smarties-lock.svg" alt="Locked" style={{ width: 16, height: 16, marginLeft: 4 }} />
  //     </div>
  //   );
  // }
  return (
    <NavLink to={path} aria-current="page" className={({ isActive }) => `sidemenu-item w-inline-block ${isActive ? 'w--current' : ''}`} >
      <img src={icon} className="svg-icon w-embed" />
      <div>{name}</div>
    </NavLink>
  );
};

export default SidemenuitemItem;