import React, { useEffect, useRef } from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import MessagingtablinkItem_12257a7d from './MessagingtablinkItem_12257a7d';
import MessaginginboxtextcontenttopItem_8f1f0751 from './MessaginginboxtextcontenttopItem_8f1f0751';
import ObjectiondetectionitemItem from './ObjectiondetectionitemItem';
import MessaginginboxpreviewdivItem_cbbfda87 from './MessaginginboxpreviewdivItem_cbbfda87';
import MenuitemItem_6b295b9a from './MenuitemItem_6b295b9a';
import TonebtnItem from './TonebtnItem';
import ObjectionresponsetopItem from './ObjectionresponsetopItem';
import ObjectionsresponsecardbodyItem from './ObjectionsresponsecardbodyItem';
import ObjectionresponsebotItem from './ObjectionresponsebotItem';
import ObjectionresponsetagsItem from './ObjectionresponsetagsItem';
import ObjectionresponsetoprightItem from './ObjectionresponsetoprightItem';
import TestimonialsactionbtnItem from './TestimonialsactionbtnItem';
import CountdowncardlinkItem from './CountdowncardlinkItem';
import CountdowncardfieldcontainItem from './CountdowncardfieldcontainItem';
import CountdowncardcoloncolItem from './CountdowncardcoloncolItem';
import UrgencytypelinkItem from './UrgencytypelinkItem';
import UrgencytypeitemItem from './UrgencytypeitemItem';
import QuickpresentsitemItem from './QuickpresentsitemItem';
import ObjectionFeedWatcher, { NUDGE, OBJECTION } from '../../api/client/watchers/ObjectionFeedWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import Loader from './common/Loader';

