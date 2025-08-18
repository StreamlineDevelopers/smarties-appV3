import React, { useEffect, useRef } from 'react';
import DbstattagItem_77fe3313 from './DbstattagItem_77fe3313';
import Divblock18Item from './Divblock18Item';
import ContacttablecelldivItem from './ContacttablecelldivItem';
import ContacttablecelldivItem_c0bd897a from './ContacttablecelldivItem_c0bd897a';
import ContacttablerowItem_bd02a14f from './ContacttablerowItem_bd02a14f';
import ContacttablecelldivItem_00c9231e from './ContacttablecelldivItem_00c9231e';
import ContacttablecelldivItem_3fa68a40 from './ContacttablecelldivItem_3fa68a40';
import ContacttablecelldivItem_d8491e9b from './ContacttablecelldivItem_d8491e9b';
import ContacttablecelldivItem_6a918eca from './ContacttablecelldivItem_6a918eca';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import IconembedItem from './IconembedItem';
import DbstatcardItem from './DbstatcardItem';
import SidebarleadinfotimelineitemItem from './SidebarleadinfotimelineitemItem';
import ConvertBuyerWatcher, { OVERVIEW, TABLE } from '../../api/client/watchers/ConvertBuyerWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import { Loader } from 'lucide-react';

const MaincontentLayout_5ea7a836 = ({ }) => {
  const watcher = useRef(ConvertBuyerWatcher).current;
  useWatcher(watcher);

  useEffect(() => {
    watcher.conversionRate();
    watcher.topPerformingNudge();
    watcher.mostCommonObjection();
    watcher.hotLead();
    watcher.fetchLeads();
  }, []);

  //loaders
  const loadingConversionRate = watcher.getValue(OVERVIEW.LOADING_CONVERSION_RATE);
  const loadingTopPerformingNudge = watcher.getValue(OVERVIEW.LOADING_TOP_PERFORMING_NUDGE);
  const loadingMostCommonObjection = watcher.getValue(OVERVIEW.LOADING_MOST_COMMON_OBJECTION);
  const loadingHotLeadsRightNow = watcher.getValue(OVERVIEW.LOADING_HOT_LEAD);
  const loadingLeadsTable = watcher.getValue(TABLE.LOADING_LEADS);

  //Overview
  const conversationRateToday = watcher.getValue(OVERVIEW.CONVERSION_RATE) || {};
  const topPerformingNudge = watcher.getValue(OVERVIEW.TOP_PERFORMING_NUDGE) || {};
  const mostCommonObjection = watcher.getValue(OVERVIEW.MOST_COMMON_OBJECTION) || {};
  const hotLeadsRightNow = watcher.getValue(OVERVIEW.HOT_LEAD) || {};
  const leadList = watcher.getValue(TABLE.LEADS) || [];



  return (
    <div
      id={'w-node-b4ff377d-8e91-9b13-7bfa-4c468499c3dc-f14725d7'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>
              {'Turn Shoppers Into Buyers'}
            </div>
            <div className={'db-quickaction-text'}>
              {'Convert interested shoppers into buyers'}
            </div>
          </div>
          <a
            href={'../journey/objection-feed.html'}
            className={'btn-style1 outline-orange w-inline-block'}
          >
            <div>{'Objection Feed'}</div>
          </a>
        </div>
        <div className={'journey-dashboard-width'}>
          <div className={'mainwidth-control journey'}>
            <div className={'dashboard-group'}>
              <div className={'dashboard-headertext'}>
                <div className={'section-title'}>{'OVERVIEW'}</div>
              </div>
              <div className={'db-stat-card-contain'}>
                <div className={'db-stat-card'}>
                  <div className={'db-stat-card-left'}>
                    <div className={'stat-title'}>
                      {'Conversion Rate Today'}
                    </div>
                    <div className={'db-stat-value-contain'}>
                      {/* Total Conversion */}
                      <div className={'stat-value'}>
                        {loadingConversionRate ? (
                          <Skeleton height={32} width={72} />
                        ) : (
                          `${conversationRateToday?.totalConversion ?? 0}%`
                        )}
                      </div>

                      {/* Average Conversion */}
                      {loadingConversionRate ? (
                        <Skeleton height={16} width={48} />
                      ) : (
                        <DbstattagItem_77fe3313
                          src={
                            'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
                          }
                          divText={`${conversationRateToday?.average ?? 0}%`}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={'db-stat-card'}>
                  <div className={'db-stat-card-left'}>
                    <div className={'stat-title'}>{'Top Performing Nudge'}</div>
                    <div className={'db-stat-value-contain horizontal'}>
                      <Divblock18Item
                        divText={loadingTopPerformingNudge ? <Skeleton height={24} width={72} /> : `"${topPerformingNudge.description || 'Limited offer: Free shipping'}"`}
                        itemText={loadingTopPerformingNudge ? <Skeleton height={16} width={200} /> : `${topPerformingNudge.totalShown || 0} sessions shown`}
                      />
                      {/* Average Top Performing Nudge*/}
                      {loadingTopPerformingNudge ? (
                        <Skeleton height={16} width={48} />
                      ) : (
                        <DbstattagItem_77fe3313
                          src={
                            'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
                          }
                          divText={`${topPerformingNudge?.average ?? 0}%`}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={'db-stat-card'}>
                  <div className={'db-stat-card-left'}>
                    <div className={'stat-title'}>
                      {'Most Common Objection'}
                    </div>
                    <div className={'db-stat-value-contain'}>
                      <Divblock18Item
                        divText={loadingMostCommonObjection ? <Skeleton height={24} width={72} /> : `"${mostCommonObjection.description || 'Price comparison needed'}"`}
                        itemText={loadingMostCommonObjection ? <Skeleton height={16} width={200} /> : `Detect in ${mostCommonObjection.totalDetected || 0} sessions`}
                      />
                      {/* Average Most Common Objection */}
                      {loadingMostCommonObjection ? (
                        <Skeleton height={16} width={48} />
                      ) : (
                        <DbstattagItem_77fe3313
                          src={
                            'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
                          }
                          divText={`${mostCommonObjection?.average ?? 0}%`}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={'db-stat-card'}>
                  <div className={'db-stat-card-left'}>
                    <div className={'stat-title'}>{'Hot Leads Right Now'}</div>
                    <div className={'db-stat-value-contain'}>
                      <div className={'div-block-18'}>
                        <div className={'stat-value'}>{loadingHotLeadsRightNow ? <Skeleton height={32} width={72} /> : hotLeadsRightNow.totalLeads}</div>
                        <div className={'uploadeditem-filesize'}>
                          {loadingHotLeadsRightNow ? <Skeleton height={16} width={200} /> : `Active in last  ${moment().diff(moment(hotLeadsRightNow.lastActive), "minutes") || 0} minutes`}
                        </div>
                      </div>
                      <DbstattagItem_77fe3313
                        src={
                          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
                        }
                        divText={'2.1%'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'w-form'}>
              <form
                id={'wf-form-tool-form'}
                name={'wf-form-tool-form'}
                data-name={'tool form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725d7'}
                data-wf-element-id={'3cbf2a0f-da33-aa9c-dbce-4929b2b3d9b1'}
              >
                <div className={'form-body'}>
                  <div className={'contact-table-div leadstable'}>
                    <div className={'contacts-main-top'}>
                      <div className={'messaging-sidebar-h1'}>
                        {'Leads Table'}
                      </div>
                      <div className={'contacts-main-top-right'}>
                        <input
                          className={'inbox-search w-input'}
                          maxlength={'256'}
                          name={'search-2'}
                          data-name={'Search 2'}
                          placeholder={'Search'}
                          type={'text'}
                          id={'search-2'}
                          required
                          onChange={(e) => watcher.searchLead(e.target.value)}
                        />
                        <a
                          href={'#'}
                          className={'btn-style1 outline w-inline-block'}
                        >
                          <div className={'btn-icon'}>
                            <img
                              src={'../images/smarties-btnicon-filter.svg'}
                              loading={'lazy'}
                              alt={''}
                            />
                          </div>
                          <div>{'Filters'}</div>
                        </a>
                      </div>
                    </div>
                    <div className={'contacts-tableheader mt-10'}>
                      <ContacttablecelldivItem header={'NAME'} />
                      <div className={'contact-table-cell-div _w-10'}>
                        <div className={'contact-table-header-text'}>
                          {'score'}
                        </div>
                      </div>
                      <ContacttablecelldivItem_c0bd897a
                        header={'last activity'}
                      />
                      <ContacttablecelldivItem header={'suggested action'} />
                      <ContacttablecelldivItem_c0bd897a header={'actions'} />
                    </div>
                    <div className={'contacts-table-content'}>
                      <div className={'table-priority-divider'}>
                        <div className={'table-priority-divider-content'}>
                          <div className={'table-priority-divider-dot'}></div>
                          <div className={'table-priority-divider-text'}>
                            {'Immediate Action Required (2)'}
                          </div>
                        </div>
                      </div>
                      {loadingLeadsTable ? (
                        <Loader />
                      ) : (
                        leadList.length && leadList.map((lead, index) => (
                          <ContacttablerowItem_bd02a14f
                            key={index}
                            src={lead.avatar || '../images/smarties-avatar-01_1smarties-avatar-01.png'}
                            divText={lead.name}
                            divText1={lead.score}
                            divText2={lead.status}
                            divText3={lead.action}
                          />
                        ))
                      )}
                      {/* <div className={'contact--table-row'}>
                        <ContacttablecelldivItem_00c9231e
                          src={
                            '../images/smarties-avatar-03_1smarties-avatar-03.png'
                          }
                          divText={'Michael Chen'}
                        />
                        <div className={'contact-table-cell-div _w-10'}>
                          <div className={'contacts-table-tags-div'}>
                            <div className={'leadstable-score bg-blue'}>
                              {'88'}
                            </div>
                          </div>
                        </div>
                        <ContacttablecelldivItem_3fa68a40
                          divText={'Viewed pricing'}
                        />
                        <ContacttablecelldivItem_d8491e9b
                          src={'../images/smarties-leadtable-icon-02.svg'}
                          divText={'Send comparison'}
                        />
                        <ContacttablecelldivItem_6a918eca divText={'Contact'} />
                      </div> */}
                      < div className={'table-priority-divider'}>
                        <div className={'table-priority-divider-content'}>
                          <div
                            className={'table-priority-divider-dot yellow'}
                          ></div>
                          <div className={'table-priority-divider-text'}>
                            {'High Priority (2)'}
                          </div>
                        </div>
                      </div>
                      {/* <div className={'contact--table-row'}>
                        <ContacttablecelldivItem_00c9231e
                          src={
                            '../images/smarties-avatar-04_1smarties-avatar-04.png'
                          }
                          divText={'Emma Wilson'}
                        />
                        <div className={'contact-table-cell-div _w-10'}>
                          <div className={'contacts-table-tags-div'}>
                            <div className={'leadstable-score bg-yellow'}>
                              {'76'}
                            </div>
                          </div>
                        </div>
                        <ContacttablecelldivItem_3fa68a40
                          divText={'Abandoned checkout'}
                        />
                        <ContacttablecelldivItem_d8491e9b
                          src={'../images/smarties-leadtable-icon-04.svg'}
                          divText={'Free shipping offer'}
                        />
                        <ContacttablecelldivItem_6a918eca
                          divText={'Send Offer'}
                        />
                      </div>
                      <ContacttablerowItem_bd02a14f
                        src={'../images/img_1img.png'}
                        divText={'James Rodriguez'}
                        divText1={'95'}
                        divText2={'Returned visitor'}
                        divText3={'Engage'}
                      /> */}
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
          </div>
          <div className={'delivery-settings-sidebar'}>
            <div className={'messaging-sidebar-hd-div align-inbetween'}>
              <div className={'messaging-sidebar-h1'}>{'Lead Info'}</div>
              <div
                data-w-id={'b3f29c6b-56b4-2079-56a4-81125e111d6e'}
                className={'sidebar-close'}
              >
                <img src={'../images/Frame_5.svg'} loading={'lazy'} alt={''} />
              </div>
            </div>
            <div className={'lead-information-main'}>
              <div className={'messaging-inbox-item-left'}>
                <div className={'messaging-inbox-avatar-col'}>
                  <div className={'messaging-inbox-avatar-top'}>
                    <img
                      src={
                        '../images/smarties-avatar-01_1smarties-avatar-01.png'
                      }
                      loading={'lazy'}
                      alt={''}
                    />
                  </div>
                </div>
                <div className={'messaging-inbox-textcontent'}>
                  <div className={'messaging-inbox-textcontent-top'}>
                    <div className={'messaging-inbox-name-row'}>
                      <div className={'messaging-top-name'}>{'John Smith'}</div>
                    </div>
                    <div className={'messaging-inbox-preview-div'}>
                      <div className={'messaging-inbox-preview'}>
                        {'johnsmith@email.com'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'btn-container-lead-info'}>
              <a href={'#'} className={'btn-style1 outline w-inline-block'}>
                <IconembedItem
                  iconSrc={'/svgs/icon-29cd1db75880954131b37ad4dbe92714.svg'}
                />
                <div>{'View Profile'}</div>
              </a>
              <a href={'#'} className={'btn-style1 w-inline-block'}>
                <div>{'Send Offer Now'}</div>
                <IconembedItem
                  iconSrc={'/svgs/icon-b7f61d2f316fc64b5b2128324295b50a.svg'}
                />
              </a>
            </div>
            <div className={'db-stat-card-contain'}>
              <div className={'db-stat-card leadinfo'}>
                <div className={'db-stat-card-left'}>
                  <div className={'stat-title small'}>{'Lead Score'}</div>
                  <div className={'leadstable-score bg-green'}>{'94'}</div>
                </div>
              </div>
              <DbstatcardItem title={'Lead Time'} divText={'12m 45s'} />
              <DbstatcardItem title={'Cart Value'} divText={'$249.99'} />
            </div>
            <div className={'step-formblock w-form'}>
              <form
                id={'email-form'}
                name={'email-form '}
                data-name={'Email Form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725d7'}
                data-wf-element-id={'b3f29c6b-56b4-2079-56a4-81125e111d71'}
              >
                <div className={'sidebar-contact-body gap-20'}>
                  <div className={'delivery-settings-group'}>
                    <div className={'messaging-sidebar-h2-style2'}>
                      {'Timeline'}
                    </div>
                    <div className={'sidebar-leadinfo-timeline-div'}>
                      <div className={'sidebar-leadinfo-timeline-line'}></div>
                      <SidebarleadinfotimelineitemItem
                        label={'Added product to cart'}
                      />
                      <SidebarleadinfotimelineitemItem
                        label={'Viewed pricing page'}
                      />
                      <SidebarleadinfotimelineitemItem
                        label={'Read testimonials'}
                      />
                    </div>
                  </div>
                  <div className={'delivery-settings-group'}>
                    <div className={'messaging-sidebar-h2-style2'}>
                      {'Objection Detected'}
                    </div>
                    <div className={'messaging-sidebar-cards gap-5 bg-yellow'}>
                      <div className={'sidebar-journey-card-label'}>
                        {'Price comparison needed'}
                      </div>
                      <div className={'sidebar-journey-card-duration'}>
                        {
                          'Detected when user toggled between your site and competitor sites.'
                        }
                      </div>
                    </div>
                  </div>
                  <div className={'delivery-settings-group'}>
                    <div className={'messaging-sidebar-h2-style2'}>
                      {'Offer Status'}
                    </div>
                    <div className={'messaging-sidebar-cards gap-5 bg-grey'}>
                      <div className={'sidebar-journey-card-label'}>
                        {'No offers sent yet'}
                      </div>
                      <div className={'sidebar-journey-card-duration'}>
                        {'Recommended: Send 10% discount offer.'}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default MaincontentLayout_5ea7a836;
