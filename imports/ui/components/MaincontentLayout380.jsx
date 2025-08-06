import React from "react";
import WformdoneItem from "./WformdoneItem";
import WformfailItem from "./WformfailItem";
import MessagingtablinkItem364 from "./MessagingtablinkItem364";
import MessaginginboxtextcontenttopItem373 from "./MessaginginboxtextcontenttopItem373";
import ObjectiondetectionitemItem from "./ObjectiondetectionitemItem";
import MessaginginboxpreviewdivItem365 from "./MessaginginboxpreviewdivItem365";
import Layer1Item55 from "./Layer1Item55";
import MenuitemItem50 from "./MenuitemItem50";
import TonebtnItem from "./TonebtnItem";
import ObjectionresponsetopItem from "./ObjectionresponsetopItem";
import ObjectionsresponsecardbodyItem from "./ObjectionsresponsecardbodyItem";
import ObjectionresponsebotItem from "./ObjectionresponsebotItem";
import ObjectionresponsetagsItem from "./ObjectionresponsetagsItem";
import ObjectionresponsetoprightItem from "./ObjectionresponsetoprightItem";
import TestimonialsactionbtnItem from "./TestimonialsactionbtnItem";
import CountdowncardlinkItem from "./CountdowncardlinkItem";
import CountdowncardfieldcontainItem from "./CountdowncardfieldcontainItem";
import CountdowncardcoloncolItem from "./CountdowncardcoloncolItem";
import UrgencytypelinkItem from "./UrgencytypelinkItem";
import UrgencytypeitemItem from "./UrgencytypeitemItem";
import QuickpresentsitemItem from "./QuickpresentsitemItem";