const MaincontentLayout_0e80098f = ({ }) => {
  const watcher = useRef(ObjectionFeedWatcher).current;
  useWatcher(watcher);

  useEffect(() => {
    watcher.fetchObjections();
  }, []);

  const loadingObjection = watcher.getValue(OBJECTION.LOADING_LIST);
  const loadingSuggestionResponse = watcher.getValue(OBJECTION.LOADING_SUGGESTION_RESPONSE);
  const objectionList = watcher.getValue(OBJECTION.LIST) || [];
  const selectedObjection = watcher.getValue(OBJECTION.SELECTED_OBJECTION) || null;
  const suggestedResponses = watcher.getValue(OBJECTION.SUGGESTION_RESPONSE) || [];

  //nudge tools
  const loadingNudge = watcher.getValue(NUDGE.LOADING) || false;
  const testimonials = watcher.getValue(NUDGE.TESTIMONIALS) || null;
  const countdownTimer = watcher.getValue(NUDGE.COUNTDOWN_TIMER) || {};
  const discount = watcher.getValue(NUDGE.DISCOUNT) || '';
  const urgentType = watcher.getValue(NUDGE.URGENT_TYPE) || [];

  return (
    <div
      id={'w-node-_650a9fdf-eb40-62bd-8ac2-9a0cde2ee07a-f14725d8'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>{'Objection Feed'}</div>
            <div className={'db-quickaction-text'}>
              {'AI-detected customer concerns'}
            </div>
          </div>
        </div>
        <div className={'mainwidth-control messaging'}>
          <div className={'sidebar-temp messaging'}>
            <div className={'div-block-19'}>
              <div className={'messaging-sidebar-h1'}>{'Objection List'}</div>
              <div className={'live-text'}>{'Live'}</div>
            </div>
            <a href={'#'} className={'btn-style1 w-inline-block'}>
              <div className={'btn-icon'}>
                <img src={'../images/Search_1.svg'} loading={'lazy'} alt={''} />
              </div>
              <div>{'Add Custom Objection'}</div>
            </a>
            <div className={'search-formblock w-form'}>
              <form
                id={'wf-form-search-form'}
                name={'wf-form-search-form'}
                data-name={'search form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725d8'}
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
                      onChange={(e => watcher.searchObjection(e.target.value))}
                    />
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
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
                    'messaging-tablink w-inline-block w-tab-link w--current'
                  }
                >
                  <div>{'All'}</div>
                </a>
                <MessagingtablinkItem_12257a7d
                  dataWTab={'Tab 2'}
                  divText={'Critical'}
                />
                <MessagingtablinkItem_12257a7d
                  dataWTab={'Tab 3'}
                  divText={'New'}
                />
              </div>
              <div className={'messaging-inbox-tabscontent w-tab-content'}>
                <div
                  data-w-tab={'Tab 1'}
                  className={'w-tab-pane w--tab-active'}
                >
                  <div className={'messaging-tabpane-div'}>
                    <div className={'inbox-list gap-5'}>
                      {loadingObjection ? (
                        <Loader />
                      ) :
                        objectionList.length ? objectionList.map((objection) => (
                          <a
                            key={objection.id}
                            // href={'#'}
                            className={`objection-list-item ${selectedObjection?.id == objection.id ? 'active' : ''} w-inline-block`}
                            onClick={() => watcher.selectObjection(objection)}
                            style={{ cursor: 'pointer', backgroundColor: selectedObjection?.id == objection.id ? '#f0f8ff' : 'transparent' }}
                          >
                            <div className={'messaging-inbox-item-left'}>
                              <div className={'messaging-inbox-textcontent'}>
                                <MessaginginboxtextcontenttopItem_8f1f0751
                                  divText={objection.title || 'Unknown Objection'}
                                  divText1={
                                    objection.preview || 'No preview available'
                                  }
                                />
                                <div className={'objectionlist-item-bot'}>
                                  <ObjectiondetectionitemItem
                                    divText={`Detected in ${objection.detected} conversations`}
                                  />
                                  <div
                                    className={`messaging-inbox-user-tag ${objection.tag == 'critical' ? `bg-orange` : objection.tag == 'new' ? 'bg-blue' : objection.tag == 'frequent' ? 'bg-yellow' : 'bg-grey'}`}
                                  >
                                    {objection.tag || 'FREQUENT'}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>))
                          :
                          <div>no data</div>
                      }
                      {/* <a
                        href={'#'}
                        className={'objection-list-item w-inline-block'}
                      >
                        <div className={'messaging-inbox-item-left'}>
                          <div className={'messaging-inbox-textcontent'}>
                            <div className={'messaging-inbox-textcontent-top'}>
                              <div className={'messaging-inbox-name-row'}>
                                <div
                                  className={'objection-status-dot bg-orange'}
                                ></div>
                                <div>{'Use case compatibility'}</div>
                              </div>
                              <MessaginginboxpreviewdivItem_cbbfda87
                                divText={
                                  '"Does this work for my use case? We\'re in healthcare and need HIPAA compliance."'
                                }
                              />
                            </div>
                            <div className={'objectionlist-item-bot'}>
                              <ObjectiondetectionitemItem
                                divText={'Detected in 8 conversations'}
                              />
                              <div
                                className={'messaging-inbox-user-tag bg-yellow'}
                              >
                                {'FREQUENT'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href={'#'}
                        className={'objection-list-item w-inline-block'}
                      >
                        <div className={'messaging-inbox-item-left'}>
                          <div className={'messaging-inbox-textcontent'}>
                            <MessaginginboxtextcontenttopItem_8f1f0751
                              divText={'Integration concerns'}
                              divText1={
                                '"Can this integrate with our existing Salesforce setup? We\'re heavily invested."'
                              }
                            />
                            <div className={'objectionlist-item-bot'}>
                              <ObjectiondetectionitemItem
                                divText={'Detected in 4 conversations'}
                              />
                              <div
                                className={'messaging-inbox-user-tag bg-blue'}
                              >
                                {'NEW'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href={'#'}
                        className={'objection-list-item w-inline-block'}
                      >
                        <div className={'messaging-inbox-item-left'}>
                          <div className={'messaging-inbox-textcontent'}>
                            <div className={'messaging-inbox-textcontent-top'}>
                              <div className={'messaging-inbox-name-row'}>
                                <div
                                  className={'objection-status-dot bg-grey'}
                                ></div>
                                <div>{'Implementation time'}</div>
                              </div>
                              <MessaginginboxpreviewdivItem_cbbfda87
                                divText={
                                  '"How long will it take to get this up and running? We need something quick."'
                                }
                              />
                            </div>
                            <div className={'objectionlist-item-bot'}>
                              <ObjectiondetectionitemItem
                                divText={'Detected in 6 conversations'}
                              />
                              <div
                                className={'messaging-inbox-user-tag bg-grey'}
                              >
                                {'MODERATE'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
                <div data-w-tab={'Tab 2'} className={'w-tab-pane'}></div>
                <div data-w-tab={'Tab 3'} className={'w-tab-pane'}></div>
              </div>
            </div>
          </div>
          {selectedObjection &&
            <div className={'messaging-maincol outline'}>
              <div className={'w-form'}>
                <form
                  id={'wf-form-tool-form'}
                  name={'wf-form-tool-form'}
                  data-name={'tool form'}
                  method={'get'}
                  data-wf-page-id={'688b61ee631f6165f14725d8'}
                  data-wf-element-id={'650a9fdf-eb40-62bd-8ac2-9a0cde2ee108'}
                >
                  <div className={'form-body'}>
                    <div className={'messaging-main-top newshoppers'}>
                      <div className={'messaging-main-topleft vertical'}>
                        <div className={'messaging-sidebar-h1'}>
                          {'Suggested Responses'}
                        </div>
                        <div className={'db-quickaction-text'}>
                          {'For: '}
                          <span className={'span-teal'}>{selectedObjection.title || ""}</span>
                        </div>
                      </div>
                      <div className={'messaging-main-topright'}>
                        <div className={'messaging-mainbtns-div'}>
                          <a
                            href={'#'}
                            className={'btn-style1 outline-small w-inline-block'}
                            onClick={() => watcher.generateSuggestionResponse(selectedObjection?.id)}
                          >
                            <div className={'icon-btnai w-embed'}>
                              <img
                                src="/svgs/icon-9f2545ad754432c4ae21a54e6036e946.svg"
                                alt="icon"
                              />
                            </div>
                            <div>{'Regenerate'}</div>
                          </a>
                          <div className={'assistant-menu'}>
                            <div
                              data-w-id={'650a9fdf-eb40-62bd-8ac2-9a0cde2ee134'}
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
                              <MenuitemItem_6b295b9a
                                src={'../images/smarties-icon-version.svg'}
                                divText={'Version History'}
                              />
                              <MenuitemItem_6b295b9a
                                src={'../images/smarties-icon-document.svg'}
                                divText={'Call Logs'}
                              />
                              <MenuitemItem_6b295b9a
                                src={'../images/smarties-icon-duplicate.svg'}
                                divText={'Duplicate'}
                              />
                              <MenuitemItem_6b295b9a
                                src={'../images/smarties-icon-delete_outline.svg'}
                                divText={'Delete'}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'objectionfeed-body'}>
                      <div className={'tone-row'}>
                        <div className={'tone-text'}>{'Style:'}</div>
                        <div className={'tone-btn-container'}>
                          <div className={'tone-btn active'}>
                            <div>{'Friendly'}</div>
                          </div>
                          <TonebtnItem divText={'Informative'} />
                          <TonebtnItem divText={'Casual'} />
                          <TonebtnItem divText={'Professional'} />
                        </div>
                      </div>
                      <div className={'objection-response-div'}>
                        {
                          loadingSuggestionResponse ? (
                            <Loader />
                          ) :
                            suggestedResponses.length ? suggestedResponses.map((response) => (
                              <div key={response.id} className={'objections-response-card'}>
                                <ObjectionresponsetopItem
                                  divText={response.title || 'Response #1'}
                                  divText1={response.tags || null}
                                  divText2={null}
                                  dataWId={'6c69d6e6-d7e0-44df-2be5-fd5ef4d20f56'}
                                />
                                <ObjectionsresponsecardbodyItem
                                  divText={
                                    response.text || ''
                                  }
                                />
                                <ObjectionresponsebotItem />
                                <div className={'topperformer-div'}>
                                  <img
                                    src={'../images/mdiflame_1.svg'}
                                    loading={'lazy'}
                                    width={'18'}
                                    height={'18'}
                                    alt={''}
                                    className={'mdiflame'}
                                  />
                                  <div className={'daily-trend-item-4'}>
                                    {'Top Performer'}
                                  </div>
                                </div>
                              </div>))
                              : <div>no data</div>}
                        {/* <div className={'objections-response-card'}>
                        <div className={'objection-response-top'}>
                          <div className={'objection-response-topleft'}>
                            <div className={'objection-response-hd'}>
                              {'Response #2'}
                            </div>
                            <div className={'objection-response-tags-div'}>
                              <ObjectionresponsetagsItem divText={'Pricing'} />
                              <ObjectionresponsetagsItem
                                divText={'Competitive'}
                              />
                            </div>
                          </div>
                          <ObjectionresponsetoprightItem
                            dataWId={'eb5fae3e-9e81-92d4-6395-0d438d89a6ec'}
                          />
                        </div>
                        <ObjectionsresponsecardbodyItem
                          divText={
                            "I'd be happy to clarify our pricing for your team of 15! We offer a special mid-size team discount that brings your cost to just $25/user/month (normally $29). That's a total of $375/month with all premium features included. Plus, if you sign up this week, I can lock in an additional 10% discount for the first year! Would you like me to send over a detailed quote?"
                          }
                        />
                        <ObjectionresponsebotItem />
                      </div>
                      <div className={'objections-response-card'}>
                        <ObjectionresponsetopItem
                          divText={'Response #2'}
                          divText1={'Enterprise'}
                          divText2={'Discount'}
                          dataWId={'14deeed6-4d60-dc7d-8478-972a0abd00a8'}
                        />
                        <ObjectionsresponsecardbodyItem
                          divText={
                            "Great question about pricing! For 15 team members, you'll find our pricing quite competitive. We actually have a calculator on our website that can give you an exact quote, but I can help you right now. Would you prefer monthly billing or annual with a 20% discount? I can also arrange a quick demo call to show how other teams your size are getting 3x ROI with our solution."
                          }
                        />
                        <ObjectionresponsebotItem />
                      </div> */}
                      </div>
                    </div>
                  </div>
                </form>
                <WformdoneItem />
                <WformfailItem />
              </div>
            </div>
          }
          {loadingNudge ?
            <Loader /> :
            <div className={'delivery-settings-sidebar'}>
              <div className={'messaging-sidebar-hd-div align-inbetween'}>
                <div className={'messaging-sidebar-h1'}>{'Nudge Tools'}</div>
                <div
                  data-w-id={'650a9fdf-eb40-62bd-8ac2-9a0cde2ee1cc'}
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
                  data-wf-page-id={'688b61ee631f6165f14725d8'}
                  data-wf-element-id={'650a9fdf-eb40-62bd-8ac2-9a0cde2ee1cf'}
                >
                  <div className={'sidebar-contact-body gap-20'}>
                    <div className={'nudge-group'}>
                      <div className={'nudge-header-div'}>
                        <div className={'messaging-sidebar-h2-style2'}>
                          {'Testimonials'}
                        </div>
                        <div className={'testimonials-action-btndiv'}>
                          <TestimonialsactionbtnItem
                            src={'../images/Frame_39.svg'}
                          />
                          <TestimonialsactionbtnItem
                            src={'../images/Frame_27.svg'}
                          />
                        </div>
                      </div>
                      <div className={'nudge-testimonials-card'}>
                        <div className={'nudege-tesimonial-top-div'}>
                          <img
                            src={'../images/img_1img.png'}
                            loading={'lazy'}
                            width={'40'}
                            height={'40'}
                            alt={''}
                            className={'nudege-tesimonial-image'}
                          />
                          <div className={'nudege-tesimonial-details-div'}>
                            <div
                              className={'nudege-tesimonial-details-stars-div'}
                            >
                              {Array.from({ length: testimonials.stars }).map((_, i) => (
                                <div
                                  className={'nudege-tesimonial-details-star-icon'}
                                >
                                  <img
                                    src={'../images/Frame_32.svg'}
                                    loading={'lazy'}
                                    width={'13.5'}
                                    height={'12'}
                                    alt={''}
                                    className={'frame-style-30'}
                                  />
                                </div>
                              ))}

                            </div>
                            <div className={'nudge-testimonial-name'}>
                              {testimonials.name || ''}
                            </div>
                            <div className={'nudge-testimonial-position'}>
                              {testimonials.position || ''}
                            </div>
                          </div>
                        </div>
                        <div className={'nudge-testimonial-textdiv'}>
                          <div className={'nudge-testimonial-text'}>
                            {
                              testimonials.text || ''
                            }
                          </div>
                        </div>
                        <div className={'nudge-testimonial-slider-dot-div'}>
                          <div
                            className={'nudge-testimonial-slider-dot-div-center'}
                          >
                            <div
                              className={'nudge-testimonial-slider-dot current'}
                            ></div>
                            <div className={'nudge-testimonial-slider-dot'}></div>
                            <div className={'nudge-testimonial-slider-dot'}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'nudge-group'}>
                      <div className={'messaging-sidebar-h2-style2'}>
                        {'Countdown Timer'}
                      </div>
                      <div className={'countdown-card'}>
                        <div className={'countdown-card-top'}>
                          <div className={'countdown-card-offer-text'}>
                            {'Offer ends in:'}
                          </div>
                          <div className={'countdown-card-btn-row'}>
                            <CountdowncardlinkItem divText={'Edit'} />
                            <CountdowncardlinkItem divText={'Reset'} />
                          </div>
                        </div>
                        <div className={'countdown-card-main-div'}>
                          <CountdowncardfieldcontainItem
                            placeholder={'2'}
                            divText={'Hours'}
                            value={countdownTimer.hours || '0'}
                            onChange={(e => watcher.setValue(NUDGE.COUNTDOWN_TIMER, { ...countdownTimer, hours: e.target.value }))}
                          />
                          <CountdowncardcoloncolItem />
                          <CountdowncardfieldcontainItem
                            placeholder={'15'}
                            divText={'Minutes'}
                            value={countdownTimer.minutes || '0'}
                            onChange={(e => watcher.setValue(NUDGE.COUNTDOWN_TIMER, { ...countdownTimer, minutes: e.target.value }))}
                          />
                          <CountdowncardcoloncolItem />
                          <CountdowncardfieldcontainItem
                            placeholder={'42'}
                            divText={'Seconds'}
                            value={countdownTimer.seconds || '0'}
                            onChange={(e => watcher.setValue(NUDGE.COUNTDOWN_TIMER, { ...countdownTimer, seconds: e.target.value }))}
                          />
                        </div>
                        <div className={'countdown-card-discount-div'}>
                          <input
                            className={'textfield w-input'}
                            maxlength={'256'}
                            name={'field-2'}
                            data-name={'Field 2'}
                            placeholder={'Special 20% team discount'}
                            type={'text'}
                            id={'field-2'}
                            required
                            value={discount || ''}
                            onChange={(e => watcher.setValue(NUDGE.DISCOUNT, e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={'nudge-group'}>
                      <div className={'messaging-sidebar-h2-style2'}>
                        {'Urgency Types'}
                      </div>
                      <div className={'urgencytype-list'}>
                        <div className={'urgency-type-item'}>
                          <div className={'urgency-type-left'}>
                            <div className={'input-6'}>
                              <div className={'svg-5'}>
                                <img
                                  src={'../images/Frame_28.svg'}
                                  loading={'lazy'}
                                  width={'14'}
                                  height={'12'}
                                  alt={''}
                                  className={'frame-style-31'}
                                />
                              </div>
                            </div>
                            <div className={'text-78'}>{'Scarcity'}</div>
                          </div>
                          <UrgencytypelinkItem />
                        </div>
                        <UrgencytypeitemItem divText={'Social Proof'} />
                        <UrgencytypeitemItem divText={'Time-Limited'} />
                      </div>
                    </div>
                    <div className={'nudge-group'}>
                      <div className={'messaging-sidebar-h2-style2'}>
                        {'Quick Presets'}
                      </div>
                      <div className={'quickpresents-options'}>
                        <QuickpresentsitemItem
                          itemText={'Limited-time discount'}
                        />
                        <QuickpresentsitemItem
                          itemText={'Free onboarding session'}
                        />
                        <QuickpresentsitemItem
                          itemText={'Case study highlight'}
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <WformdoneItem />
                <WformfailItem />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout_0e80098f;
