import React from 'react';
import SearchformblockItem_a5d80477 from './SearchformblockItem_a5d80477';
import Btnstyle1Item_be25b322 from './Btnstyle1Item_be25b322';
import TableheaderItem from './TableheaderItem';
import TablerowItem_428dccc9 from './TablerowItem_428dccc9';
import FileinforowItem_a9acce24 from './FileinforowItem_a9acce24';
import FileitemItem from './FileitemItem';

const MaincontentLayout_2d6d6a9b = ({}) => {
  return (
    <div
      id={'w-node-_68c9648d-cea9-ff78-b2cb-57329e0c0b2d-f14725ba'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>
              {'Knowledge Base Management'}
            </div>
          </div>
        </div>
        <div className={'mainwidth-control horizontal'}>
          <div className={'filemanagement-main'}>
            <div className={'file-search-row'}>
              <SearchformblockItem_a5d80477 />
              <Btnstyle1Item_be25b322
                dataWId={'05baf8d8-9541-fe79-48a2-6cb3c1831b04'}
                divText={'Create Knowledge Base'}
              />
            </div>
            <div className={'table-main'}>
              <TableheaderItem divText={'ID'} divText1={'Date Created'} />
              <div className={'table-content'}>
                <TablerowItem_428dccc9 title={'Knowledge Base 1'} />
                <TablerowItem_428dccc9 title={'Knowledge Base 2'} />
                <TablerowItem_428dccc9 title={'Knowledge Base 3'} />
                <TablerowItem_428dccc9 title={'Knowledge Base 3'} />
              </div>
            </div>
          </div>
          <div className={'mainbody-col'}>
            <div className={'phonenumber-group'}>
              <div className={'filedetails-top'}>
                <div className={'card-icon bg-grey'}>
                  <img
                    src={'../images/smarties-file-dark.svg'}
                    loading={'lazy'}
                    width={'20'}
                    height={'20'}
                    alt={''}
                    className={'icon-style1'}
                  />
                </div>
                <div className={'settings-title smaller'}>
                  {'Knowledge Base 1'}
                </div>
                <div className={'settings-sublabel'}>{'97dcd1234567'}</div>
              </div>
            </div>
            <div className={'phonenumber-group'}>
              <div className={'file-info-contain'}>
                <FileinforowItem_a9acce24
                  label={'Knowledge Base ID'}
                  divText={'97dcd1234567'}
                />
                <FileinforowItem_a9acce24
                  label={'Created'}
                  divText={'May 6, 2025 at 10:42 AM'}
                />
              </div>
            </div>
            <div className={'phonenumber-group'}>
              <div className={'form-label'}>{'Files'}</div>
              <div className={'file-list'}>
                <FileitemItem />
                <FileitemItem />
                <FileitemItem />
              </div>
            </div>
            <div className={'phonenumber-group'}>
              <div className={'filebtn-contain'}>
                <a href={'#'} className={'btn-style1 outline w-inline-block'}>
                  <div className={'btn-icon'}>
                    <img
                      src={'../images/smarties-btn-icon-rename.svg'}
                      loading={'lazy'}
                      alt={''}
                    />
                  </div>
                  <div>{'Rename'}</div>
                </a>
                <Btnstyle1Item_be25b322
                  dataWId={'68c9648d-cea9-ff78-b2cb-57329e0c0bc9'}
                  divText={'Add File'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout_2d6d6a9b;
