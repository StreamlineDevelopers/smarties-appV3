import React from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import InboxitemItem457 from './InboxitemItem457';
import MenuitemItem50 from './MenuitemItem50';
import ConfiginfoItem from './ConfiginfoItem';
import FormhddivrightItem465 from './FormhddivrightItem465';
import Noticedivstyle2Item458 from './Noticedivstyle2Item458';
import DomainlistItem from './DomainlistItem';
import DomaindivItem from './DomaindivItem';

const MaincontentLayout469 = ({ props }) => {
  return (
    <div
      id="w-node-_63a9b66e-78d6-7eee-4643-e54302a9ad4b-f14725bb"
      className="main-content"
    >
      <div className="scroll-content flex">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Widget Configuration</div>
          </div>
        </div>
        <div className="mainwidth-control horizontal stretch">
          <div className="sidebar-temp">
            <a
              data-w-id="63a9b66e-78d6-7eee-4643-e54302a9ad55"
              href="#"
              className="btn-style1 w-inline-block"
            >
              <div className="btn-icon">
                <img src="../images/Search_1.svg" loading="lazy" alt="" />
              </div>
              <div>Create Configuration</div>
            </a>
            <div className="search-formblock w-form">
              <form
                id="wf-form-search-form"
                name="wf-form-search-form"
                data-name="search form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725bb"
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
              <InboxitemItem457 divText="Configuration 01" />
              <InboxitemItem457 divText="Configuration 02" />
            </div>
          </div>
          <div className="mainbody-col">
            <div className="w-form">
              <form
                id="wf-form-configuration-form"
                name="wf-form-configuration-form"
                data-name="configuration form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725bb"
                data-wf-element-id="63a9b66e-78d6-7eee-4643-e54302a9ad71"
              >
                <div className="form-body">
                  <div className="phonenumber-group">
                    <div className="phonenumber-top">
                      <div className="phonenumber-topleft">
                        <div className="settings-title">Configuration 1</div>
                      </div>
                      <div className="phonenumber-topright">
                        <div className="assistant-buttons-div">
                          <div className="button-save">
                            <div>Save</div>
                            <div className="fluentchat-28-regular">
                              <img
                                loading="lazy"
                                src="../images/smarties-save.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="button-test">
                            <div className="button-label">Test</div>
                            <img
                              width="15"
                              height="15"
                              alt=""
                              src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0b46c4c1e4c0be5746_smarties-icon-play.svg"
                              loading="lazy"
                              className="smarties-icon-play"
                            />
                          </div>
                          <div className="button-chat">
                            <div className="button-label">Trash</div>
                            <img
                              loading="lazy"
                              src="../images/smarties-icon-trash-mini.svg"
                              alt=""
                              className="smarties-icon-play"
                            />
                          </div>
                          <div className="assistant-menu">
                            <div
                              data-w-id="63a9b66e-78d6-7eee-4643-e54302a9ad8a"
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
                  </div>
                  <div className="phonenumber-group">
                    <div className="config-info-contain">
                      <ConfiginfoItem label="Name" divText="Configuration 1" />
                      <ConfiginfoItem label="Site ID" divText="97dcd1234567" />
                      <ConfiginfoItem
                        label="Widget URL"
                        divText="97dcd1234567"
                      />
                      <ConfiginfoItem label="Secret" divText="97dcd1234567" />
                    </div>
                  </div>
                  <div className="phonenumber-group">
                    <div className="form-row">
                      <div className="form-control">
                        <div className="popup-form-hd-div">
                          <div className="form-hd-div-left">
                            <div className="table-date-hd-text">Domain</div>
                          </div>
                          <FormhddivrightItem465 dataWId="5cefa7b3-c9ea-0bf4-45d3-c9b1b57787a2" />
                        </div>
                        <Noticedivstyle2Item458 />
                        <DomainlistItem
                          dataWId="5cefa7b3-c9ea-0bf4-45d3-c9b1b57787b1"
                          dataWId1="1f6da53a-f3c8-f118-6553-1dcc6524de19"
                        />
                        <DomaindivItem
                          id="domain-name-2"
                          dataWId="5cefa7b3-c9ea-0bf4-45d3-c9b1b57787ca"
                          dataWId1="5cefa7b3-c9ea-0bf4-45d3-c9b1b57787cd"
                        />
                      </div>
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

export default MaincontentLayout469;
