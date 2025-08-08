import React, { useRef } from 'react';
import FiltergroupItem317 from './FiltergroupItem317';
import FiltergroupItem300 from './FiltergroupItem300';
import FiltergroupItem303 from './FiltergroupItem303';
import FiltergroupItem from './FiltergroupItem';
import FiltergroupItem309 from './FiltergroupItem309';
import Btnstyle12Item from './Btnstyle12Item';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import MessagingtablinkItem291 from './MessagingtablinkItem291';
import DurationtooltipItem from './DurationtooltipItem';
import FilterdropdownItem from './FilterdropdownItem';
import MessaginginboxavatarItem304 from './MessaginginboxavatarItem304';
import MessaginginboxnamerowItem286 from './MessaginginboxnamerowItem286';
import MessaginginboxtextcontentbotItem305 from './MessaginginboxtextcontentbotItem305';
import MessaginginboxitemrightItem316 from './MessaginginboxitemrightItem316';
import MessaginginboxtextcontentItem312 from './MessaginginboxtextcontentItem312';
import ChatstatustooltipItem from './ChatstatustooltipItem';
import MessaginginboxitemrightItem from './MessaginginboxitemrightItem';
import Menuitem2Item from './Menuitem2Item';
import ConvoinbounddurationItem from './ConvoinbounddurationItem';
import AttachmentimagenameinfowrapItem from './AttachmentimagenameinfowrapItem';
import SmsattachmentpopupItem from './SmsattachmentpopupItem';
import AttachmentsnopreviewItem from './AttachmentsnopreviewItem';
import MessagepopupfilterselectItem from './MessagepopupfilterselectItem';
import ScriptinjectorcarditemItem from './ScriptinjectorcarditemItem';
import RowprofilecontactdetailsItem from './RowprofilecontactdetailsItem';
import TabsmenulinksidecolumnItem from './TabsmenulinksidecolumnItem';
import CardsidecolumnhdItem from './CardsidecolumnhdItem';
import RowprofilecontactdetailsItem310 from './RowprofilecontactdetailsItem310';
import Assetsearchdiv2Item from './Assetsearchdiv2Item';
import AssetitemItem from './AssetitemItem';
import Divblock31Item from './Divblock31Item';
import Divblock32Item from './Divblock32Item';
import RowprofilecontactdetailsItem308 from './RowprofilecontactdetailsItem308';
import CardjourneydurationItem from './CardjourneydurationItem';
import SessionsummarycolItem from './SessionsummarycolItem';
import Col2formItem from './Col2formItem';
import HistoryconvonameItem from './HistoryconvonameItem';
import Divblock35Item from './Divblock35Item';
import CardcustomerhistorybotItem from './CardcustomerhistorybotItem';
import CardcustomerhistoryItem from './CardcustomerhistoryItem';
import RowdatacollectionItem from './RowdatacollectionItem';
import RowenrichmentItem from './RowenrichmentItem';
import RowenrichmentItem307 from './RowenrichmentItem307';
import RowenrichmentItem311 from './RowenrichmentItem311';
import MessagingWatcher, { POPUP, TAB, TOGGLE } from '../../api/client/watchers/MessagingWatcher';
import { useWatcher } from '../../api/client/Watcher2';


