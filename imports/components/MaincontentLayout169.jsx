import React from 'react';
import Btnstyle1Item116 from './Btnstyle1Item116';
import SearchformblockItem from './SearchformblockItem';
import Btnstyle1Item117 from './Btnstyle1Item117';
import Btnstyle1Item118 from './Btnstyle1Item118';
import ContacttablecelldivItem147 from './ContacttablecelldivItem147';
import ContacttablecelldivItem105 from './ContacttablecelldivItem105';
import ContacttablerowItem167 from './ContacttablerowItem167';
import ContacttablerowItem166 from './ContacttablerowItem166';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import ContactspaginatoritemItem from './ContactspaginatoritemItem';
import MessagingsidebarhddivItem from './MessagingsidebarhddivItem';
import MessagingtabiconItem from './MessagingtabiconItem';
import MessagingsidebartablinkItem from './MessagingsidebartablinkItem';
import DatanerichmentdivItem from './DatanerichmentdivItem';
import MessagingsidebarcardsItem165 from './MessagingsidebarcardsItem165';
import MessagingsidebarcardsItem from './MessagingsidebarcardsItem';
import MessagingsidebarcardsItem162 from './MessagingsidebarcardsItem162';
import ContactdetailsrowItem from './ContactdetailsrowItem';
import SidebarhddivItem from './SidebarhddivItem';
import SidebarsessionsummarycolItem from './SidebarsessionsummarycolItem';
import SidebarjourneycardlabeldivItem from './SidebarjourneycardlabeldivItem';
import ActivityhistorytabItem from './ActivityhistorytabItem';
import ActivityhistorycardItem from './ActivityhistorycardItem';
import FileattachmentgroupItem from './FileattachmentgroupItem';
import DatacollectioncardItem from './DatacollectioncardItem';
import ActivityhistoryhandlerItem from './ActivityhistoryhandlerItem';
import RecentactivityitemItem from './RecentactivityitemItem';
import FilteritemItem from './FilteritemItem';

