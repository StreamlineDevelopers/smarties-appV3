import React, { useEffect, useRef, useState } from 'react';
import SidebarLayout from '../components-v2/SidebarLayout';
import MaincontentLayout from '../components-v2/MaincontentLayout';
import TopbarLayout from '../components-v2/TopbarLayout';
import FormhddivItem from '../components-v2/FormhddivItem';
import FormrowItem from '../components-v2/FormrowItem';
import Formcol2Item from '../components-v2/Formcol2Item';
import FormcontrolItem from '../components-v2/FormcontrolItem';
import Formcol2Item0 from '../components-v2/Formcol2Item0';
import FileinforowItem from '../components-v2/FileinforowItem';
import WformdoneItem from '../components-v2/WformdoneItem';
import WformfailItem from '../components-v2/WformfailItem';
import SidemenulabeldivItem from '../components-v2/SidemenulabeldivItem';
import SidemenuitemItem from '../components-v2/SidemenuitemItem';
import ReusableItem from '../components-v2/ReusableItem';
import SvgiconItem from '../components-v2/SvgiconItem';
import Layer1Item from '../components-v2/Layer1Item';
import ReusableItem1 from '../components-v2/ReusableItem1';
import SvgiconItem2 from '../components-v2/SvgiconItem2';
import Layer1Item3 from '../components-v2/Layer1Item3';
import { SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import Client from '../../api/client/Client';
import AccountWatcher from '../../api/client/watchers/AccountWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import { Toaster } from 'sonner';
import TopbarLayout5 from '../components-v2/TopbarLayout5';
import AvatarInitials from '../custom/AvatarInitials';
import BillingWatcher from '../../api/client/watchers/BillingWatcher';
import Loader from '../components-v2/common/Loader';
import moment from 'moment';

const Account = () => {
  const [formData, setFormData] = useState({
    phone: '',
    location: '',
    currentPassword: '',
    newPassword: ''
  });

  const watcher = useRef(AccountWatcher).current;
  const billingWatcher = useRef(BillingWatcher).current;
  useWatcher(watcher);
  useWatcher(billingWatcher);

  const user = watcher.CurrentUser
  const subscriptionDetails = billingWatcher.getValue("subscriptionDetails");

  handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
  useEffect(() => {
    if (user?.profile) {
      setFormData({
        phone: user.profile.phone || '',
        location: user.profile.address || '',

      });
    }
  }, []);

  return (
    <>

      <div className="page-wrap">
        <MaincontentLayout>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Account</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            <div className="mainwidth-control horizontal">
              <div className="account-div">
                {/* <div className="account_profpic-container">
                  <div className="account_profpic-left">
                    <div className="avatar_div">
                      <img src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681cd914c40eb2f6d37be74a_avatar.png" loading="lazy" width="94" height="94" alt="" className="avatar" />
                    </div>
                    <div className="account_profpic-textcontain">
                      <div className="profpic-label">Profile Picture</div>
                      <div className="profpic-description">PNG, JPEG under 15MB</div>
                    </div>
                  </div>
                  <div className="account_profpic-right">
                    <a href="#" className="btn-style1 outline w-inline-block">
                      <div>Upload New Picture</div>
                    </a>
                  </div>
                </div> */}
                <div className="w-form">
                  <form id="wf-form-account-form" name="wf-form-account-form" data-name="account form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a74" data-wf-element-id="05b33297-3264-78f0-6cd7-11cbdb547476">
                    <div className="form-body account">
                      <div className="account_row">
                        <FormhddivItem textDiv="Profile Information" />
                        {/* <FormrowItem textDiv="Full Name" name="full-name" dataName="full name" type="text" id="full-name" textDiv1="Email Address" name1="email-address" dataName1="email address" type1="email" id1="email-address" /> */}
                        <div className="formcol2">
                          <div className="form-control">
                            <div className="form-label">Email Address</div>
                            <input disabled value={watcher.CurrentUser && watcher.CurrentUser.username} className="form-input w-input" maxlength="256" name="email-address" data-name="email address" placeholder="" type="email" id="email-address" />
                          </div>
                        </div>
                        <FormrowItem value1={formData.phone} value2={formData.location} handleInputChange={handleInputChange} textDiv="Phone Number" name="phone" dataName="phone number" type="tel" id="phone-number" textDiv1="Location" name1="location" dataName1="location" type1="text" id1="location" />
                      </div>
                      <div className="account_row">
                        <FormhddivItem textDiv="Reset Password" />
                        <FormrowItem value1={formData.currentPassword} value2={formData.newPassword} handleInputChange={handleInputChange} textDiv="New Password" name="currentPassword" dataName="current password" type="password" id="current-password" textDiv1="Confirm Password" name1="newPassword" dataName1="new password" type1="password" id1="new-password" />
                      </div>
                      <div className="account_row noborder">
                        <FormhddivItem textDiv="Account Information" />
                        <div className="form-row horizontal">
                          <Formcol2Item0 textDiv="Member Since" textDiv1={moment(subscriptionDetails.createdat).format("MMMM DD, YYYY")} />
                          <Formcol2Item0 textDiv="Account Type" textDiv1={subscriptionDetails.termprice == 0 ? "Free" : "Premium"} />
                        </div>
                      </div>
                    </div>
                  </form>
                  <button className="btn-style1 w-inline-block" onClick={(e) => {
                    e.preventDefault();
                    watcher.updateAccountDetails(formData);
                  }}>
                    Save
                  </button>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
          </div>
        </MaincontentLayout>
        <SidebarLayout />
        {/* <TopbarLayout>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a74" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div>
              </div>
            </form>
            <WformdoneItem />
            <WformfailItem />
          </div>
          <div className="topbar-right">
            <div className="topbar-icons-div"><img src="../images/vuesaxlinearmessage-question.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /><img src="../images/vuesaxlinearnotification.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /></div>
            <div className="topbar-userdropdown-toggle">
              <div className="top-user-dropdown-text">{Client.CurrentUser && Client.CurrentUser.username}</div><img src="../images/Mask-Group.svg" loading="lazy" width="38" height="38" alt="" className="topbar-user-avatar" /><img src="../images/vuesaxoutlinearrow-down.svg" loading="lazy" width="18" height="18" alt="" className="topbar-chevron-down" />
            </div>
          </div>
        </TopbarLayout> */}
        <TopbarLayout5>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                {/* <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div> */}
              </div>
            </form>
            <WformdoneItem />
            <WformfailItem />
          </div>
          <div className="topbar-right">
            {/* <div className="topbar-icons-div"><img src="../images/vuesaxlinearmessage-question.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /><img src="../images/vuesaxlinearnotification.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /></div> */}
            <div className="topbar-userdropdown-toggle">
              <div className="top-user-dropdown-text">{Client.CurrentUser && Client.CurrentUser.username}</div>
              <AvatarInitials name={Client.CurrentUser && Client.CurrentUser.username} size={38} />
              {/* <img src="../images/Mask-Group.svg" loading="lazy" width="38" height="38" alt="" className="topbar-user-avatar" /> */}
              {/* <img src="../images/vuesaxoutlinearrow-down.svg" loading="lazy" width="18" height="18" alt="" className="topbar-chevron-down" /> */}
            </div>
          </div>
        </TopbarLayout5>
      </div >
      <Toaster />


    </>
  );
};

export default Account;