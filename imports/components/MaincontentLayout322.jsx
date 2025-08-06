import React from 'react';
import SearchformblockItem318 from './SearchformblockItem318';
import Btnstyle1Item313 from './Btnstyle1Item313';
import TableheaderItem from './TableheaderItem';
import TablerowItem319 from './TablerowItem319';
import FileinforowItem315 from './FileinforowItem315';
import FileitemItem from './FileitemItem';

const MaincontentLayout322 = ({ props }) => {
  return (
    <div
      id="w-node-_68c9648d-cea9-ff78-b2cb-57329e0c0b2d-f14725ba"
      className="main-content"
    >
      <div className="scroll-content">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Knowledge Base Management</div>
          </div>
        </div>
        <div className="mainwidth-control horizontal">
          <div className="filemanagement-main">
            <div className="file-search-row">
              <SearchformblockItem318 />
              <Btnstyle1Item313
                dataWId="05baf8d8-9541-fe79-48a2-6cb3c1831b04"
                divText="Create Knowledge Base"
              />
            </div>
            <div className="table-main">
              <TableheaderItem divText="ID" divText1="Date Created" />
              <div className="table-content">
                <TablerowItem319 title="Knowledge Base 1" />
                <TablerowItem319 title="Knowledge Base 2" />
                <TablerowItem319 title="Knowledge Base 3" />
                <TablerowItem319 title="Knowledge Base 3" />
              </div>
            </div>
          </div>
          <div className="mainbody-col">
            <div className="phonenumber-group">
              <div className="filedetails-top">
                <div className="card-icon bg-grey">
                  <img
                    src="../images/smarties-file-dark.svg"
                    loading="lazy"
                    width="20"
                    height="20"
                    alt=""
                    className="icon-style1"
                  />
                </div>
                <div className="settings-title smaller">Knowledge Base 1</div>
                <div className="settings-sublabel">97dcd1234567</div>
              </div>
            </div>
            <div className="phonenumber-group">
              <div className="file-info-contain">
                <FileinforowItem315
                  label="Knowledge Base ID"
                  divText="97dcd1234567"
                />
                <FileinforowItem315
                  label="Created"
                  divText="May 6, 2025 at 10:42 AM"
                />
              </div>
            </div>
            <div className="phonenumber-group">
              <div className="form-label">Files</div>
              <div className="file-list">
                <FileitemItem />
                <FileitemItem />
                <FileitemItem />
              </div>
            </div>
            <div className="phonenumber-group">
              <div className="filebtn-contain">
                <a href="#" className="btn-style1 outline w-inline-block">
                  <div className="btn-icon">
                    <img
                      src="../images/smarties-btn-icon-rename.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>Rename</div>
                </a>
                <Btnstyle1Item313
                  dataWId="68c9648d-cea9-ff78-b2cb-57329e0c0bc9"
                  divText="Add File"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout322;
