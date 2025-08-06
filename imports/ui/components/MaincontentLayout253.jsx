import React from "react";
import WformdoneItem from "./WformdoneItem";
import WformfailItem from "./WformfailItem";
import MessagingtablinkItem240 from "./MessagingtablinkItem240";
import MessaginginboxavatarcolItem from "./MessaginginboxavatarcolItem";
import MessaginginboxtextcontenttopItem from "./MessaginginboxtextcontenttopItem";
import CustomerinfotextcontentItem from "./CustomerinfotextcontentItem";
import MenuitemItem50 from "./MenuitemItem50";
import SidebarleadinfotimelineitemItem251 from "./SidebarleadinfotimelineitemItem251";
import Layer1Item245 from "./Layer1Item245";
import SenddelightcardItem from "./SenddelightcardItem";
import PlanusagedivtextcontentItem242 from "./PlanusagedivtextcontentItem242";
import DbquickactiontextcontentItem243 from "./DbquickactiontextcontentItem243";
import DbstatcardItem246 from "./DbstatcardItem246";
import RelationshipcardItem from "./RelationshipcardItem";

const MaincontentLayout253 = ({ props }) => {
  return (
    <div
      id="w-node-_2d62093f-af62-36e2-bc25-a6f698497d5d-f14725da"
      className="main-content"
    >
      <div className="scroll-content">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Customer Memory Center</div>
            <div className="db-quickaction-text">
              Track, understand, and delight your customers at every step of
              their journey.
            </div>
          </div>
          <div className="badge">
            <img src="../images/smarties-badge-pro.png" loading="lazy" alt="" />
          </div>
        </div>
        <div className="mainwidth-control messaging">
          <div className="sidebar-temp messaging">
            <div className="messaging-sidebar-h1">Lead List</div>
            <a href="#" className="btn-style1 w-inline-block">
              <div className="btn-icon">
                <img src="../images/Search_1.svg" loading="lazy" alt="" />
              </div>
              <div>Add Customer</div>
            </a>
            <div className="search-formblock w-form">
              <form
                id="wf-form-search-form"
                name="wf-form-search-form"
                data-name="search form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725da"
                data-wf-element-id="9aaf37b2-a011-864e-493e-ccb9979ed0bd"
              >
                <div className="form-body">
                  <div className="form-row mb-0">
                    <input
                      className="inbox-search w-input"
                      maxlength="256"
                      name="search-2"
                      data-name="Search 2"
                      placeholder="Search"
                      type="text"
                      id="search-2"
                      required
                    />
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="messaging-tabs w-tabs"
            >
              <div className="messaging-tabsmenu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  className="messaging-tablink w-inline-block w-tab-link w--current"
                >
                  <div>All</div>
                </a>
                <MessagingtablinkItem240 dataWTab="Tab 2" divText="Gold" />
                <MessagingtablinkItem240 dataWTab="Tab 3" divText="Silver" />
                <MessagingtablinkItem240 dataWTab="Tab 4" divText="Bronze" />
              </div>
              <div className="messaging-inbox-tabscontent w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  <div className="messaging-tabpane-div">
                    <div className="inbox-list gap-5">
                      <a
                        href="#"
                        className="leadlist-item active w-inline-block"
                      >
                        <div className="messaging-inbox-item-left">
                          <MessaginginboxavatarcolItem src="../images/smarties-avatar-01_1smarties-avatar-01.png" />
                          <div className="messaging-inbox-textcontent">
                            <MessaginginboxtextcontenttopItem
                              divText="Michael Chen"
                              divText1="johnsmith@email.com"
                            />
                            <div className="messaging-inbox-textcontent-bot">
                              <div className="contact-table-tag gold">Gold</div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="leadlist-item w-inline-block">
                        <div className="messaging-inbox-item-left">
                          <MessaginginboxavatarcolItem src="../images/smarties-avatar-02_1smarties-avatar-02.png" />
                          <div className="messaging-inbox-textcontent">
                            <MessaginginboxtextcontenttopItem
                              divText="Emma Wilson"
                              divText1="emmaw@email.com"
                            />
                            <div className="messaging-inbox-textcontent-bot">
                              <div className="messaging-inbox-icons-div">
                                <div className="contact-table-tag silver">
                                  Silver
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="leadlist-item w-inline-block">
                        <div className="messaging-inbox-item-left">
                          <MessaginginboxavatarcolItem src="../images/smarties-avatar-03_1smarties-avatar-03.png" />
                          <div className="messaging-inbox-textcontent">
                            <MessaginginboxtextcontenttopItem
                              divText="Marcus Chen"
                              divText1="mchen@email.com"
                            />
                            <div className="messaging-inbox-textcontent-bot">
                              <div className="messaging-inbox-icons-div">
                                <div className="contact-table-tag gold">
                                  Gold
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="leadlist-item w-inline-block">
                        <div className="messaging-inbox-item-left">
                          <MessaginginboxavatarcolItem src="../images/smarties-avatar-04_1smarties-avatar-04.png" />
                          <div className="messaging-inbox-textcontent">
                            <MessaginginboxtextcontenttopItem
                              divText="Priya Sharma"
                              divText1="priyas@email.com"
                            />
                            <div className="messaging-inbox-textcontent-bot">
                              <div className="messaging-inbox-icons-div">
                                <div className="contact-table-tag bronze">
                                  Bronze
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane"></div>
                <div data-w-tab="Tab 3" className="w-tab-pane"></div>
                <div data-w-tab="Tab 4" className="w-tab-pane"></div>
              </div>
            </div>
          </div>
          <div className="messaging-maincol outline">
            <div className="w-form">
              <form
                id="wf-form-tool-form"
                name="wf-form-tool-form"
                data-name="tool form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725da"
                data-wf-element-id="2d62093f-af62-36e2-bc25-a6f698497deb"
              >
                <div className="form-body">
                  <div className="messaging-main-top newshoppers">
                    <div className="messaging-main-topleft">
                      <div className="messaging-inbox-avatar-top">
                        <img
                          src="../images/smarties-avatar-01_1smarties-avatar-01.png"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="messaging-inbox-toptextcontent">
                        <div className="messaging-top-name">Michael Chen</div>
                        <div className="customer-info-row">
                          <div className="customer-info">
                            <div className="customer-info-icon">
                              <img
                                src="../images/Frame_41.svg"
                                loading="lazy"
                                width="16"
                                height="16"
                                alt=""
                                className="frame-style-25"
                              />
                            </div>
                            <CustomerinfotextcontentItem divText="michael.chen@email.com" />
                          </div>
                          <div className="customer-info">
                            <img
                              src="../images/gridiconstime.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="frame-style-25"
                            />
                            <CustomerinfotextcontentItem divText="First visit: 14 days ago" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="messaging-main-topright">
                      <div className="messaging-mainbtns-div">
                        <div className="button-fullprofile">
                          <div>View Full Profile</div>
                        </div>
                        <div className="assistant-menu">
                          <div
                            data-w-id="2d62093f-af62-36e2-bc25-a6f698497e17"
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
                            <MenuitemItem50
                              src="../images/smarties-icon-version.svg"
                              divText="Version History"
                            />
                            <MenuitemItem50
                              src="../images/smarties-icon-document.svg"
                              divText="Call Logs"
                            />
                            <MenuitemItem50
                              src="../images/smarties-icon-duplicate.svg"
                              divText="Duplicate"
                            />
                            <MenuitemItem50
                              src="../images/smarties-icon-delete_outline.svg"
                              divText="Delete"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="interaction-history-body">
                    <div className="messaging-sidebar-h2-style2">
                      Interaction History
                    </div>
                    <div className="sidebar-leadinfo-timeline-div">
                      <div className="sidebar-leadinfo-timeline-line"></div>
                      <SidebarleadinfotimelineitemItem251
                        label="Birthday Surprise Sent"
                        divText="Sent a personalized birthday email with a $20 gift card for their favorite store."
                      />
                      <SidebarleadinfotimelineitemItem251
                        label="Used a Reward"
                        divText="Redeemed 500 loyalty points for a free premium upgrade. First time using the rewards program."
                      />
                      <SidebarleadinfotimelineitemItem251
                        label="Left Review"
                        divText="The customer service was exceptional! I had an issue with my order and it was resolved immediately. Will definitely shop here again!"
                      />
                      <SidebarleadinfotimelineitemItem251
                        label="First Purchase"
                        divText="Purchased Premium Plan ($99/year) after 14-day free trial. Referred by existing customer"
                      />
                    </div>
                  </div>
                  <div className="senddelight-div">
                    <div className="senddelight-top">
                      <div className="senddelight-topleft">
                        <div className="senddelight-title">Send Delight</div>
                        <div className="senddelight-subtitle">
                          Boost customer loyalty with personalized actions
                        </div>
                      </div>
                      <div className="senddelight-topright">
                        <a href="#" className="btn-style1 w-inline-block">
                          <div>Send Delight</div>
                          <div className="icon-embed w-embed">
                            <Layer1Item245 d="M92.17,6.38c1.76,1.22,2.68,3.33,2.35,5.43l-11.15,72.45c-.26,1.69-1.29,3.17-2.79,4.01-1.5.84-3.29.94-4.88.28l-20.83-8.66-11.93,12.91c-1.55,1.69-3.99,2.25-6.13,1.41-2.14-.84-3.54-2.91-3.54-5.21v-14.56c0-.7.26-1.36.73-1.86l29.19-31.86c1.01-1.1.98-2.79-.07-3.83s-2.73-1.11-3.83-.12l-35.43,31.47-15.38-7.7c-1.85-.92-3.03-2.77-3.08-4.82-.05-2.06,1.03-3.97,2.8-5L86.25,6.14c1.86-1.06,4.16-.96,5.92.24Z" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="senddelight-bot">
                      <SenddelightcardItem
                        title="Gift Free Dessert"
                        itemText="Send dessert voucher for next visit"
                      />
                      <SenddelightcardItem
                        title="Apply VIP Tag"
                        itemText="Grant special status and benefits"
                      />
                      <SenddelightcardItem
                        title="Send Custom Email"
                        itemText="Write a personalized thank you note"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
          </div>
          <div className="delivery-settings-sidebar">
            <div className="messaging-sidebar-hd-div align-inbetween">
              <div className="messaging-sidebar-h1">
                Customer Sentiment Summary
              </div>
              <div
                data-w-id="2d62093f-af62-36e2-bc25-a6f698497eaf"
                className="sidebar-close"
              >
                <img src="../images/Frame_5.svg" loading="lazy" alt="" />
              </div>
            </div>
            <div className="step-formblock w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725da"
                data-wf-element-id="2d62093f-af62-36e2-bc25-a6f698497eb2"
              >
                <div className="sidebar-contact-body gap-20">
                  <div className="delivery-settings-group">
                    <div className="contact-row-container">
                      <div className="enrichmentusage-card gap-5">
                        <PlanusagedivtextcontentItem242
                          label="Engagement Score"
                          divText="92%"
                        />
                        <div className="plan-usage-progress-row">
                          <div className="plan-usage-progress _w-92"></div>
                        </div>
                      </div>
                      <div className="enrichmentusage-card gap-5">
                        <PlanusagedivtextcontentItem242
                          label="Recent Feedback"
                          divText="Positive"
                        />
                        <div className="plan-usage-div-textcontent">
                          <div>
                            <img
                              src="../images/smarties-feedback-level.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <img
                            src="../images/smarties-emoji_1smarties-emoji.png"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="delivery-settings-group">
                    <div className="messaging-sidebar-h2-style2">
                      AI-suggested Tone
                    </div>
                    <div className="insights-card bg-blue">
                      <div className="insights-icon">
                        <img
                          src="../images/smarties-memoryicon-01.svg"
                          loading="lazy"
                          width="25"
                          height="25"
                          alt=""
                          className="card-icon-image"
                        />
                      </div>
                      <DbquickactiontextcontentItem243
                        title="Grateful & Cheerful"
                        divText="Customer responds well to personal acknowledgment and appreciation of their loyalty."
                      />
                    </div>
                  </div>
                  <div className="delivery-settings-group">
                    <div className="messaging-sidebar-h2-style2">
                      Key Relationship Markers
                    </div>
                    <div className="db-stat-card-contain direction-wrap">
                      <DbstatcardItem246
                        title="Lifetime Value"
                        divText="$1,450"
                      />
                      <DbstatcardItem246 title="Loyalty Level" divText="Gold" />
                      <DbstatcardItem246 title="Response Rate" divText="85%" />
                      <DbstatcardItem246
                        title="Purchase Frequency"
                        divText="Monthly"
                      />
                    </div>
                  </div>
                  <div className="delivery-settings-group">
                    <div className="messaging-sidebar-h2-style2">
                      Relationship Insights
                    </div>
                    <div className="relationship-card-div">
                      <RelationshipcardItem
                        src="../images/smarties-icon-bulb.svg"
                        title="Anniversary Coming Up"
                        divText="Customer's 2-year anniversary with your service is in 15 days."
                      />
                      <RelationshipcardItem
                        src="../images/smarties-activity-icon-02.svg"
                        title="Upgrade Potential"
                        divText="Usage patterns suggest readiness for Enterprise plan."
                      />
                      <RelationshipcardItem
                        src="../images/smarties-memoryicon-02.svg"
                        title="Referral Champion"
                        divText="Has referred 3 customers who converted to paid plans."
                      />
                    </div>
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

export default MaincontentLayout253;
