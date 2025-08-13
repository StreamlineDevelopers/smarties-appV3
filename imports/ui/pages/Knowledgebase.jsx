import React from 'react';
import MaincontentLayout_2d6d6a9b from '../components/MaincontentLayout_2d6d6a9b';
import SidebarLayout from '../components/SidebarLayout';
import TopbarLayout_b45b1468 from '../components/TopbarLayout_b45b1468';
import SearchformblockItem_a5d80477 from '../components/SearchformblockItem_a5d80477';
import TableheaderItem from '../components/TableheaderItem';
import TablerowItem_52032fc6 from '../components/TablerowItem_52032fc6';
import FormbtncontainerItem_739a54af from '../components/FormbtncontainerItem_739a54af';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';

const Knowledgebase = () => {
  return (
    <>
      <div className={'page-wrap'}>
        <MaincontentLayout_2d6d6a9b />
        <SidebarLayout />
        <TopbarLayout_b45b1468 />
        <div className={'popup-addfile'}>
          <div className={'popup-card _w-50'}>
            <div className={'card-settings-hd-div'}>
              <div className={'card-settings-hd'}>{'Add File'}</div>
              <SearchformblockItem_a5d80477 />
            </div>
            <div className={'w-form'}>
              <form
                id={'wf-form-add-file-form'}
                name={'wf-form-add-file-form'}
                data-name={'add file form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725ba'}
                data-wf-element-id={'a47b2989-b0f5-bba6-67b7-e50dabb6c829'}
              >
                <div className={'form-body'}>
                  <div className={'table-main mb-20'}>
                    <TableheaderItem divText={'Size'} divText1={'Modified'} />
                    <div className={'table-content'}>
                      <TablerowItem_52032fc6
                        name={'check-add-file'}
                        id={'check-add-file'}
                        dataName={'check add file'}
                        htmlFor={'check-add-file'}
                      />
                      <TablerowItem_52032fc6
                        name={'check-add-file-2'}
                        id={'check-add-file-2'}
                        dataName={'Check Add File 2'}
                        htmlFor={'check-add-file-2'}
                      />
                      <TablerowItem_52032fc6
                        name={'check-add-file-2'}
                        id={'check-add-file-2'}
                        dataName={'Check Add File 2'}
                        htmlFor={'check-add-file-2'}
                      />
                      <TablerowItem_52032fc6
                        name={'check-add-file-2'}
                        id={'check-add-file-2'}
                        dataName={'Check Add File 2'}
                        htmlFor={'check-add-file-2'}
                      />
                    </div>
                  </div>
                  <div className={'notice-div bg-blue'}>
                    <div className={'notice-icon'}>
                      <img
                        loading={'lazy'}
                        src={'../images/smarties-alert-circle-blue.svg'}
                        alt={''}
                      />
                    </div>
                    <div className={'notice-text'}>
                      {
                        'You can assign files to your knowledge base. Please select the files you want to assign.'
                      }
                    </div>
                  </div>
                  <FormbtncontainerItem_739a54af divText={'Add'} />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'a47b2989-b0f5-bba6-67b7-e50dabb6c8c3'}
              className={'popup-close'}
            >
              <img src={'../images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
          </div>
        </div>
        <div className={'popup-knowledgebase'}>
          <div className={'popup-card'}>
            <div className={'card-settings-hd-div'}>
              <div className={'card-settings-hd'}>
                {'Create Knowledge Base'}
              </div>
            </div>
            <div className={'w-form'}>
              <form
                id={'wf-form-knowledge-base-form'}
                name={'wf-form-knowledge-base-form'}
                data-name={'knowledge base form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725ba'}
                data-wf-element-id={'9381f18b-317b-0b20-3189-6e9a0dd68214'}
              >
                <div className={'form-body'}>
                  <div className={'form-row'}>
                    <div className={'form-control'}>
                      <div className={'form-label'}>
                        {'Knowledge Base Name'}
                      </div>
                      <input
                        className={'form-input w-input'}
                        maxlength={'256'}
                        name={'knowledge-base-name'}
                        data-name={'knowledge base name'}
                        placeholder={''}
                        type={'text'}
                        id={'knowledge-base-name'}
                      />
                    </div>
                  </div>
                  <FormbtncontainerItem_739a54af divText={'Create'} />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'9381f18b-317b-0b20-3189-6e9a0dd682ae'}
              className={'popup-close'}
            >
              <img src={'../images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Knowledgebase;
