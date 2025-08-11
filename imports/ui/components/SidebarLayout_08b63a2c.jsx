import React from 'react';
import SidemenulabeldivItem from './SidemenulabeldivItem';
import SidemenuitemItem_fbb4df7f from './SidemenuitemItem_fbb4df7f';
import SidemenuitemItem_9f13c2ff from './SidemenuitemItem_9f13c2ff';
import SidemenuitemItem_bd40fffe from './SidemenuitemItem_bd40fffe';
import SidemenuitemItem_e9726aa4 from './SidemenuitemItem_e9726aa4';
import SvgiconItem from './SvgiconItem';

const SidebarLayout_08b63a2c = ({}) => {
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
          <SidemenuitemItem_fbb4df7f
            href={'index.html'}
            iconSrc={'/svgs/icon-b602823cec649eccfbef37a946354cf6.svg'}
            divText={'Dashboard'}
          />
          <SidemenuitemItem_9f13c2ff
            href={'messaging.html'}
            iconSrc={'/svgs/icon-9dc01055fe8eb33ef2ff434eb4cbc374.svg'}
            divText={'Messaging'}
          />
          <a
            href={'contacts.html'}
            aria-current={'page'}
            className={'sidemenu-item w-inline-block w--current'}
          >
            <div className={'svg-icon w-embed'}>
              <img
                src="/public/svgs/icon-cb6672b564241448dbc26150daf35baa.svg"
                alt="icon"
              />
            </div>
            <div>Contacts</div>
          </a>
          <SidemenulabeldivItem label={'Journey'} />
          <SidemenuitemItem_bd40fffe
            href={'journey/dashboard.html'}
            iconSrc={'/svgs/icon-b9fd28ccaea912381c112e174d8aae36.svg'}
            divText={'Journey Dashboard'}
          />
          <SidemenuitemItem_bd40fffe
            href={'journey/buzz-builder-hub.html'}
            iconSrc={'/svgs/icon-72a5605a634239d347fe5da1a4ed975e.svg'}
            divText={'Buzz Builder'}
          />
          <SidemenuitemItem_bd40fffe
            href={'journey/attract-shoppers.html'}
            iconSrc={'/svgs/icon-94a3ce58b5b5928d0d3b3d148ea99346.svg'}
            divText={'Attract Shoppers'}
          />
          <SidemenuitemItem_e9726aa4
            href={'journey/convert-buyers.html'}
            iconSrc={'/svgs/icon-f54e204991b7cae82451cb9895d0558b.svg'}
            divText={'Convert Buyers'}
          />
          <SidemenuitemItem_e9726aa4
            href={'journey/build-loyalty.html'}
            iconSrc={'/svgs/icon-b74c42fbb80e694f54992551fd026fb0.svg'}
            divText={'Build Loyalty'}
          />
          <SidemenuitemItem_bd40fffe
            href={'journey/content-library.html'}
            iconSrc={'/svgs/icon-83ca8a820cc182c3b16e5a34c6f4547e.svg'}
            divText={'Content Library'}
          />
          <SidemenuitemItem_bd40fffe
            href={'journey/objection-feed.html'}
            iconSrc={'/svgs/icon-55a0c952bad598fa64fa3010ca915fb9.svg'}
            divText={'Objection Feed'}
          />
          <SidemenuitemItem_e9726aa4
            href={'journey/customer-memory-center.html'}
            iconSrc={'/svgs/icon-d5a87a141198ec42c06725723429bc68.svg'}
            divText={'Memory Center'}
          />
          <SidemenulabeldivItem label={'Settings'} />
          <SidemenuitemItem_e9726aa4
            href={'settings/account.html'}
            iconSrc={'/svgs/icon-b32ebd4ae532dddc71c5ba7eede2b33a.svg'}
            divText={'Account'}
          />
          <SidemenuitemItem_fbb4df7f
            href={'settings/billing.html'}
            iconSrc={'/svgs/icon-2d624bd41f587d98f432daa0e58f48b7.svg'}
            divText={'Billing'}
          />
          <SidemenuitemItem_9f13c2ff
            href={'settings/assistant.html'}
            iconSrc={'/svgs/icon-09d5ec220bb549a8463778f27badb9d0.svg'}
            divText={'Assistant'}
          />
          <SidemenuitemItem_bd40fffe
            href={'settings/phone-numbers.html'}
            iconSrc={'/svgs/icon-ae40fea1a29acf51ebfc97d9536f0215.svg'}
            divText={'Phone Numbers'}
          />
          <SidemenuitemItem_e9726aa4
            href={'settings/tools.html'}
            iconSrc={'/svgs/icon-e7c4528a40f29e099a5904b8cf50e73c.svg'}
            divText={'Tools'}
          />
          <SidemenuitemItem_fbb4df7f
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
                src="/public/svgs/icon-9fbe023ef63be187fe549393d8018a40.svg"
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
                src="/public/svgs/icon-69b78a4b99c7e7dcad802c703a166d7b.svg"
                alt="icon"
              />
            </div>
            <div>Widget Configuration</div>
          </a>
          <SidemenuitemItem_bd40fffe
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

export default SidebarLayout_08b63a2c;
