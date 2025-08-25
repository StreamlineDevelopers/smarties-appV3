import React, { useEffect, useRef } from 'react';
import SidemenulabeldivItem from './SidemenulabeldivItem';
import SidemenuitemItem from './SidemenuitemItem';
import { SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import Client from '../../api/client/Client';
import BillingWatcher from '../../api/client/watchers/BillingWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import Loader from './common/Loader';
import { useFlag } from '@unleash/proxy-client-react';

// Component: SidebarLayout
// Type: layout
// Props: ["children"]

const SidebarLayout = ({ children }) => {
  const watcher = useRef(BillingWatcher).current;
  useWatcher(watcher);
  const subscriptionDetails = watcher.getValue("subscriptionDetails");
  const isPhoneNumbersEnabled = useFlag("phoneNumbersPageAccess");

  return (
    <div id="w-node-edbe388e-240d-0040-7eab-254b51f0ea15-51f0ea15" className="sidebar">
      <div className="logo-div"><img width="200.4666748046875" height="31" alt="" src="../images/smarties_logo-temp-330.svg" loading="lazy" className="smarties_logo-arvin-1" /></div>
      <div className="sidemenu-list">
        <div className="sidemenu-top">
          <SidemenulabeldivItem textDiv="OVERVIEW" />
          {SIDEBARTOP_OVERVIEW.map((item, index) => (
            <SidemenuitemItem key={index} name={item.name} icon={item.icon} />
          ))}
          <SidemenulabeldivItem textDiv="Settings" />
          {SIDEBARTOP_SETTINGS.map((item, index) => {
            const disabledPaths = ["/phone-numbers"];
            const shouldDisable = subscriptionDetails == undefined ? true : !isPhoneNumbersEnabled && disabledPaths.includes(item.path);

            return (
              <SidemenuitemItem key={index} name={item.name} icon={item.icon} path={item.path} disabled={shouldDisable} />
            );
          })}
        </div>
        <div className="sidemenu-bot">
          <button aria-current="page" className={`sidemenu-item w-inline-block`} onClick={() => {
            Client.SignOut();
          }} >
            <img src="../images/smarties-icon-signout.svg" className="svg-icon w-embed" />
            <div>Sign out</div>
          </button>
        </div>
      </div>

    </div>
  );
};

export default SidebarLayout;