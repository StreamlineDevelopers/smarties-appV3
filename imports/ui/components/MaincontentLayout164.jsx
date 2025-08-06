import React from 'react';
import IconseoItem from './IconseoItem';
import ContactdetailstablinkItem161 from './ContactdetailstablinkItem161';
import TonebtnItem148 from './TonebtnItem148';
import WcheckboxItem155 from './WcheckboxItem155';
import ContacttablecelldivItem149 from './ContacttablecelldivItem149';
import ContacttablecelldivItem150 from './ContacttablecelldivItem150';
import ContacttablecelldivItem151 from './ContacttablecelldivItem151';
import ContacttablecelldivItem152 from './ContacttablecelldivItem152';
import ContacttablecelldivItem153 from './ContacttablecelldivItem153';
import ContacttablecelldivItem156 from './ContacttablecelldivItem156';
import ContacttablecelldivItem160 from './ContacttablecelldivItem160';
import PlanusageprogressrowItem147 from './PlanusageprogressrowItem147';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import JourneyquickactionscardItem from './JourneyquickactionscardItem';
import SidebaracctdetailsrowItem158 from './SidebaracctdetailsrowItem158';

const MaincontentLayout164 = ({}) => {
  return (
    <div
      id={'w-node-edc52c55-d0f6-4c51-06f6-d16cbc8f440d-f14725db'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>Content Library</div>
            <div className={'db-quickaction-text'}>
              Manage, edit, and repurpose your content all in one place
            </div>
          </div>
        </div>
        <div className={'journey-dashboard-width'}>
          <div className={'mainwidth-control journey'}>
            <div
              data-current={'Tab 1'}
              data-easing={'ease'}
              data-duration-in={'300'}
              data-duration-out={'100'}
              className={'activity-tabs w-tabs'}
            >
              <div className={'activity-tabsmenu w-tab-menu'}>
                <a
                  data-w-tab={'Tab 1'}
                  className={
                    'contactdetails-tablink w-inline-block w-tab-link w--current'
                  }
                >
                  <IconseoItem
                    iconSrc={'/svgs/icon-a702a1f0e033f98511c5c9884bbe0bcb.svg'}
                  />
                  <div>Blog Posts</div>
                </a>
                <ContactdetailstablinkItem161
                  dataWTab={'Tab 2'}
                  iconSrc={'/svgs/icon-b04ee831d7f339cacdc12ae7e67a7a13.svg'}
                  divText={'Social Posts'}
                />
                <ContactdetailstablinkItem161
                  dataWTab={'Tab 3'}
                  iconSrc={'/svgs/icon-431ab88318b95868cdf3c46a0db23254.svg'}
                  divText={'Podcast Scripts'}
                />
                <ContactdetailstablinkItem161
                  dataWTab={'Tab 4'}
                  iconSrc={'/svgs/icon-373b55eaa64db3580be5eb557d317ced.svg'}
                  divText={'Saved Ideas'}
                />
                <ContactdetailstablinkItem161
                  dataWTab={'Tab 5'}
                  iconSrc={'/svgs/icon-c65ca956a1a7cd7aa512becdc5a6184b.svg'}
                  divText={'Drafts'}
                />
              </div>
              <div className={'contactdetails-tabscontent w-tab-content'}>
                <div
                  data-w-tab={'Tab 1'}
                  className={'contactdetails-tabpane w-tab-pane w--tab-active'}
                >
                  <div className={'activity-tabpane-div'}>
                    <div className={'w-form'}>
                      <form
                        id={'wf-form-tool-form'}
                        name={'wf-form-tool-form'}
                        data-name={'tool form'}
                        method={'get'}
                        data-wf-page-id={'688b61ee631f6165f14725db'}
                        data-wf-element-id={
                          'edc52c55-d0f6-4c51-06f6-d16cbc8f44a8'
                        }
                      >
                        <div className={'form-body mt-20'}>
                          <div className={'contacts-main-top'}>
                            <div className={'contacts-main-topleft'}>
                              <div className={'messaging-sidebar-h1'}>
                                Blog Posts
                              </div>
                              <div className={'contact-table-tag silver'}>
                                3 items
                              </div>
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
                              />
                              <a
                                href={'#'}
                                className={'btn-style1 outline w-inline-block'}
                              >
                                <div className={'btn-icon'}>
                                  <img
                                    src={
                                      '../images/smarties-btnicon-filter.svg'
                                    }
                                    loading={'lazy'}
                                    alt={''}
                                  />
                                </div>
                                <div>Filters</div>
                              </a>
                            </div>
                          </div>
                          <div className={'tone-row'}>
                            <div className={'tone-text'}>Status:</div>
                            <div className={'tone-btn-container'}>
                              <div className={'tone-btn active'}>
                                <div>All</div>
                              </div>
                              <TonebtnItem148 divText={'Published'} />
                              <TonebtnItem148 divText={'Draft'} />
                              <TonebtnItem148 divText={'Scheduled'} />
                              <TonebtnItem148 divText={'Archived'} />
                            </div>
                          </div>
                          <div className={'contact-table-div'}>
                            <div className={'contacts-tableheader'}>
                              <div className={'contact-table-cell-div _w-3'}>
                                <WcheckboxItem155 />
                              </div>
                              <ContacttablecelldivItem149 header={'title'} />
                              <ContacttablecelldivItem150
                                header={'date created'}
                              />
                              <div className={'contact-table-cell-div _w-15'}>
                                <div className={'contact-table-header-text'}>
                                  channel
                                </div>
                              </div>
                              <ContacttablecelldivItem150 header={'status'} />
                              <ContacttablecelldivItem149 header={'ai score'} />
                              <ContacttablecelldivItem150 header={'actions'} />
                            </div>
                            <div className={'contacts-table-content'}>
                              <div className={'contact--table-row'}>
                                <div className={'contact-table-cell-div _w-3'}>
                                  <WcheckboxItem155 />
                                </div>
                                <ContacttablecelldivItem151
                                  divText={
                                    '10 Marketing Automation Trends for 2023'
                                  }
                                />
                                <ContacttablecelldivItem152 />
                                <ContacttablecelldivItem153
                                  label={'Company Blog'}
                                />
                                <ContacttablecelldivItem156 />
                                <div
                                  className={'contact-table-cell-div stretch'}
                                >
                                  <div className={'aiscore'}>
                                    <div className={'plan-usage-progress-row'}>
                                      <div
                                        className={'plan-usage-progress _w-87'}
                                      ></div>
                                    </div>
                                    <div className={'settings-sublabel'}>
                                      87%
                                    </div>
                                  </div>
                                </div>
                                <ContacttablecelldivItem160 />
                              </div>
                              <div className={'contact--table-row'}>
                                <div className={'contact-table-cell-div _w-3'}>
                                  <WcheckboxItem155 />
                                </div>
                                <ContacttablecelldivItem151
                                  divText={
                                    'The Future of Content Marketing in 2024'
                                  }
                                />
                                <ContacttablecelldivItem152 />
                                <ContacttablecelldivItem153 label={'Medium'} />
                                <div className={'contact-table-cell-div _w-10'}>
                                  <div className={'contacts-table-tags-div'}>
                                    <div className={'contact-table-tag silver'}>
                                      Draft
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className={'contact-table-cell-div stretch'}
                                >
                                  <div className={'aiscore'}>
                                    <div className={'plan-usage-progress-row'}>
                                      <div
                                        className={'plan-usage-progress _w-55'}
                                      ></div>
                                    </div>
                                    <div className={'settings-sublabel'}>
                                      55%
                                    </div>
                                  </div>
                                </div>
                                <ContacttablecelldivItem160 />
                              </div>
                              <div className={'contact--table-row'}>
                                <div className={'contact-table-cell-div _w-3'}>
                                  <WcheckboxItem155 />
                                </div>
                                <ContacttablecelldivItem151
                                  divText={
                                    'How AI is Changing Digital Marketing'
                                  }
                                />
                                <ContacttablecelldivItem152 />
                                <ContacttablecelldivItem153
                                  label={'Company Blog'}
                                />
                                <ContacttablecelldivItem156 />
                                <div
                                  className={'contact-table-cell-div stretch'}
                                >
                                  <div className={'aiscore'}>
                                    <div className={'plan-usage-progress-row'}>
                                      <div
                                        className={'plan-usage-progress _w-81'}
                                      ></div>
                                    </div>
                                    <div className={'settings-sublabel'}>
                                      81%
                                    </div>
                                  </div>
                                </div>
                                <ContacttablecelldivItem160 />
                              </div>
                              <div className={'contact--table-row'}>
                                <div className={'contact-table-cell-div _w-3'}>
                                  <WcheckboxItem155 />
                                </div>
                                <ContacttablecelldivItem151
                                  divText={
                                    'SEO Best Practices for Small Businesses'
                                  }
                                />
                                <ContacttablecelldivItem152 />
                                <ContacttablecelldivItem153
                                  label={'Company Blog'}
                                />
                                <div className={'contact-table-cell-div _w-10'}>
                                  <div className={'contacts-table-tags-div'}>
                                    <div
                                      className={'contact-table-tag bg-blue'}
                                    >
                                      Scheduled
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className={'contact-table-cell-div stretch'}
                                >
                                  <div className={'aiscore'}>
                                    <PlanusageprogressrowItem147 />
                                    <div className={'settings-sublabel'}>
                                      92%
                                    </div>
                                  </div>
                                </div>
                                <ContacttablecelldivItem160 />
                              </div>
                              <div className={'contact--table-row'}>
                                <div className={'contact-table-cell-div _w-3'}>
                                  <WcheckboxItem155 />
                                </div>
                                <ContacttablecelldivItem151
                                  divText={
                                    'Building a Content Calendar That Works'
                                  }
                                />
                                <ContacttablecelldivItem152 />
                                <ContacttablecelldivItem153
                                  label={'Company Blog'}
                                />
                                <ContacttablecelldivItem156 />
                                <div
                                  className={'contact-table-cell-div stretch'}
                                >
                                  <div className={'aiscore'}>
                                    <div className={'plan-usage-progress-row'}>
                                      <div
                                        className={'plan-usage-progress _w-75'}
                                      ></div>
                                    </div>
                                    <div className={'settings-sublabel'}>
                                      75%
                                    </div>
                                  </div>
                                </div>
                                <ContacttablecelldivItem160 />
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
                <div
                  data-w-tab={'Tab 2'}
                  className={'contactdetails-tabpane w-tab-pane'}
                ></div>
                <div data-w-tab={'Tab 3'} className={'w-tab-pane'}></div>
                <div data-w-tab={'Tab 4'} className={'w-tab-pane'}></div>
                <div data-w-tab={'Tab 5'} className={'w-tab-pane'}></div>
              </div>
            </div>
          </div>
          <div className={'delivery-settings-sidebar'}>
            <div className={'messaging-sidebar-hd-div align-inbetween'}>
              <div className={'messaging-sidebar-h1'}>Preview</div>
              <div
                data-w-id={'c0c0a836-7a71-adb5-51ac-eed10befbdb1'}
                className={'sidebar-close'}
              >
                <img src={'../images/Frame_5.svg'} loading={'lazy'} alt={''} />
              </div>
            </div>
            <div className={'step-formblock w-form'}>
              <form
                id={'email-form'}
                name={'email-form'}
                data-name={'Email Form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725db'}
                data-wf-element-id={'c0c0a836-7a71-adb5-51ac-eed10befbdb4'}
              >
                <div className={'sidebar-contact-body gap-20'}>
                  <div className={'preview-card'}>
                    <div className={'preview-top'}>
                      <div className={'preview-title'}>
                        How AI is Changing Digital Marketing
                      </div>
                      <div className={'preview-dateauthor'}>
                        June 5, 2023•Sarah Johnson
                      </div>
                      <div className={'contact-table-tag bg-green'}>
                        Published
                      </div>
                    </div>
                    <div className={'preview-text'}>
                      Artificial intelligence is revolutionizing how marketers
                      approach their strategies. From predictive analytics to
                      personalized content creation, AI tools are enabling
                      marketers to work smarter and achieve better results. This
                      post explores the key ways AI is transforming digital
                      marketing and provides practical tips for incorporating AI
                      into your marketing workflow.
                    </div>
                  </div>
                  <div className={'delivery-settings-group'}>
                    <div className={'contact-row-container'}>
                      <div className={'enrichmentusage-card gap-5'}>
                        <div className={'plan-usage-div-textcontent'}>
                          <div className={'planusage-label'}>
                            AI Engagement Score
                          </div>
                          <div className={'planusage-data text-roange'}>
                            87%
                          </div>
                        </div>
                        <PlanusageprogressrowItem147 />
                        <div className={'plan-usage-div-textcontent'}>
                          <div className={'planusage-label small'}>
                            This content is predicted to perform well with your
                            audience.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'delivery-settings-group'}>
                    <div className={'messaging-sidebar-h2-style2'}>
                      Relationship Insights
                    </div>
                    <div className={'relationship-card-div'}>
                      <JourneyquickactionscardItem
                        title={'Repurpose as Tweet Thread'}
                        itemText={
                          'Break down key points into a 6-part tweet thread to drive traffic.'
                        }
                      />
                      <JourneyquickactionscardItem
                        title={'Refresh for SEO'}
                        itemText={
                          'Add keywords: "AI content tools", "content automation"'
                        }
                      />
                    </div>
                  </div>
                  <div className={'delivery-settings-group'}>
                    <div className={'messaging-sidebar-h2-style2'}>
                      Content Details
                    </div>
                    <div className={'messaging-sidebar-cards'}>
                      <div className={'sidebar-contact-body'}>
                        <div className={'sidebar-acctdetails-body'}>
                          <SidebaracctdetailsrowItem158
                            label={'Word Count:'}
                            divText={'1,240'}
                          />
                          <SidebaracctdetailsrowItem158
                            label={'Reading Time:'}
                            divText={'4 min'}
                          />
                          <SidebaracctdetailsrowItem158
                            label={'Created By:'}
                            divText={'Alex Morgan'}
                          />
                          <SidebaracctdetailsrowItem158
                            label={'Last Modified:'}
                            divText={'May 12, 2023'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'btn-container-lead-info _w-100'}>
                    <a
                      href={'#'}
                      className={'btn-style1 outline w-inline-block'}
                    >
                      <div>Edit Content</div>
                    </a>
                    <a href={'#'} className={'btn-style1 w-inline-block'}>
                      <div>View Analytics</div>
                    </a>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout164;
