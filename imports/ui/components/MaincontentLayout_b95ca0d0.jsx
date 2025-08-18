import React, { useRef, useState } from 'react';
import DashboardheadertextItem_95ccbf9e from './DashboardheadertextItem_95ccbf9e';
import DbtrendingtopichdItem from './DbtrendingtopichdItem';
import StepItem_1d0d69f5 from './StepItem_1d0d69f5';
import StepItem_0c31cf42 from './StepItem_0c31cf42';
import StepcardtitledivItem_f1c5b756 from './StepcardtitledivItem_f1c5b756';
import ScheduketagItem from './ScheduketagItem';
import PostdatecontainerItem from './PostdatecontainerItem';
import EngagementcontainerItem from './EngagementcontainerItem';
import SocialcontenthashtagsdivItem from './SocialcontenthashtagsdivItem';
import SocialcontentradiocardbottomItem from './SocialcontentradiocardbottomItem';
import Btnstyle1Item_c79bbac4 from './Btnstyle1Item_c79bbac4';
import IconembedItem from './IconembedItem';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import StepItem_c2c32501 from './StepItem_c2c32501';
import ActivitytabsmenuItem from './ActivitytabsmenuItem';
import TopicstablinkItem from './TopicstablinkItem';
import TopicstablinkItem_a052b5ff from './TopicstablinkItem_a052b5ff';
import SocialcontentitemItem from './SocialcontentitemItem';
import Btnstyle1Item_32e25154 from './Btnstyle1Item_32e25154';
import Btnstyle1Item_4383e460 from './Btnstyle1Item_4383e460';
import IcontopicstagItem from './IcontopicstagItem';
import IcontopicstagItem_7add8879 from './IcontopicstagItem_7add8879';
import IcontopicstagItem_ba9cc3e4 from './IcontopicstagItem_ba9cc3e4';
import ReusableItem_f1f14634 from './ReusableItem_f1f14634';
import TrendingtopicitembotItem_5aaf5f77 from './TrendingtopicitembotItem_5aaf5f77';
import PlatformoptionItem_f97190d2 from './PlatformoptionItem_f97190d2';
import FrequencyoptionItem_eb7b5348 from './FrequencyoptionItem_eb7b5348';
import DbquickactiontextcontentItem_90c6701f from './DbquickactiontextcontentItem_90c6701f';
import SeopanelrowItem from './SeopanelrowItem';
import SocialPostWatcher, { frequencyOptions, platformOptions, SOCIAL_POST, STEPS } from '../../api/client/watchers/SocialPostWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import { useNavigate } from 'react-router-dom';

