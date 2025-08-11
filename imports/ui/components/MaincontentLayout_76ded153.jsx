import React from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import TablecelldivItem_369a7749 from './TablecelldivItem_369a7749';
import TablerowItem_f70b8454 from './TablerowItem_f70b8454';
import FileinforowItem_efc8d0b0 from './FileinforowItem_efc8d0b0';
import Btnstyle1Item_d3d5aed9 from './Btnstyle1Item_d3d5aed9';

const MaincontentLayout_76ded153 = ({}) => {
  return (
    <div
      id={'w-node-d0c8df28-6883-f748-2f69-4eca3dcb5ddf-f14725b2'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>File Management</div>
          </div>
        </div>
        <div className={'mainwidth-control horizontal'}>
          <div className={'filemanagement-main'}>
            <div className={'file-upload-base'}>
              <div className={'file-upload-content'}>
                <div className={'fileupload-icon'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681cad4bdaec95b6d81530f7_upload-cloud.svg'
                    }
                    loading={'lazy'}
                    width={'20'}
                    height={'20'}
                    alt={''}
                    className={'upload-cloud'}
                  />
                </div>
                <div className={'file-upload-texts'}>
                  <div className={'fileupload-label'}>
                    <a href={'#'} className={'spanlink-upload'}>
                      Click to upload
                    </a>{' '}
                    or drag and drop
                  </div>
                  <div className={'fileupload-sublabel'}>
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </div>
                </div>
              </div>
            </div>
            <div className={'file-search-row'}>
              <div className={'search-formblock w-form'}>
                <form
                  id={'wf-form-search-form'}
                  name={'wf-form-search-form'}
                  data-name={'search form'}
                  method={'get'}
                  data-wf-page-id={'688b61ee631f6165f14725b2'}
                  data-wf-element-id={'9aaf37b2-a011-864e-493e-ccb9979ed0bd'}
                >
                  <div className={'form-body'}>
                    <div className={'form-row mb-0'}>
                      <input
                        className={'inbox-search w-input'}
                        maxlength={'256'}
                        name={'search-2'}
                        data-name={'Search 2'}
                        placeholder={'Search'}
                        type={'text'}
                        id={'search-2'}
                        required
                      />
                    </div>
                  </div>
                </form>
                <WformdoneItem />
                <WformfailItem />
              </div>
              <div className={'filter-row'}>
                <div
                  data-hover={'false'}
                  data-delay={'0'}
                  className={'filter-dropdown w-dropdown'}
                >
                  <div className={'filter-dropdown-toggle w-dropdown-toggle'}>
                    <div className={'icon-2 w-icon-dropdown-toggle'}></div>
                    <div className={'text-block'}>First Part of Number</div>
                  </div>
                  <nav className={'filterdropdown-list w-dropdown-list'}>
                    <a
                      href={'#'}
                      className={'filter-dropdownlink w-dropdown-link'}
                    >
                      First Part of Number
                    </a>
                    <a
                      href={'#'}
                      className={'filter-dropdownlink w-dropdown-link'}
                    >
                      Last Part of Number
                    </a>
                    <a
                      href={'#'}
                      className={'filter-dropdownlink w-dropdown-link'}
                    >
                      First Part of Number
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className={'table-main'}>
              <div className={'table-header'}>
                <TablecelldivItem_369a7749 divText={'Name'} />
                <TablecelldivItem_369a7749 divText={'Size'} />
                <TablecelldivItem_369a7749 divText={'Modified'} />
                <div className={'table-cell-div _w-5'}></div>
              </div>
              <div className={'table-content'}>
                <TablerowItem_f70b8454 />
                <TablerowItem_f70b8454 />
                <TablerowItem_f70b8454 />
                <TablerowItem_f70b8454 />
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
                <div className={'settings-title smaller'}>sample.txt</div>
                <div className={'settings-sublabel'}>12 KB</div>
              </div>
            </div>
            <div className={'phonenumber-group'}>
              <div className={'file-info-contain'}>
                <FileinforowItem_efc8d0b0
                  label={'File ID'}
                  divText={'FL-123456677'}
                />
                <FileinforowItem_efc8d0b0
                  label={'Type'}
                  divText={'Text Document (.txt)'}
                />
                <FileinforowItem_efc8d0b0
                  label={'Created'}
                  divText={'May 6, 2025 at 10:42 AM'}
                />
                <FileinforowItem_efc8d0b0
                  label={'Last Modified'}
                  divText={'May 6, 2025 at 10:42 AM'}
                />
                <FileinforowItem_efc8d0b0
                  label={'Location'}
                  divText={'Root Directory'}
                />
              </div>
            </div>
            <div className={'phonenumber-group'}>
              <div className={'filebtn-contain'}>
                <Btnstyle1Item_d3d5aed9
                  src={'../images/smarties-copy.svg'}
                  divText={'Copy URL'}
                />
                <a href={'#'} className={'btn-style1 w-inline-block'}>
                  <div className={'btn-icon'}>
                    <img
                      src={'../images/smarties-download.svg'}
                      loading={'lazy'}
                      alt={''}
                    />
                  </div>
                  <div>Download</div>
                </a>
                <Btnstyle1Item_d3d5aed9
                  src={'../images/smarties-filetrash.svg'}
                  divText={'Delete'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout_76ded153;
