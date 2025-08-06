import React from 'react';
import MaincontentLayout169 from '../components/MaincontentLayout169';
import SidebarLayout168 from '../components/SidebarLayout168';
import TopbarLayout163 from '../components/TopbarLayout163';
import MessagingsidebarhddivItem from '../components/MessagingsidebarhddivItem';
import Btnstyle1Item116 from '../components/Btnstyle1Item116';
import MenuitemItem126 from '../components/MenuitemItem126';
import DatanerichmentdivItem from '../components/DatanerichmentdivItem';
import MessagingsidebarcardsItem165 from '../components/MessagingsidebarcardsItem165';
import MessagingsidebarcardsItem from '../components/MessagingsidebarcardsItem';
import MessagingsidebarcardsItem162 from '../components/MessagingsidebarcardsItem162';
import ContactdetailstablinkcountItem from '../components/ContactdetailstablinkcountItem';
import ContactdetailstablinkItem113 from '../components/ContactdetailstablinkItem113';
import ContactdetailsitemItem from '../components/ContactdetailsitemItem';

const Contacts = () => {
  return (
    <>
      <div className="page-wrap">
        <MaincontentLayout169 />
        <SidebarLayout168 />
        <TopbarLayout163 />
        <div className="popup-contactdetails">
          <MessagingsidebarhddivItem
            divText="Contact Details"
            dataWId="51139ba3-92d1-d655-61bf-e694c0ce8aeb"
          />
          <div className="contact-details-top">
            <div className="contact-details-topleft">
              <div className="sidebar-contact-avatar">
                <div>JS</div>
              </div>
              <div>
                <div className="messaging-top-name">John Smith</div>
                <div className="messaging-top-subtext">
                  Marketing Director • Orbital Inc.
                </div>
              </div>
            </div>
            <div className="contact-details-topright">
              <Btnstyle1Item116
                src="images/smarties-inbox-icon-send.svg"
                divText="Send Message"
              />
              <div className="assistant-menu">
                <div
                  data-w-id="d01bec9a-86c9-7694-0e29-3e8930bcb8e3"
                  className="button-options"
                >
                  <img
                    width="15"
                    height="15"
                    alt=""
                    src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg"
                    loading="lazy"
                    className="smarties-icon-menu"
                  />
                </div>
                <div className="menu-dropdown">
                  <MenuitemItem126
                    src="images/smarties-icon-version.svg"
                    divText="Version History"
                  />
                  <MenuitemItem126
                    src="images/smarties-icon-document.svg"
                    divText="Call Logs"
                  />
                  <MenuitemItem126
                    src="images/smarties-icon-duplicate.svg"
                    divText="Duplicate"
                  />
                  <MenuitemItem126
                    src="images/smarties-icon-delete_outline.svg"
                    divText="Delete"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="popup-contactdetails-body">
            <div className="popup-contact-details-left">
              <DatanerichmentdivItem dataWId="793bb4d5-773e-085c-ab14-3a78a2ba1983" />
              <MessagingsidebarcardsItem165
                dataWId="793bb4d5-773e-085c-ab14-3a78a2ba1996"
                dataWId1="793bb4d5-773e-085c-ab14-3a78a2ba19a0"
                dataWId2="793bb4d5-773e-085c-ab14-3a78a2ba19aa"
                dataWId3="793bb4d5-773e-085c-ab14-3a78a2ba19b4"
                dataWId4="793bb4d5-773e-085c-ab14-3a78a2ba19c0"
              />
              <MessagingsidebarcardsItem />
              <MessagingsidebarcardsItem162 />
            </div>
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="contactdetails-tab w-tabs"
            >
              <div className="contactdetails-tabsmenu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  className="contactdetails-tablink w-inline-block w-tab-link w--current"
                >
                  <div>Conversations</div>
                  <ContactdetailstablinkcountItem />
                </a>
                <ContactdetailstablinkItem113
                  dataWTab="Tab 5"
                  divText="Sentiment"
                />
                <a
                  data-w-tab="Tab 2"
                  className="contactdetails-tablink w-inline-block w-tab-link"
                >
                  <div>Notes</div>
                  <ContactdetailstablinkcountItem />
                </a>
                <ContactdetailstablinkItem113
                  dataWTab="Tab 3"
                  divText="Activity"
                />
              </div>
              <div className="contactdetails-tabscontent w-tab-content">
                <div
                  data-w-tab="Tab 1"
                  className="contactdetails-tabpane w-tab-pane w--tab-active"
                >
                  <div className="contactdetails-tabpane-div">
                    <div className="contactdetails-convo-list">
                      <ContactdetailsitemItem />
                      <ContactdetailsitemItem />
                      <ContactdetailsitemItem />
                      <ContactdetailsitemItem />
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 5" className="w-tab-pane"></div>
                <div data-w-tab="Tab 2" className="w-tab-pane"></div>
                <div data-w-tab="Tab 3" className="w-tab-pane"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
