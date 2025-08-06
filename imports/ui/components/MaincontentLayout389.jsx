import React from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import InboxitemItem from './InboxitemItem';
import MenuitemItem50 from './MenuitemItem50';
import FormhddivItem383 from './FormhddivItem383';
import FormrowItem384 from './FormrowItem384';
import FormrowItem387 from './FormrowItem387';
import NoticedivItem from './NoticedivItem';
import WradioItem from './WradioItem';
import Btnstyle1Item381 from './Btnstyle1Item381';

const MaincontentLayout389 = ({ props }) => {
  return (
    <div
      id="w-node-_2abaa22a-e736-543a-3594-0506323e5f2b-f14725b0"
      className="main-content"
    >
      <div className="scroll-content">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Phone Numbers</div>
          </div>
        </div>
        <div className="mainwidth-control horizontal">
          <div className="sidebar-temp">
            <a
              data-w-id="698c9acf-4c1f-533b-42ad-a27776bbd45f"
              href="#"
              className="btn-style1 w-inline-block"
            >
              <div className="btn-icon">
                <img src="../images/Search_1.svg" loading="lazy" alt="" />
              </div>
              <div>Create Phone Number</div>
            </a>
            <div className="search-formblock w-form">
              <form
                id="wf-form-search-form"
                name="wf-form-search-form"
                data-name="search form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725b0"
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
            <div className="filter-row">
              <div
                data-hover="false"
                data-delay="0"
                className="filter-dropdown w-dropdown"
              >
                <div className="filter-dropdown-toggle w-dropdown-toggle">
                  <div className="icon-2 w-icon-dropdown-toggle"></div>
                  <div className="text-block">First Part of Number</div>
                </div>
                <nav className="filterdropdown-list w-dropdown-list">
                  <a href="#" className="filter-dropdownlink w-dropdown-link">
                    First Part of Number
                  </a>
                  <a href="#" className="filter-dropdownlink w-dropdown-link">
                    Last Part of Number
                  </a>
                  <a href="#" className="filter-dropdownlink w-dropdown-link">
                    First Part of Number
                  </a>
                </nav>
              </div>
            </div>
            <div className="inbox-list">
              <InboxitemItem />
              <InboxitemItem />
              <InboxitemItem />
              <InboxitemItem />
            </div>
          </div>
          <div className="mainbody-col">
            <div className="w-form">
              <form
                id="wf-form-phone-number-form"
                name="wf-form-phone-number-form"
                data-name="phone number form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725b0"
                data-wf-element-id="66cce41b-5be8-35e9-f914-2184ebf859d1"
              >
                <div className="form-body">
                  <div className="phonenumber-group">
                    <div className="phonenumber-top">
                      <div className="phonenumber-topleft">
                        <div className="settings-title">+1 (539) 424 2274</div>
                        <div className="settings-sublabel">
                          This number was created through SMARTIES.ai
                        </div>
                      </div>
                      <div className="phonenumber-topright">
                        <div className="assistant-menu">
                          <div
                            data-w-id="7eda9f62-76ce-ce72-6c05-8e9cadebb06f"
                            className="button-menu"
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
                  <div className="phonenumber-group">
                    <FormhddivItem383
                      divText="Inbound Settings"
                      label="You can assign an assistant to the phone number so that whenever someone calls this phone number, the assistant will automatically be assigned to the call."
                    />
                    <FormrowItem384
                      label="Inbound Phone Number"
                      name="inbound-form-number"
                      dataName="inbound form number"
                      id="inbound-form-number"
                    />
                    <FormrowItem387
                      id="inbound-assistant-description"
                      name="inbound-assistant-description"
                      dataName="inbound assistant description"
                    />
                    <NoticedivItem
                      label="No Webhook available"
                      divText="Create a webhook to receive real-time updates about call events."
                    />
                    <NoticedivItem
                      label="No fallback available"
                      divText="Setup a fallback option for when your assistant can't handle a call."
                    />
                  </div>
                  <div className="phonenumber-group">
                    <FormhddivItem383
                      divText="Outbound Settings"
                      label="You can assign an outbound phone number, set up a fallback and set up a squad to be called if the assistant is not available."
                    />
                    <div className="form-row">
                      <div className="form-control horizontal">
                        <WradioItem
                          id="call-one-number"
                          value="call one number"
                          htmlFor="call-one-number"
                          label="Call one number"
                        />
                        <WradioItem
                          id="call-many-numbers"
                          value="call many numbers"
                          htmlFor="call-many-numbers"
                          label="Call many numbers (Upload CSV)"
                        />
                      </div>
                    </div>
                    <FormrowItem384
                      label="Outbound Phone Number"
                      name="outbound-phone-number"
                      dataName="outbound phone number"
                      id="outbound-phone-number"
                    />
                    <FormrowItem387
                      id="outbound-assistant-description"
                      name="outbound-assistant-description"
                      dataName="outbound assistant description"
                    />
                    <NoticedivItem
                      label="No Webhook available"
                      divText="Create a webhook to receive real-time updates about call events."
                    />
                    <NoticedivItem
                      label="No fallback available"
                      divText="Setup a fallback option for when your assistant can't handle a call."
                    />
                    <div className="form-btn-container left-align">
                      <a href="#" className="btn-style1 w-inline-block">
                        <div className="btn-icon">
                          <img
                            loading="lazy"
                            src="../images/smarties-call.svg"
                            alt=""
                          />
                        </div>
                        <div>Make a Call</div>
                      </a>
                      <Btnstyle1Item381 divText="Schedule a Call" />
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

export default MaincontentLayout389;