const MaincontentLayout_b95ca0d0 = ({ }) => {
  const navigate = useNavigate();
  const watcher = useRef(SocialPostWatcher).current;
  useWatcher(watcher);

  const currentPosition = watcher.getValue(STEPS.CURRENT_POSITION);
  const platformSelected = watcher.getValue(SOCIAL_POST.PLATFORM);
  const frequencySelected = watcher.getValue(SOCIAL_POST.FREQUENCY);
  const trendingTopicSelected = watcher.getValue(SOCIAL_POST.TOPIC);
  const socialContentSelected = watcher.getValue(SOCIAL_POST.CONTENT);

  const topicsList = watcher.getValue(SOCIAL_POST.TOPICS) || [];
  const contentList = watcher.getValue(SOCIAL_POST.CONTENT_GENERATED) || [];

  const isLoadingTopic = watcher.getValue(SOCIAL_POST.LOADING_TOPICS);
  const isLoadingContent = watcher.getValue(SOCIAL_POST.LOADING_CONTENT);


  return (
    <div
      id={'w-node-_56a22ee8-48a6-d322-7d35-b57347bcd2ce-f14725d4'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div className={'bb-hd'}>
            <a
              href={'../journey/buzz-builder-hub.html'}
              className={'link-return w-inline-block'}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <img
                src={'../images/smarties-icon-return-grenn.svg'}
                loading={'lazy'}
                alt={''}
              />
            </a>
            <div>
              <div className={'page-header-text'}>{'Post to Social'}</div>
              <div className={'db-quickaction-text'}>
                {
                  'Create and schedule engaging content across your social platforms'
                }
              </div>
            </div>
          </div>
        </div>
        <div className={'journey-dashboard-width'}>
          <div className={'journey-db-leftpanel'}>
            <div className={'dashboard-group'}>
              <DashboardheadertextItem_95ccbf9e title={'trending topics'} />
              <div className={'trendingtopics-group'}>
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
          </div>
          <div className={'mainwidth-control journey'}>
            <div className={'postsocial-step4'} style={{ display: currentPosition === 3 ? 'flex' : 'none' }}>
              <div className={'steps-container'}>
                <StepItem_1d0d69f5 description={'Select Platforms'} />
                <div className={'step-divider'}></div>
                <StepItem_1d0d69f5 description={'Select Topics'} />
                <div className={'step-divider'}></div>
                <StepItem_1d0d69f5 description={'Customize Post'} />
                <div className={'step-divider'}></div>
                <StepItem_0c31cf42
                  divText={'4'}
                  description={'Preview & Schedule'}
                />
              </div>
              <div className={'step-card'}>
                <StepcardtitledivItem_f1c5b756 title={'4. Review & Schedule'} />
                <div className={'step-formblock w-form'}>
                  <form
                    id={'email-form'}
                    name={'email-form'}
                    data-name={'Email Form'}
                    method={'get'}
                    data-wf-page-id={'688b61ee631f6165f14725d4'}
                    data-wf-element-id={'56a22ee8-48a6-d322-7d35-b57347bcd3e6'}
                  >
                    <div className={'stepformcontent-div'}>
                      <div className={'schedule-row'}>
                        <div className={'scheduke-row-left'}>
                          <div className={'icon-topicstag green-big w-embed'}>
                            <img
                              src="/svgs/icon-9c047fc417e6aff5174858c4c58722d8.svg"
                              alt="icon"
                            />
                          </div>
                          <div className={'schedule-row-textcontent'}>
                            <div className={'schedule-label'}>
                              {'Weekly posting schedule'}
                            </div>
                            <div className={'schedule-description'}>
                              {
                                'Posts will be published every week on optimal days'
                              }
                            </div>
                          </div>
                        </div>
                        <div className={'scheduke-row-right'}>
                          <ScheduketagItem divText={'Mon'} />
                          <ScheduketagItem divText={'Wed'} />
                          <ScheduketagItem divText={'Fri'} />
                        </div>
                      </div>
                      <div className={'step-card-subheader-div'}>
                        <div className={'step-h2'}>{'Post Previews'}</div>
                        <div className={'bulkedit-radio-div'}>
                          <div className={'social-topic-tooltip-div'}>
                            <div
                              data-w-id={'3d86ee4a-3732-31a1-2e28-8b097c0b574a'}
                              className={'social-topic-tooltip-icon'}
                            >
                              <img
                                src={'../images/smarties-icon-tip.svg'}
                                loading={'lazy'}
                                alt={''}
                              />
                            </div>
                            <div className={'social-topic-tooltip'}>
                              <div>
                                {'Change timing, hashtags, '}
                                <br />
                                {'tone across all posts'}
                                <br />
                              </div>
                            </div>
                          </div>
                          <div className={'bulkedit-text'}>
                            {'Bulk edit all posts'}
                          </div>
                          <div className={'switch-div'}>
                            <div className={'switch-control'}></div>
                          </div>
                        </div>
                      </div>
                      <div className={'post-preview-list'}>
                        {socialContentSelected && <label className={'post-preview-item w-radio'}>
                          <div
                            className={
                              'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
                            }
                          ></div>
                          <input
                            type={'radio'}
                            data-name={'Radio'}
                            id={'radio'}
                            name={'radio'}
                            style={{
                              opacity: '0',
                              position: 'absolute',
                              zIndex: '-1',
                            }}
                            value={'Radio'}
                          />
                          <div className={'postpreview-item-radiocard'}>
                            <div className={'social-content-radiocard-top'}>
                              <div className={'postpreview-item-top'}>
                                <div className={'postpreview-item-topleft'}>
                                  <div className={'postpreview-avatar'}>
                                    <img
                                      src={platformSelected.icon}
                                      loading={'lazy'}
                                      width={'20'}
                                      height={'20'}
                                      alt={''}
                                      className={'postpreview-icon'}
                                    />
                                  </div>
                                  <div className={'postpreview-info'}>
                                    <div
                                      className={'postpreview-info-titlediv'}
                                    >
                                      <div className={'socialcontent-name'}>
                                        {platformSelected.name}
                                      </div>
                                      <div className={'post-preview-tag'}>
                                        {'Scheduled'}
                                      </div>
                                    </div>
                                    <PostdatecontainerItem />
                                  </div>
                                </div>
                                <EngagementcontainerItem
                                  src={'../images/mdiflame.svg'}
                                  divText={'91'}
                                />
                              </div>
                              <div className={'socialcontent-post'}>
                                {
                                  socialContentSelected.content
                                }
                              </div>
                              <SocialcontenthashtagsdivItem
                                divText={socialContentSelected.hashtags[0]}
                                divText1={socialContentSelected.hashtags[1]}
                              />
                            </div>
                            <SocialcontentradiocardbottomItem />
                          </div>
                          <span
                            className={'radio-button-label-2 w-form-label'}
                            htmlFor={'radio'}
                          >
                            {'Radio'}
                          </span>
                        </label>}
                        {/* <label className={'post-preview-item w-radio'}>
                          <div
                            className={
                              'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
                            }
                          ></div>
                          <input
                            type={'radio'}
                            data-name={'Radio'}
                            id={'radio'}
                            name={'radio'}
                            style={{
                              opacity: '0',
                              position: 'absolute',
                              zIndex: '-1',
                            }}
                            value={'Radio'}
                          />
                          <div className={'postpreview-item-radiocard'}>
                            <div className={'social-content-radiocard-top'}>
                              <div className={'postpreview-item-top'}>
                                <div className={'postpreview-item-topleft'}>
                                  <div className={'postpreview-avatar'}>
                                    <img
                                      src={'../images/smarties-social-fb.svg'}
                                      loading={'lazy'}
                                      width={'20'}
                                      height={'20'}
                                      alt={''}
                                      className={'postpreview-icon'}
                                    />
                                  </div>
                                  <div className={'postpreview-info'}>
                                    <div
                                      className={'postpreview-info-titlediv'}
                                    >
                                      <div className={'socialcontent-name'}>
                                        {'Facebook Post'}
                                      </div>
                                      <div className={'post-preview-tag green'}>
                                        {'Approved'}
                                      </div>
                                    </div>
                                    <PostdatecontainerItem />
                                  </div>
                                </div>
                                <EngagementcontainerItem
                                  src={'../images/smarties-icon-thumbsup.svg'}
                                  divText={'72'}
                                />
                              </div>
                              <div className={'socialcontent-post'}>
                                {
                                  "Automating your marketing workflows isn't just about saving time—it's about creating space for strategic thinking. #MarketingAutomation lets you focus on what matters most: connecting with your audience."
                                }
                              </div>
                              <SocialcontenthashtagsdivItem
                                divText={'#DigitalMarketing'}
                                divText1={'#WorkSmarter'}
                              />
                            </div>
                            <SocialcontentradiocardbottomItem />
                          </div>
                          <span
                            className={'radio-button-label-2 w-form-label'}
                            htmlFor={'radio'}
                          >
                            {'Radio'}
                          </span>
                        </label> */}
                      </div>
                      <div className={'form-btn-container inbetween'}>
                        <Btnstyle1Item_c79bbac4
                          dataWId={'56a22ee8-48a6-d322-7d35-b57347bcd420'}
                          onClick={() => watcher.goPrevious()}
                        />
                        <div className={'btn-container-left'}>
                          <a href={'#'} className={'btn-style1 w-inline-block'} onClick={() => watcher.finishAndActivateSchedule()}>
                            <div>{'Finish and Activate Schedule'}</div>
                            <IconembedItem
                              iconSrc={
                                '/svgs/icon-fc08c021c0d6c4f593c859ee7a354abc.svg'
                              }
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
            <div className={'postsocial-step3'} style={{ display: currentPosition === 2 ? 'flex' : 'none' }}>
              <div className={'steps-container'}>
                <StepItem_1d0d69f5 description={'Select Platforms'} />
                <div className={'step-divider'}></div>
                <StepItem_1d0d69f5 description={'Select Topics'} />
                <div className={'step-divider'}></div>
                <StepItem_0c31cf42
                  divText={'3'}
                  description={'Customize Post'}
                />
                <div className={'step-divider inactive'}></div>
                <StepItem_c2c32501
                  divText={'4'}
                  description={'Preview & Schedule'}
                />
              </div>
              <div className={'step-card'}>
                <div className={'step-card-title-div'}>
                  <div className={'step-title'}>
                    {'3. AI-Generated Content'}
                  </div>
                  <div className={'step-description-small'}>
                    {'Generated posts for '}
                    <span className={'text-teal'}>
                      {'"#MarketingAutomation"'}
                    </span>
                  </div>
                </div>
                <div className={'step-formblock w-form'}>
                  <form
                    id={'email-form'}
                    name={'email-form'}
                    data-name={'Email Form'}
                    method={'get'}
                    data-wf-page-id={'688b61ee631f6165f14725d4'}
                    data-wf-element-id={'2c706663-f643-769c-791c-276c844a05be'}
                  >
                    <div className={'stepformcontent-div'}>
                      <div
                        data-current={'Tab 1'}
                        data-easing={'ease'}
                        data-duration-in={'300'}
                        data-duration-out={'100'}
                        className={'activity-tabs w-tabs'}
                      >
                        <ActivitytabsmenuItem />
                        <div
                          className={'contactdetails-tabscontent w-tab-content'}
                        >
                          <div
                            data-w-tab={'Tab 1'}
                            className={
                              'contactdetails-tabpane w-tab-pane w--tab-active'
                            }
                          >
                            <div className={'activity-tabpane-div'}>
                              <div
                                data-current={'Tab 1'}
                                data-easing={'ease'}
                                data-duration-in={'300'}
                                data-duration-out={'100'}
                                className={'topics-tabs w-tabs'}
                              >
                                <div className={'topics-tabsmenu w-tab-menu'}>
                                  <TopicstablinkItem />
                                  <TopicstablinkItem_a052b5ff
                                    dataWTab={'Tab 2'}
                                    divText={'Casual'}
                                  />
                                  <TopicstablinkItem_a052b5ff
                                    dataWTab={'Tab 3'}
                                    divText={'Professional'}
                                  />
                                  <TopicstablinkItem_a052b5ff
                                    dataWTab={'Tab 4'}
                                    divText={'Data-driven'}
                                  />
                                </div>
                                <div className={'w-tab-content'}>
                                  <div
                                    data-w-tab={'Tab 1'}
                                    className={'w-tab-pane w--tab-active'}
                                  >
                                    {isLoadingContent ? <div>Loading...</div>
                                      :
                                      <div className={'social-topic-list'}>
                                        {contentList.length && contentList.map((item) => (
                                          <SocialcontentitemItem
                                            key={item.id}
                                            divText={
                                              item.content}
                                            divText1={item.hashtags[0]}
                                            divText2={item.hashtags[1]}
                                            divText3={item.hashtags[2]}
                                            value={socialContentSelected}
                                            checked={socialContentSelected?.id === item.id}
                                            onChange={() => watcher.setValue(SOCIAL_POST.CONTENT, item)}
                                          />
                                        ))}
                                      </div>
                                    }
                                  </div>
                                  <div
                                    data-w-tab={'Tab 2'}
                                    className={'w-tab-pane'}
                                  ></div>
                                  <div
                                    data-w-tab={'Tab 3'}
                                    className={'w-tab-pane'}
                                  ></div>
                                  <div
                                    data-w-tab={'Tab 4'}
                                    className={'w-tab-pane'}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-w-tab={'Tab 2'}
                            className={'contactdetails-tabpane w-tab-pane'}
                          ></div>
                        </div>
                      </div>
                      <div className={'form-btn-container inbetween'}>
                        <Btnstyle1Item_c79bbac4
                          dataWId={'2c706663-f643-769c-791c-276c844a0649'}
                          onClick={() => watcher.goPrevious()}
                        />
                        <div className={'btn-container-left'}>
                          <Btnstyle1Item_32e25154
                            iconSrc={
                              '/svgs/icon-42cfb7faf3c4b50e7f6f1863e42bc9e6.svg'
                            }
                            divText={'Generate More Variations'}
                          />
                          <Btnstyle1Item_4383e460
                            dataWId={'2c706663-f643-769c-791c-276c844a0652'}
                            iconSrc={
                              '/svgs/icon-05e60be02362b63346cf645f41bc4094.svg'
                            }
                            onClick={() => watcher.goNext()}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
            <div className={'postsocial-step2'} style={{ display: currentPosition === 1 ? 'flex' : 'none' }}>
              <div className={'steps-container'}>
                <StepItem_1d0d69f5 description={'Select Platforms'} />
                <div className={'step-divider'}></div>
                <StepItem_0c31cf42
                  divText={'2'}
                  description={'Select Topics'}
                />
                <div className={'step-divider inactive'}></div>
                <StepItem_c2c32501
                  divText={'3'}
                  description={'Customize Post'}
                />
                <div className={'step-divider inactive'}></div>
                <StepItem_c2c32501
                  divText={'4'}
                  description={'Preview & Schedule'}
                />
              </div>
              <div className={'step-card'}>
                <StepcardtitledivItem_f1c5b756
                  title={'2. Select Trending Topics'}
                />
                <div className={'step-formblock w-form'}>
                  <form
                    id={'email-form'}
                    name={'email-form'}
                    data-name={'Email Form'}
                    method={'get'}
                    data-wf-page-id={'688b61ee631f6165f14725d4'}
                    data-wf-element-id={'2a186bf9-b26d-c516-8200-f64c6185ffe9'}
                  >
                    <div className={'stepformcontent-div'}>
                      <div
                        data-current={'Tab 1'}
                        data-easing={'ease'}
                        data-duration-in={'300'}
                        data-duration-out={'100'}
                        className={'activity-tabs w-tabs'}
                      >
                        <ActivitytabsmenuItem />
                        <div
                          className={'contactdetails-tabscontent w-tab-content'}
                        >
                          <div
                            data-w-tab={'Tab 1'}
                            className={
                              'contactdetails-tabpane w-tab-pane w--tab-active'
                            }
                          >
                            <div className={'activity-tabpane-div'}>
                              <div
                                data-current={'Tab 1'}
                                data-easing={'ease'}
                                data-duration-in={'300'}
                                data-duration-out={'100'}
                                className={'topics-tabs w-tabs'}
                              >
                                <div className={'topics-tabsmenu w-tab-menu'}>
                                  <TopicstablinkItem />
                                  <a
                                    data-w-tab={'Tab 2'}
                                    className={
                                      'topics-tablink w-inline-block w-tab-link'
                                    }
                                  >
                                    <IcontopicstagItem
                                      iconSrc={
                                        '/svgs/icon-505e665c498e24538fc172e69c8a3b0c.svg'
                                      }
                                    />
                                    <div>{'Technology'}</div>
                                  </a>
                                  <a
                                    data-w-tab={'Tab 3'}
                                    className={
                                      'topics-tablink w-inline-block w-tab-link'
                                    }
                                  >
                                    <IcontopicstagItem_7add8879
                                      iconSrc={
                                        '/svgs/icon-b64d540a605d4da102b556d45f5be916.svg'
                                      }
                                    />
                                    <div>{'Marketing'}</div>
                                  </a>
                                  <a
                                    data-w-tab={'Tab 4'}
                                    className={
                                      'topics-tablink w-inline-block w-tab-link'
                                    }
                                  >
                                    <IcontopicstagItem_ba9cc3e4
                                      iconSrc={
                                        '/svgs/icon-9e17e91f18a914b14ef30949f319ecc3.svg'
                                      }
                                    />
                                    <div>{'Business'}</div>
                                  </a>
                                  <a
                                    data-w-tab={'Tab 5'}
                                    className={
                                      'topics-tablink w-inline-block w-tab-link'
                                    }
                                  >
                                    <div
                                      className={
                                        'icon-topicstag purple w-embed'
                                      }
                                    >
                                      <img
                                        src="/svgs/icon-9f1a7c144e56bf28592986010fb98a02.svg"
                                        alt="icon"
                                      />
                                    </div>
                                    <div>{'Lifestyle'}</div>
                                  </a>
                                </div>
                                <div className={'w-tab-content'}>
                                  <div
                                    data-w-tab={'Tab 1'}
                                    className={'w-tab-pane w--tab-active'}
                                  >
                                    {isLoadingTopic ? <div>Loading...</div>
                                      :
                                      <div className={'social-topic-list'}>
                                        {topicsList.length && topicsList.map((item) => (
                                          <label
                                            key={item.id}
                                            className={'social-topic-item w-radio'}
                                          >
                                            <div
                                              className={
                                                `w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input ${trendingTopicSelected?.id == item.id && 'w--redirected-focus w--redirected-checked'}`
                                              }
                                            ></div>
                                            <input
                                              type={'radio'}
                                              data-name={'Radio'}
                                              id={'radio'}
                                              name={'radio'}
                                              style={{
                                                opacity: '0',
                                                position: 'absolute',
                                                zIndex: '-1',
                                              }}
                                              value={trendingTopicSelected}
                                              checked={trendingTopicSelected?.id === item.id}
                                              onChange={() => watcher.setValue(SOCIAL_POST.TOPIC, item)}
                                            />
                                            <div className={'social-radiocard'}>
                                              <div className={'headline-item-top'}>
                                                <div
                                                  className={'trending-count-text'}
                                                >
                                                  {item.trendingRank}
                                                </div>
                                                <div className={'topictag'}>
                                                  <IcontopicstagItem
                                                    iconSrc={
                                                      item.categoryIcon
                                                    }
                                                  />
                                                  <div>{item.category}</div>
                                                </div>
                                              </div>
                                              <ReusableItem_f1f14634
                                                label={item.hashtag}
                                                divText={
                                                  item.description
                                                }
                                              />
                                              <TrendingtopicitembotItem_5aaf5f77
                                                divText={item.postsToday}
                                                dataWId={
                                                  '2a186bf9-b26d-c516-8200-f64c61860023'
                                                }
                                              />
                                            </div>
                                            <span
                                              className={
                                                'radio-button-label-2 w-form-label'
                                              }
                                              htmlFor={'radio'}
                                            >
                                              {'Radio'}
                                            </span>
                                          </label>
                                        ))}
                                        {/* <label
                                        className={'social-topic-item w-radio'}
                                      >
                                        <div
                                          className={
                                            'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
                                          }
                                        ></div>
                                        <input
                                          type={'radio'}
                                          data-name={'Radio'}
                                          id={'radio'}
                                          name={'radio'}
                                          style={{
                                            opacity: '0',
                                            position: 'absolute',
                                            zIndex: '-1',
                                          }}
                                          value={'Radio'}
                                        />
                                        <div className={'social-radiocard'}>
                                          <div className={'headline-item-top'}>
                                            <div
                                              className={'trending-count-text'}
                                            >
                                              {'Trending #1'}
                                            </div>
                                            <div className={'topictag'}>
                                              <IcontopicstagItem_ba9cc3e4
                                                iconSrc={
                                                  '/svgs/icon-6c2f7aaf4f4c9269e6a55822a4fcecd5.svg'
                                                }
                                              />
                                              <div>{'Business'}</div>
                                            </div>
                                          </div>
                                          <ReusableItem_f1f14634
                                            label={'#ContentStrategy'}
                                            divText={
                                              'Building effective content strategies for 2023'
                                            }
                                          />
                                          <TrendingtopicitembotItem_5aaf5f77
                                            divText={'85K+ posts today'}
                                            dataWId={
                                              '2a186bf9-b26d-c516-8200-f64c6186003f'
                                            }
                                          />
                                        </div>
                                        <span
                                          className={
                                            'radio-button-label-2 w-form-label'
                                          }
                                          htmlFor={'radio'}
                                        >
                                          {'Radio'}
                                        </span>
                                      </label>
                                      <label
                                        className={'social-topic-item w-radio'}
                                      >
                                        <div
                                          className={
                                            'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
                                          }
                                        ></div>
                                        <input
                                          type={'radio'}
                                          data-name={'Radio'}
                                          id={'radio'}
                                          name={'radio'}
                                          style={{
                                            opacity: '0',
                                            position: 'absolute',
                                            zIndex: '-1',
                                          }}
                                          value={'Radio'}
                                        />
                                        <div className={'social-radiocard'}>
                                          <div className={'headline-item-top'}>
                                            <div
                                              className={'trending-count-text'}
                                            >
                                              {'Trending #3'}
                                            </div>
                                            <div className={'topictag'}>
                                              <IcontopicstagItem_7add8879
                                                iconSrc={
                                                  '/svgs/icon-566712c524790e57a02686ba2804f9e0.svg'
                                                }
                                              />
                                              <div>{'Marketing'}</div>
                                            </div>
                                          </div>
                                          <ReusableItem_f1f14634
                                            label={'#SocialMediaTips'}
                                            divText={
                                              'Expert tips for growing your social presence'
                                            }
                                          />
                                          <TrendingtopicitembotItem_5aaf5f77
                                            divText={'65K+ posts today'}
                                            dataWId={
                                              '2a186bf9-b26d-c516-8200-f64c6186005b'
                                            }
                                          />
                                        </div>
                                        <span
                                          className={
                                            'radio-button-label-2 w-form-label'
                                          }
                                          htmlFor={'radio'}
                                        >
                                          {'Radio'}
                                        </span>
                                      </label> */}
                                      </div>
                                    }
                                  </div>
                                  <div
                                    data-w-tab={'Tab 2'}
                                    className={'w-tab-pane'}
                                  ></div>
                                  <div
                                    data-w-tab={'Tab 3'}
                                    className={'w-tab-pane'}
                                  ></div>
                                  <div
                                    data-w-tab={'Tab 4'}
                                    className={'w-tab-pane'}
                                  ></div>
                                  <div
                                    data-w-tab={'Tab 5'}
                                    className={'w-tab-pane'}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-w-tab={'Tab 2'}
                            className={'contactdetails-tabpane w-tab-pane'}
                          ></div>
                        </div>
                      </div>
                      <div className={'form-btn-container inbetween'}>
                        <Btnstyle1Item_c79bbac4
                          dataWId={'2a186bf9-b26d-c516-8200-f64c6186006a'}
                          onClick={() => watcher.goPrevious()}
                        />
                        <div className={'btn-container-left'}>
                          <Btnstyle1Item_4383e460
                            dataWId={'2a186bf9-b26d-c516-8200-f64c6186006f'}
                            iconSrc={
                              '/svgs/icon-05e60be02362b63346cf645f41bc4094.svg'
                            }
                            onClick={() => watcher.goNext()}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
            <div className={'postsocial-step1'} style={{ display: currentPosition === 0 ? 'flex' : 'none' }}>
              <div className={'steps-container'}>
                <StepItem_0c31cf42
                  divText={'1'}
                  description={'Select Platforms'}
                />
                <div className={'step-divider inactive'}></div>
                <StepItem_c2c32501
                  divText={'2'}
                  description={'Select Topics'}
                />
                <div className={'step-divider inactive'}></div>
                <StepItem_c2c32501
                  divText={'3'}
                  description={'Customize Post'}
                />
                <div className={'step-divider inactive'}></div>
                <StepItem_c2c32501
                  divText={'4'}
                  description={'Preview & Schedule'}
                />
              </div>
              <div className={'step-card'}>
                <StepcardtitledivItem_f1c5b756
                  title={'1. Choose Platform and Frequency'}
                />
                <div className={'step-formblock w-form'}>
                  <form
                    id={'email-form'}
                    name={'email-form'}
                    data-name={'Email Form'}
                    method={'get'}
                    data-wf-page-id={'688b61ee631f6165f14725d4'}
                    data-wf-element-id={'56a22ee8-48a6-d322-7d35-b57347bcd457'}
                  >
                    <div className={'platform-frequency-div'}>
                      <div className={'platform-col'}>
                        <div className={'step-description-small'}>
                          {'Select platforms to post to:'}
                        </div>
                        <div className={'blog-topic-option-div'}>
                          {platformOptions.map((item, index) => (
                            <PlatformoptionItem_f97190d2
                              key={index}
                              src={item.icon}
                              label={item.name}
                              value={item.name}
                              checked={platformSelected?.name === item.name}
                              onChange={() => watcher.setValue(SOCIAL_POST.PLATFORM, item)}
                            />
                          ))}
                          {/* <PlatformoptionItem_f97190d2
                            src={'../images/smarties-social-insta.svg'}
                            label={'Instagram'}
                          />
                          <PlatformoptionItem_f97190d2
                            src={'../images/smarties-social-facebook.svg'}
                            label={'Facebook'}
                          /> */}
                        </div>
                        <div className={'calendar-preview-div'}>
                          <Btnstyle1Item_32e25154
                            iconSrc={
                              '/svgs/icon-7d230c9d6ace643cac8b7208985e91e5.svg'
                            }
                            divText={'Calendar Preview'}
                          />
                        </div>
                      </div>
                      <div className={'frequency-col'}>
                        <div className={'step-description-small'}>
                          {'How often would you like to post?'}
                        </div>
                        <div className={'frequency-option-div'}>
                          {frequencyOptions.map((item, index) => (
                            <FrequencyoptionItem_eb7b5348
                              key={item.id}
                              title={item.title}
                              divText={item.subtitle}
                              divText1={item.description}
                              src={item.icon}
                              value={item.title}
                              checked={frequencySelected === item.title}
                              onChange={() => watcher.setValue(SOCIAL_POST.FREQUENCY, item.title)}
                            />
                          ))}
                          {/* <FrequencyoptionItem_eb7b5348
                            title={'Weekly'}
                            divText={'Ideal for updates or newsletters'}
                            divText1={'Post 2-3 times per week'}
                            src={'../images/smarties-frequency-weekly.svg'}
                          />
                          <FrequencyoptionItem_eb7b5348
                            title={'Monthly'}
                            divText={'Great for announcements or campaigns'}
                            divText1={'Post 3-5 times per month'}
                            src={'../images/smarties-frequency-montlhy.svg'}
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className={'stepformcontent-div'}>
                      <div className={'form-btn-container'}>
                        <Btnstyle1Item_4383e460
                          dataWId={'56a22ee8-48a6-d322-7d35-b57347bcd4c4'}
                          iconSrc={
                            '/svgs/icon-8845fc47c482664a4fba81a990230b3c.svg'
                          }
                          onClick={() => watcher.goNext()}
                        />
                      </div>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
          </div>
          <div className={'journey-db-rightpanel _w-250'}>
            <div className={'dashboard-group'}>
              <DashboardheadertextItem_95ccbf9e title={'INSIGHTS'} />
              <div className={'db-recentassistants-card h-auto'}>
                <div className={'insights-card'}>
                  <div className={'insights-icon'}>
                    <img
                      src={'../images/smarties-activity-icon-02.svg'}
                      loading={'lazy'}
                      width={'25'}
                      height={'25'}
                      alt={''}
                      className={'card-icon-image'}
                    />
                  </div>
                  <DbquickactiontextcontentItem_90c6701f
                    title={'Your last tweet performed 80% above avg!'}
                    divText={'Try similar topics to maintain engagement.'}
                  />
                </div>
                <div className={'insights-card bg-blue'}>
                  <div className={'insights-icon'}>
                    <img
                      src={'../images/smarties-icon-bulb.svg'}
                      loading={'lazy'}
                      width={'25'}
                      height={'25'}
                      alt={''}
                      className={'card-icon-image'}
                    />
                  </div>
                  <DbquickactiontextcontentItem_90c6701f
                    title={'Blog readability tip'}
                    divText={
                      'Your paragraphs are 30% shorter than last month - keep it up!'
                    }
                  />
                </div>
                <SeopanelrowItem label={'Word Count'} divText={'234 words'} />
              </div>
            </div>
            <div className={'dashboard-group'}>
              <DashboardheadertextItem_95ccbf9e title={'LIVE SEO PANEL'} />
              <div className={'db-recentassistants-card h-auto'}>
                <SeopanelrowItem label={'Word Count'} divText={'234 words'} />
                <SeopanelrowItem label={'Keyword Density'} divText={'3.2%'} />
                <SeopanelrowItem label={'Tone'} divText={'Informative'} />
                <SeopanelrowItem
                  label={'Reading Level'}
                  divText={'Intermediate'}
                />
                <div className={'seo-optimzation'}>
                  <div className={'plan-usage-div-textcontent'}>
                    <div className={'seo-label'}>{'SEO Optimization'}</div>
                    <div className={'planusage-data'}>{'72/100'}</div>
                  </div>
                  <div className={'plan-usage-progress-row'}>
                    <div className={'plan-usage-progress'}></div>
                  </div>
                  <div className={'seo-optimzation-description'}>
                    {'Good. Some improvements could help boost your ranking.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout_b95ca0d0;