const MaincontentLayout380 = ({ props }) => {
  return (
    <div
      id="w-node-_650a9fdf-eb40-62bd-8ac2-9a0cde2ee07a-f14725d8"
      className="main-content"
    >
      <div className="scroll-content">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Objection Feed</div>
            <div className="db-quickaction-text">
              AI-detected customer concerns
            </div>
          </div>
        </div>
        <div className="mainwidth-control messaging">
          <div className="sidebar-temp messaging">
            <div className="div-block-19">
              <div className="messaging-sidebar-h1">Objection List</div>
              <div className="live-text">Live</div>
            </div>
            <a href="#" className="btn-style1 w-inline-block">
              <div className="btn-icon">
                <img src="../images/Search_1.svg" loading="lazy" alt="" />
              </div>
              <div>Add Custom Objection</div>
            </a>
            <div className="search-formblock w-form">
              <form
                id="wf-form-search-form"
                name="wf-form-search-form"
                data-name="search form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725d8"
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
                <MessagingtablinkItem364 dataWTab="Tab 2" divText="Critical" />
                <MessagingtablinkItem364 dataWTab="Tab 3" divText="New" />
              </div>
              <div className="messaging-inbox-tabscontent w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  <div className="messaging-tabpane-div">
                    <div className="inbox-list gap-5">
                      <a
                        href="#"
                        className="objection-list-item active w-inline-block"
                      >
                        <div className="messaging-inbox-item-left">
                          <div className="messaging-inbox-textcontent">
                            <MessaginginboxtextcontenttopItem373
                              divText="Unclear pricing"
                              divText1="I like your product, but I can't figure out how much it will cost for my team of 15."
                            />
                            <div className="objectionlist-item-bot">
                              <ObjectiondetectionitemItem divText="Detected in 12 conversations" />
                              <div className="messaging-inbox-user-tag bg-orange">
                                critical
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="objection-list-item w-inline-block"
                      >
                        <div className="messaging-inbox-item-left">
                          <div className="messaging-inbox-textcontent">
                            <div className="messaging-inbox-textcontent-top">
                              <div className="messaging-inbox-name-row">
                                <div className="objection-status-dot bg-orange"></div>
                                <div>Use case compatibility</div>
                              </div>
                              <MessaginginboxpreviewdivItem365 divText="Does this work for my use case? We're in healthcare and need HIPAA compliance." />
                            </div>
                            <div className="objectionlist-item-bot">
                              <ObjectiondetectionitemItem divText="Detected in 8 conversations" />
                              <div className="messaging-inbox-user-tag bg-yellow">
                                FREQUENT
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="objection-list-item w-inline-block"
                      >
                        <div className="messaging-inbox-item-left">
                          <div className="messaging-inbox-textcontent">
                            <MessaginginboxtextcontenttopItem373
                              divText="Integration concerns"
                              divText1="Can this integrate with our existing Salesforce setup? We're heavily invested."
                            />
                            <div className="objectionlist-item-bot">
                              <ObjectiondetectionitemItem divText="Detected in 4 conversations" />
                              <div className="messaging-inbox-user-tag bg-blue">
                                NEW
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="objection-list-item w-inline-block"
                      >
                        <div className="messaging-inbox-item-left">
                          <div className="messaging-inbox-textcontent">
                            <div className="messaging-inbox-textcontent-top">
                              <div className="messaging-inbox-name-row">
                                <div className="objection-status-dot bg-grey"></div>
                                <div>Implementation time</div>
                              </div>
                              <MessaginginboxpreviewdivItem365 divText="How long will it take to get this up and running? We need something quick." />
                            </div>
                            <div className="objectionlist-item-bot">
                              <ObjectiondetectionitemItem divText="Detected in 6 conversations" />
                              <div className="messaging-inbox-user-tag bg-grey">
                                MODERATE
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
                data-wf-page-id="688b61ee631f6165f14725d8"
                data-wf-element-id="650a9fdf-eb40-62bd-8ac2-9a0cde2ee108"
              >
                <div className="form-body">
                  <div className="messaging-main-top newshoppers">
                    <div className="messaging-main-topleft vertical">
                      <div className="messaging-sidebar-h1">
                        Suggested Responses
                      </div>
                      <div className="db-quickaction-text">
                        For: <span className="span-teal">Unclear pricing</span>
                      </div>
                    </div>
                    <div className="messaging-main-topright">
                      <div className="messaging-mainbtns-div">
                        <a
                          href="#"
                          className="btn-style1 outline-small w-inline-block"
                        >
                          <div className="icon-btnai w-embed">
                            <Layer1Item55 d="M18.62,96.56c-2.6,0-4.71-2.11-4.71-4.71v-20.93c0-2.6,2.11-4.71,4.71-4.71h20.92c2.6,0,4.71,2.11,4.71,4.71s-2.11,4.71-4.71,4.71h-9.69c2.81,2.21,5.98,3.96,9.42,5.16,5.99,2.1,12.43,2.39,18.59.86,6.17-1.53,11.71-4.81,16.03-9.46,4.32-4.65,7.17-10.43,8.24-16.7.44-2.56,2.87-4.31,5.43-3.85,2.56.44,4.28,2.87,3.85,5.43-1.38,8.08-5.05,15.52-10.62,21.52-5.57,5.99-12.71,10.21-20.66,12.19-7.94,1.99-16.24,1.59-23.96-1.1-4.71-1.64-9.05-4.08-12.84-7.21v9.38c0,2.6-2.11,4.71-4.71,4.71ZM13.24,48.43c-.26,0-.53-.02-.8-.07-2.56-.44-4.28-2.87-3.85-5.43,1.38-8.07,5.04-15.51,10.62-21.51,5.57-5.99,12.71-10.21,20.66-12.19,7.95-1.99,16.23-1.59,23.97,1.1,4.71,1.64,9.04,4.09,12.84,7.21v-9.4c0-2.6,2.11-4.71,4.71-4.71s4.71,2.11,4.71,4.71v20.93c0,2.6-2.11,4.71-4.71,4.71h-20.92c-2.6,0-4.71-2.11-4.71-4.71s2.11-4.71,4.71-4.71h9.67c-2.81-2.21-5.98-3.95-9.4-5.15-6.01-2.1-12.44-2.39-18.6-.86-6.17,1.54-11.71,4.81-16.03,9.46-4.32,4.65-7.17,10.43-8.24,16.69-.39,2.3-2.38,3.92-4.63,3.92Z" />
                          </div>
                          <div>Regenerate</div>
                        </a>
                        <div className="assistant-menu">
                          <div
                            data-w-id="650a9fdf-eb40-62bd-8ac2-9a0cde2ee134"
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
                  <div className="objectionfeed-body">
                    <div className="tone-row">
                      <div className="tone-text">Style:</div>
                      <div className="tone-btn-container">
                        <div className="tone-btn active">
                          <div>Friendly</div>
                        </div>
                        <TonebtnItem divText="Informative" />
                        <TonebtnItem divText="Casual" />
                        <TonebtnItem divText="Professional" />
                      </div>
                    </div>
                    <div className="objection-response-div">
                      <div className="objections-response-card">
                        <ObjectionresponsetopItem
                          divText="Response #1"
                          divText1="ROI"
                          divText2="Value"
                          dataWId="6c69d6e6-d7e0-44df-2be5-fd5ef4d20f56"
                        />
                        <ObjectionsresponsecardbodyItem divText="Thanks for your interest! For a team of 15, you'd be on our Growth plan at $29/user/month, which comes to $435 monthly or $4,350 annually (saving 17%). I'd be happy to set up a quick call to walk through all included features and any available discounts for your specific needs!" />
                        <ObjectionresponsebotItem />
                        <div className="topperformer-div">
                          <img
                            src="../images/mdiflame_1.svg"
                            loading="lazy"
                            width="18"
                            height="18"
                            alt=""
                            className="mdiflame"
                          />
                          <div className="daily-trend-item-4">
                            Top Performer
                          </div>
                        </div>
                      </div>
                      <div className="objections-response-card">
                        <div className="objection-response-top">
                          <div className="objection-response-topleft">
                            <div className="objection-response-hd">
                              Response #2
                            </div>
                            <div className="objection-response-tags-div">
                              <ObjectionresponsetagsItem divText="Pricing" />
                              <ObjectionresponsetagsItem divText="Competitive" />
                            </div>
                          </div>
                          <ObjectionresponsetoprightItem dataWId="eb5fae3e-9e81-92d4-6395-0d438d89a6ec" />
                        </div>
                        <ObjectionsresponsecardbodyItem divText="I'd be happy to clarify our pricing for your team of 15! We offer a special mid-size team discount that brings your cost to just $25/user/month (normally $29). That's a total of $375/month with all premium features included. Plus, if you sign up this week, I can lock in an additional 10% discount for the first year! Would you like me to send over a detailed quote?" />
                        <ObjectionresponsebotItem />
                      </div>
                      <div className="objections-response-card">
                        <ObjectionresponsetopItem
                          divText="Response #2"
                          divText1="Enterprise"
                          divText2="Discount"
                          dataWId="14deeed6-4d60-dc7d-8478-972a0abd00a8"
                        />
                        <ObjectionsresponsecardbodyItem divText="Great question about pricing! For 15 team members, you'll find our pricing quite competitive. We actually have a calculator on our website that can give you an exact quote, but I can help you right now. Would you prefer monthly billing or annual with a 20% discount? I can also arrange a quick demo call to show how other teams your size are getting 3x ROI with our solution." />
                        <ObjectionresponsebotItem />
                      </div>
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
              <div className="messaging-sidebar-h1">Nudge Tools</div>
              <div
                data-w-id="650a9fdf-eb40-62bd-8ac2-9a0cde2ee1cc"
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
                data-wf-page-id="688b61ee631f6165f14725d8"
                data-wf-element-id="650a9fdf-eb40-62bd-8ac2-9a0cde2ee1cf"
              >
                <div className="sidebar-contact-body gap-20">
                  <div className="nudge-group">
                    <div className="nudge-header-div">
                      <div className="messaging-sidebar-h2-style2">
                        Testimonials
                      </div>
                      <div className="testimonials-action-btndiv">
                        <TestimonialsactionbtnItem src="../images/Frame_39.svg" />
                        <TestimonialsactionbtnItem src="../images/Frame_27.svg" />
                      </div>
                    </div>
                    <div className="nudge-testimonials-card">
                      <div className="nudege-tesimonial-top-div">
                        <img
                          src="../images/img_1img.png"
                          loading="lazy"
                          width="40"
                          height="40"
                          alt=""
                          className="nudege-tesimonial-image"
                        />
                        <div className="nudege-tesimonial-details-div">
                          <div className="nudege-tesimonial-details-stars-div">
                            <div className="nudege-tesimonial-details-star-icon">
                              <img
                                src="../images/Frame_32.svg"
                                loading="lazy"
                                width="13.5"
                                height="12"
                                alt=""
                                className="frame-style-30"
                              />
                            </div>
                            <div className="nudege-tesimonial-details-star-icon">
                              <img
                                src="../images/Frame_37.svg"
                                loading="lazy"
                                width="13.5"
                                height="12"
                                alt=""
                                className="frame-style-30"
                              />
                            </div>
                            <div className="nudege-tesimonial-details-star-icon">
                              <img
                                src="../images/Frame_32.svg"
                                loading="lazy"
                                width="13.5"
                                height="12"
                                alt=""
                                className="frame-style-30"
                              />
                            </div>
                            <div className="nudege-tesimonial-details-star-icon">
                              <img
                                src="../images/Frame_37.svg"
                                loading="lazy"
                                width="13.5"
                                height="12"
                                alt=""
                                className="frame-style-30"
                              />
                            </div>
                            <div className="nudege-tesimonial-details-star-icon">
                              <img
                                src="../images/Frame_32.svg"
                                loading="lazy"
                                width="13.5"
                                height="12"
                                alt=""
                                className="frame-style-30"
                              />
                            </div>
                          </div>
                          <div className="nudge-testimonial-name">
                            Michael Thompson
                          </div>
                          <div className="nudge-testimonial-position">
                            CTO at TechFlow
                          </div>
                        </div>
                      </div>
                      <div className="nudge-testimonial-textdiv">
                        <div className="nudge-testimonial-text">
                          "The pricing was actually much more reasonable than we
                          expected for the value we're getting. Our team of 20
                          saw ROI within the first month!"
                        </div>
                      </div>
                      <div className="nudge-testimonial-slider-dot-div">
                        <div className="nudge-testimonial-slider-dot-div-center">
                          <div className="nudge-testimonial-slider-dot current"></div>
                          <div className="nudge-testimonial-slider-dot"></div>
                          <div className="nudge-testimonial-slider-dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nudge-group">
                    <div className="messaging-sidebar-h2-style2">
                      Countdown Timer
                    </div>
                    <div className="countdown-card">
                      <div className="countdown-card-top">
                        <div className="countdown-card-offer-text">
                          Offer ends in:
                        </div>
                        <div className="countdown-card-btn-row">
                          <CountdowncardlinkItem divText="Edit" />
                          <CountdowncardlinkItem divText="Reset" />
                        </div>
                      </div>
                      <div className="countdown-card-main-div">
                        <CountdowncardfieldcontainItem
                          placeholder="2"
                          divText="Hours"
                        />
                        <CountdowncardcoloncolItem />
                        <CountdowncardfieldcontainItem
                          placeholder="15"
                          divText="Minutes"
                        />
                        <CountdowncardcoloncolItem />
                        <CountdowncardfieldcontainItem
                          placeholder="42"
                          divText="Seconds"
                        />
                      </div>
                      <div className="countdown-card-discount-div">
                        <input
                          className="textfield w-input"
                          maxlength="256"
                          name="field-2"
                          data-name="Field 2"
                          placeholder="Special 20% team discount"
                          type="text"
                          id="field-2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="nudge-group">
                    <div className="messaging-sidebar-h2-style2">
                      Urgency Types
                    </div>
                    <div className="urgencytype-list">
                      <div className="urgency-type-item">
                        <div className="urgency-type-left">
                          <div className="input-6">
                            <div className="svg-5">
                              <img
                                src="../images/Frame_28.svg"
                                loading="lazy"
                                width="14"
                                height="12"
                                alt=""
                                className="frame-style-31"
                              />
                            </div>
                          </div>
                          <div className="text-78">Scarcity</div>
                        </div>
                        <UrgencytypelinkItem />
                      </div>
                      <UrgencytypeitemItem divText="Social Proof" />
                      <UrgencytypeitemItem divText="Time-Limited" />
                    </div>
                  </div>
                  <div className="nudge-group">
                    <div className="messaging-sidebar-h2-style2">
                      Quick Presets
                    </div>
                    <div className="quickpresents-options">
                      <QuickpresentsitemItem itemText="Limited-time discount" />
                      <QuickpresentsitemItem itemText="Free onboarding session" />
                      <QuickpresentsitemItem itemText="Case study highlight" />
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

export default MaincontentLayout380;
