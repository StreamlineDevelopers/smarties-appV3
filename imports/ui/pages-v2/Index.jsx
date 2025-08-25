import React, { useEffect, useRef } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout54 from '../components/MaincontentLayout54';
import TopbarLayout5 from '../components/TopbarLayout5';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';
import DashboardheadertextItem from '../components/DashboardheadertextItem';
import DbstatcardItem from '../components/DbstatcardItem';
import DbstatcardleftItem from '../components/DbstatcardleftItem';
import DbstatvaluecontainItem from '../components/DbstatvaluecontainItem';
import DbstattagItem from '../components/DbstattagItem';
import DashboardassistantItem from '../components/DashboardassistantItem';
import DashboardassistantleftItem from '../components/DashboardassistantleftItem';
import AssistanttextcontentItem from '../components/AssistanttextcontentItem';
import DashboardassistantrightItem from '../components/DashboardassistantrightItem';
import DbtagItem from '../components/DbtagItem';
import DashboardactivityfeedItem from '../components/DashboardactivityfeedItem';
import ActivityfeedtextcontentItem from '../components/ActivityfeedtextcontentItem';
import DbcardtitleItem from '../components/DbcardtitleItem';
import SidemenulabeldivItem from '../components/SidemenulabeldivItem';
import ReusableItem from '../components/ReusableItem';
import SidemenuitemItem56 from '../components/SidemenuitemItem56';
import SvgiconItem from '../components/SvgiconItem';
import Layer1Item from '../components/Layer1Item';
import ReusableItem1 from '../components/ReusableItem1';
import SidemenuitemItem57 from '../components/SidemenuitemItem57';
import SvgiconItem2 from '../components/SvgiconItem2';
import Layer1Item3 from '../components/Layer1Item3';
import CardsettingshddivItem from '../components/CardsettingshddivItem';
import FormrowItem58 from '../components/FormrowItem58';
import FormcontrolItem59 from '../components/FormcontrolItem59';
import FormrowItem60 from '../components/FormrowItem60';
import FormcontrolItem61 from '../components/FormcontrolItem61';
import FormcontrolItem62 from '../components/FormcontrolItem62';
import FormbtncontainerItem from '../components/FormbtncontainerItem';
import Btnstyle1Item63 from '../components/Btnstyle1Item63';
import Btnstyle1Item64 from '../components/Btnstyle1Item64';
import ListitemItem from '../components/ListitemItem';
import SidemenuitemItem from '../components/SidemenuitemItem';
import { SIDEBARBOT_SETTINGS, SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import Client from '../../api/client/Client';
import AvatarInitials from '../custom/AvatarInitials';
import AssistantWatcher from '../../api/client/watchers/vapi/AssistantWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const assistantWatcher = useRef(AssistantWatcher).current;
  useWatcher(assistantWatcher);
  const navigate = useNavigate();

  const latestAssistants = assistantWatcher.Assistants;
  useEffect(() => {
    assistantWatcher.fetchAllAssistants();

    return () => {
      assistantWatcher.clear();
    };
  }, []);

  return (
    <>

      <div className="page-wrap">
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
        <MaincontentLayout54>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Dashboard</div>
                <div className="db-quickaction-text">Setup and manage your AI assistants</div>
              </div>
              <a className="btn-style1 w-inline-block" onClick={() => navigate('/assistant', { state: { openModal: true } })}>
                <div className="btn-icon"><img src="images/Search.svg" loading="lazy" alt="" /></div>
                <div>Create Assistant</div>
              </a>
            </div>
            <div className="mainwidth-control">
              <div className="dashboard-group">
                <DashboardheadertextItem textDiv="OVERVIEW" />
                <div className="db-stat-card-contain">
                  <DbstatcardItem textDiv="Total Assistants" textDiv1={latestAssistants.length.toString()} src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg" textDiv2="+33%" />
                  {/* <DbstatcardItem textDiv="Total Interactions" textDiv1="2,547" src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccff12d401a801aff8b_db-stat-arrow.svg" textDiv2="+12%" /> */}
                  {/* <DbstatcardItem textDiv="Accuracy Rate" textDiv1="94.7%" src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg" textDiv2="+2.3%" />
                  <div className="db-stat-card">
                    <div className="db-stat-card-left">
                      <div className="stat-title">Monthly Cost</div>
                      <div className="db-stat-value-contain">
                        <div className="stat-value">$49.00</div>
                        <div className="db-stat-value-sub">of $75 limit</div>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="dashboard-group">
                <DashboardheadertextItem textDiv="QUICK ACTIONS" />
                <div className="dashboard-quickactions-div">
                  <a data-w-id="c4da4dbd-0538-3352-f2c2-ce7bd3daf02e" href="#" className="dashboard-quickactions w-inline-block">
                    <div className="card-icon"><img src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcd735c29814edecfeac5_Upload.svg" loading="lazy" width="25" height="25" alt="" className="card-icon-image" /></div>
                    <div className="db-quickaction-textcontent">
                      <div className="db-quickaction-hd-text">Create from Document</div>
                      <div className="db-quickaction-text">Upload PDF, DOCX, or TXT files to instantly create an assistant. </div>
                      <div className="db-actionlink">
                        <div className="db-actionlink-text">Upload Document</div><img src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcd73cdae71b143933bc8_Arrow-right.svg" loading="lazy" width="20" height="20" alt="" className="card-icon-image" />
                      </div>
                    </div>
                  </a>
                  <a data-w-id="43e2bb55-ffe1-0d32-4992-4bf4aad5a054" href="#" className="dashboard-quickactions w-inline-block">
                    <div className="card-icon blue"><img src="images/Mic.svg" loading="lazy" width="25" height="25" alt="" className="card-icon-image" /></div>
                    <div className="db-quickaction-textcontent">
                      <div className="db-quickaction-hd-text">Create from Voice</div>
                      <div className="db-quickaction-text">Record your instructions to create a voice-trained assistant</div>
                      <div className="db-actionlink">
                        <div className="db-actionlink-text text-blue">Start Recording</div><img src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcd73b86c74e8844487fe_Arrow-right.svg" loading="lazy" width="20" height="20" alt="" className="card-icon-image" />
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}
              <div className="dashboard-col-group">
                <div className="dashboard-group _w-60">
                  <div className="section-header">
                    <DashboardheadertextItem textDiv="RECENT ASSISTANTS" />
                    {/* <a href="/assistant" className="link-style1">View All</a> */}
                  </div>
                  <div className="db-recentassistants-card">
                    {latestAssistants.length ? latestAssistants.map((item, index) => (
                      <DashboardassistantItem key={index} name={item.name} createdAt={item.createdat} />
                    )) : <div className="no-assistants">No assistants found.</div>}
                  </div>
                </div>
                {/* <div className="dashboard-group stretch">
                  <DashboardheadertextItem textDiv="ACTIVITY FEED" />
                  <div className="db-recentassistants-card">
                    <DashboardactivityfeedItem />
                    <DashboardactivityfeedItem />
                    <DashboardactivityfeedItem />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </MaincontentLayout54 >
        <SidebarLayout />
        <div className="popup-upload-document">
          <div className="popup-card">
            <CardsettingshddivItem textDiv="Upload Documents" />
            <div className="w-form">
              <form id="wf-form-upload-doc-form" name="wf-form-upload-doc-form" data-name="upload doc form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a6d" data-wf-element-id="1de059f2-77c2-8d93-3a9c-b53409cc6a0f">
                <div className="form-body">
                  <FormrowItem58 id="assistant-name" />
                  <FormrowItem60 id="assistant-description" />
                  <div className="form-row">
                    <FormcontrolItem62 textDiv="Upload Documents" />
                    <div className="file-upload-base">
                      <div className="file-upload-content">
                        <div className="fileupload-icon"><img width="20" height="20" alt="" src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681cad4bdaec95b6d81530f7_upload-cloud.svg" loading="lazy" className="upload-cloud" /></div>
                        <div className="file-upload-texts">
                          <div className="fileupload-label">
                            <a href="#" className="spanlink-upload">Click to upload</a> or drag and drop
                          </div>
                          <div className="fileupload-sublabel">SVG, PNG, JPG or GIF (max. 800x400px)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <FormcontrolItem62 textDiv="Uploaded Files (1)" />
                    <div className="uploadedfile-item">
                      <div className="uploadeditem-icon"><img loading="lazy" src="images/smarties-file.svg" alt="" /></div>
                      <div className="uploadeditem-content">
                        <div className="uploadeditem-left">
                          <div className="uploadeditem-title">Dashboard prototype recording.mp4</div>
                          <div className="uploadeditem-filesize">16 MB</div>
                          <div className="progressbar-div">
                            <div className="progress-bar-container">
                              <div className="progress-bar _w-40"></div>
                            </div>
                            <div className="progress-percent-text">40%</div>
                          </div>
                        </div>
                        <div className="uploadeditem-right">
                          <div className="item-trash"><img loading="lazy" src="images/smarties-filetrash.svg" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notice-div">
                    <div className="notice-icon"><img loading="lazy" src="images/smarties-alert-circle.svg" alt="" /></div>
                    <div className="notice-text">Training time depends on the amount of content. Larger documents may take longer to process.</div>
                  </div>
                  <FormbtncontainerItem />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div data-w-id="2dbd5768-3788-eb14-8b45-fb7744b0a391" className="popup-close"><img src="images/smarties-x.svg" loading="lazy" alt="" /></div>
          </div>
        </div>
        <div className="popup-recordvoice">
          <div className="popup-card">
            <CardsettingshddivItem textDiv="Record Voice" />
            <div className="w-form">
              <form id="wf-form-record-voice-form" name="wf-form-record-voice-form" data-name="record voice form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a6d" data-wf-element-id="85855c31-c03d-5480-b4ae-bfcf12bbf628">
                <div className="form-body">
                  <FormrowItem58 id="assistant-name-2" />
                  <FormrowItem60 id="assistant-description-2" />
                  <div className="form-row">
                    <div className="recordvoice-maindiv">
                      <div className="mic-button"><img width="47" height="47" alt="" src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681cb402437d7f765e0fa033_Mic.svg" loading="lazy" className="mic" /></div>
                      <div className="recordvoice-textcontent">
                        <div className="recordvoice-label">Start Recording</div>
                        <div className="recordvoice-sublabel">Click the button to begin</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <FormcontrolItem62 textDiv="Recording Tips" />
                    <ul role="list" className="recordingtip-list">
                      <ListitemItem textDiv="Speak clearly and at a normal pace" />
                      <ListitemItem textDiv="Include the kinds of questions users might ask" />
                      <ListitemItem textDiv="Record in a quiet environment with minimal background noise" />
                      <ListitemItem textDiv="You can record multiple sessions to provide more training data" />
                    </ul>
                  </div>
                  <div className="notice-div bg-blue">
                    <div className="notice-icon"><img loading="lazy" src="images/smarties-alert-circle-blue.svg" alt="" /></div>
                    <div className="notice-text">You can also upload pre-recorded audio files instead of recording new ones.</div>
                  </div>
                  <FormbtncontainerItem />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div data-w-id="85855c31-c03d-5480-b4ae-bfcf12bbf66a" className="popup-close"><img src="images/smarties-x.svg" loading="lazy" alt="" /></div>
          </div>
        </div>
      </div >



    </>
  );
};

export default Index;