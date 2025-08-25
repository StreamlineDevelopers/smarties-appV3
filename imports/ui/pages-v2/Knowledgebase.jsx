import React, { useEffect, useRef, useState, } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout65 from '../components-v2/MaincontentLayout65';
import TopbarLayout66 from '../components-v2/TopbarLayout66';
import SearchformblockItem from '../components-v2/SearchformblockItem';
import WfformsearchformItem from '../components-v2/WfformsearchformItem';
import FormbodyItem from '../components-v2/FormbodyItem';
import WformdoneItem from '../components-v2/WformdoneItem';
import WformfailItem from '../components-v2/WformfailItem';
import Btnstyle1Item67 from '../components-v2/Btnstyle1Item67';
import TableheaderItem from '../components-v2/TableheaderItem';
import TablecelldivItem48 from '../components-v2/TablecelldivItem48';
import TablerowItem68 from '../components-v2/TablerowItem68';
import TablecelldivItem69 from '../components-v2/TablecelldivItem69';
import TabledoctitleItem70 from '../components-v2/TabledoctitleItem70';
import TablecelldivItem71 from '../components-v2/TablecelldivItem71';
import TablecelldivItem52 from '../components-v2/TablecelldivItem52';
import FileinforowItem72 from '../components-v2/FileinforowItem72';
import FileitemItem from '../components-v2/FileitemItem';
import FileitemleftItem from '../components-v2/FileitemleftItem';
import PropertyitemrightItem from '../components-v2/PropertyitemrightItem';
import SidemenulabeldivItem from '../components-v2/SidemenulabeldivItem';
import SidemenuitemItem from '../components-v2/SidemenuitemItem';
import ReusableItem from '../components-v2/ReusableItem';
import SidemenuitemItem40 from '../components-v2/SidemenuitemItem40';
import SvgiconItem from '../components-v2/SvgiconItem';
import Layer1Item from '../components-v2/Layer1Item';
import ReusableItem1 from '../components-v2/ReusableItem1';
import SvgiconItem2 from '../components-v2/SvgiconItem2';
import Layer1Item3 from '../components-v2/Layer1Item3';
import TablerowItem73 from '../components-v2/TablerowItem73';
import WcheckboxItem74 from '../components-v2/WcheckboxItem74';
import FormbtncontainerItem75 from '../components-v2/FormbtncontainerItem75';
import Btnstyle1Item63 from '../components-v2/Btnstyle1Item63';
import Btnstyle1Item76 from '../components-v2/Btnstyle1Item76';
import { KNOWLEDGEBASE, SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import KnowledgeBaseWatcher from '../../api/client/watchers/KnowledgeBaseWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import Loader from '../components-v2/common/Loader';
import moment from 'moment';
import AssignFileToKnowledgeBase from '../components-v2/popup/AssignFileToKnowledgeBase';
import { Toaster } from 'sonner';
import Client from '../../api/client/Client';

import TopbarLayout5 from '../components-v2/TopbarLayout5';
import AvatarInitials from '../custom/AvatarInitials';
import useDebounce from '../custom/useDebounce';


const Knowledgebase = () => {
  const formRef = useRef(null);
  const listRef = useRef(null);
  const isInitialMount = useRef(true);
  const [showCreateKnowledgeBase, setShowCreateKnowledgeBase] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const watcher = useRef(KnowledgeBaseWatcher).current;
  useWatcher(watcher);

  const knowledgeBase = watcher.KnowledgeBases;
  const isKnowledgeBasePopupOpen = watcher.getValue(KNOWLEDGEBASE.IS_KNOWLEDGE_BASE_POPUP_OPEN);
  const isLoading = watcher.getValue(KNOWLEDGEBASE.ISLOADING);
  const currentSelectedKb = watcher.getValue(KNOWLEDGEBASE.CURRENTSELECTED);

  const fetchKnowledgeBase = async () => {
    await watcher.fetchKnowledgeBase();
  };

  useEffect(() => {
    watcher.setValue(KNOWLEDGEBASE.ISLOADING, true);
    watcher.listen();
    fetchKnowledgeBase();

    return () => {
      watcher.clear();
      watcher.removeListener();
    };
  }, []);

  const handleUploadSubmit = (formRef) => {
    const selectedFiles = [];
    // Use the FormData API to read checkbox values
    const formData = new FormData(formRef.current);
    for (const [key, value] of formData.entries()) {
      if (value === 'on') {
        selectedFiles.push(key); // key is the file name
      }
    }
    watcher.uploadKnowledgeBase(selectedFiles).then((res) => {
      if (res) formRef.current.reset();
    });
  };

  const handleScroll = async (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    // Trigger only when close to bottom and not already loading
    if (scrollHeight - scrollTop - clientHeight < 20 && !isLoading && !isFetchingMore) {
      setIsFetchingMore(true);
      try {
        await watcher.fetchKnowledgeBase({ isLoadmore: true });
      } finally {
        setIsFetchingMore(false);
      }
    }
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setIsFetchingMore(true);
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (debouncedSearchTerm.length >= 3) {
      watcher.fetchKnowledgeBase({
        searchQuery: debouncedSearchTerm,
        isLoadmore: false
      });
    }
    else if (debouncedSearchTerm.length === 0) {
      watcher.fetchKnowledgeBase({
        searchQuery: null,
        isLoadmore: false
      });
    }
    setIsFetchingMore(false);
  }, [debouncedSearchTerm, watcher]);

  return (
    <>

      <div className="page-wrap">
        <MaincontentLayout65>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Knowledge Base Management</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            <div className="mainwidth-control horizontal">
              <div className="filemanagement-main">
                <div className="file-search-row">
                  <SearchformblockItem
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Btnstyle1Item67 dataWId="05baf8d8-9541-fe79-48a2-6cb3c1831b04" textDiv="Create Knowledge Base" onClick={() => setShowCreateKnowledgeBase(true)} />
                </div>
                <div className="table-main">
                  <TableheaderItem textDiv="ID" textDiv1="Date Created" />
                  <div className="table-content"
                    ref={listRef}
                    style={{
                      height: '400px',
                      overflowY: 'auto',
                      padding: '10px',
                      scrollBehavior: 'smooth'
                    }}
                    onScroll={handleScroll}
                  >
                    {isLoading ? <Loader /> :
                      knowledgeBase.length ? knowledgeBase.map((file, index) => (
                        <TablerowItem68 key={index} textDiv={file} onClick={() => watcher.setValue(KNOWLEDGEBASE.CURRENTSELECTED, file)} isCurrent={currentSelectedKb && currentSelectedKb.id == file.id} />
                      )) : "No Knowledge Base Found"}
                  </div>
                </div>
              </div>
              {currentSelectedKb &&
                <div className="mainbody-col">
                  <div className="phonenumber-group">
                    <div className="filedetails-top">
                      <div className="card-icon bg-grey"><img src="../images/smarties-file-dark.svg" loading="lazy" width="20" height="20" alt="" className="icon-style1" /></div>
                      <div className="settings-title smaller">{currentSelectedKb.collectionname}</div>
                      <div className="settings-sublabel">{currentSelectedKb.collectionid}</div>
                    </div>
                  </div>
                  <div className="phonenumber-group">
                    <div className="file-info-contain">
                      <FileinforowItem72 textDiv="Knowledge Base ID" textDiv1={currentSelectedKb.collectionid} />
                      <FileinforowItem72 textDiv="Created" textDiv1={moment(parseInt(currentSelectedKb.createdat)).format('MM/DD/YYYY')} />
                    </div>
                  </div>
                  <div className="phonenumber-group">
                    <div className="form-label">Files</div>
                    <div className="file-list">
                      {currentSelectedKb.filesList && currentSelectedKb.filesList.map((file) => (
                        <FileitemItem name={file.name} />
                      ))}
                    </div>
                  </div>
                  <div className="phonenumber-group">
                    <div className="filebtn-contain">
                      <button href="#" className="btn-style1 outline w-inline-block" disabled style={{ opacity: 0.5 }}>
                        <div className="btn-icon"><img src="../images/smarties-btn-icon-rename.svg" loading="lazy" alt="" /></div>
                        <div>Rename</div>
                      </button>
                      <Btnstyle1Item67 dataWId="68c9648d-cea9-ff78-b2cb-57329e0c0bc9" textDiv="Add File" onClick={() => watcher.setValue(KNOWLEDGEBASE.IS_KNOWLEDGE_BASE_POPUP_OPEN, true)} />
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </MaincontentLayout65>
        <SidebarLayout />
        {/* <TopbarLayout66>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682df6ec85bdddfa18192abf" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
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
        </TopbarLayout66> */}
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
        <AssignFileToKnowledgeBase
          isOpen={isKnowledgeBasePopupOpen}
          onClose={() => watcher.setValue(KNOWLEDGEBASE.IS_KNOWLEDGE_BASE_POPUP_OPEN, false)}
          currentSelected={currentSelectedKb}
          onSubmit={handleUploadSubmit}
        />
        <div className="popup-knowledgebase" style={{ display: showCreateKnowledgeBase ? 'flex' : 'none' }}>
          <div className="popup-card">
            <div className="card-settings-hd-div">
              <div className="card-settings-hd">Create Knowledge Base</div>
            </div>
            <div className="w-form">
              <form ref={formRef} id="wf-form-knowledge-base-form" name="wf-form-knowledge-base-form" data-name="knowledge base form" method="get" data-wf-page-id="682df6ec85bdddfa18192abf" data-wf-element-id="9381f18b-317b-0b20-3189-6e9a0dd68214">
                <div className="form-body">
                  <div className="form-row">
                    <div className="form-control">
                      <div className="form-label">Knowledge Base Name</div><input className="form-input w-input" maxlength="256" name="knowledge-base-name" data-name="knowledge base name" placeholder="" type="text" id="knowledge-base-name" />
                    </div>
                  </div>
                  <FormbtncontainerItem75 textDiv="Create" onSubmit={(e) => {
                    e.preventDefault();
                    setShowCreateKnowledgeBase(false);
                    watcher.handlesubmitNewKnowledgeBase(formRef.current);
                    formRef.current.reset();
                  }}
                    onCancel={() => {
                      setShowCreateKnowledgeBase(false);
                      formRef.current.reset();
                    }}
                  />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div data-w-id="9381f18b-317b-0b20-3189-6e9a0dd682ae" className="popup-close" onClick={() => setShowCreateKnowledgeBase(false)}><img src="../images/smarties-x.svg" loading="lazy" alt="" /></div>
          </div>
        </div>
        <Toaster />
      </div>



    </>
  );
};

export default Knowledgebase;