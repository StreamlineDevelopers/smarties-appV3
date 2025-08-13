import React from 'react';
import DashboardheadertextItem from './DashboardheadertextItem';
import DbstattagItem from './DbstattagItem';
import ContenticonembedItem from './ContenticonembedItem';
import ContactdetailstablinkItem from './ContactdetailstablinkItem';
import DashboardactivityfeedItem from './DashboardactivityfeedItem';
import DashboardactivityfeedItem_82d7a044 from './DashboardactivityfeedItem_82d7a044';
import DraftsitemtopItem from './DraftsitemtopItem';
import DurationcontainerItem from './DurationcontainerItem';
import ContactdetailsitemtopItem from './ContactdetailsitemtopItem';
import DbtrendingtopichdItem from './DbtrendingtopichdItem';
import SuggestedideasitemItem from './SuggestedideasitemItem';
import { Link } from "react-router-dom";

const MaincontentLayout_f5f7a05a = ({ }) => {
  return (
    <div
      id={'w-node-a68109ff-67f4-f404-77cb-19f0c68b3f4a-f14725d2'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>{'Buzz Builder Hub'}</div>
            <div className={'db-quickaction-text'}>
              {'Ready to make some noise today?'}
            </div>
          </div>
        </div>
        <div className={'journey-dashboard-width'}>
          <div className={'mainwidth-control journey'}>
            <div className={'dashboard-group'}>
              <DashboardheadertextItem title={'OVERVIEW'} />
              <div className={'db-stat-card-contain gap-10'}>
                <div className={'db-stat-card size-stretch'}>
                  <div className={'db-stat-card-left'}>
                    <div className={'stat-title'}>
                      {'Posts Published This Week'}
                    </div>
                    <div className={'db-stat-value-contain gap-10'}>
                      <div className={'stat-value'}>{'7'}</div>
                      <DbstattagItem
                        src={
                          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg'
                        }
                        divText={'12%'}
                      />
                      <div className={'db-journey-subtext'}>
                        {'from last week'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'db-stat-card size-stretch'}>
                  <div className={'db-stat-card-left'}>
                    <div className={'stat-title'}>{'Top Performing'}</div>
                    <div className={'db-stat-value-contain gap-10'}>
                      <div className={'stat-value smaller'}>
                        {'"How to Stay Cool This Summer"'}
                      </div>
                      <DbstattagItem
                        src={
                          'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccff12d401a801aff8b_db-stat-arrow.svg'
                        }
                        divText={'347'}
                      />
                      <div className={'db-journey-subtext'}>
                        {'engagements'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'dashboard-group'}>
              <DashboardheadertextItem title={'create new content'} />
              <div className={'dashboard-quickactions-div'}>
                <Link
                  // href={'../journey/write-blog.html'}
                  className={'content-action-card w-inline-block'}
                  to={'/journey/write-blog'}
                >
                  <div className={'card-icon bg-blue'}>
                    <img
                      src={'../images/smarties-bb-btnicon-01-icon.svg'}
                      loading={'lazy'}
                      width={'25'}
                      height={'25'}
                      alt={''}
                      className={'card-icon-image'}
                    />
                  </div>
                  <div className={'db-quickaction-textcontent'}>
                    <div className={'db-quickaction-hd-text'}>
                      {'Write Blog'}
                    </div>
                    <div className={'db-quickaction-text'}>
                      {
                        'Create long-form articles to establish authority and drive organic traffic.'
                      }
                    </div>
                    <div className={'bb-actionlink'}>
                      <div>{'Start New'}</div>
                      <ContenticonembedItem />
                    </div>
                  </div>
                </Link>
                <Link
                  // href={'../journey/post-to-social.html'}
                  className={'content-action-card bg-orange w-inline-block'}
                  to={'/journey/post-to-social'}
                >
                  <div className={'card-icon bg-orange'}>
                    <img
                      src={'../images/smarties-bb-btnicon-02-icon.svg'}
                      loading={'lazy'}
                      width={'25'}
                      height={'25'}
                      alt={''}
                      className={'card-icon-image'}
                    />
                  </div>
                  <div className={'db-quickaction-textcontent'}>
                    <div className={'db-quickaction-hd-text'}>
                      {'Social Post'}
                    </div>
                    <div className={'db-quickaction-text'}>
                      {
                        'Create long-form articles to establish authority and drive organic traffic.'
                      }
                    </div>
                    <div className={'bb-actionlink bg-orange'}>
                      <div>{'Start New'}</div>
                      <ContenticonembedItem />
                    </div>
                  </div>
                </Link>
                <Link
                  href={'../journey/create-podcast.html'}
                  className={'content-action-card bg-green w-inline-block'}
                  to={'/journey/post-to-social'}
                >
                  <div className={'card-icon bg-green'}>
                    <img
                      src={'../images/smarties-bb-btnicon-03-icon.svg'}
                      loading={'lazy'}
                      width={'25'}
                      height={'25'}
                      alt={''}
                      className={'card-icon-image'}
                    />
                  </div>
                  <div className={'db-quickaction-textcontent'}>
                    <div className={'db-quickaction-hd-text'}>{'Podcast'}</div>
                    <div className={'db-quickaction-text'}>
                      {
                        'Record audio content to connect with your audience in a more personal way.'
                      }
                    </div>
                    <div className={'bb-actionlink bg-green'}>
                      <div>{'Start New'}</div>
                      <ContenticonembedItem />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={'dashboard-col-group'}>
              <div className={'dashboard-group stretch'}>
                <DashboardheadertextItem title={'Recent activity'} />
                <div className={'db-recentassistants-card'}>
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
                        <div>{'All'}</div>
                      </a>
                      <ContactdetailstablinkItem
                        dataWTab={'Tab 2'}
                        divText={'Blog'}
                      />
                      <ContactdetailstablinkItem
                        dataWTab={'Tab 3'}
                        divText={'Social'}
                      />
                      <ContactdetailstablinkItem
                        dataWTab={'Tab 4'}
                        divText={'Podcast'}
                      />
                    </div>
                    <div className={'contactdetails-tabscontent w-tab-content'}>
                      <div
                        data-w-tab={'Tab 1'}
                        className={
                          'contactdetails-tabpane w-tab-pane w--tab-active'
                        }
                      >
                        <div className={'activity-tabpane-div'}>
                          <DashboardactivityfeedItem />
                          <div className={'dashboard-activityfeed'}>
                            <div className={'card-icon bg-green'}>
                              <img
                                src={
                                  '../images/smarties-bb-btnicon-03-icon.svg'
                                }
                                loading={'lazy'}
                                width={'25'}
                                height={'25'}
                                alt={''}
                                className={'card-icon-image'}
                              />
                            </div>
                            <div className={'activityfeed-textcontent'}>
                              <div className={'db-card-title'}>
                                <strong>{'Podcast draft created'}</strong>
                                {' from trending topic: '}
                                <strong>{'#RetailAI'}</strong>
                              </div>
                              <div className={'uploadeditem-filesize'}>
                                {'2 hrs ago'}
                              </div>
                            </div>
                          </div>
                          <DashboardactivityfeedItem_82d7a044 />
                          <DashboardactivityfeedItem />
                          <DashboardactivityfeedItem_82d7a044 />
                        </div>
                      </div>
                      <div data-w-tab={'Tab 2'} className={'w-tab-pane'}></div>
                      <div data-w-tab={'Tab 3'} className={'w-tab-pane'}></div>
                      <div data-w-tab={'Tab 4'} className={'w-tab-pane'}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'dashboard-group _w-60'}>
                <div className={'section-header'}>
                  <DashboardheadertextItem title={'Recent drafts'} />
                  <a href={'#'} className={'link-style1'}>
                    {'Show Drafts'}
                  </a>
                </div>
                <div className={'db-recentassistants-card'}>
                  <div className={'drafts-item'}>
                    <DraftsitemtopItem
                      title={'The Future of AI in Marketing'}
                    />
                    <DurationcontainerItem />
                    <ContactdetailsitemtopItem />
                  </div>
                  <div className={'drafts-item'}>
                    <div className={'drafts-item-top'}>
                      <div className={'db-card-title'}>
                        {'Content Strategy for 2025'}
                      </div>
                      <div className={'smartassitant-tag yellow'}>
                        <div>{'In Review'}</div>
                      </div>
                    </div>
                    <DurationcontainerItem />
                    <ContactdetailsitemtopItem />
                  </div>
                  <div className={'drafts-item'}>
                    <div className={'drafts-item-top'}>
                      <div className={'db-card-title'}>
                        {'Twitter Thread: Content Tips'}
                      </div>
                      <div className={'smartassitant-tag gray'}>
                        <div>{'Draft'}</div>
                      </div>
                    </div>
                    <div className={'duration-container'}>
                      <div className={'uploadeditem-filesize bg-orange'}>
                        {'Social'}
                      </div>
                      <div className={'uploadeditem-filesize'}>
                        {'• Last edited 2 hours ago'}
                      </div>
                    </div>
                    <ContactdetailsitemtopItem />
                  </div>
                  <div className={'drafts-item'}>
                    <DraftsitemtopItem title={'Marketing Insights Podcast'} />
                    <div className={'duration-container'}>
                      <div className={'uploadeditem-filesize bg-green'}>
                        {'Podcast'}
                      </div>
                      <div className={'uploadeditem-filesize'}>
                        {'• Last edited 2 hours ago'}
                      </div>
                    </div>
                    <ContactdetailsitemtopItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'journey-db-rightpanel'}>
            <div className={'dashboard-group'}>
              <DashboardheadertextItem title={'trending topics'} />
              <div className={'db-recentassistants-card'}>
                <DbtrendingtopichdItem
                  src={'../images/smarties-icon-dailytrend.svg'}
                  divText={'Daily Trends'}
                />
                <div className={'sidebar-tag-body'}>
                  <div className={'contact-tag bg-grey'}>
                    {'Summer Marketing'}
                  </div>
                  <div className={'contact-tag bg-grey'}>{'Retail AI'}</div>
                  <div className={'contact-tag bg-grey'}>
                    {'Sustainability'}
                  </div>
                  <div className={'contact-tag bg-grey'}>{'Ecom Trends'}</div>
                  <div className={'contact-tag bg-grey'}>
                    {'Digital Strategy'}
                  </div>
                  <div className={'contact-tag bg-grey'}>{'Remote Work'}</div>
                </div>
                <DbtrendingtopichdItem
                  src={'../images/smarties-icon-monthlytrend.svg'}
                  divText={'MONTHLY TRENDS'}
                />
                <div className={'sidebar-tag-body'}>
                  <div className={'contact-tag bg-grey'}>{'AI Tools'}</div>
                  <div className={'contact-tag bg-grey'}>
                    {'Content Strategy'}
                  </div>
                  <div className={'contact-tag bg-grey'}>
                    {'Email Marketing'}
                  </div>
                  <div className={'contact-tag bg-grey'}>{'Social Media'}</div>
                </div>
              </div>
            </div>
            <div className={'dashboard-group'}>
              <DashboardheadertextItem title={'suggested ideas'} />
              <div className={'db-recentassistants-card'}>
                <SuggestedideasitemItem
                  strongText={'Blog Post Idea'}
                  title={'"7 Ways Retail Brands Can Leverage AI in 2025”'}
                  aText={'Use Idea'}
                />
                <SuggestedideasitemItem
                  strongText={'Tweet Thread'}
                  title={
                    'Share your content creation process in a step-by-step thread'
                  }
                  aText={'Save for Later'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default MaincontentLayout_f5f7a05a;
