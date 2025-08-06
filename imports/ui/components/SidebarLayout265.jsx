import React from 'react';
import SidemenulabeldivItem from './SidemenulabeldivItem';
import SidemenuitemItem134 from './SidemenuitemItem134';
import SidemenuitemItem127 from './SidemenuitemItem127';
import SidemenuitemItem132 from './SidemenuitemItem132';
import SidemenuitemItem257 from './SidemenuitemItem257';
import SvgiconItem from './SvgiconItem';

const SidebarLayout265 = ({}) => {
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
          src={'images/smarties_logo-temp-330.svg'}
          loading={'lazy'}
          className={'smarties_logo-arvin-1'}
        />
      </div>
      <div className={'sidemenu-list'}>
        <div className={'sidemenu-top'}>
          <SidemenulabeldivItem label={'OVERVIEW'} />
          <a
            href={'index.html'}
            aria-current={'page'}
            className={'sidemenu-item w-inline-block w--current'}
          >
            <div className={'svg-icon w-embed'}>
              <img
                src="/svgs/icon-b602823cec649eccfbef37a946354cf6.svg"
                alt="icon"
              />
            </div>
            <div>Dashboard</div>
          </a>
          <SidemenuitemItem134
            href={'messaging.html'}
            iconSrc={'/svgs/icon-9dc01055fe8eb33ef2ff434eb4cbc374.svg'}
            divText={'Messaging'}
          />
          <a href={'contacts.html'} className={'sidemenu-item w-inline-block'}>
            <div className={'svg-icon w-embed'}>
              <img
                src="/svgs/icon-cb6672b564241448dbc26150daf35baa.svg"
                alt="icon"
              />
            </div>
            <div>Contacts</div>
          </a>
          <SidemenulabeldivItem label={'Journey'} />
          <SidemenuitemItem127
            href={'journey/dashboard.html'}
            iconSrc={'/svgs/icon-b9fd28ccaea912381c112e174d8aae36.svg'}
            divText={'Journey Dashboard'}
          />
          <SidemenuitemItem127
            href={'journey/buzz-builder-hub.html'}
            iconSrc={'/svgs/icon-72a5605a634239d347fe5da1a4ed975e.svg'}
            divText={'Buzz Builder'}
          />
          <SidemenuitemItem127
            href={'journey/attract-shoppers.html'}
            iconSrc={'/svgs/icon-94a3ce58b5b5928d0d3b3d148ea99346.svg'}
            divText={'Attract Shoppers'}
          />
          <SidemenuitemItem132
            href={'journey/convert-buyers.html'}
            iconSrc={'/svgs/icon-f54e204991b7cae82451cb9895d0558b.svg'}
            divText={'Convert Buyers'}
          />
          <SidemenuitemItem132
            href={'journey/build-loyalty.html'}
            iconSrc={'/svgs/icon-b74c42fbb80e694f54992551fd026fb0.svg'}
            divText={'Build Loyalty'}
          />
          <SidemenuitemItem127
            href={'journey/content-library.html'}
            iconSrc={'/svgs/icon-83ca8a820cc182c3b16e5a34c6f4547e.svg'}
            divText={'Content Library'}
          />
          <SidemenuitemItem127
            href={'journey/objection-feed.html'}
            iconSrc={'/svgs/icon-55a0c952bad598fa64fa3010ca915fb9.svg'}
            divText={'Objection Feed'}
          />
          <SidemenuitemItem132
            href={'journey/customer-memory-center.html'}
            iconSrc={'/svgs/icon-d5a87a141198ec42c06725723429bc68.svg'}
            divText={'Memory Center'}
          />
          <SidemenulabeldivItem label={'Settings'} />
          <SidemenuitemItem132
            href={'settings/account.html'}
            iconSrc={'/svgs/icon-b32ebd4ae532dddc71c5ba7eede2b33a.svg'}
            divText={'Account'}
          />
          <SidemenuitemItem257
            href={'settings/billing.html'}
            iconSrc={'/svgs/icon-2d624bd41f587d98f432daa0e58f48b7.svg'}
            divText={'Billing'}
          />
          <SidemenuitemItem134
            href={'settings/assistant.html'}
            iconSrc={'/svgs/icon-09d5ec220bb549a8463778f27badb9d0.svg'}
            divText={'Assistant'}
          />
          <SidemenuitemItem127
            href={'settings/phone-numbers.html'}
            iconSrc={'/svgs/icon-ae40fea1a29acf51ebfc97d9536f0215.svg'}
            divText={'Phone Numbers'}
          />
          <SidemenuitemItem132
            href={'settings/tools.html'}
            iconSrc={'/svgs/icon-e7c4528a40f29e099a5904b8cf50e73c.svg'}
            divText={'Tools'}
          />
          <SidemenuitemItem257
            href={'settings/files.html'}
            iconSrc={'/svgs/icon-da8b9696780e76f39e8b999f2300ae45.svg'}
            divText={'Files'}
          />
          <a
            href={'settings/knowledge-base.html'}
            className={'sidemenu-item w-inline-block'}
          >
            <div className={'svg-icon w-embed'}>
              <img
                src="/svgs/icon-9fbe023ef63be187fe549393d8018a40.svg"
                alt="icon"
              />
            </div>
            <div>Knowledge Base</div>
          </a>
          <a
            href={'settings/widget-configuration.html'}
            className={'sidemenu-item w-inline-block'}
          >
            <div className={'svg-icon w-embed'}>
              <img
                src="/svgs/icon-69b78a4b99c7e7dcad802c703a166d7b.svg"
                alt="icon"
              />
            </div>
            <div>Widget Configuration</div>
          </a>
          <SidemenuitemItem127
            href={'settings/data-enrichment.html'}
            iconSrc={'/svgs/icon-6063f990f9ac6ea3b02ad55e457d2417.svg'}
            divText={'Data Enrichment'}
          />
        </div>
        <div className={'sidemenu-bot'}>
          <a
            href={'login.html'}
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

export default SidebarLayout265;
