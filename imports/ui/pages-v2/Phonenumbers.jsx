import React, { useEffect, useRef, useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout79 from '../components/MaincontentLayout79';
import TopbarLayout80 from '../components/TopbarLayout80';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';
import InboxitemItem from '../components/InboxitemItem';
import MenuitemItem81 from '../components/MenuitemItem81';
import FormhddivItem82 from '../components/FormhddivItem82';
import FormrowItem83 from '../components/FormrowItem83';
import FormcontrolItem84 from '../components/FormcontrolItem84';
import FormrowItem85 from '../components/FormrowItem85';
import FormcontrolItem86 from '../components/FormcontrolItem86';
import SelectfieldItem87 from '../components/SelectfieldItem87';
import NoticedivItem from '../components/NoticedivItem';
import NoticetextdivItem from '../components/NoticetextdivItem';
import NoticeactionlinkItem from '../components/NoticeactionlinkItem';
import WradioItem from '../components/WradioItem';
import Btnstyle1Item88 from '../components/Btnstyle1Item88';
import SidemenulabeldivItem from '../components/SidemenulabeldivItem';
import SidemenuitemItem from '../components/SidemenuitemItem';
import ReusableItem from '../components/ReusableItem';
import SidemenuitemItem40 from '../components/SidemenuitemItem40';
import SvgiconItem from '../components/SvgiconItem';
import Layer1Item from '../components/Layer1Item';
import ReusableItem1 from '../components/ReusableItem1';
import SvgiconItem2 from '../components/SvgiconItem2';
import Layer1Item3 from '../components/Layer1Item3';
import { SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import PhoneWatcher from '../../api/client/watchers/vapi/PhoneWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import Loader from '../components/common/Loader';
import Client from '../../api/client/Client';
import TopbarLayout5 from '../components/TopbarLayout5';
import AvatarInitials from '../custom/AvatarInitials';

const Phonenumbers = () => {
  const [ownedNumbers, setOwnedNumbers] = useState([]);
  const [availableNumbers, setAvailableNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const watcher = useRef(PhoneWatcher).current;
  useWatcher(watcher);
  const formRef = useRef(null);
  const radioRef1 = useRef(null);
  const radioRef2 = useRef(null);
  const isPhoneNumberPopupOpen = watcher.getValue('isCreatePhoneNumberPopupOpen');
  const selectedPhoneNumber = watcher.getValue('selectedPhoneNumber');
  const isSelectedNumberLoading = watcher.getValue('isSelectedNumberLoading');

  const fetchOwnedNumbers = async () => {
    watcher.setValue('isFetchingOwnedNumbers', true);
    const res = await watcher.fetchOwnedPhoneNumbers();
    setOwnedNumbers(res);
    watcher.setValue('isFetchingOwnedNumbers', false);
  };

  const handleBuyNumber = () => {
    if (selectedNumber) {
      watcher.buyPhoneNumber(selectedNumber.id);
      onClose();
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    fetchOwnedNumbers();
    // }, 3000);
  }, []);

  const isFetchingOwnedNumbers = watcher.getValue('isFetchingOwnedNumbers');

  return (
    <>

      <div className="page-wrap">
        <MaincontentLayout79>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Phone Numbers</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            <div className="mainwidth-control horizontal">
              <div className="sidebar-temp">
                <a data-w-id="698c9acf-4c1f-533b-42ad-a27776bbd45f" href="#" className="btn-style1 w-inline-block" onClick={() => watcher.setValue('isCreatePhoneNumberPopupOpen', true)}>
                  <div className="btn-icon"><img src="../images/Search.svg" loading="lazy" alt="" /></div>
                  <div>Create Phone Number</div>
                </a>
                <div className="search-formblock w-form">
                  <form id="wf-form-search-form" name="wf-form-search-form" data-name="search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a71" data-wf-element-id="9aaf37b2-a011-864e-493e-ccb9979ed0bd">
                    <div className="form-body">
                      <div className="form-row mb-0"><input className="inbox-search w-input" maxlength="256" name="search-2" data-name="Search 2" placeholder="Search" type="text" id="search-2" required /></div>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
                <div className="filter-row">
                  <div data-hover="false" data-delay="0" className="filter-dropdown w-dropdown">
                    <div className="filter-dropdown-toggle w-dropdown-toggle">
                      <div className="icon-2 w-icon-dropdown-toggle"></div>
                      <div className="text-block">First Part of Number</div>
                    </div>
                    <nav className="filterdropdown-list w-dropdown-list">
                      <a href="#" className="filter-dropdownlink w-dropdown-link">First Part of Number</a>
                      <a href="#" className="filter-dropdownlink w-dropdown-link">Last Part of Number</a>
                      <a href="#" className="filter-dropdownlink w-dropdown-link">First Part of Number</a>
                    </nav>
                  </div>
                </div>
                {isFetchingOwnedNumbers === true ? <Loader />
                  : isFetchingOwnedNumbers === false ? <div className="inbox-list">
                    {ownedNumbers.length > 0 ? ownedNumbers.map((number, index) => {
                      return <InboxitemItem key={index} name={number.formattedNumber} onClick={() => {
                        watcher.setValue('isSelectedNumberLoading', true);
                        watcher.setValue('selectedPhoneNumber', number);
                        watcher.setValue('isSelectedNumberLoading', false);
                      }} />;
                    }) : <div>No phone numbers found</div>}
                  </div>
                    : null}
              </div>
              {isSelectedNumberLoading === true ? <Loader />
                : isSelectedNumberLoading === false ?
                  <div className="mainbody-col">
                    <div className="w-form" >
                      <form ref={formRef} id="wf-form-phone-number-form" name="wf-form-phone-number-form" data-name="phone number form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a71" data-wf-element-id="66cce41b-5be8-35e9-f914-2184ebf859d1">
                        <div className="form-body">
                          <div className="phonenumber-group">
                            <div className="phonenumber-top">
                              <div className="phonenumber-topleft">
                                <div className="settings-title">{selectedPhoneNumber.id}</div>
                                <div className="settings-sublabel">This number was created through SMARTIES.ai</div>
                              </div>
                              <div className="phonenumber-topright">
                                <div className="assistant-menu">
                                  <div data-w-id="7eda9f62-76ce-ce72-6c05-8e9cadebb06f" className="button-menu"><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg" loading="lazy" className="smarties-icon-menu" /></div>
                                  <div className="menu-dropdown">
                                    <MenuitemItem81 src="../images/smarties-icon-version.svg" textDiv="Version History" />
                                    <MenuitemItem81 src="../images/smarties-icon-document.svg" textDiv="Call Logs" />
                                    <MenuitemItem81 src="../images/smarties-icon-duplicate.svg" textDiv="Duplicate" />
                                    <MenuitemItem81 src="../images/smarties-icon-delete_outline.svg" textDiv="Delete" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="phonenumber-group">
                            <FormhddivItem82 textDiv="Inbound Settings" textDiv1="You can assign an assistant to the phone number so that whenever someone calls this phone number, the assistant will automatically be assigned to the call." />
                            <FormrowItem83 textDiv="Inbound Phone Number" name="inbound-form-number" dataName="inbound form number" id="inbound-form-number" />
                            <FormrowItem85 id="inbound-assistant-description" name="inbound-assistant-description" dataName="inbound assistant description" />
                            <NoticedivItem textDiv="No Webhook available" textDiv1="Create a webhook to receive real-time updates about call events." />
                            <NoticedivItem textDiv="No fallback available" textDiv1="Setup a fallback option for when your assistant can't handle a call." />
                          </div>
                          <div className="phonenumber-group">
                            <FormhddivItem82 textDiv="Outbound Settings" textDiv1="You can assign an outbound phone number, set up a fallback and set up a squad to be called if the assistant is not available." />
                            <div className="form-row">
                              <div className="form-control horizontal"><WradioItem inputRef={radioRef1} id="call-one-number" value="call one number" htmlFor="call-one-number" textSpan="Call one number" /><WradioItem inputRef={radioRef2} id="call-many-numbers" value="call many numbers" htmlFor="call-many-numbers" textSpan="Call many numbers (Upload CSV)" /></div>
                            </div>
                            <FormrowItem83 textDiv="Outbound Phone Number" name="outbound-phone-number" dataName="outbound phone number" id="outbound-phone-number" />
                            <FormrowItem85 id="outbound-assistant-description" name="outbound-assistant-description" dataName="outbound assistant description" />
                            <NoticedivItem textDiv="No Webhook available" textDiv1="Create a webhook to receive real-time updates about call events." />
                            <NoticedivItem textDiv="No fallback available" textDiv1="Setup a fallback option for when your assistant can't handle a call." />
                            <div className="form-btn-container left-align">
                              <a href="#" className="btn-style1 w-inline-block" onClick={() => watcher.handleSaveNumber(formRef.current, formRef2.current)}>
                                <div className="btn-icon"><img loading="lazy" src="../images/smarties-call.svg" alt="" /></div>
                                <div>Make a Call</div>
                              </a>
                              <Btnstyle1Item88 textDiv="Schedule a Call" />
                            </div>
                          </div>
                        </div>
                      </form>
                      <WformdoneItem />
                      <WformfailItem />
                    </div>
                  </div>
                  : null}
            </div>
          </div>
        </MaincontentLayout79>
        <SidebarLayout>
          <div className="logo-div"><img width="200.4666748046875" height="31" alt="" src="../images/smarties_logo-temp-330.svg" loading="lazy" className="smarties_logo-arvin-1" /></div>
          <div className="sidemenu-list">
            <div className="sidemenu-top">
              <SidemenulabeldivItem textDiv="OVERVIEW" />
              {SIDEBARTOP_OVERVIEW.map((item, index) => (
                <SidemenuitemItem key={index} name={item.name} icon={item.icon} />
              ))}
              <SidemenulabeldivItem textDiv="Settings" />
              {SIDEBARTOP_SETTINGS.map((item, index) => (
                <SidemenuitemItem key={index} name={item.name} icon={item.icon} path={item.path} />
              ))}
            </div>
            <div className="sidemenu-bot">
              <button aria-current="page" className={`sidemenu-item w-inline-block`} onClick={() => {
                Client.SignOut();
              }} >
                <img src="../images/smarties-icon-signout.svg" className="svg-icon w-embed" />
                <div>Sign out</div>
              </button>
            </div>
          </div>
        </SidebarLayout>
        {/* <TopbarLayout80>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a71" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
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
              <div className="top-user-dropdown-text">{Client.CurrentUser && Client.CurrentUser.username}</div>
              <img src="../images/Mask-Group.svg" loading="lazy" width="38" height="38" alt="" className="topbar-user-avatar" />
              <img src="../images/vuesaxoutlinearrow-down.svg" loading="lazy" width="18" height="18" alt="" className="topbar-chevron-down" />
            </div>
          </div>
        </TopbarLayout80> */}
        <TopbarLayout5>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                {/* <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div> */}
              </div>
            </form>
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
        <div className="popup-createphonenumber" style={{ display: isPhoneNumberPopupOpen ? "flex" : "none" }}>
          <div className="popup-card _w-50">
            <div className="card-settings-hd-div">
              <div className="card-settings-hd">Create Phone Number</div>
            </div>
            <div className="w-form">
              <form id="wf-form-create-phone-number-form" name="wf-form-create-phone-number-form" data-name="create phone number form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a71" data-wf-element-id="2abaa22a-e736-543a-3594-0506323e6095">
                <div className="form-body">
                  <div className="form-row"><input className="inbox-search w-input" maxlength="256" name="search-phone-number" data-name="search phone number" placeholder="Search Phone number" type="text" id="search-phone-number" required onChange={async (e) => {
                    const res = await watcher.searchAvailableNumbers(e.target.value);
                    setAvailableNumbers(res);
                    setSelectedNumber(null); // Reset selection when searching
                  }} /></div>
                  <div className="phone-numbers-list">
                    {availableNumbers.length > 0 && availableNumbers.map((number) => (
                      <div
                        key={number.id}
                        className={`phone-number-item ${selectedNumber?.id === number.id ? 'selected' : ''}`}
                        onClick={() => setSelectedNumber(number)}
                        style={{
                          padding: '10px',
                          margin: '5px 0',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          backgroundColor: selectedNumber?.id === number.id ? '#e6f3ff' : 'white'
                        }}
                      >
                        {number.number} - {number.countryCode}
                      </div>
                    ))}
                  </div>
                  <div className="notice-div">
                    <div className="notice-icon"><img loading="lazy" src="../images/smarties-alert-circle.svg" alt="" /></div>
                    <div className="notice-text">SMARTIES Phone Numbers are free of charge, and limited to 10 numbers per wallet.</div>
                  </div>
                  <div className="form-btn-container mb-20">
                    <Btnstyle1Item88 textDiv="Cancel" onClick={() => watcher.setValue('isCreatePhoneNumberPopupOpen', false)} />
                    <a href="#" className="btn-style1" onClick={handleBuyNumber}>
                      <div>Create</div>
                    </a>
                  </div>
                  <div className="notice-div bg-blue">
                    <div className="notice-icon"><img loading="lazy" src="../images/smarties-alert-circle-blue.svg" alt="" /></div>
                    <div className="notice-text">Functionality to create Vapi phone numbers is only available for the US. For phone numbers from other regions, please use the Import Phone Numbers feature.</div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div data-w-id="2abaa22a-e736-543a-3594-0506323e60cd" className="popup-close" onClick={() => watcher.setValue('isCreatePhoneNumberPopupOpen', false)}><img src="../images/smarties-x.svg" loading="lazy" alt="" /></div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Phonenumbers;