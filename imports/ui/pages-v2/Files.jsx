import React, { useEffect, useRef, useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout46 from '../components-v2/MaincontentLayout46';
import TopbarLayout47 from '../components-v2/TopbarLayout47';
import WformdoneItem from '../components-v2/WformdoneItem';
import WformfailItem from '../components-v2/WformfailItem';
import TablecelldivItem48 from '../components-v2/TablecelldivItem48';
import TablerowItem49 from '../components-v2/TablerowItem49';
import TablecelldivItem50 from '../components-v2/TablecelldivItem50';
import TabledoctitleItem from '../components-v2/TabledoctitleItem';
import TablecelldivItem51 from '../components-v2/TablecelldivItem51';
import TablecelldivItem52 from '../components-v2/TablecelldivItem52';
import FileinforowItem53 from '../components-v2/FileinforowItem53';
import Btnstyle1Item from '../components-v2/Btnstyle1Item';
import SidemenulabeldivItem from '../components-v2/SidemenulabeldivItem';
import SidemenuitemItem from '../components-v2/SidemenuitemItem';
import ReusableItem from '../components-v2/ReusableItem';
import SidemenuitemItem40 from '../components-v2/SidemenuitemItem40';
import SvgiconItem from '../components-v2/SvgiconItem';
import Layer1Item from '../components-v2/Layer1Item';
import ReusableItem1 from '../components-v2/ReusableItem1';
import SvgiconItem2 from '../components-v2/SvgiconItem2';
import Layer1Item3 from '../components-v2/Layer1Item3';
import { SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import { FileUploader } from '../custom/FileUploader';
import { useWatcher } from '../../api/client/Watcher2';
import FileUploadWatcher from '../../api/client/watchers/vapi/FileUploadWatcher';
import Loader from '../components-v2/common/Loader';
import Client from '../../api/client/Client';
import moment from 'moment';
import TopbarLayout5 from '../components-v2/TopbarLayout5';
import AvatarInitials from '../custom/AvatarInitials';

const Files = () => {
  const [currentSelected, setCurrentSelected] = useState(null);
  const watcher = useRef(FileUploadWatcher).current;
  const contentRef = useRef(null);
  useWatcher(watcher);
  const isLoading = watcher.getValue("isLoadingFiles");
  const files = watcher.Files;
  useEffect(() => {
    watcher.setValue("isLoadingFiles", true);
    watcher.fetchFiles();
    return () => {
      watcher.clear();
    };
  }, []);

  const loadMoreFiles = () => {
    watcher.fetchFiles({ isLoadmore: true });
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const nearBottom = scrollHeight - scrollTop - clientHeight < 20;
    if (nearBottom && !isLoading) {
      loadMoreFiles();
    }
  };

  const renderFileSize = (size) => {
    if (size) {
      const sizeInBytes = size;

      let displaySize = '';
      if (sizeInBytes < 1024) {
        displaySize = `${sizeInBytes} Bytes`;
      } else {
        const sizeInKB = Math.round(sizeInBytes / 1024);
        displaySize = `${sizeInKB} KB`;
      }
      return displaySize;
    }
  };

  return (
    <>
      <div className="page-wrap">
        <MaincontentLayout46>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">File Management</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            <div className="mainwidth-control horizontal">
              <div className="filemanagement-main">
                <div className="file-upload-base">
                  <div className="file-upload-content">
                    <FileUploader />
                  </div>
                </div>
                <div className="file-search-row">
                  <div className="search-formblock w-form">
                    <form id="wf-form-search-form" name="wf-form-search-form" data-name="search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a73" data-wf-element-id="9aaf37b2-a011-864e-493e-ccb9979ed0bd">
                      <div className="form-body">
                        <div className="form-row mb-0"><input className="inbox-search w-input" maxlength="256" name="search-2" data-name="Search 2" placeholder="Search" type="text" id="search-2" required /></div>
                      </div>
                    </form>
                    <WformdoneItem />
                    <WformfailItem />
                  </div>
                  {/* <div className="filter-row">
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
                  </div> */}
                </div>
                {isLoading ? <Loader /> :
                  <div className="table-main">
                    <div className="table-header">
                      <TablecelldivItem48 textDiv="Name" />
                      <TablecelldivItem48 textDiv="Size" />
                      <TablecelldivItem48 textDiv="Modified" />
                      <div className="table-cell-div _w-5"></div>
                    </div>
                    <div className="table-content" ref={contentRef} style={{ overflowY: 'auto', maxHeight: '300px' }} onScroll={handleScroll}>
                      {files.length ? files.map((file, index) => {
                        // #[x]: @szyrelle add file check
                        if (!file) return null;
                        if (file.name == "") return null;
                        if (!file.size) file.size = 0;

                        // #TODOS: @szyrelle where is onClick?
                        return <TablerowItem49 key={index} file={file} onClick={() => setCurrentSelected(file)} isCurrent={currentSelected && currentSelected.id == file.id} />;
                      }) : "No files found"}
                    </div>
                  </div>
                }
              </div>
              {currentSelected &&
                <div className="mainbody-col">
                  <div className="phonenumber-group">
                    <div className="filedetails-top">
                      <div className="card-icon bg-grey"><img src="../images/smarties-file-dark.svg" loading="lazy" width="20" height="20" alt="" className="icon-style1" /></div>
                      <div className="settings-title smaller">{currentSelected.name}</div>
                      <div className="settings-sublabel">{renderFileSize(currentSelected.size)}</div>
                    </div>
                  </div>
                  <div className="phonenumber-group">
                    <div className="file-info-contain">
                      <FileinforowItem53 textDiv="File ID" textDiv1={currentSelected.id ? currentSelected.id : "N/A"} />
                      <FileinforowItem53 textDiv="Type" textDiv1={currentSelected.type ? currentSelected.type : "N/A"} />
                      <FileinforowItem53 textDiv="Created" textDiv1={currentSelected.createdat ? moment(currentSelected.createdAt).format("MMMM D, YYYY [at] h:mm A") : "N/A"} />
                      <FileinforowItem53 textDiv="Last Modified" textDiv1={currentSelected.updatedat ? moment(currentSelected.updatedat).format("MMMM D, YYYY [at] h:mm A") : "N/A"} />
                      <FileinforowItem53 textDiv="Location" textDiv1="Root Directory" />
                    </div>
                  </div>
                  <div className="phonenumber-group">
                    <div className="filebtn-contain">
                      <Btnstyle1Item src="../images/smarties-copy.svg" textDiv="Copy URL" />
                      <button href="#" className="btn-style1 w-inline-block" disabled style={{ opacity: 0.5 }}>
                        <div className="btn-icon"><img src="../images/smarties-download.svg" loading="lazy" alt="" /></div>
                        <div>Download</div>
                      </button>
                      <Btnstyle1Item src="../images/smarties-filetrash.svg" textDiv="Delete" />
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </MaincontentLayout46>
        <SidebarLayout />
        {/* <TopbarLayout47>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a73" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
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
        </TopbarLayout47> */}
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
      </div>



    </>
  );
};

export default Files;