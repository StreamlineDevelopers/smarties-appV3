import React from 'react';
import FormhddivItem from './FormhddivItem';
import FormrowItem from './FormrowItem';
import Formcol2Item1 from './Formcol2Item1';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';

const MaincontentLayout = ({ props }) => {
  return (
    <div
      id="w-node-_05b33297-3264-78f0-6cd7-11cbdb547438-f14725b3"
      className="main-content"
    >
      <div className="scroll-content">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Account</div>
          </div>
        </div>
        <div className="mainwidth-control horizontal">
          <div className="account-div">
            <div className="account_profpic-container">
              <div className="account_profpic-left">
                <div className="avatar_div">
                  <img
                    src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681cd914c40eb2f6d37be74a_avatar.png"
                    loading="lazy"
                    width="94"
                    height="94"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="account_profpic-textcontain">
                  <div className="profpic-label">Profile Picture</div>
                  <div className="profpic-description">
                    PNG, JPEG under 15MB
                  </div>
                </div>
              </div>
              <div className="account_profpic-right">
                <a href="#" className="btn-style1 outline w-inline-block">
                  <div>Upload New Picture</div>
                </a>
              </div>
            </div>
            <div className="w-form">
              <form
                id="wf-form-account-form"
                name="wf-form-account-form"
                data-name="account form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725b3"
                data-wf-element-id="05b33297-3264-78f0-6cd7-11cbdb547476"
              >
                <div className="form-body account">
                  <div className="account_row">
                    <FormhddivItem divText="Profile Information" />
                    <FormrowItem
                      label="Full Name"
                      name="full-name"
                      dataName="full name"
                      type="text"
                      id="full-name"
                      label1="Email Address"
                      name1="email-address"
                      dataName1="email address"
                      type1="email"
                      id1="email-address"
                    />
                    <FormrowItem
                      label="Phone Number"
                      name="phone-number"
                      dataName="phone number"
                      type="tel"
                      id="phone-number"
                      label1="Location"
                      name1="location"
                      dataName1="location"
                      type1="text"
                      id1="location"
                    />
                  </div>
                  <div className="account_row">
                    <FormhddivItem divText="Password" />
                    <FormrowItem
                      label="Current Password"
                      name="current-password"
                      dataName="current password"
                      type="password"
                      id="current-password"
                      label1="New Password"
                      name1="new-password"
                      dataName1="new password"
                      type1="password"
                      id1="new-password"
                    />
                  </div>
                  <div className="account_row noborder">
                    <FormhddivItem divText="Account Information" />
                    <div className="form-row horizontal">
                      <Formcol2Item1
                        label="Member Since"
                        divText="March 2023"
                      />
                      <Formcol2Item1 label="Account Type" divText="Premium" />
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

export default MaincontentLayout;
