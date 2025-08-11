import React, { useRef } from 'react';
import DashboardheadertextItem from './DashboardheadertextItem';
import DbstatcardItem_da3e4559 from './DbstatcardItem_da3e4559';
import DashboardassistantItem from './DashboardassistantItem';
import DashboardactivityfeedItem_fefa4c6c from './DashboardactivityfeedItem_fefa4c6c';
import { useWatcher } from '../../api/client/Watcher2';
import IndexWatcher from '../../api/client/watchers/IndexWatcher';

const MaincontentLayout_91d34823 = ({ }) => {
  const watcher = useRef(IndexWatcher).current;
  useWatcher(watcher);

  return (
    <div
      id={'w-node-_79790694-08dd-78e5-e5cb-53de24331ffd-f147256a'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>Dashboard</div>
            <div className={'db-quickaction-text'}>
              Setup and manage your AI assistants
            </div>
          </div>
          <a href={'#'} className={'btn-style1 w-inline-block'}>
            <div className={'btn-icon'}>
              <img src={'images/Search_1.svg'} loading={'lazy'} alt={''} />
            </div>
            <div>Create Assistant</div>
          </a>
        </div>
        <div className={'mainwidth-control'}>
          <div className={'dashboard-group'}>
            <DashboardheadertextItem title={'OVERVIEW'} />
            <div className={'db-stat-card-contain'}>
              <DbstatcardItem_da3e4559
                title={'Total Assistants'}
                divText={'12'}
                src={
                  'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
                }
                divText1={'+33%'}
              />
              <DbstatcardItem_da3e4559
                title={'Total Interactions'}
                divText={'2,547'}
                src={
                  'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccff12d401a801aff8b_db-stat-arrow.svg'
                }
                divText1={'+12%'}
              />
              <DbstatcardItem_da3e4559
                title={'Accuracy Rate'}
                divText={'94.7%'}
                src={
                  'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
                }
                divText1={'+2.3%'}
              />
              <div className={'db-stat-card'}>
                <div className={'db-stat-card-left'}>
                  <div className={'stat-title'}>Monthly Cost</div>
                  <div className={'db-stat-value-contain'}>
                    <div className={'stat-value'}>$49.00</div>
                    <div className={'db-stat-value-sub'}>of $75 limit</div>
                  </div>
                  <div className={'progress-bar-container'}>
                    <div className={'progress-bar'}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'dashboard-group'}>
            <DashboardheadertextItem title={'QUICK ACTIONS'} />
            <div className={'dashboard-quickactions-div'}>
              <a
                data-w-id={'c4da4dbd-0538-3352-f2c2-ce7bd3daf02e'}
                href={'#'}
                className={'dashboard-quickactions w-inline-block'}
                onClick={() => watcher.setUploadDocumentPopup(true)}
              >
                <div className={'card-icon'}>
                  <img
                    src={
                      'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcd735c29814edecfeac5_Upload.svg'
                    }
                    loading={'lazy'}
                    width={'25'}
                    height={'25'}
                    alt={''}
                    className={'card-icon-image'}
                  />
                </div>
                <div className={'db-quickaction-textcontent'}>
                  <div className={'db-quickaction-hd-text'}>
                    Create from Document
                  </div>
                  <div className={'db-quickaction-text'}>
                    Upload PDF, DOCX, or TXT files to instantly create an
                    assistant.{' '}
                  </div>
                  <div className={'db-actionlink'}>
                    <div className={'db-actionlink-text'}>Upload Document</div>
                    <img
                      src={
                        'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcd73cdae71b143933bc8_Arrow-right.svg'
                      }
                      loading={'lazy'}
                      width={'20'}
                      height={'20'}
                      alt={''}
                      className={'card-icon-image'}
                    />
                  </div>
                </div>
              </a>
              <a
                data-w-id={'43e2bb55-ffe1-0d32-4992-4bf4aad5a054'}
                href={'#'}
                className={'dashboard-quickactions w-inline-block'}
                onClick={() => watcher.setRecordVoicePopup(true)}
              >
                <div className={'card-icon blue'}>
                  <img
                    src={'images/Mic.svg'}
                    loading={'lazy'}
                    width={'25'}
                    height={'25'}
                    alt={''}
                    className={'card-icon-image'}
                  />
                </div>
                <div className={'db-quickaction-textcontent'}>
                  <div className={'db-quickaction-hd-text'}>
                    Create from Voice
                  </div>
                  <div className={'db-quickaction-text'}>
                    Record your instructions to create a voice-trained assistant
                  </div>
                  <div className={'db-actionlink'}>
                    <div className={'db-actionlink-text text-blue'}>
                      Start Recording
                    </div>
                    <img
                      src={
                        'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcd73b86c74e8844487fe_Arrow-right.svg'
                      }
                      loading={'lazy'}
                      width={'20'}
                      height={'20'}
                      alt={''}
                      className={'card-icon-image'}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={'dashboard-col-group'}>
            <div className={'dashboard-group _w-60'}>
              <div className={'section-header'}>
                <DashboardheadertextItem title={'RECENT ASSISTANTS'} />
                <a href={'#'} className={'link-style1'}>
                  View All
                </a>
              </div>
              <div className={'db-recentassistants-card'}>
                <DashboardassistantItem />
                <DashboardassistantItem />
                <DashboardassistantItem />
                <DashboardassistantItem />
                <DashboardassistantItem />
                <DashboardassistantItem />
              </div>
            </div>
            <div className={'dashboard-group stretch'}>
              <DashboardheadertextItem title={'ACTIVITY FEED'} />
              <div className={'db-recentassistants-card'}>
                <DashboardactivityfeedItem_fefa4c6c />
                <DashboardactivityfeedItem_fefa4c6c />
                <DashboardactivityfeedItem_fefa4c6c />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout_91d34823;