const MaincontentLayout169 = ({ props }) => {
  return (
    <div
      id="w-node-_61da7caa-6ca5-b4ce-88b2-5ad4777a9580-f14725ce"
      className="main-content"
    >
      <div className="scroll-content">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Contacts</div>
          </div>
        </div>
        <div className="mainwidth-control contacts">
          <div className="contacts-maincol">
            <div className="contacts-main-top">
              <Btnstyle1Item116
                src="images/Search_1.svg"
                divText="New Contact"
              />
              <div className="contacts-main-top-right">
                <SearchformblockItem />
                <a
                  data-w-id="6229025e-89ec-5fd5-555f-a0c9a0c162e8"
                  href="#"
                  className="btn-style1 outline w-inline-block"
                >
                  <div className="btn-icon">
                    <img
                      src="images/smarties-btnicon-filter.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>Filters</div>
                </a>
                <Btnstyle1Item117
                  src="images/smarties-btnicon-export.svg"
                  divText="Export"
                />
                <Btnstyle1Item117
                  src="images/smarties-btnicon-import.svg"
                  divText="Import"
                />
              </div>
            </div>
            <div className="bulkoption-div">
              <div className="bulkoption-left">
                <div className="text-block-2">2 contacts selected</div>
              </div>
              <div className="bulkoption-right">
                <Btnstyle1Item118
                  src="images/smarties-bulkoption-tag.svg"
                  divText="Assign Tag"
                />
                <Btnstyle1Item118
                  src="images/smarties-bulkoption-export.svg"
                  divText="Export"
                />
                <a href="#" className="btn-style1 delete w-inline-block">
                  <div className="btn-icon">
                    <img
                      src="images/smarties-bulkoption-delete.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>Delete</div>
                </a>
                <div
                  data-w-id="90fb891e-6f87-0719-fa78-2cefb183ee69"
                  className="bulkoption-close"
                >
                  <img src="images/Frame_5.svg" loading="lazy" alt="" />
                </div>
              </div>
            </div>
            <div className="w-form">
              <form
                id="wf-form-tool-form"
                name="wf-form-tool-form"
                data-name="tool form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725ce"
                data-wf-element-id="61da7caa-6ca5-b4ce-88b2-5ad4777a95a6"
              >
                <div className="form-body">
                  <div className="contact-table-div">
                    <div className="contacts-tableheader">
                      <div className="contact-table-cell-div _w-3">
                        <label className="w-checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom contacts-checkbox"></div>
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            data-name="Checkbox"
                            style={{
                              opacity: '0',
                              position: 'absolute',
                              zIndex: '-1',
                            }}
                          />
                          <span
                            className="checkbox-label-3 w-form-label"
                            htmlFor="checkbox"
                          >
                            Checkbox
                          </span>
                        </label>
                      </div>
                      <ContacttablecelldivItem147 />
                      <div className="contact-table-cell-div _w-15 name">
                        <div className="contact-table-header-text">NAME</div>
                      </div>
                      <div className="contact-table-cell-div _w-10 jobcompany">
                        <div className="contact-table-header-text">
                          JOB & Company
                        </div>
                      </div>
                      <div className="contact-table-cell-div _w-10 contact">
                        <div className="contact-table-header-text">CONTact</div>
                      </div>
                      <div className="contact-table-cell-div _w-8 source">
                        <div className="contact-table-header-text">source</div>
                      </div>
                      <div className="contact-table-cell-div _w-8 location">
                        <div className="contact-table-header-text">
                          location
                        </div>
                      </div>
                      <div className="contact-table-cell-div _w-8">
                        <div className="contact-table-header-text">Tags</div>
                      </div>
                      <div className="contact-table-cell-div _w-8 status">
                        <div className="contact-table-header-text">STATUS</div>
                      </div>
                      <ContacttablecelldivItem105 header="last activity" />
                      <div className="contact-table-cell-div _w-8 convos">
                        <div className="contact-table-header-text">Convos</div>
                      </div>
                      <div className="contact-table-cell-div _w-8 agents">
                        <div className="contact-table-header-text">agents</div>
                      </div>
                      <ContacttablecelldivItem105 header="Action" />
                    </div>
                    <div className="contacts-table-content">
                      <ContacttablerowItem167
                        dataWId="d5d24fc8-f7d9-5f76-d442-ba200f41338a"
                        dataWId1="e126a55e-d39a-9fdc-2dc4-f201db972168"
                        dataWId2="d5d24fc8-f7d9-5f76-d442-ba200f41339b"
                        dataWId3="792124c6-0a43-6117-09ca-054912cce46e"
                        dataWId4="5d9ed109-0287-49e5-d932-829a7a498bbb"
                        dataWId5="7ee79f28-1055-c466-27e8-3173f706dca1"
                        dataWId6="d9d41f7f-0057-93a0-759a-4f4719e2e394"
                      />
                      <ContacttablerowItem167
                        dataWId="999a0daa-6b66-b255-7493-3bfa478f4fdf"
                        dataWId1="999a0daa-6b66-b255-7493-3bfa478f4fe2"
                        dataWId2="999a0daa-6b66-b255-7493-3bfa478f500a"
                        dataWId3="999a0daa-6b66-b255-7493-3bfa478f500f"
                        dataWId4="999a0daa-6b66-b255-7493-3bfa478f502c"
                        dataWId5="999a0daa-6b66-b255-7493-3bfa478f5031"
                        dataWId6="999a0daa-6b66-b255-7493-3bfa478f5038"
                      />
                      <ContacttablerowItem167
                        dataWId="9f334fd5-fe52-51c4-ecb5-aa87145fef78"
                        dataWId1="9f334fd5-fe52-51c4-ecb5-aa87145fef7b"
                        dataWId2="9f334fd5-fe52-51c4-ecb5-aa87145fefa3"
                        dataWId3="9f334fd5-fe52-51c4-ecb5-aa87145fefa8"
                        dataWId4="9f334fd5-fe52-51c4-ecb5-aa87145fefc5"
                        dataWId5="9f334fd5-fe52-51c4-ecb5-aa87145fefca"
                        dataWId6="9f334fd5-fe52-51c4-ecb5-aa87145fefd1"
                      />
                      <ContacttablerowItem167
                        dataWId="94871a4e-f77e-1461-c5d4-9b03e6333943"
                        dataWId1="94871a4e-f77e-1461-c5d4-9b03e6333946"
                        dataWId2="94871a4e-f77e-1461-c5d4-9b03e633396e"
                        dataWId3="94871a4e-f77e-1461-c5d4-9b03e6333973"
                        dataWId4="94871a4e-f77e-1461-c5d4-9b03e6333990"
                        dataWId5="94871a4e-f77e-1461-c5d4-9b03e6333995"
                        dataWId6="94871a4e-f77e-1461-c5d4-9b03e633399c"
                      />
                      <ContacttablerowItem167
                        dataWId="c9475c9a-ba18-aff0-7150-26460e6406a5"
                        dataWId1="c9475c9a-ba18-aff0-7150-26460e6406a8"
                        dataWId2="c9475c9a-ba18-aff0-7150-26460e6406d0"
                        dataWId3="c9475c9a-ba18-aff0-7150-26460e6406d5"
                        dataWId4="c9475c9a-ba18-aff0-7150-26460e6406f2"
                        dataWId5="c9475c9a-ba18-aff0-7150-26460e6406f7"
                        dataWId6="c9475c9a-ba18-aff0-7150-26460e6406fe"
                      />
                      <ContacttablerowItem166
                        dataWId="14a5560b-10e9-89de-42ba-ec1f5053f759"
                        dataWId1="14a5560b-10e9-89de-42ba-ec1f5053f75c"
                        dataWId2="14a5560b-10e9-89de-42ba-ec1f5053f784"
                        dataWId3="14a5560b-10e9-89de-42ba-ec1f5053f789"
                        dataWId4="14a5560b-10e9-89de-42ba-ec1f5053f7ab"
                        dataWId5="14a5560b-10e9-89de-42ba-ec1f5053f7b2"
                      />
                      <ContacttablerowItem166
                        dataWId="bb7284d7-62fa-a302-7be1-4dc5d8ff4b05"
                        dataWId1="bb7284d7-62fa-a302-7be1-4dc5d8ff4b08"
                        dataWId2="bb7284d7-62fa-a302-7be1-4dc5d8ff4b2e"
                        dataWId3="bb7284d7-62fa-a302-7be1-4dc5d8ff4b33"
                        dataWId4="bb7284d7-62fa-a302-7be1-4dc5d8ff4b4e"
                        dataWId5="bb7284d7-62fa-a302-7be1-4dc5d8ff4b55"
                      />
                      <ContacttablerowItem166
                        dataWId="330df553-de91-2304-ce12-d083919a6119"
                        dataWId1="330df553-de91-2304-ce12-d083919a611c"
                        dataWId2="330df553-de91-2304-ce12-d083919a6142"
                        dataWId3="330df553-de91-2304-ce12-d083919a6147"
                        dataWId4="330df553-de91-2304-ce12-d083919a6162"
                        dataWId5="330df553-de91-2304-ce12-d083919a6169"
                      />
                      <ContacttablerowItem166
                        dataWId="2467c992-64b5-906c-41d9-c0536ac1cfd7"
                        dataWId1="2467c992-64b5-906c-41d9-c0536ac1cfda"
                        dataWId2="2467c992-64b5-906c-41d9-c0536ac1d000"
                        dataWId3="2467c992-64b5-906c-41d9-c0536ac1d005"
                        dataWId4="2467c992-64b5-906c-41d9-c0536ac1d020"
                        dataWId5="2467c992-64b5-906c-41d9-c0536ac1d027"
                      />
                      <ContacttablerowItem166
                        dataWId="859c3406-6c8a-b579-1868-652f5cd0eeca"
                        dataWId1="859c3406-6c8a-b579-1868-652f5cd0eecd"
                        dataWId2="859c3406-6c8a-b579-1868-652f5cd0eef3"
                        dataWId3="859c3406-6c8a-b579-1868-652f5cd0eef8"
                        dataWId4="859c3406-6c8a-b579-1868-652f5cd0ef13"
                        dataWId5="859c3406-6c8a-b579-1868-652f5cd0ef1a"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div className="contcts-paginator-row">
              <div className="paginator-count-text">
                Showing 1 to 10 of 5 results
              </div>
              <div className="contcts-paginator-div">
                <div className="contacts-paginator-item left">
                  <div className="contats-paginator-arrow">
                    <img
                      src="images/smarties-paginator-left.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="contacts-paginator-item active">
                  <div>1</div>
                </div>
                <ContactspaginatoritemItem divText="2" />
                <ContactspaginatoritemItem divText="3" />
                <ContactspaginatoritemItem divText="..." />
                <ContactspaginatoritemItem divText="8" />
                <div className="contacts-paginator-item right">
                  <div className="contats-paginator-arrow">
                    <img
                      src="images/smarties-paginator-right.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-sidebar-customerintelliigence">
            <MessagingsidebarhddivItem
              divText="Customer Intelligence"
              dataWId="d40e6ff1-a7b5-c151-b08f-dd8db3b3dda2"
            />
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="messaging-sidebar-tab w-tabs"
            >
              <div className="messaging-sidebar-tabsmenu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  className="messaging-sidebar-tablink w-inline-block w-tab-link w--current"
                >
                  <MessagingtabiconItem
                    width="15"
                    height="14"
                    viewbox="0 0 15 14"
                    d="M11.2087 12.25V11.0833C11.2087 10.4645 10.9628 9.871 10.5252 9.43342C10.0877 8.99583 9.49416 8.75 8.87533 8.75H5.37533C4.75649 8.75 4.16299 8.99583 3.72541 9.43342C3.28782 9.871 3.04199 10.4645 3.04199 11.0833V12.25M9.45866 4.08333C9.45866 5.372 8.41399 6.41667 7.12533 6.41667C5.83666 6.41667 4.79199 5.372 4.79199 4.08333C4.79199 2.79467 5.83666 1.75 7.12533 1.75C8.41399 1.75 9.45866 2.79467 9.45866 4.08333Z"
                    stroke="#E14617"
                    strokeWidth="1.5"
                  />
                  <div>Contact</div>
                </a>
                <MessagingsidebartablinkItem
                  dataWTab="Tab 2"
                  clipPath="url(#clip0_2400_1989)"
                  d="M7.37533 3.50008V7.00008L9.70866 8.16675M13.2087 7.00008C13.2087 10.2217 10.597 12.8334 7.37533 12.8334C4.15366 12.8334 1.54199 10.2217 1.54199 7.00008C1.54199 3.77842 4.15366 1.16675 7.37533 1.16675C10.597 1.16675 13.2087 3.77842 13.2087 7.00008Z"
                  id="clip0_2400_1989"
                  transform="translate(0.375)"
                  divText="Journey"
                />
                <MessagingsidebartablinkItem
                  dataWTab="Tab 3"
                  clipPath="url(#clip0_2400_1993)"
                  d="M12.9587 7.00008H11.512C11.2571 6.99954 11.009 7.08251 10.8056 7.23631C10.6023 7.39011 10.455 7.60628 10.3862 7.85175L9.01533 12.7284C9.00649 12.7587 8.98807 12.7853 8.96282 12.8042C8.93758 12.8232 8.90688 12.8334 8.87533 12.8334C8.84377 12.8334 8.81307 12.8232 8.78783 12.8042C8.76258 12.7853 8.74416 12.7587 8.73533 12.7284L5.51533 1.27175C5.50649 1.24146 5.48807 1.21485 5.46283 1.19591C5.43758 1.17698 5.40688 1.16675 5.37533 1.16675C5.34377 1.16675 5.31307 1.17698 5.28783 1.19591C5.26258 1.21485 5.24416 1.24146 5.23533 1.27175L3.86449 6.14841C3.79593 6.39292 3.64946 6.60838 3.44733 6.76209C3.24519 6.9158 2.99843 6.99935 2.74449 7.00008H1.29199"
                  id="clip0_2400_1993"
                  transform="translate(0.125)"
                  divText="Activity"
                />
                <a
                  data-w-tab="Tab 4"
                  className="messaging-sidebar-tablink w-inline-block w-tab-link"
                >
                  <MessagingtabiconItem
                    width="17"
                    height="16"
                    viewbox="0 0 17 16"
                    d="M10.2087 1.33325V3.99992C10.2087 4.35354 10.3491 4.69268 10.5992 4.94273C10.8492 5.19278 11.1884 5.33325 11.542 5.33325H14.2087M10.8753 1.33325H4.87533C4.5217 1.33325 4.18256 1.47373 3.93252 1.72378C3.68247 1.97382 3.54199 2.31296 3.54199 2.66659V13.3333C3.54199 13.6869 3.68247 14.026 3.93252 14.2761C4.18256 14.5261 4.5217 14.6666 4.87533 14.6666H12.8753C13.2289 14.6666 13.5681 14.5261 13.8181 14.2761C14.0682 14.026 14.2087 13.6869 14.2087 13.3333V4.66659L10.8753 1.33325Z"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <div>Assets</div>
                </a>
              </div>
              <div className="messaging-tabscontent w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  <div className="messaging-sidebar-tabscontent-div">
                    <div className="sidebar-contact-maindiv">
                      <div className="sidebar-contact-avatar">
                        <img
                          src="images/smarties-avatar-01_1smarties-avatar-01.png"
                          loading="lazy"
                          alt=""
                          className="image-100-nopadding"
                        />
                      </div>
                      <div>
                        <div className="messaging-top-name">John Smith</div>
                        <div className="messaging-top-subtext">
                          Marketing Director
                        </div>
                        <div className="messaging-top-subtext">
                          Orbital Inc.
                        </div>
                      </div>
                    </div>
                    <DatanerichmentdivItem dataWId="170a6bed-e932-1987-cb24-7f7bc570b353" />
                    <MessagingsidebarcardsItem165
                      dataWId="170a6bed-e932-1987-cb24-7f7bc570b366"
                      dataWId1="170a6bed-e932-1987-cb24-7f7bc570b370"
                      dataWId2="170a6bed-e932-1987-cb24-7f7bc570b37a"
                      dataWId3="170a6bed-e932-1987-cb24-7f7bc570b384"
                      dataWId4="170a6bed-e932-1987-cb24-7f7bc570b390"
                    />
                    <MessagingsidebarcardsItem />
                    <MessagingsidebarcardsItem162 />
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane">
                  <div className="messaging-sidebar-tabscontent-div">
                    <div className="messaging-sidebar-cards currentsession">
                      <div className="sidebar-contact-body">
                        <div className="messaging-sidebar-h2">
                          Current Session
                        </div>
                        <div className="contact-row-container">
                          <ContactdetailsrowItem
                            dataWId="170a6bed-e932-1987-cb24-7f7bc570b3ce"
                            src="images/smarties-session-time.svg"
                            divText="2:15 PM (19 min ago)"
                          />
                          <ContactdetailsrowItem
                            dataWId="170a6bed-e932-1987-cb24-7f7bc570b3d8"
                            src="images/smarties-session-device.svg"
                            divText="Desktop • Chrome"
                          />
                          <ContactdetailsrowItem
                            dataWId="170a6bed-e932-1987-cb24-7f7bc570b3e2"
                            src="images/smarties-session-site.svg"
                            divText="Google Search"
                          />
                        </div>
                      </div>
                      <div className="livesession-tag">Live</div>
                    </div>
                    <div className="messaging-sidebar-cards">
                      <div className="sidebar-contact-body">
                        <SidebarhddivItem divText="Session Summary" />
                        <div className="sidebar-sessionsummary-body">
                          <SidebarsessionsummarycolItem
                            src="images/icon-park-outlinepage.svg"
                            width="15"
                            height="15"
                            divText="5"
                            divText1="Pages Visited"
                          />
                          <SidebarsessionsummarycolItem
                            src="images/mageclock.svg"
                            width="14"
                            height="14"
                            divText="19"
                            divText1="Total Time"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="messaging-sidebar-cards">
                      <div className="sidebar-contact-body">
                        <SidebarhddivItem divText="Customer Journey" />
                        <div className="sidebar-journey-body">
                          <div className="sidebar-leadinfo-timeline-line"></div>
                          <div className="sidebar-journey-item">
                            <div className="sidebar-journey-icon-div">
                              <img
                                src="images/Frame-45.svg"
                                loading="lazy"
                                width="Auto"
                                height="Auto"
                                alt=""
                                className="sidebar-journey-icon"
                              />
                            </div>
                            <div className="sidebar-leadinfo-timeline-itemcard">
                              <div className="sidebar-journey-card-top">
                                <div className="sidebar-journey-card-label-div">
                                  <div className="sidebar-journey-card-label">
                                    Checkout Page
                                  </div>
                                  <div className="sidebar-journey-card-current">
                                    CURRENT
                                  </div>
                                </div>
                                <div className="sidebar-journey-card-subtext">
                                  /checkout
                                </div>
                              </div>
                              <SidebarjourneycardlabeldivItem />
                            </div>
                          </div>
                          <div className="sidebar-journey-item">
                            <div className="sidebar-journey-icon-div">
                              <img
                                src="images/Frame_2.svg"
                                loading="lazy"
                                width="Auto"
                                height="Auto"
                                alt=""
                                className="sidebar-journey-icon"
                              />
                            </div>
                            <div className="sidebar-leadinfo-timeline-itemcard">
                              <div className="sidebar-journey-card-top">
                                <div className="sidebar-journey-card-label-div">
                                  <div className="sidebar-journey-card-label">
                                    Shopping Cart
                                  </div>
                                </div>
                                <div className="sidebar-journey-card-subtext">
                                  /cart
                                </div>
                              </div>
                              <SidebarjourneycardlabeldivItem />
                            </div>
                          </div>
                          <div className="sidebar-journey-item">
                            <div className="sidebar-journey-icon-div">
                              <img
                                src="images/smarties-journey-homepage.svg"
                                loading="lazy"
                                width="Auto"
                                height="Auto"
                                alt=""
                                className="sidebar-journey-icon"
                              />
                            </div>
                            <div className="sidebar-leadinfo-timeline-itemcard">
                              <div className="sidebar-journey-card-top">
                                <div className="sidebar-journey-card-label-div">
                                  <div className="sidebar-journey-card-label">
                                    Homepage
                                  </div>
                                  <div className="sidebar-journey-card-current bg-orange">
                                    ENTRY
                                  </div>
                                </div>
                                <div className="sidebar-journey-card-subtext">
                                  /
                                </div>
                              </div>
                              <SidebarjourneycardlabeldivItem />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 3" className="w-tab-pane">
                  <div className="messaging-sidebar-tabscontent-div">
                    <div className="acitivityhistory-hd">
                      <div className="messaging-sidebar-h2">
                        Activity History
                      </div>
                      <div className="activityhistory-tabdiv">
                        <div className="activityhistory-tab">
                          <div>24h</div>
                        </div>
                        <ActivityhistorytabItem divText="7d" />
                        <ActivityhistorytabItem divText="30d" />
                      </div>
                    </div>
                    <div className="acitivity-history-searchfilter">
                      <SearchformblockItem />
                      <img
                        src="images/smarties-icon-filter.svg"
                        loading="lazy"
                        width="31.200000762939453"
                        height="24"
                        alt=""
                        className="smarties-icon-filter"
                      />
                    </div>
                    <div className="activityhistory-card-list">
                      <ActivityhistorycardItem />
                      <ActivityhistorycardItem />
                      <ActivityhistorycardItem />
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 4" className="w-tab-pane">
                  <div className="messaging-sidebar-tabscontent-div">
                    <div className="acitivityhistory-hd">
                      <div className="messaging-sidebar-h2">Assets</div>
                    </div>
                    <div
                      data-current="Tab 1"
                      data-easing="ease"
                      data-duration-in="300"
                      data-duration-out="100"
                      className="w-tabs"
                    >
                      <div className="tabs-menu w-tab-menu">
                        <a
                          data-w-tab="Tab 1"
                          className="assets-tablink w-inline-block w-tab-link w--current"
                        >
                          <div>File Attachments</div>
                        </a>
                        <a
                          data-w-tab="Tab 2"
                          className="assets-tablink w-inline-block w-tab-link"
                        >
                          <div>Data Collection</div>
                        </a>
                      </div>
                      <div className="w-tab-content">
                        <div
                          data-w-tab="Tab 1"
                          className="w-tab-pane w--tab-active"
                        >
                          <div className="assets-tabcontent-div">
                            <div className="acitivity-history-searchfilter full">
                              <SearchformblockItem />
                            </div>
                            <div className="activityhistory-card-list">
                              <FileattachmentgroupItem divText="From John Smith" />
                              <FileattachmentgroupItem divText="From Anima Agrawal" />
                            </div>
                          </div>
                        </div>
                        <div data-w-tab="Tab 2" className="w-tab-pane">
                          <div className="assets-tabcontent-div">
                            <div className="acitivity-history-searchfilter">
                              <SearchformblockItem />
                              <div className="btnicon-add">
                                <img
                                  src="images/smarties-icon-add.svg"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="activityhistory-card-list">
                              <DatacollectioncardItem
                                src="images/smarties-head.png"
                                width="Auto"
                              />
                              <div className="datacollection-card">
                                <div className="datacollection-text">
                                  Customer requested a refund for the invoice
                                  discrepancy
                                </div>
                                <div className="activityhistory-card-top">
                                  <ActivityhistoryhandlerItem
                                    src="images/img_2img.png"
                                    width="14.661971092224121"
                                  />
                                  <div className="div-block-17">
                                    <div className="datacollection-tag bg-yellow">
                                      <div>Temporary</div>
                                    </div>
                                    <div className="activityhistory-duration">
                                      Dec 15, 2024
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <DatacollectioncardItem
                                src="images/img_2img.png"
                                width="14.661971092224121"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="messaging-sidebar-cards hide">
              <div className="sidebar-contact-body">
                <div className="sidebar-hd-div">
                  <div className="messaging-sidebar-h2">Recent Activity</div>
                  <div className="sidebar-hd-chevron">
                    <img
                      src="images/smarties-chevron-down_1.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="sidebar-recentactivity-body">
                  <RecentactivityitemItem />
                  <RecentactivityitemItem />
                  <RecentactivityitemItem />
                </div>
              </div>
            </div>
          </div>
          <div className="contact-sidebar-filter">
            <MessagingsidebarhddivItem
              divText="Filter"
              dataWId="49b86335-b3af-16b1-7cdb-77c51e373354"
            />
            <div className="w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725ce"
                data-wf-element-id="b9fbc642-27bc-2239-7d48-a4006a7474f2"
              >
                <div className="filters-body">
                  <FilteritemItem
                    dataWId="3dae18f8-3116-efb3-0cd3-8fba9cd40734"
                    divText="Title"
                  />
                  <FilteritemItem
                    dataWId="3f7a75e2-b50c-e02b-65a8-a0eadb1c7b26"
                    divText="Company"
                  />
                  <FilteritemItem
                    dataWId="d820879a-c7bd-5bf9-ed9b-979b79d293d9"
                    divText="Tags"
                  />
                  <FilteritemItem
                    dataWId="406c6d0b-d8f4-4585-48de-fd184410802d"
                    divText="Industry"
                  />
                  <FilteritemItem
                    dataWId="87057d6a-cbfb-e5f6-8fea-a2049199dbbc"
                    divText="Seniority"
                  />
                  <FilteritemItem
                    dataWId="94a1e08c-5ab9-d369-131a-77c22714c9eb"
                    divText="Location"
                  />
                  <FilteritemItem
                    dataWId="ff2b64af-ad2a-08c7-66f4-07766cab53cb"
                    divText="Source"
                  />
                  <FilteritemItem
                    dataWId="9fb9fec0-059c-e4a6-fbf7-f6af12591dae"
                    divText="Enrichment Status"
                  />
                  <FilteritemItem
                    dataWId="98462491-e089-98fc-f868-127a02d9492d"
                    divText="Date Filters"
                  />
                  <div className="filter-btn-2col-div">
                    <a
                      href="#"
                      className="btn-style1 outline stretch w-inline-block"
                    >
                      <div>Clear</div>
                    </a>
                    <a href="#" className="btn-style1 stretch w-inline-block">
                      <div>Apply</div>
                    </a>
                  </div>
                  <div className="filter-btn-2col-div">
                    <a
                      href="#"
                      className="btn-style1 outline-orange stretch w-inline-block"
                    >
                      <div>Save View</div>
                    </a>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout169;