const MaincontentLayout319 = ({ }) => {
  const watcher = useRef(MessagingWatcher).current;
  useWatcher(watcher);

  const isSmartiesAssistantToggled = watcher.getValue(TOGGLE.SMARTIES_ASSISTANT);
  const isScriptInjectionPopupOpen = watcher.getValue(POPUP.SCRIPT_INJECTION);
  const activeMessageTab = watcher.getValue(TAB.MESSAGES);
  const activeCustomerInformationTab = watcher.getValue(TAB.CUSTOMER_INFORMATION);
  const isMessageFilterPopupOpen = watcher.getValue(POPUP.MESSAGES_FILTER);

  return (
    <div
      id={'w-node-_29f7b4c2-cc51-33c6-047b-9accbc43f6c6-f14725cd'}
      className={'main-content mesages'}
    >
      <div className={'scroll-content message'}>
        <div className={'mainwidth-control messaging'}>
          <div className={'sidebar-temp messaging shadow'}>
            <div className={'conversation-list-hd'}>
              <div className={'message-hd-text'}>Messages</div>
              <a href={'#'} className={'btn-style1 w-inline-block'}>
                <div className={'btn-icon'}>
                  <img src={'images/Search_1.svg'} loading={'lazy'} alt={''} />
                </div>
                <div>New</div>
              </a>
            </div>
            <div className={'search-div-hd'}>
              <div className={'search-message'}>
                <form action={'/search'} className={'message-search w-form'}>
                  <input
                    className={'message-search-input w-input'}
                    onChange={(e) => watcher.searchMessages(e.target.value)}
                    maxlength={'256'}
                    name={'query'}
                    placeholder={'Search…'}
                    type={'search'}
                    id={'search'}
                    required
                  />
                  <input
                    type={'submit'}
                    className={'search-button w-button'}
                    value={'Search'}
                  />
                </form>
              </div>
              <div className={'a_inbox-filter-div'} >
                <div
                  data-w-id={'22da1d15-a272-dba8-d763-7cbf1103c82f'}
                  className={'a_filter-btn'}
                  onClick={() => watcher.togglefilterMessagesPopup()}
                >
                  <img
                    loading={'lazy'}
                    src={'images/smarties-icon-filter_1.svg'}
                    alt={''}
                  />
                </div>
                <div className={'filter-popup'} style={{ display: isMessageFilterPopupOpen ? 'flex' : 'none' }}>
                  <div className={'w-form'}>
                    <form
                      id={'email-form'}
                      name={'email-form'}
                      data-name={'Email Form'}
                      method={'get'}
                      data-wf-page-id={'688b61ee631f6165f14725cd'}
                      data-wf-element-id={
                        '22da1d15-a272-dba8-d763-7cbf1103c833'
                      }
                    >
                      <div className={'filter-main-div'}>
                        <div className={'filter-main-column'}>
                          <FiltergroupItem317 />
                          <FiltergroupItem300 />
                          <FiltergroupItem303
                            label={'Active'}
                            label1={'Pending'}
                            label2={'Closed'}
                          />
                        </div>
                        <div className={'filter-main-column wider'}>
                          <FiltergroupItem />
                          <FiltergroupItem309 />
                        </div>
                      </div>
                      <div className={'filter_bottom'}>
                        <a href={'#'} className={'popup-links text-red'}>
                          Clear all filters
                        </a>
                        <div className={'filterbottom_right'}>
                          <div className={'filter-btn-div'}>
                            <a
                              data-w-id={'22da1d15-a272-dba8-d763-7cbf1103c8b3'}
                              onClick={() => watcher.togglefilterMessagesPopup()}
                              className={'btn-style1-2 outline w-inline-block'}
                            >
                              <div>Cancel</div>
                            </a>
                            <Btnstyle12Item />
                          </div>
                        </div>
                      </div>
                    </form>
                    <WformdoneItem />
                    <WformfailItem />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-current={'Tab 1'}
              data-easing={'ease'}
              data-duration-in={'300'}
              data-duration-out={'100'}
              className={'messaging-tabs w-tabs'}
            >
              <div className={'messaging-tabsmenu w-tab-menu'}>
                <a
                  data-w-tab={'Tab 1'}
                  className={
                    `messaging-tablink w-inline-block w-tab-link ${activeMessageTab == 'all' ? 'w--current' : ''}`
                  }
                  onClick={() => watcher.messagesTabChange()}
                >
                  <div>All </div>
                  <div className={'messaging-tablink-notify-count'}>12</div>
                </a>
                <MessagingtablinkItem291
                  dataWTab={'Tab 2'}
                  divText={'Active'}
                  isActive={activeMessageTab == 'active'}
                  onClick={() => watcher.messagesTabChange('active')}
                />
                <MessagingtablinkItem291
                  dataWTab={'Tab 3'}
                  divText={'Pending'}
                  isActive={activeMessageTab == 'pending'}
                  onClick={() => watcher.messagesTabChange('pending')}
                />
                <a
                  data-w-tab={'Tab 4'}
                  className={
                    `messaging-tablink close w-inline-block w-tab-link ${activeMessageTab == 'close' ? 'w--current' : ''}`
                  }
                  onClick={() => watcher.messagesTabChange('close')}
                >
                  <div className={'duration-div'}>
                    <div
                      data-w-id={'9dd2bd11-226a-c9e2-0477-fdc9ea93eeb5'}
                      className={'close-tab-icon'}
                    >
                      <img
                        src={'images/smarties-icon-checkmark.svg'}
                        loading={'lazy'}
                        alt={''}
                      />
                    </div>
                    <DurationtooltipItem divText={'Closed'} />
                  </div>
                </a>
              </div>
              <div className={'messaging-inbox-tabscontent w-tab-content'}>
                <div
                  data-w-tab={'Tab 1'}
                  className={`w-tab-pane ${activeMessageTab == 'all' ? 'w--tab-active' : ''}`}
                >
                  <div className={'messaging-tabpane-div'}>
                    <div className={'filter-row gap-10'}>
                      <FilterdropdownItem divText={'Assigned to Me'} />
                      <FilterdropdownItem divText={'Newest'} />
                    </div>
                    <div className={'inbox-list gap-5'}>
                      <a
                        href={'#'}
                        className={'messaging-inbox-item active w-inline-block'}
                      >
                        <div className={'messaging-inbox-item-left'}>
                          <div className={'messaging-inbox-avatar-col'}>
                            <MessaginginboxavatarItem304
                              src={
                                'images/smarties-avatar-01_1smarties-avatar-01.png'
                              }
                              dataWId={'da766056-4c22-deca-22ff-455fcbcfc86a'}
                            />
                            <div className={'messaging-inbox-user-tag'}>
                              PROSPECT
                            </div>
                          </div>
                          <div className={'messaging-inbox-textcontent'}>
                            <div className={'messaging-inbox-textcontent-top'}>
                              <MessaginginboxnamerowItem286
                                divText={'John Smith'}
                              />
                              <div className={'messaging-inbox-preview-div'}>
                                <div className={'messaging-inbox-icon-status'}>
                                  <img
                                    loading={'lazy'}
                                    src={'images/smarties-inbox-icon-mic_1.svg'}
                                    alt={''}
                                  />
                                </div>
                                <div className={'messaging-inbox-preview'}>
                                  I’m having trouble with the system not
                                  saving...
                                </div>
                              </div>
                            </div>
                            <MessaginginboxtextcontentbotItem305
                              divText={'Pricing inquiry'}
                              dataWId={'b4729139-7f78-8afa-aaa9-4ab7545ae1b0'}
                              divText1={'2:15 PM'}
                            />
                          </div>
                        </div>
                        <MessaginginboxitemrightItem316
                          dataWId={'fc19d0d7-f5e8-4f20-e129-a4d9753767c8'}
                        />
                      </a>
                      <a
                        href={'#'}
                        className={'messaging-inbox-item w-inline-block'}
                      >
                        <div className={'messaging-inbox-item-left'}>
                          <div className={'messaging-inbox-avatar-col'}>
                            <MessaginginboxavatarItem304
                              src={
                                'images/smarties-avatar-02_1smarties-avatar-02.png'
                              }
                              dataWId={'2ee757d2-bd3e-4a12-ca0b-9190293817ff'}
                            />
                            <div
                              className={'messaging-inbox-user-tag bg-yellow'}
                            >
                              VIP
                            </div>
                          </div>
                          <MessaginginboxtextcontentItem312
                            divText={'Emma Wilson'}
                            divText1={
                              'I’m having an issue with logging in after the latest update...'
                            }
                            divText2={'Feature request follow-up'}
                            dataWId={'5412962f-dc78-9f6c-9b1b-5129db7c78df'}
                            divText3={'25m ago'}
                          />
                        </div>
                        <MessaginginboxitemrightItem316
                          dataWId={'2ee757d2-bd3e-4a12-ca0b-91902938181b'}
                        />
                      </a>
                      <a
                        href={'#'}
                        className={'messaging-inbox-item w-inline-block'}
                      >
                        <div className={'messaging-inbox-item-left'}>
                          <div className={'messaging-inbox-avatar-col'}>
                            <div className={'messaging-inbox-avatar'}>
                              <img
                                loading={'lazy'}
                                src={
                                  'images/smarties-avatar-03_1smarties-avatar-03.png'
                                }
                                alt={''}
                              />
                              <div className={'chat-status-div'}>
                                <div
                                  data-w-id={
                                    'd640b168-e14b-d21f-cb34-702cefb62695'
                                  }
                                  className={'chat-status pending'}
                                >
                                  <div>P</div>
                                </div>
                                <ChatstatustooltipItem divText={'Pending'} />
                              </div>
                            </div>
                            <div
                              className={'messaging-inbox-user-tag bg-orange'}
                            >
                              client
                            </div>
                          </div>
                          <div className={'messaging-inbox-textcontent'}>
                            <div className={'messaging-inbox-textcontent-top'}>
                              <MessaginginboxnamerowItem286
                                divText={'James Rodriguez'}
                              />
                              <div className={'messaging-inbox-preview-div'}>
                                <div className={'messaging-inbox-icon-status'}>
                                  <img
                                    loading={'lazy'}
                                    src={'images/smarties-inbox-icon-mic_1.svg'}
                                    alt={''}
                                  />
                                </div>
                                <div className={'messaging-inbox-icon-status'}>
                                  <img
                                    loading={'lazy'}
                                    src={
                                      'images/smarties-inbox-icon-attachment_1.svg'
                                    }
                                    alt={''}
                                  />
                                </div>
                                <div className={'messaging-inbox-preview'}>
                                  Thank you for the quick response — I really...
                                </div>
                              </div>
                            </div>
                            <MessaginginboxtextcontentbotItem305
                              divText={'Technical support'}
                              dataWId={'38efa3b7-d32d-161d-7d62-f0f8d613f7e6'}
                              divText1={'1h ago'}
                            />
                          </div>
                        </div>
                        <MessaginginboxitemrightItem
                          dataWId={'d640b168-e14b-d21f-cb34-702cefb626af'}
                        />
                      </a>
                      <a
                        href={'#'}
                        className={'messaging-inbox-item w-inline-block'}
                      >
                        <div className={'messaging-inbox-item-left'}>
                          <div className={'messaging-inbox-avatar-col'}>
                            <div className={'messaging-inbox-avatar'}>
                              <img
                                loading={'lazy'}
                                src={
                                  'images/smarties-avatar-04_1smarties-avatar-04.png'
                                }
                                alt={''}
                              />
                              <div className={'chat-status-div'}>
                                <div
                                  data-w-id={
                                    '560112a4-5782-ac37-5ecd-0293c66568de'
                                  }
                                  className={'chat-status closed'}
                                >
                                  <div>C</div>
                                </div>
                                <ChatstatustooltipItem divText={'Closed'} />
                              </div>
                            </div>
                            <div
                              className={'messaging-inbox-user-tag bg-orange'}
                            >
                              client
                            </div>
                          </div>
                          <MessaginginboxtextcontentItem312
                            divText={'Sofie Chen'}
                            divText1={
                              'When can I expect a response regarding my last request?...'
                            }
                            divText2={'Workshop scheduling'}
                            dataWId={'4e0b7313-3549-b25d-94af-358acacf7cb9'}
                            divText3={'1h ago'}
                          />
                        </div>
                        <MessaginginboxitemrightItem
                          dataWId={'560112a4-5782-ac37-5ecd-0293c66568fc'}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div data-w-tab={'Tab 2'} className={`w-tab-pane ${activeMessageTab == 'active' ? 'w--tab-active' : ''}`}></div>
                <div data-w-tab={'Tab 3'} className={`w-tab-pane ${activeMessageTab == 'pending' ? 'w--tab-active' : ''}`}></div>
                <div data-w-tab={'Tab 4'} className={`w-tab-pane ${activeMessageTab == 'close' ? 'w--tab-active' : ''}`}></div>
              </div>
            </div>
          </div>
          <div className={'messaging-maincol h-auto'}>
            <div className={'messaging-formblock w-form'}>
              <form
                id={'wf-form-form-messaging'}
                name={'wf-form-form-messaging'}
                data-name={'form-messaging'}
                method={'get'}
                className={'messaging-form'}
                data-wf-page-id={'688b61ee631f6165f14725cd'}
                data-wf-element-id={'29f7b4c2-cc51-33c6-047b-9accbc43f6ec'}
              >
                <div className={'messaging-formbody'}>
                  <div className={'messaging-main-convo-top'}>
                    <div className={'messaging-main-top'}>
                      <div className={'messaging-main-topleft'}>
                        <div
                          data-w-id={'a9b0f119-4558-cd1c-bf5c-67a1bada2f95'}
                          className={'avatar-inbox'}
                        >
                          <img
                            loading={'lazy'}
                            src={
                              'images/smarties-avatar-01_1smarties-avatar-01.png'
                            }
                            alt={''}
                          />
                        </div>
                        <div className={'contact-name-div'}>
                          <div className={'contact-name'}>
                            <div
                              data-w-id={'cd26c9d9-c5dc-e7f8-c613-cd8a8266dd49'}
                              className={'card-inbox-name'}
                            >
                              <div className={'name-contact'}>John Smith</div>
                            </div>
                            <div className={'tag-customer'}>Prospect</div>
                          </div>
                          <div className={'contact-page-viewing'}>
                            <div className={'contact-page-viewing-content'}>
                              <div className={'status-online static'}></div>
                              <div>Online</div>
                              <div>• Viewing:</div>
                              <div>/pricing</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={'messaging-main-topright'}>
                        <div className={'messaging-handling-aibot'} style={{ display: isSmartiesAssistantToggled ? 'flex' : 'none' }}>
                          <div className={'message-handle-avatar'}>
                            <img
                              loading={'lazy'}
                              src={'images/smarties-head.png'}
                              alt={''}
                            />
                          </div>
                          <div className={'messaging-handling-ai'}>
                            <div className={'messaging-handling-hd'}>
                              SMARTIES AI assistant active
                            </div>
                            <div className={'messaging-handling-subtext'}>
                              AI Bot is responding in real-time
                            </div>
                          </div>
                        </div>
                        <div className={'messaging-handling-agent'} style={{ display: !isSmartiesAssistantToggled ? 'flex' : 'none' }}>
                          <div className={'message-handle-avatar agent'}>
                            <img
                              loading={'lazy'}
                              src={'images/smarties-head.png'}
                              alt={''}
                            />
                          </div>
                          <div className={'messaging-handling-ai'}>
                            <div className={'messaging-handling-hd text-green'}>
                              You are now handling this conversation
                            </div>
                            <div className={'messaging-handling-subtext'}>
                              SMARTIES AI is on standby while you reply manually
                            </div>
                          </div>
                        </div>
                        <div className={'messaging-mainbtns-div'}>
                          <div
                            data-w-id={'466d0a60-7ecd-180d-fff7-c46b23c60015'}
                            className={'button-returnai'}
                            onClick={() => watcher.toggleSmartiesAssistant()}
                            style={{ display: !isSmartiesAssistantToggled ? 'flex' : 'none' }}
                          >
                            <div>Return to AI</div>
                            <div className={'fluentchat-28-regular'}>
                              <img
                                loading={'lazy'}
                                src={'images/smarties-icon-ai.svg'}
                                alt={''}
                              />
                            </div>
                          </div>
                          <div
                            data-w-id={'a6dc440d-420d-352d-d335-dbe1bda29f2e'}
                            className={'button-takeover'}
                            onClick={() => watcher.toggleSmartiesAssistant()}
                            style={{ display: isSmartiesAssistantToggled ? 'flex' : 'none' }}
                          >
                            <div className={'fluentchat-28-regular'}>
                              <img
                                loading={'lazy'}
                                src={'images/smarties-icon-take-over.svg'}
                                alt={''}
                              />
                            </div>
                            <div>Takeover Chat</div>
                          </div>
                          <div className={'button-assign'}>
                            <div className={'fluentchat-28-regular'}>
                              <img
                                loading={'lazy'}
                                src={'images/smarties-icon-assign.svg'}
                                alt={''}
                              />
                            </div>
                            <div className={'button-label'}>Assign</div>
                          </div>
                          <div className={'assistant-menu'}>
                            <div
                              data-w-id={'466d0a60-7ecd-180d-fff7-c46b23c60023'}
                              className={'button-options'}
                            >
                              <img
                                width={'15'}
                                height={'15'}
                                alt={''}
                                src={
                                  'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg'
                                }
                                loading={'lazy'}
                                className={'smarties-icon-menu'}
                              />
                            </div>
                            <div className={'menu-dropdown'}>
                              <Menuitem2Item
                                src={
                                  'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe296eb413c7eda8de5_mark-as-read.svg'
                                }
                                divText={'Mark as Read'}
                              />
                              <Menuitem2Item
                                src={
                                  'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe28433d6d3cf92e285_Mute%20Notifications.svg'
                                }
                                divText={'Mute Notifications'}
                              />
                              <Menuitem2Item
                                src={
                                  'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe2854556503e176ce6_Close%20Conversation.svg'
                                }
                                divText={'Close Conversation'}
                              />
                              <Menuitem2Item
                                src={
                                  'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe2787c0f456cb193a6_Block%20Customer.svg'
                                }
                                divText={'Block Customer'}
                              />
                              <Menuitem2Item
                                src={
                                  'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b804529965eda4739367a_Report%20Conversation.svg'
                                }
                                divText={'Report Conversation'}
                              />
                              <Menuitem2Item
                                src={
                                  'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe201846cc31b113601_export%20transcription.svg'
                                }
                                divText={'Export Transcription'}
                              />
                              <Menuitem2Item
                                src={
                                  'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe234f6c4b4f038ee94_off%20ai.svg'
                                }
                                divText={'Turn Off AI Assistance'}
                              />
                              <div className={'menu-item-2 delete'}>
                                <div className={'menu-item-icon'}>
                                  <img
                                    loading={'lazy'}
                                    src={
                                      'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe26d6c5f9871c67cb6_delete.svg'
                                    }
                                    alt={''}
                                  />
                                </div>
                                <div>Delete</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'messaging-handling-aibot-bg'} style={{ display: !isSmartiesAssistantToggled ? 'block' : 'none' }}></div>
                        <div className={'messaging-handling-agent-bg'} style={{ display: isSmartiesAssistantToggled ? 'block' : 'none' }}></div>
                      </div>
                    </div>
                    <div className={'messaging-main-conversation-div'}>
                      <div className={'convo-inbound'}>
                        <div className={'convo-inbound-avatar'}>
                          <img
                            loading={'lazy'}
                            src={
                              'images/smarties-avatar-01_1smarties-avatar-01.png'
                            }
                            alt={''}
                          />
                        </div>
                        <div className={'convo-bubble-inbound'}>
                          <div>
                            Hi there! I'm interested in learning more about your
                            AI platform.
                          </div>
                        </div>
                        <ConvoinbounddurationItem
                          dataWId={'d2601b0f-93ed-ec78-d431-297ce3d04872'}
                          divText={'10:30 AM'}
                        />
                      </div>
                      <div className={'convo-outbound'}>
                        <ConvoinbounddurationItem
                          dataWId={'40de4617-1996-b595-f7c8-2ed436404f34'}
                          divText={'2:35 PM • AI'}
                        />
                        <div className={'convo-bubble-outbound'}>
                          <div>
                            Hi John, I'm SMARTIES from the solutions team. I'd
                            be happy to schedule a personalized demo to show you
                            our customer support features in action.
                          </div>
                        </div>
                        <div className={'convo-bot-avatar'}>
                          <img
                            loading={'lazy'}
                            src={'images/smarties-head.png'}
                            alt={''}
                          />
                        </div>
                      </div>
                      <div className={'convo-inbound'}>
                        <div className={'convo-inbound-avatar'}>
                          <img
                            loading={'lazy'}
                            src={
                              'images/smarties-avatar-01_1smarties-avatar-01.png'
                            }
                            alt={''}
                          />
                        </div>
                        <div className={'convo-bubble-inbound audio'}>
                          <div className={'message-player'}>
                            <div className={'btn-play'}>
                              <img
                                loading={'lazy'}
                                src={'images/smarties-icon-play.svg'}
                                alt={''}
                              />
                            </div>
                            <div className={'player-main'}>
                              <div className={'player-bar'}>
                                <div className={'player-active'}></div>
                              </div>
                              <div className={'player'}>
                                <div>0:15</div>
                                <div>/</div>
                                <div>0:32</div>
                              </div>
                            </div>
                            <div className={'btn-transcript-div'}>
                              <div
                                data-w-id={
                                  'ae3dc1d9-8baa-fe66-a02c-6c234151c942'
                                }
                                className={'btn-transcript hide'}
                              >
                                <div>Hide transcript</div>
                                <div className={'icon-arrow-orange'}>
                                  <img
                                    loading={'lazy'}
                                    src={
                                      'images/smarties-icon-arrow-orange.svg'
                                    }
                                    alt={''}
                                  />
                                </div>
                              </div>
                              <div
                                data-w-id={
                                  'ae3dc1d9-8baa-fe66-a02c-6c234151c947'
                                }
                                className={'btn-transcript show'}
                              >
                                <div>Show transcript</div>
                                <div className={'icon-arrow-orange rotate'}>
                                  <img
                                    loading={'lazy'}
                                    src={
                                      'images/smarties-icon-arrow-orange.svg'
                                    }
                                    alt={''}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={'text-transcript-container'}>
                            <div className={'text-transcript'}>
                              <p className={'p-bubble'}>
                                <span className={'transcript-read'}>
                                  Thank you so much for helping me with this
                                  issue. I really really
                                </span>{' '}
                                truly appreciate your quick response. When can I
                                expect to see the full amount refund in my
                                account?
                              </p>
                            </div>
                          </div>
                        </div>
                        <ConvoinbounddurationItem
                          dataWId={'93f67aaf-f609-5ec2-4225-fef0c0d178f8'}
                          divText={'10:30 AM'}
                        />
                      </div>
                      <div className={'convo-inbound'}>
                        <div className={'convo-inbound-avatar'}>
                          <img
                            loading={'lazy'}
                            src={
                              'images/smarties-avatar-01_1smarties-avatar-01.png'
                            }
                            alt={''}
                          />
                        </div>
                        <div className={'convo-bubble-inbound attachment'}>
                          <div className={'message-attachment-div'}>
                            <div className={'attachments-image first'}>
                              <div className={'attachment-lmage-info-block'}>
                                <AttachmentimagenameinfowrapItem />
                                <div>2.4 MB</div>
                              </div>
                              <div className={'attachment-lmage-info-icon'}>
                                <div className={'icon_i'}>
                                  <img
                                    loading={'lazy'}
                                    src={
                                      'https://uploads-ssl.webflow.com/63086fbe0343fac5859fb3d5/630f1e623053b90c78b63dcf_a_media_43.svg'
                                    }
                                    alt={''}
                                  />
                                </div>
                                <SmsattachmentpopupItem
                                  header={'SampleFilename.jpg'}
                                />
                              </div>
                            </div>
                            <div className={'attachments-video'}>
                              <div className={'attachment-video-time'}>
                                <div>3:15</div>
                              </div>
                              <div className={'video-play'}>
                                <img
                                  loading={'lazy'}
                                  src={
                                    'https://uploads-ssl.webflow.com/625d3aea722faf41988e5366/625d3aea722fafb8638e54fa_Asset%202260.svg'
                                  }
                                  alt={''}
                                />
                              </div>
                              <div className={'attachment-video-info-block'}>
                                <AttachmentimagenameinfowrapItem />
                                <div>2.4 MB</div>
                              </div>
                              <div className={'attachment-video-info-icon'}>
                                <div className={'icon_i'}>
                                  <img
                                    loading={'lazy'}
                                    src={
                                      'https://uploads-ssl.webflow.com/63086fbe0343fac5859fb3d5/630f1e623053b90c78b63dcf_a_media_43.svg'
                                    }
                                    alt={''}
                                  />
                                </div>
                                <SmsattachmentpopupItem
                                  header={'SampleFilename.mp4'}
                                />
                              </div>
                            </div>
                            <AttachmentsnopreviewItem
                              src={'images/smarties-icon-asset2.svg'}
                              title={'sample.txt'}
                            />
                            <AttachmentsnopreviewItem
                              src={'images/smarties-icon-asset3.svg'}
                              title={'sample.csv'}
                            />
                          </div>
                        </div>
                        <ConvoinbounddurationItem
                          dataWId={'7ad83e97-3523-a6ad-70cc-a20192b63609'}
                          divText={'10:30 AM'}
                        />
                      </div>
                      <div className={'convo-divider'}>
                        <div className={'convo-divider-line'}></div>
                        <div>You are now chatting</div>
                        <div className={'convo-divider-line'}></div>
                      </div>
                      <div className={'convo-outbound'}>
                        <ConvoinbounddurationItem
                          dataWId={'b55c4f16-b574-6278-f347-60679bfb0642'}
                          divText={'2:35 PM • Anima'}
                        />
                        <div className={'convo-bubble-outbound bg-blue'}>
                          <div>
                            We have excellent customer support solutions! Our
                            platform can handle ticket classification, routine
                            inquiries, and even integrate with your existing CRM
                            systems.
                          </div>
                        </div>
                        <div className={'convo-bot-avatar'}>
                          <img
                            loading={'lazy'}
                            src={
                              'images/smarties_account_avatar_1smarties_account_avatar.png'
                            }
                            alt={''}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'messaging-main-bot'}>
                    <div className={'user-typing-div'}>
                      <div className={'usertyping-avatar'}>
                        <img
                          loading={'lazy'}
                          src={
                            'images/smarties-avatar-01_1smarties-avatar-01.png'
                          }
                          alt={''}
                        />
                      </div>
                      <div>John Smith is typing...</div>
                    </div>
                    <div className={'reply-row'}>
                      <div className={'reply-row-aisuggestion-row'}>
                        <div className={'message-chat-div'}>
                          <div className={'message-chat-left'}>
                            <div>
                              <div
                                data-w-id={
                                  'c48cdb12-9fb9-f2df-92c5-a704498a5c23'
                                }
                                className={'btn-suggestion-hide'}
                              >
                                <div>Hide AI Suggestion</div>
                                <div className={'icon-dropdown'}>
                                  <img
                                    loading={'lazy'}
                                    src={'images/smarties-icon-dropdown.svg'}
                                    alt={''}
                                  />
                                </div>
                              </div>
                              <div
                                data-w-id={
                                  'c48cdb12-9fb9-f2df-92c5-a704498a5c28'
                                }
                                className={'btn-suggestion-show'}
                              >
                                <div>Show AI Suggestion</div>
                                <div className={'icon-small'}>
                                  <img
                                    loading={'lazy'}
                                    src={'images/smarties-icon-dropdown.svg'}
                                    alt={''}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-ai-suggest'}>
                          <div className={'card-ai-suggest-div'}>
                            <div className={'div-block-27'}>
                              <div className={'div-block-26'}>
                                <img
                                  loading={'lazy'}
                                  src={'images/smarties-icon-ai-suggest.svg'}
                                  alt={''}
                                />
                              </div>
                              <div>AI Suggested Response</div>
                            </div>
                            <div className={'div-block-14'}>
                              <a href={'#'} className={'link-text'}>
                                Edit
                              </a>
                              <a href={'#'} className={'btn-small w-button'}>
                                Send
                              </a>
                            </div>
                          </div>
                          <div className={'ai-response-div'}>
                            <p className={'ai-response'}>
                              I'd be happy to help you with your order! Could
                              you please provide your order number or the email
                              address you used for the purchase?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={'reply-row-main'}>
                        <div className={'reply-btn-icon-white'}>
                          <img
                            loading={'lazy'}
                            src={'images/smarties-inbox-icon-emoji.svg'}
                            alt={''}
                          />
                        </div>
                        <input
                          className={'reply-input w-input'}
                          maxlength={'256'}
                          name={'reply-input'}
                          data-name={'reply-input'}
                          placeholder={'Type your message'}
                          type={'url'}
                          id={'reply-input'}
                          onChange={(e) => watcher.setValue('messageText', e.target.value)}
                        />
                        <div className={'reply-btn-container'}>
                          <div className={'reply-btn-icon-white'}>
                            <img
                              loading={'lazy'}
                              src={'images/smarties-inbox-icon-attachment.svg'}
                              alt={''}
                            />
                          </div>
                          <div className={'reply-btn-icon-white'}>
                            <img
                              loading={'lazy'}
                              src={'images/smarties-inbox-icon-mic.svg'}
                              alt={''}
                            />
                          </div>
                          <div
                            data-w-id={'ba1016a2-eb6c-7f64-14a0-e5664eb3de73'}
                            className={'reply-btn-icon-white'}
                            onClick={() => watcher.setScriptInjectionPopup(true)}
                          >
                            <img
                              loading={'lazy'}
                              src={'images/smarties-icon-script.svg'}
                              alt={''}
                            />
                          </div>
                          <div className={'reply-btn-icon'} onClick={() => watcher.sendMessage()}>
                            <img
                              loading={'lazy'}
                              src={'images/smarties-inbox-icon-send.svg'}
                              alt={''}
                            />
                          </div>
                          <div className={'popup-scriptinjection'} style={{ display: isScriptInjectionPopupOpen ? 'flex' : 'none' }}>
                            <div className={'message-popup-hd'}>
                              <div className={'message-popup-hd-left'}>
                                <img
                                  width={'16'}
                                  height={'16'}
                                  alt={''}
                                  src={'images/Frame_4.svg'}
                                  loading={'lazy'}
                                  className={'message-popup-hd-icon'}
                                />
                                <div className={'message-popup-hd-text'}>
                                  Script Injection
                                </div>
                              </div>
                              <a
                                data-w-id={
                                  '8badf8db-09fe-5c18-4ceb-bfbf6893b9eb'
                                }
                                // href={'#'}
                                target={'_blank'}
                                className={'message-popup-btn-close'}
                                onClick={() => watcher.setScriptInjectionPopup(false)}
                                style={{ cursor: 'pointer' }}
                              >
                                <img
                                  width={'16'}
                                  height={'16'}
                                  alt={''}
                                  src={'images/Frame_5.svg'}
                                  loading={'lazy'}
                                  className={'message-popup-hd-icon'}
                                />
                              </a>
                            </div>
                            <div className={'message-popup-body'}>
                              <div className={'message-popup-searchfilter-row'}>
                                <input
                                  className={'searchfield w-input'}
                                  maxlength={'256'}
                                  name={'field'}
                                  data-name={'Field'}
                                  placeholder={'Search Script'}
                                  type={'text'}
                                  id={'field'}
                                  onChange={(e) => watcher.searchScriptInjection(e.target.value)}
                                  required
                                />
                                <div className={'messagepopup-filter'}>
                                  <MessagepopupfilterselectItem
                                    optionText={'Script Author'}
                                  />
                                  <MessagepopupfilterselectItem
                                    optionText={'Latest'}
                                  />
                                </div>
                              </div>
                              <div className={'scriptinjector-list'}>
                                <ScriptinjectorcarditemItem
                                  dataWId={
                                    'd76ae3fe-514d-db09-b76d-ac292998104d'
                                  }
                                  title={'Subscription Troubleshooting'}
                                  description={
                                    'Guide the customer through subscription issues and billing problems'
                                  }
                                  selectInjectionScript={() => watcher.scriptInjectionSelect('d76ae3fe-514d-db09-b76d-ac292998104d')}
                                />
                                <ScriptinjectorcarditemItem
                                  dataWId={
                                    '3acdc403-fb7c-4b60-f871-569ee9d1b415'
                                  }
                                  title={'Product Return Process'}
                                  description={
                                    'Walk the customer through the return and refund process'
                                  }
                                />
                                <ScriptinjectorcarditemItem
                                  dataWId={
                                    '2d6538e1-3760-0c39-902a-0a4f1d3b954a'
                                  }
                                  title={'Account Recovery'}
                                  description={
                                    'Help the customer recover or reset their account credentials'
                                  }
                                />
                                <ScriptinjectorcarditemItem
                                  dataWId={
                                    'e5357c3e-f9e6-2c36-160d-a7b5adc78490'
                                  }
                                  title={'Technical Support'}
                                  description={
                                    'Provide technical troubleshooting for common product issues'
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'quick-reply-row'}>
                      <div className={'quickreply-chip'}>
                        Thank you for contacting us
                      </div>
                      <div className={'quickreply-chip'}>
                        I'll check that for you
                      </div>
                      <div className={'quickreply-chip'}>
                        Is there anything else?
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
          </div>
          <div className={'contact-side-column contacts'} style={{ display: 'flex' }}>
            <div className={'side-column-hd'}>
              <div className={'side-column-text-hd'}>Customer Information</div>
              <div className={'sidebar-contact-maindiv'}>
                <div className={'sidebar-contact-avatar'}>
                  <img
                    src={'images/smarties-avatar-01_1smarties-avatar-01.png'}
                    loading={'lazy'}
                    alt={''}
                    className={'image-100-nopadding'}
                  />
                </div>
                <div>
                  <div className={'messaging-top-name'}>John Smith</div>
                  <RowprofilecontactdetailsItem
                    dataWId={'7e3b2409-eb94-64ea-0156-81f68ed54f29'}
                    src={'images/smarties-icon-position.svg'}
                    divText={'Position'}
                    divText1={'Marketing Director'}
                  />
                  <RowprofilecontactdetailsItem
                    dataWId={'96292107-e884-0717-f838-679f87c1e116'}
                    src={'images/smarties-icon-company.svg'}
                    divText={'Company'}
                    divText1={'Orbital Inc.'}
                  />
                </div>
              </div>
              <div
                data-w-id={'420b0f02-28d9-8e15-64f3-0d8b5aa4b0e5'}
                className={'btn-close'}
              >
                <img
                  loading={'lazy'}
                  src={'images/smarties-popup-close.svg'}
                  alt={''}
                />
              </div>
            </div>
            <div className={'side-column-content'}>
              <div
                data-current={'Tab 1'}
                data-easing={'ease'}
                data-duration-in={'300'}
                data-duration-out={'100'}
                className={'tabs-side-column w-tabs'}
              >
                <div className={'tabs-menu-side-column w-tab-menu'}>
                  <a
                    data-w-tab={'Tab 1'}
                    className={
                      `tabs-menu-link-side-column w-inline-block w-tab-link ${activeCustomerInformationTab == 'profile' ? 'w--current' : ''}`
                    }
                    onClick={() => watcher.customerInformationTabChange('profile')}
                  >
                    <div className={'icon-link-side-column'}>
                      <img
                        loading={'lazy'}
                        src={'images/smartties-tab-profile.svg'}
                        alt={''}
                      />
                    </div>
                    <div>Profile</div>
                  </a>
                  <TabsmenulinksidecolumnItem
                    dataWTab={'Tab 2'}
                    src={'images/smartties-tab-journey.svg'}
                    divText={'Journey'}
                    isActive={activeCustomerInformationTab == 'journey'}
                    onClick={() => watcher.customerInformationTabChange('journey')}
                  />
                  <TabsmenulinksidecolumnItem
                    dataWTab={'Tab 3'}
                    src={'images/smartties-tab-history.svg'}
                    divText={'History'}
                    isActive={activeCustomerInformationTab == 'history'}
                    onClick={() => watcher.customerInformationTabChange('history')}
                  />
                  <TabsmenulinksidecolumnItem
                    dataWTab={'Tab 4'}
                    src={'images/smartties-tab-data.svg'}
                    divText={'Data'}
                    isActive={activeCustomerInformationTab == 'data'}
                    onClick={() => watcher.customerInformationTabChange('data')}
                  />
                </div>
                <div className={'tabs-content-side-column w-tab-content'}>
                  <div
                    data-w-tab={'Tab 1'}
                    className={`tabs-pane-side-column w-tab-pane ${activeCustomerInformationTab == 'profile' ? 'w--tab-active' : ''}`}
                  >
                    <div className={'side-column-profile'}>
                      <div className={'data-enrichment-div'}>
                        <div
                          data-w-id={'420b0f02-28d9-8e15-64f3-0d8b5aa4b102'}
                          className={'btn-date-enrichment'}
                        >
                          <div className={'icon-enrichment'}>
                            <img
                              loading={'lazy'}
                              src={'images/smarties-icon-enrichment.svg'}
                              alt={''}
                            />
                          </div>
                          <div>Data Enrichment</div>
                          <div className={'tag-ai'}>AI-Powered</div>
                        </div>
                        <div className={'text-block-5'}>
                          Auto-populate missing fields with external data
                        </div>
                      </div>
                      <div className={'profile-tab-section'}>
                        <div className={'side-column-section'}>
                          <div className={'card-side-column'}>
                            <CardsidecolumnhdItem
                              dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b10e'}
                              divText={'Contact Details'}
                            />
                            <div className={'card-side-column-content'}>
                              <div className={'profile-contact-details'}>
                                <RowprofilecontactdetailsItem
                                  dataWId={
                                    '420b0f02-28d9-8e15-64f3-0d8b5aa4b117'
                                  }
                                  src={'images/smarties-contact-email.svg'}
                                  divText={'Email Address'}
                                  divText1={'sarah.johnson@skytech.com'}
                                />
                                <RowprofilecontactdetailsItem
                                  dataWId={
                                    '420b0f02-28d9-8e15-64f3-0d8b5aa4b120'
                                  }
                                  src={'images/smarties-contact-number.svg'}
                                  divText={'Phone Number'}
                                  divText1={'+1 (555) 123-4567'}
                                />
                                <div className={'flex-contact-details'}>
                                  <div className={'col-contact-details'}>
                                    <RowprofilecontactdetailsItem310
                                      dataWId={
                                        '420b0f02-28d9-8e15-64f3-0d8b5aa4b12b'
                                      }
                                      src={'images/smarties-contact-ip.svg'}
                                      divText={'IP Address'}
                                      divText1={'192.168.1.254'}
                                      dataWId1={
                                        '420b0f02-28d9-8e15-64f3-0d8b5aa4b133'
                                      }
                                    />
                                    <RowprofilecontactdetailsItem
                                      dataWId={
                                        '420b0f02-28d9-8e15-64f3-0d8b5aa4b139'
                                      }
                                      src={
                                        'images/smarties-contact-location.svg'
                                      }
                                      divText={'Location'}
                                      divText1={'San Francisco, CA'}
                                    />
                                    <RowprofilecontactdetailsItem310
                                      dataWId={
                                        '420b0f02-28d9-8e15-64f3-0d8b5aa4b142'
                                      }
                                      src={
                                        'images/smarties-contact-weather.svg'
                                      }
                                      divText={'Weather'}
                                      divText1={'72°F, Sunny'}
                                      dataWId1={
                                        '420b0f02-28d9-8e15-64f3-0d8b5aa4b14a'
                                      }
                                    />
                                  </div>
                                  <div className={'location-preview'}>
                                    <div className={'details-sunny'}>
                                      <img
                                        loading={'lazy'}
                                        src={'images/smarties-icon-sunny.svg'}
                                        alt={''}
                                      />
                                    </div>
                                    <div
                                      data-w-id={
                                        '420b0f02-28d9-8e15-64f3-0d8b5aa4b151'
                                      }
                                      className={'button-location-expand'}
                                    >
                                      <div className={'icon-expand'}>
                                        <img
                                          loading={'lazy'}
                                          src={
                                            'images/smarties-icon-expand.svg'
                                          }
                                          alt={''}
                                        />
                                      </div>
                                      <div>Expand</div>
                                    </div>
                                  </div>
                                </div>
                                <div className={'location-expanded'}>
                                  <img
                                    loading={'lazy'}
                                    src={
                                      'images/smarites-location-expanded.png'
                                    }
                                    alt={''}
                                  />
                                  <div className={'details-sunny'}>
                                    <img
                                      loading={'lazy'}
                                      src={'images/smarties-icon-sunny.svg'}
                                      alt={''}
                                    />
                                  </div>
                                  <div
                                    data-w-id={
                                      '420b0f02-28d9-8e15-64f3-0d8b5aa4b15a'
                                    }
                                    className={'button-location-minimize'}
                                  >
                                    <div className={'icon-expand'}>
                                      <img
                                        loading={'lazy'}
                                        src={
                                          'images/smarties-icon-close-location.svg'
                                        }
                                        alt={''}
                                      />
                                    </div>
                                    <div>Minimize</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'side-column-section'}>
                          <div className={'card-side-column'}>
                            <CardsidecolumnhdItem
                              dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b161'}
                              divText={'Tags'}
                            />
                            <div className={'card-side-column-content'}>
                              <div className={'sidebar-tag-body'}>
                                <div className={'contact-tag'}>
                                  <div>Marketing</div>
                                  <div className={'tag-remove-icon'}>
                                    <img
                                      src={'images/smarties-popup-close.svg'}
                                      loading={'lazy'}
                                      alt={''}
                                    />
                                  </div>
                                </div>
                                <div className={'contact-tag bg-purple'}>
                                  <div>Enterprise</div>
                                  <div className={'tag-remove-icon'}>
                                    <img
                                      src={'images/smarties-popup-close.svg'}
                                      loading={'lazy'}
                                      alt={''}
                                    />
                                  </div>
                                </div>
                                <div className={'contact-tag bg-yellow'}>
                                  <div>VIP</div>
                                  <div className={'tag-remove-icon'}>
                                    <img
                                      src={'images/smarties-popup-close.svg'}
                                      loading={'lazy'}
                                      alt={''}
                                    />
                                  </div>
                                </div>
                                <div className={'contact-tag bg-green'}>
                                  <div>Key Account</div>
                                  <div className={'tag-remove-icon'}>
                                    <img
                                      src={'images/smarties-popup-close.svg'}
                                      loading={'lazy'}
                                      alt={''}
                                    />
                                  </div>
                                </div>
                                <div className={'contact-tag bg-add'}>
                                  <div className={'tag-remove-icon'}>
                                    <img
                                      src={'images/smarties-icon-add-tag.svg'}
                                      loading={'lazy'}
                                      alt={''}
                                    />
                                  </div>
                                  <div>Add</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'side-column-section'}>
                          <div className={'card-side-column'}>
                            <CardsidecolumnhdItem
                              dataWId={'f9e95120-0291-ae33-0e7f-b1c13dd5731c'}
                              divText={'Account Details'}
                            />
                            <div className={'card-side-column-content'}>
                              <div className={'sidebar-acctdetails-body'}>
                                <div className={'sidebar-acctdetails-row'}>
                                  <div className={'sidebar-acctdetails-label'}>
                                    Customer Since
                                  </div>
                                  <div className={'sidebar-acctdetails-data'}>
                                    Mar 2021
                                  </div>
                                </div>
                                <div className={'sidebar-acctdetails-row'}>
                                  <div className={'sidebar-acctdetails-label'}>
                                    Subscription
                                  </div>
                                  <div
                                    className={
                                      'sidebar-acctdetails-data bg-green'
                                    }
                                  >
                                    Tiny
                                  </div>
                                </div>
                                <div className={'sidebar-acctdetails-row'}>
                                  <div className={'sidebar-acctdetails-label'}>
                                    Support Level
                                  </div>
                                  <div
                                    className={
                                      'sidebar-acctdetails-data bg-orange'
                                    }
                                  >
                                    Premium
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'side-column-section'}>
                          <div className={'card-side-column'}>
                            <CardsidecolumnhdItem
                              dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b16e'}
                              divText={'Assets'}
                            />
                            <div className={'card-side-column-content'}>
                              <div className={'asset-search-div'}>
                                <div>
                                  <Assetsearchdiv2Item />
                                </div>
                                <a href={'#'} className={'btn-upload w-button'}>
                                  Upload
                                </a>
                              </div>
                              <div className={'asset-list'}>
                                <AssetitemItem
                                  src={'images/smarties-icon-asset1.svg'}
                                  divText={'profile-picture.jpg'}
                                  divText1={'Added 2 days ago'}
                                />
                                <AssetitemItem
                                  src={'images/smarties-icon-asset2.svg'}
                                  divText={'invoice-may2023.pdf'}
                                  divText1={'Added 1 week ago'}
                                />
                                <div className={'asset-item last'}>
                                  <div className={'file-avatar'}>
                                    <img
                                      loading={'lazy'}
                                      src={'images/smarties-icon-asset3.svg'}
                                      alt={''}
                                    />
                                  </div>
                                  <Divblock31Item
                                    divText={'support-ticket.txt'}
                                    divText1={'Added 2 weeks ago'}
                                  />
                                  <Divblock32Item />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={'profile-stats'}>
                        <div>Last Enrichment: 2 minutes ago</div>
                        <div className={'text-block-6'}>
                          2 suggestions available
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-tab={'Tab 2'}
                    className={`tabs-pane-side-column w-tab-pane ${activeCustomerInformationTab == 'journey' ? 'w--tab-active' : ''}`}
                  >
                    <div className={'side-column-journey'}>
                      <div className={'journey-main-content dont-shrinkgrow'}>
                        <div className={'card-live-session'}>
                          <div className={'journey-top-hd'}>
                            <div>Current Session</div>
                            <div className={'tag-live'}>Live</div>
                          </div>
                          <RowprofilecontactdetailsItem308
                            dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b1b3'}
                            src={'images/smarties-icon-journey-started.svg'}
                            divText={'Started'}
                            divText1={'2:15 PM (19 min ago)'}
                          />
                          <RowprofilecontactdetailsItem308
                            dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b1bf'}
                            src={'images/smarties-icon-journey-device.svg'}
                            divText={'Device'}
                            divText1={'Desktop • Chrome'}
                          />
                          <RowprofilecontactdetailsItem308
                            dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b1cb'}
                            src={'images/smarties-icon-journey-referrer.svg'}
                            divText={'Referrer'}
                            divText1={'Google Search'}
                          />
                        </div>
                        <div className={'side-column-section'}>
                          <div className={'card-side-column'}>
                            <CardsidecolumnhdItem
                              dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b1d7'}
                              divText={'Customer Journey'}
                              onClick={() => watcher.setValue('showCustomerJourney', !watcher.getValue('showCustomerJourney'))}
                            />
                            <div className={'card-side-column-content'} style={{ display: !watcher.getValue('showCustomerJourney') ? 'block' : 'none' }}>
                              <div className={'customer-journey'}>
                                <div className={'row-journey'}>
                                  <div className={'icon-journey'}>
                                    <img
                                      loading={'lazy'}
                                      src={
                                        'images/smarties-icon-journey-checkout.svg'
                                      }
                                      alt={''}
                                    />
                                  </div>
                                  <div className={'card-journey'}>
                                    <div className={'card-journey-hd'}>
                                      <div className={'journey-page-name'}>
                                        Checkout Page
                                      </div>
                                      <div className={'journey-status'}>
                                        Current
                                      </div>
                                    </div>
                                    <div>/checkout</div>
                                    <CardjourneydurationItem />
                                  </div>
                                </div>
                                <div className={'row-journey'}>
                                  <div className={'icon-journey'}>
                                    <img
                                      loading={'lazy'}
                                      src={
                                        'images/smarties-icon-journey-cart.svg'
                                      }
                                      alt={''}
                                    />
                                  </div>
                                  <div className={'card-journey'}>
                                    <div className={'card-journey-hd'}>
                                      <div className={'journey-page-name'}>
                                        Shopping Cart
                                      </div>
                                    </div>
                                    <div>/cart</div>
                                    <CardjourneydurationItem />
                                  </div>
                                </div>
                                <div className={'row-journey'}>
                                  <div className={'icon-journey'}>
                                    <img
                                      loading={'lazy'}
                                      src={
                                        'images/smarties-icon-journey-home.svg'
                                      }
                                      alt={''}
                                    />
                                  </div>
                                  <div className={'card-journey'}>
                                    <div className={'card-journey-hd'}>
                                      <div className={'journey-page-name'}>
                                        Homepage
                                      </div>
                                      <div className={'journey-status entry'}>
                                        Entry
                                      </div>
                                    </div>
                                    <div>/</div>
                                    <CardjourneydurationItem />
                                  </div>
                                </div>
                                <div className={'line-journey'}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={'journey-bot'}>
                        <div className={'card-session-summary'}>
                          <div className={'journey-top-hd'}>
                            <div>Session Summary</div>
                          </div>
                          <div className={'session-summary'}>
                            <SessionsummarycolItem
                              src={'images/smarties-icon-journey-page.svg'}
                              divText={'5'}
                              divText1={'Pages Visited'}
                            />
                            <SessionsummarycolItem
                              src={'images/smarties-icon-journey-time.svg'}
                              divText={'19 min'}
                              divText1={'Total Time'}
                            />
                          </div>
                        </div>
                        <div className={'card-previous-summary'}>
                          <div>
                            <div className={'journey-top-hd'}>
                              <div>Previous Session</div>
                              <div className={'icon-small-2'}>
                                <img
                                  loading={'lazy'}
                                  src={'images/smarties-icon-right.svg'}
                                  alt={''}
                                />
                              </div>
                            </div>
                            <div className={'previous-session-info'}>
                              <div>Yesterday, 3:45 PM • 8 pages • 12 min</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-tab={'Tab 3'}
                    className={`tabs-pane-side-column w-tab-pane ${activeCustomerInformationTab == 'history' ? 'w--tab-active' : ''}`}
                  >
                    <div className={'side-column-history'}>
                      <div className={'history-search-filter'}>
                        <div>
                          <div className={'history-search-div'}>
                            <div className={'history-search'}>
                              <Assetsearchdiv2Item />
                            </div>
                            <div className={'a_inbox-filter-div'}>
                              <div
                                data-w-id={
                                  'e9437ced-afb3-128d-601f-b209ddd0bb09'
                                }
                                className={'a_filter-btn'}
                              >
                                <img
                                  loading={'lazy'}
                                  src={'images/smarties-icon-filter_1.svg'}
                                  alt={''}
                                />
                              </div>
                              <div className={'filter-popup history'}>
                                <div className={'w-form'}>
                                  <form
                                    id={'email-form'}
                                    name={'email-form'}
                                    data-name={'Email Form'}
                                    method={'get'}
                                    data-wf-page-id={'688b61ee631f6165f14725cd'}
                                    data-wf-element-id={
                                      'e9437ced-afb3-128d-601f-b209ddd0bb0d'
                                    }
                                  >
                                    <div className={'filter-main-div flex'}>
                                      <div
                                        className={'filter-main-column wide'}
                                      >
                                        <FiltergroupItem317 />
                                        <FiltergroupItem300 />
                                        <FiltergroupItem303
                                          label={'Bot-Handled'}
                                          label1={'Agent-Handled'}
                                          label2={'Mixed'}
                                        />
                                      </div>
                                      <div
                                        className={'filter-main-column wide'}
                                      >
                                        <FiltergroupItem />
                                        <FiltergroupItem309 />
                                      </div>
                                    </div>
                                    <div className={'filter_bottom'}>
                                      <a
                                        href={'#'}
                                        className={'popup-links text-red'}
                                      >
                                        Clear all filters
                                      </a>
                                      <div className={'filterbottom_right'}>
                                        <div className={'filter-btn-div'}>
                                          <Btnstyle12Item />
                                        </div>
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
                        <div className={'history-filter'}>
                          <div className={'form-block-2 w-form'}>
                            <form
                              id={'email-form-2'}
                              name={'email-form-2'}
                              data-name={'Email Form 2'}
                              method={'get'}
                              className={'history-form'}
                              data-wf-page-id={'688b61ee631f6165f14725cd'}
                              data-wf-element-id={
                                '420b0f02-28d9-8e15-64f3-0d8b5aa4b23a'
                              }
                            >
                              <div className={'row-form'}>
                                <Col2formItem optionText={'All Status'} />
                                <Col2formItem optionText={'Sort by Date'} />
                              </div>
                            </form>
                            <WformdoneItem />
                            <WformfailItem />
                          </div>
                        </div>
                      </div>
                      <div className={'history-list'}>
                        <div className={'card-customer-history'}>
                          <div className={'card-customer-history-hd'}>
                            <div className={'card-customer-history-hd-left'}>
                              <div className={'tag-status'}>active</div>
                              <div className={'tag-type'}>
                                <div className={'tag-type-icon'}>
                                  <img
                                    loading={'lazy'}
                                    src={'images/smarties-icon-bot.svg'}
                                    alt={''}
                                  />
                                </div>
                                <div>Bot</div>
                              </div>
                            </div>
                            <div>Dec 15, 2024</div>
                          </div>
                          <HistoryconvonameItem />
                          <Divblock35Item />
                          <CardcustomerhistorybotItem
                            src={'images/smarties-bot-avatar.svg'}
                            divText={'Handled by Bot'}
                          />
                        </div>
                        <CardcustomerhistoryItem />
                        <CardcustomerhistoryItem />
                      </div>
                      <div className={'history-stats'}>
                        <div className={'history-stats-col'}>
                          <div className={'history-stats-hd'}>12</div>
                          <div>Conversations</div>
                        </div>
                        <div className={'history-stats-col'}>
                          <div className={'history-stats-hd green'}>8</div>
                          <div>Resolved</div>
                        </div>
                        <div className={'history-stats-col'}>
                          <div className={'history-stats-hd blue'}>4.2</div>
                          <div>Avg Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-tab={'Tab 4'}
                    className={`tabs-pane-side-column w-tab-pane ${activeCustomerInformationTab == 'data' ? 'w--tab-active' : ''}`}
                  >
                    <div className={'side-column-data'}>
                      <div className={'journey-main-content'}>
                        <div className={'acitivity-history-searchfilter'}>
                          <div className={'data-search-wrap'}>
                            <div className={'search-formblock w-form'}>
                              <form
                                id={'wf-form-search-form'}
                                name={'wf-form-search-form'}
                                data-name={'search form'}
                                method={'get'}
                                data-wf-page-id={'688b61ee631f6165f14725cd'}
                                data-wf-element-id={
                                  '9aaf37b2-a011-864e-493e-ccb9979ed0bd'
                                }
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
                          </div>
                          <div
                            data-w-id={'264814e3-50a2-8f20-b31d-ec3499d1bccc'}
                            className={'btnicon-add'}
                          >
                            <img
                              src={'images/smarties-icon-add.svg'}
                              loading={'lazy'}
                              alt={''}
                            />
                          </div>
                        </div>
                        <div className={'w-form'}>
                          <form
                            id={'wf-form-form-datacollection'}
                            name={'wf-form-form-datacollection'}
                            data-name={'form-datacollection'}
                            method={'get'}
                            data-wf-page-id={'688b61ee631f6165f14725cd'}
                            data-wf-element-id={
                              '62432dc4-3998-68c5-310a-091a787ae285'
                            }
                          >
                            <div className={'add-data-div'}>
                              <div className={'adddatadiv_formrow'}>
                                <div className={'adddatadiv_formcol'}>
                                  <input
                                    className={'data-textfield w-input'}
                                    maxlength={'256'}
                                    name={'title'}
                                    data-name={'title'}
                                    placeholder={'Title'}
                                    type={'text'}
                                    id={'title'}
                                    required
                                  />
                                </div>
                                <div className={'adddatadiv_formcol'}>
                                  <textarea
                                    id={'description'}
                                    name={'description'}
                                    maxlength={'5000'}
                                    data-name={'description'}
                                    placeholder={'Description'}
                                    className={'data-textarea w-input'}
                                  ></textarea>
                                </div>
                                <div className={'adddatadiv_formcol'}>
                                  <select
                                    id={'data-type'}
                                    name={'data-type'}
                                    data-name={'data type'}
                                    className={'data-selectfield w-select'}
                                  >
                                    <option value={''}>Data Type</option>
                                    <option value={'First'}>Temporary</option>
                                    <option value={'Second'}>Permanent</option>
                                  </select>
                                </div>
                              </div>
                              <div className={'adddatadiv-btncontain'}>
                                <div className={'div-block-14'}>
                                  <a
                                    data-w-id={
                                      'faf67c65-037e-bc5e-951e-f27278871811'
                                    }
                                    href={'#'}
                                    className={'link-text'}
                                  >
                                    Cancel
                                  </a>
                                  <a
                                    href={'#'}
                                    className={'btn-small w-button'}
                                  >
                                    Save
                                  </a>
                                </div>
                              </div>
                            </div>
                          </form>
                          <WformdoneItem />
                          <WformfailItem />
                        </div>
                        <div className={'side-column-section'}>
                          <div className={'card-side-column'}>
                            <div
                              data-w-id={'420b0f02-28d9-8e15-64f3-0d8b5aa4b2b5'}
                              className={'card-side-column-hd'}
                            >
                              <div className={'div-block-37'}>
                                <div className={'datacollection-text'}>
                                  Customer requested a refund for the invoice
                                  discrepancy
                                </div>
                                <div className={'tag-customer yellow'}>
                                  Temporary
                                </div>
                              </div>
                              <div className={'side-column-arrow'}>
                                <img
                                  loading={'lazy'}
                                  src={
                                    'https://cdn.prod.website-files.com/6863b2cd9d992eee2240d5c5/6863b2cd9d992eee2240d603_vuesax%2Foutline%2Farrow-down.svg'
                                  }
                                  alt={''}
                                />
                              </div>
                            </div>
                            <div className={'card-side-column-content'}>
                              <div className={'data-collection-content'}>
                                <RowdatacollectionItem
                                  label={'Referral Source'}
                                  divText={'Google Search'}
                                />
                                <RowdatacollectionItem
                                  label={'Budget Range'}
                                  divText={'$10,000 - $25,000'}
                                />
                                <div className={'row-data-collection'}>
                                  <div className={'row-data-collection-main'}>
                                    <div className={'data-label'}>
                                      Current Interests
                                    </div>
                                    <div className={'div-block-38'}>
                                      <div className={'tag-customer blue'}>
                                        Enterprise Plan
                                      </div>
                                      <div className={'tag-customer blue'}>
                                        API Access
                                      </div>
                                    </div>
                                  </div>
                                  <div className={'edit-data'}>
                                    <img
                                      loading={'lazy'}
                                      src={'images/smarties-icon-edit.svg'}
                                      alt={''}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={'card-side-column'}>
                            <div
                              data-w-id={'420b0f02-28d9-8e15-64f3-0d8b5aa4b2db'}
                              className={'card-side-column-hd'}
                            >
                              <div className={'div-block-37'}>
                                <div className={'datacollection-text'}>
                                  Customer requested a refund for the invoice
                                  discrepancy
                                </div>
                                <div className={'tag-customer'}>Permanent</div>
                              </div>
                              <div className={'side-column-arrow'}>
                                <img
                                  loading={'lazy'}
                                  src={
                                    'https://cdn.prod.website-files.com/6863b2cd9d992eee2240d5c5/6863b2cd9d992eee2240d603_vuesax%2Foutline%2Farrow-down.svg'
                                  }
                                  alt={''}
                                />
                              </div>
                            </div>
                            <div className={'card-side-column-content'}>
                              <div className={'data-collection-content'}>
                                <RowdatacollectionItem
                                  label={'Company'}
                                  divText={'TechNova Solutions'}
                                />
                                <RowdatacollectionItem
                                  label={'Industry'}
                                  divText={'Software & Technology'}
                                />
                                <RowdatacollectionItem
                                  label={'Number of Employees'}
                                  divText={'250'}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'enrichment-side-column'}>
            <div className={'side-column-hd'}>
              <div className={'enrichment-side-column-top'}>
                <div
                  data-w-id={'06e3dc9d-8dbf-6b3e-e730-9a3a4d4b2c78'}
                  className={'btn-back'}
                >
                  <img
                    loading={'lazy'}
                    src={'images/smarties-icon-back.svg'}
                    alt={''}
                  />
                </div>
                <div className={'side-column-text-hd'}>Data Enrichment</div>
              </div>
            </div>
            <div className={'select-enrichment'}>
              <div className={'enrichment-content'}>
                <div className={'form-block-2 w-form'}>
                  <form
                    id={'email-form-3'}
                    name={'email-form-3'}
                    data-name={'Email Form 3'}
                    method={'get'}
                    className={'form-enrichment'}
                    data-wf-page-id={'688b61ee631f6165f14725cd'}
                    data-wf-element-id={'06e3dc9d-8dbf-6b3e-e730-9a3a4d4b2c7f'}
                  >
                    <div className={'enrichment-note'}>
                      <div>Select fields to enrich customer data</div>
                    </div>
                    <div>
                      <RowenrichmentItem divText={'Job Title'} />
                      <RowenrichmentItem divText={'Phone Number'} />
                      <RowenrichmentItem divText={'LinkedIn Profile'} />
                      <RowenrichmentItem divText={'Twitter Profile'} />
                      <RowenrichmentItem307 divText={'Company Size'} />
                      <RowenrichmentItem307 divText={'Company Revenue'} />
                      <RowenrichmentItem divText={'Company Industry'} />
                      <RowenrichmentItem divText={'Location'} />
                    </div>
                    <div className={'enrichment-btn'}>
                      <a
                        data-w-id={'06e3dc9d-8dbf-6b3e-e730-9a3a4d4b2cc9'}
                        href={'#'}
                        className={'btn-style1-2 w-inline-block'}
                      >
                        <div className={'btn-icon-2'}>
                          <img
                            loading={'lazy'}
                            src={'images/smarties-icon-refresh.svg'}
                            alt={''}
                          />
                        </div>
                        <div>Fetch Selected Data</div>
                        <div>(1)</div>
                      </a>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
            <div className={'processing-enrichment'}>
              <div className={'enrichment-content'}>
                <div className={'enrichment-loading'}>
                  <div className={'loading-lottie'}>
                    <div
                      data-w-id={'06e3dc9d-8dbf-6b3e-e730-9a3a4d4b2cda'}
                      data-animation-type={'lottie'}
                      data-src={
                        'https://cdn.prod.website-files.com/688b61f29ddc05275744387e/688b61f29ddc0527574438e6_smarties-loading-animation-3.json'
                      }
                      data-loop={'1'}
                      data-direction={'1'}
                      data-autoplay={'1'}
                      data-is-ix2-target={'0'}
                      data-renderer={'svg'}
                      data-default-duration={'0'}
                      data-duration={'0'}
                    ></div>
                  </div>
                  <div className={'loading-note'}>
                    <div>Fetching enrichment data...</div>
                    <div>This may take a few moments</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'result-enrichment'}>
              <div className={'enrichment-content'}>
                <div className={'form-block-2 w-form'}>
                  <form
                    id={'email-form-3'}
                    name={'email-form-3'}
                    data-name={'Email Form 3'}
                    method={'get'}
                    className={'form-enrichment'}
                    data-wf-page-id={'688b61ee631f6165f14725cd'}
                    data-wf-element-id={'06e3dc9d-8dbf-6b3e-e730-9a3a4d4b2ce3'}
                  >
                    <div>
                      <RowenrichmentItem311
                        divText={'Job Title'}
                        divText1={'Senior Marketing Manager'}
                      />
                      <RowenrichmentItem311
                        divText={'Phone Number'}
                        divText1={'+1 (555) 123-4567'}
                      />
                      <RowenrichmentItem311
                        divText={'LinkedIn Profile'}
                        divText1={'linkedin.com/in/sarahjohnson'}
                      />
                      <RowenrichmentItem311
                        divText={'Twitter Profile'}
                        divText1={'@sarahj_tech'}
                      />
                      <RowenrichmentItem311
                        divText={'Company Industry'}
                        divText1={'Software & Technology'}
                      />
                      <RowenrichmentItem311
                        divText={'Location'}
                        divText1={'San Francisco, CA'}
                      />
                    </div>
                    <div className={'enrichment-btn'}>
                      <a
                        data-w-id={'06e3dc9d-8dbf-6b3e-e730-9a3a4d4b2d40'}
                        href={'#'}
                        className={'btn-style1-2 w-inline-block'}
                      >
                        <div className={'btn-icon-2'}>
                          <img
                            loading={'lazy'}
                            src={'images/smarties-icon-refresh.svg'}
                            alt={''}
                          />
                        </div>
                        <div>Save Selected</div>
                      </a>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout319;
