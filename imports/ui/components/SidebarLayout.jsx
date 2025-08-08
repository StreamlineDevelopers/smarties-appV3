import React from 'react';
import SidemenulabeldivItem from './SidemenulabeldivItem';
import SidemenuitemItem from './SidemenuitemItem';
import SidemenuitemItem3 from './SidemenuitemItem3';
import SidemenuitemItem1 from './SidemenuitemItem1';
import SidemenuitemItem2 from './SidemenuitemItem2';
import SvgiconItem from './SvgiconItem';
import { SIDEBARTOP_JOURNEY, SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';

const SidebarLayout = ({ }) => {
  return (
    <div
      id={'w-node-edbe388e-240d-0040-7eab-254b51f0ea15-51f0ea15'}
      className={'sidebar'}
    >
      <div className={'logo-div'}>
        <img
          width={'200.4666748046875'}
          height={'31'}
          alt={''}
          src={'../images/smarties_logo-temp-330.svg'}
          loading={'lazy'}
          className={'smarties_logo-arvin-1'}
        />
      </div>
      <div className={'sidemenu-list'}>
        <div className={'sidemenu-top'}>
          <SidemenulabeldivItem label={'OVERVIEW'} />
          {SIDEBARTOP_OVERVIEW.map((item, index) => (
            <SidemenuitemItem
              key={index}
              href={item.path}
              iconSrc={item.icon}
              divText={item.name}
            />
          ))}
          <SidemenulabeldivItem label={'Journey'} />
          {SIDEBARTOP_JOURNEY.map((item, index) => (
            <SidemenuitemItem
              key={index}
              href={item.path}
              iconSrc={item.icon}
              divText={item.name}
            />
          ))}
          <SidemenulabeldivItem label={'Settings'} />
          {SIDEBARTOP_SETTINGS.map((item, index) => (
            <SidemenuitemItem
              key={index}
              href={item.path}
              iconSrc={item.icon}
              divText={item.name}
            />
          ))}
        </div>
        <div className={'sidemenu-bot'}>
          <a
            href={'../login.html'}
            className={'sidemenu-item signout w-inline-block'}
          >
            <SvgiconItem
              iconSrc={'/svgs/icon-984edc8262bc76223145b01156bcd0f1.svg'}
            />
            <div>Sign out</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
