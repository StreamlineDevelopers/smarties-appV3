import React from 'react';
import MaincontentLayout45 from '../components/MaincontentLayout45';
import SidebarLayout44 from '../components/SidebarLayout44';
import TopbarLayout37 from '../components/TopbarLayout37';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';

const Assistant = () => {
  return (
    <>
      <div className="page-wrap">
        <MaincontentLayout45 />
        <SidebarLayout44 />
        <TopbarLayout37 />
        <div className="popup-createphonenumber">
          <div className="popup-card _w-50">
            <div className="card-settings-hd-div">
              <div className="card-settings-hd">Create Phone Number</div>
            </div>
            <div className="w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725b5"
                data-wf-element-id="dd817661-5700-ca78-940f-32045820c7b8"
              >
                <div className="form-body">
                  <div className="form-row">
                    <input
                      className="inbox-search w-input"
                      maxlength="256"
                      name="field-3"
                      data-name="Field 3"
                      placeholder="Search Phone number"
                      type="text"
                      id="field-3"
                      required
                    />
                  </div>
                  <div className="notice-div">
                    <div className="notice-icon">
                      <img
                        src="../images/smarties-alert-circle.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="notice-text">
                      SMARTIES Phone Numbers are free of charge, and limited to
                      10 numbers per wallet.
                    </div>
                  </div>
                  <div className="form-btn-container mb-20">
                    <a href="#" className="btn-style1 outline">
                      <div>Cancel</div>
                    </a>
                    <a href="#" className="btn-style1">
                      <div>Create</div>
                    </a>
                  </div>
                  <div className="notice-div bg-blue">
                    <div className="notice-icon">
                      <img
                        src="../images/smarties-alert-circle-blue.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="notice-text">
                      Functionality to create Vapi phone numbers is only
                      available for the US. For phone numbers from other
                      regions, please use the Import Phone Numbers feature.
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id="dd817661-5700-ca78-940f-32045820c7d3"
              className="popup-close"
            >
              <img src="../images/smarties-x.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
        <div
          id="w-node-_2f84a106-7b03-6bbf-546e-055f10d4edd2-f14725b5"
          className="chat-wrap"
        >
          <div
            data-w-id="5e893b25-49be-ebb6-93d8-223b702d8b87"
            className="chat-icon-btn"
          >
            <img loading="lazy" src="../images/smarties-head.png" alt="" />
            <div className="chatmenu-avatar">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67ee6a2e2b4993b208083866/67efbf691923fc6908f56d0c_smarties-icon-chat.svg"
                alt=""
                className="image-100"
              />
            </div>
          </div>
          <div className="chat-main">
            <div className="chat-main-top">
              <div className="text-assistant-name smaller">Assistant 1</div>
              <div
                data-w-id="e7c02759-5e85-ca82-bed6-e0d41ef45c4d"
                className="chat-close"
              >
                <img src="../images/smarties-x.svg" loading="lazy" alt="" />
              </div>
            </div>
            <div className="chat-content">
              <div className="smartie-bubble-container">
                <div className="smarties-avatar-small"></div>
                <div>
                  <div className="smartie-bubble">
                    <div>Hello! How can we help you today?</div>
                  </div>
                  <div className="chat-time">12:59:09 PM</div>
                </div>
              </div>
              <div className="user-bubble-container">
                <div className="user-bubble">
                  <div>
                    Tell me about your company and what does your product do.
                  </div>
                </div>
                <div className="chat-time">12:59:09 PM</div>
              </div>
            </div>
            <div className="write-chat">
              <div className="chat-form-div">
                <div className="form-block w-form">
                  <form
                    id="wf-form-chat-form"
                    name="wf-form-chat-form"
                    data-name="chat form"
                    method="get"
                    className="chat-form"
                    data-wf-page-id="688b61ee631f6165f14725b5"
                    data-wf-element-id="af5fe9b4-ecff-04c7-4715-fdcbb803b348"
                  >
                    <div className="textarea-div">
                      <textarea
                        id="chatfield"
                        name="chatfield"
                        maxlength="5000"
                        data-name="Chatfield"
                        placeholder="Write your message here..."
                        className="chat-type-area w-input"
                      ></textarea>
                    </div>
                    <div className="button-send">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/67ee6a2e2b4993b208083866/67eea4c90fdd2d72ba32b16a_smarties-button-send.svg"
                        alt=""
                      />
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assistant;
