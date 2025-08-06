import React from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import ListitemassistantItem from './ListitemassistantItem';
import MenuitemItem from './MenuitemItem';
import AssistantbuttonItem from './AssistantbuttonItem';
import NavlineItem from './NavlineItem';
import CostcontainerItem from './CostcontainerItem';
import AssistanthdItem from './AssistanthdItem';
import CardassistanthdItem from './CardassistanthdItem';
import FormcelldivItem from './FormcelldivItem';
import Formrow2Item12 from './Formrow2Item12';
import Formrow2Item23 from './Formrow2Item23';
import FormsliderItem from './FormsliderItem';
import CardformrowItem from './CardformrowItem';
import FormcolItem24 from './FormcolItem24';
import WcheckboxItem from './WcheckboxItem';
import Formrow2Item27 from './Formrow2Item27';
import FormcolItem from './FormcolItem';
import CardformrowleftItem from './CardformrowleftItem';
import SwitchdivItem from './SwitchdivItem';
import CardformsubrowItem from './CardformsubrowItem';
import Formcontrol2Item from './Formcontrol2Item';
import Formrow2Item from './Formrow2Item';
import CardformsubrowItem29 from './CardformsubrowItem29';
import Formrow2Item18 from './Formrow2Item18';
import FormcolItem9 from './FormcolItem9';
import SelectfieldItem from './SelectfieldItem';
import Formrow2Item13 from './Formrow2Item13';
import AddformsubItem from './AddformsubItem';
import CardformrowItem21 from './CardformrowItem21';
import CardformrowItem30 from './CardformrowItem30';
import CardformrowItem32 from './CardformrowItem32';
import RowsliderItem28 from './RowsliderItem28';
import CardformrowItem33 from './CardformrowItem33';
import CardformrowleftItem15 from './CardformrowleftItem15';
import ReusableItem11 from './ReusableItem11';
import Formrow2Item26 from './Formrow2Item26';
import ReusableItem from './ReusableItem';
import Formrow2Item37 from './Formrow2Item37';
import Formrow2Item22 from './Formrow2Item22';

const MaincontentLayout39 = ({}) => {
  return (
    <div
      id={'w-node-dd817661-5700-ca78-940f-32045820c6e6-f14725b5'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>Assistant Configuration</div>
          </div>
        </div>
        <div className={'mainwidth-control'}>
          <div className={'assistant-main-container'}>
            <div className={'sidebar-assistant'}>
              <a
                data-w-id={'afafd7a2-890e-f397-22fe-a3f2fc28385d'}
                href={'#'}
                className={'btn-style1 w-inline-block'}
              >
                <div className={'btn-icon'}>
                  <img
                    src={'../images/Search_1.svg'}
                    loading={'lazy'}
                    alt={''}
                  />
                </div>
                <div>Create Assistant</div>
              </a>
              <div className={'search-formblock w-form'}>
                <form
                  id={'wf-form-search-form'}
                  name={'wf-form-search-form'}
                  data-name={'search form'}
                  method={'get'}
                  data-wf-page-id={'688b61ee631f6165f14725b5'}
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
              <div className={'list-assistant'}>
                <div className={'list-item-assistant selected'}>
                  <div>Assistant 1</div>
                </div>
                <ListitemassistantItem divText={'Assistant 2'} />
                <ListitemassistantItem divText={'Assistant 3'} />
              </div>
            </div>
            <div className={'assistant-content'}>
              <div className={'assistant-controls'}>
                <div className={'assistant-name-details'}>
                  <div className={'text-assistant-name'}>Assistant 1</div>
                  <div className={'text-assistant-details'}>
                    dbaf0951-cdac-43b8-8792-eacbfc213c83
                  </div>
                </div>
                <div className={'assistant-buttons-div'}>
                  <div className={'button-edit'}>
                    <img
                      width={'15'}
                      height={'15'}
                      alt={''}
                      src={
                        'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a13cc00a2604de3bd_smarties-icon-pencil.svg'
                      }
                      loading={'lazy'}
                      className={'smarties-icon-pencil'}
                    />
                  </div>
                  <div className={'button-test'}>
                    <div className={'button-label'}>Test</div>
                    <img
                      width={'15'}
                      height={'15'}
                      alt={''}
                      src={
                        'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0b46c4c1e4c0be5746_smarties-icon-play.svg'
                      }
                      loading={'lazy'}
                      className={'smarties-icon-play'}
                    />
                  </div>
                  <div className={'button-chat'}>
                    <div className={'button-label'}>Chat</div>
                    <img
                      width={'15'}
                      height={'15'}
                      alt={''}
                      src={
                        'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a33e4300a494891b6_smarties-icon-chat.svg'
                      }
                      loading={'lazy'}
                      className={'smarties-icon-chat'}
                    />
                  </div>
                  <div className={'button-call-contain'}>
                    <div
                      data-w-id={'379fe386-af88-ed7e-3780-62a6bbc10947'}
                      className={'button-talk-to-assistant'}
                    >
                      <div className={'button-label-orange'}>
                        Talk to Assistant
                      </div>
                      <div className={'fluentchat-28-regular'}>
                        <img
                          width={'15'}
                          height={'15'}
                          alt={''}
                          src={
                            'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0afa140afcbeae1062_smarties-icon-call.svg'
                          }
                          loading={'lazy'}
                          className={'smarties-icon-call'}
                        />
                      </div>
                    </div>
                    <div className={'button-loading'}>
                      <div className={'button-label'}>Connecting</div>
                      <div
                        className={'lottie-animation'}
                        data-w-id={'dc3a33ce-7c91-d3be-d5a5-3d70277e78c7'}
                        data-animation-type={'lottie'}
                        data-src={
                          '../documents/smarties-loading-animation-3.json'
                        }
                        data-loop={'1'}
                        data-direction={'1'}
                        data-autoplay={'1'}
                        data-is-ix2-target={'0'}
                        data-renderer={'svg'}
                        data-default-duration={'0'}
                        data-duration={'1.7666666666666666'}
                      ></div>
                    </div>
                    <div
                      data-w-id={'592e4b93-831d-c748-76be-b78928ce6855'}
                      className={'button-end-call'}
                    >
                      <div className={'button-label-orange-copy'}>End Call</div>
                      <div className={'fluentchat-28-regular'}>
                        <img
                          width={'15'}
                          height={'15'}
                          alt={''}
                          src={'../images/smarties-endcall.svg'}
                          loading={'lazy'}
                          className={'smarties-icon-call'}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      data-delay={'0'}
                      data-hover={'false'}
                      className={'dropdown-publish w-dropdown'}
                    >
                      <div
                        className={'dropdown-publish-toggle w-dropdown-toggle'}
                      >
                        <div className={'icon-3 w-icon-dropdown-toggle'}></div>
                        <div>Publish</div>
                      </div>
                      <nav className={'dropdown-list w-dropdown-list'}>
                        <a
                          href={'#'}
                          className={'dropdown-link w-dropdown-link'}
                        >
                          View Changes
                        </a>
                        <a
                          href={'#'}
                          className={'dropdown-link w-dropdown-link'}
                        >
                          Discard Changes
                        </a>
                      </nav>
                    </div>
                  </div>
                  <div className={'assistant-menu'}>
                    <div
                      data-w-id={'379fe386-af88-ed7e-3780-62a6bbc10959'}
                      className={'button-menu'}
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
                      <MenuitemItem
                        src={'../images/smarties-icon-version.svg'}
                        divText={'Version History'}
                      />
                      <MenuitemItem
                        src={'../images/smarties-icon-document.svg'}
                        divText={'Call Logs'}
                      />
                      <MenuitemItem
                        src={'../images/smarties-icon-duplicate.svg'}
                        divText={'Duplicate'}
                      />
                      <MenuitemItem
                        src={'../images/smarties-icon-delete_outline.svg'}
                        divText={'Delete'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={'assistant-nav-div'}>
                <div className={'assistant-nav'}>
                  <AssistantbuttonItem
                    id={'model'}
                    href={'#section-model'}
                    src={
                      'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce453b478ee39320e500b_smarties-icon-model.svg'
                    }
                    divText={'Model'}
                  />
                  <div className={'nav-line'}></div>
                  <AssistantbuttonItem
                    id={'transcriber'}
                    href={'#section-transcriber'}
                    src={
                      'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce456d66657258663032a_smarties-icon-transcriber.svg'
                    }
                    divText={'Transcriber'}
                  />
                  <div className={'nav-line'}></div>
                  <AssistantbuttonItem
                    id={'voice'}
                    href={'#section-voice'}
                    src={
                      'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce456a9e81cf11c50971a_smarties-icon-voice.svg'
                    }
                    divText={'Voice'}
                  />
                  <NavlineItem />
                  <AssistantbuttonItem
                    id={'tools'}
                    href={'#section-tools'}
                    src={
                      'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4581ad40a3c6f5d8afc_smarties-icon-tools.svg'
                    }
                    divText={'Tools'}
                  />
                  <NavlineItem />
                  <AssistantbuttonItem
                    id={'analysis'}
                    href={'#section-analysis'}
                    src={
                      'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4cbb0e61fe94039c0c0_smarties-icon-analysis.svg'
                    }
                    divText={'Analysis'}
                  />
                  <NavlineItem />
                  <AssistantbuttonItem
                    id={'advanced'}
                    href={'#section-advanced'}
                    src={
                      'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4581ad40a3c6f5d8afc_smarties-icon-tools.svg'
                    }
                    divText={'Advanced'}
                  />
                  <NavlineItem />
                </div>
              </div>
              <div id={'scroll-container'} className={'assistant-main-content'}>
                <div className={'w-form'}>
                  <form
                    id={'wf-form-Assistant-Settings-Form'}
                    name={'wf-form-Assistant-Settings-Form'}
                    data-name={'Assistant Settings Form'}
                    method={'get'}
                    data-wf-page-id={'688b61ee631f6165f14725b5'}
                    data-wf-element-id={'379fe386-af88-ed7e-3780-62a6bbc10981'}
                  >
                    <div className={'assistant-summary'}>
                      <CostcontainerItem
                        label={'Cost'}
                        label1={'~$0.08 /min'}
                      />
                      <CostcontainerItem label={'Latency'} label1={'~600 ms'} />
                    </div>
                    <section
                      id={'section-model'}
                      className={'assistant-section'}
                    >
                      <AssistanthdItem
                        src={
                          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb3039ccd3756bdd97431_smarties-icon-model.svg'
                        }
                        title={'Model'}
                        width={'24'}
                        height={'24'}
                      />
                      <div className={'assistant-cards-container'}>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10999'}
                            divText={'Model'}
                            description={
                              'Configure the behavior of the assistant.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content-model'}>
                              <div className={'col-assistant-model'}>
                                <div className={'form-row-2'}>
                                  <FormcelldivItem
                                    label={'Assistant Name'}
                                    name={'Assistant-Name'}
                                    dataName={'Assistant Name'}
                                    placeholder={'Leo'}
                                    id={'Assistant-Name'}
                                  />
                                </div>
                                <div className={'form-row-2'}>
                                  <div className={'form--cell-div'}>
                                    <label
                                      htmlFor={''}
                                      className={'form-label-2'}
                                    >
                                      First Message
                                    </label>
                                    <div className={'first-message-textarea'}>
                                      <div className={'form-textararea-div'}>
                                        <textarea
                                          id={'First-Message'}
                                          name={'First-Message'}
                                          maxlength={'5000'}
                                          data-name={'First Message'}
                                          placeholder={
                                            "Hi there! I'm Leo, your go-to for any SmartHome Innovations queries. How can I assist you today?"
                                          }
                                          className={
                                            'form-input-textarea w-input'
                                          }
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Formrow2Item12
                                  id={'System-Prompt'}
                                  name={'System-Prompt'}
                                  dataName={'System Prompt'}
                                />
                              </div>
                              <div className={'model-settings'}>
                                <div className={'form-hd-small'}>
                                  Model Settings
                                </div>
                                <div className={'model-settings-container'}>
                                  <Formrow2Item23
                                    label={'Provider'}
                                    id={'Provider'}
                                    name={'Provider'}
                                    dataName={'Provider'}
                                    value={'openai'}
                                    optionText={'openai'}
                                    optionText1={'Select one...'}
                                  />
                                  <Formrow2Item23
                                    label={'Model'}
                                    id={'Model'}
                                    name={'Model'}
                                    dataName={'Model'}
                                    value={'gpt-3.5-turbo'}
                                    optionText={'gpt-3.5-turbo'}
                                    optionText1={'Select one...'}
                                  />
                                  <Formrow2Item23
                                    label={'Files'}
                                    id={'Files'}
                                    name={'Files'}
                                    dataName={'Files'}
                                    value={'First'}
                                    optionText={'First choice'}
                                    optionText1={'Select Files'}
                                  />
                                  <div className={'form-row-2'}>
                                    <div className={'form--cell-div'}>
                                      <div className={'temperature-div'}>
                                        <label
                                          htmlFor={''}
                                          className={'form-label-2'}
                                        >
                                          Temperature
                                        </label>
                                        <div className={'form-control-2 small'}>
                                          <input
                                            className={
                                              'form-input small w-input'
                                            }
                                            maxlength={'256'}
                                            name={'Temperature'}
                                            data-name={'Temperature'}
                                            placeholder={'0.7'}
                                            type={'number'}
                                            id={'Temperature'}
                                            required
                                          />
                                        </div>
                                      </div>
                                      <FormsliderItem />
                                    </div>
                                  </div>
                                  <Formrow2Item23
                                    label={'Max tokens'}
                                    id={'Max-tokens'}
                                    name={'Max-tokens'}
                                    dataName={'Max Tokens'}
                                    value={'First'}
                                    optionText={'First choice'}
                                    optionText1={'Select one...'}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id={'section-transcriber'}
                      className={'assistant-section'}
                    >
                      <AssistanthdItem
                        src={
                          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb39440e5bb4abe33c31d_smarties-icon-transcriber.svg'
                        }
                        title={'Transcriber'}
                        width={'24'}
                        height={'24'}
                      />
                      <div className={'assistant-cards-container'}>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc109e9'}
                            divText={'Transcriber'}
                            description={
                              'Configure the behavior of the transcriber.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <Formrow2Item23
                                  label={'Provider'}
                                  id={'transcriber-provider'}
                                  name={'transcriber-provider'}
                                  dataName={'Transcriber Provider'}
                                  value={'deepgram'}
                                  optionText={'deepgram'}
                                  optionText1={'Select one...'}
                                />
                                <Formrow2Item23
                                  label={'Model'}
                                  id={'transcriber-provider-2'}
                                  name={'transcriber-provider-2'}
                                  dataName={'Transcriber Provider 2'}
                                  value={'deepgram'}
                                  optionText={'deepgram'}
                                  optionText1={'Select one...'}
                                />
                                <CardformrowItem
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfc7e46f2135cf7a6b901_smarties-icon-sound.svg'
                                  }
                                  divText={'Background Denoising Enabled'}
                                  description={
                                    'Filter background noise while the user is talking.'
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id={'section-voice'}
                      className={'assistant-section'}
                    >
                      <AssistanthdItem
                        src={
                          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb394934718ed4b4076d9_smarties-icon-voice.svg'
                        }
                        title={'Voice'}
                        width={'24'}
                        height={'24'}
                      />
                      <div className={'assistant-cards-container'}>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10a13'}
                            divText={'Voice Configuration'}
                            description={
                              "Select a voice from the list, or sync your voice library if it's missing. If errors persist, enable custom voice and add a voice ID."
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <div className={'form-row-2 flex'}>
                                  <FormcolItem24
                                    label={'Provider'}
                                    id={'Voice-Provider'}
                                    name={'Voice-Provider'}
                                    dataName={'Voice Provider'}
                                    optionText={'Select one...'}
                                  />
                                  <FormcolItem24
                                    label={'Voice'}
                                    id={'Voice-Voice'}
                                    name={'Voice-Voice'}
                                    dataName={'Voice Voice'}
                                    optionText={'Select one...'}
                                  />
                                </div>
                                <div className={'form-row-2 flex'}>
                                  <div className={'form-col'}>
                                    <div className={'form--cell-div'}>
                                      <WcheckboxItem
                                        name={'checkbox'}
                                        id={'checkbox'}
                                        dataName={'Checkbox'}
                                        htmlFor={'checkbox'}
                                        label={'Add Voice ID Manually'}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Formrow2Item27
                                  label={'Model'}
                                  description={
                                    'This is the model that will be used.'
                                  }
                                  id={'Voice-Model'}
                                  name={'Voice-Model'}
                                  dataName={'Voice Model'}
                                  optionText={'Select one...'}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10a3c'}
                            divText={'Additional Configuration'}
                            description={
                              'Configure additional settings for the voice of your assistant.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <div className={'form-row-2 flex'}>
                                  <FormcolItem24
                                    label={'Background Sound'}
                                    id={'Background-Sound'}
                                    name={'Background-Sound'}
                                    dataName={'Background Sound'}
                                    optionText={'Select one...'}
                                  />
                                  <FormcolItem
                                    label={'Background Sound URL'}
                                    name={'Background-Sound-URL'}
                                    dataName={'Background Sound URL'}
                                    id={'Background-Sound-URL'}
                                  />
                                  <FormcolItem
                                    label={'Input Min Characters'}
                                    name={'Input-Min-Characters'}
                                    dataName={'Input Min Characters'}
                                    id={'Input-Min-Characters'}
                                  />
                                </div>
                                <Formrow2Item27
                                  label={'Punctuation Boundaries'}
                                  description={
                                    'These are the punctuations that are considered valid boundaries or delimiters. This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in.'
                                  }
                                  id={'Punctuation-Boundaries'}
                                  name={'Punctuation-Boundaries'}
                                  dataName={'Punctuation Boundaries'}
                                  optionText={
                                    'No Punctuations Boundaries Added'
                                  }
                                />
                                <div className={'card-form-row flex'}>
                                  <div className={'div-block-2'}>
                                    <CardformrowleftItem
                                      src={
                                        'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df7e1435a52177a969893_smarties-icon-speed.svg'
                                      }
                                      divText={'Custom Speed Enabled'}
                                      description={
                                        'Enable precise control over voice speed with a custom slider. When disabled, preset speeds will be used.'
                                      }
                                    />
                                    <SwitchdivItem />
                                    <MenuitemItem
                                      src={
                                        '../images/smarties-icon-version.svg'
                                      }
                                      divText={'Version History'}
                                    />
                                  </div>
                                  <div className={'card-form-row-content'}>
                                    <CardformsubrowItem
                                      divText={'Speed'}
                                      divText1={'Normal'}
                                    />
                                    <div className={'line-horizontal'}></div>
                                    <CardformsubrowItem
                                      divText={'Anger'}
                                      divText1={'none'}
                                    />
                                    <CardformsubrowItem
                                      divText={'Positivity'}
                                      divText1={'none'}
                                    />
                                    <CardformsubrowItem
                                      divText={'Surprise'}
                                      divText1={'none'}
                                    />
                                    <CardformsubrowItem
                                      divText={'Sadness'}
                                      divText1={'none'}
                                    />
                                    <CardformsubrowItem
                                      divText={'Curiosity'}
                                      divText1={'none'}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id={'section-tools'}
                      className={'assistant-section'}
                    >
                      <AssistanthdItem
                        src={
                          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb394c0c53c3cc4a9906b_smarties-icon-tools.svg'
                        }
                        title={'Tools'}
                        width={'24'}
                        height={'24'}
                      />
                      <div className={'assistant-cards-container'}>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10ae5'}
                            divText={'Tools'}
                            description={
                              'Tools enable voicebots to perform actions during calls. Add tools from the'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <div className={'form-row-2'}>
                                  <div className={'form-banner'}>
                                    Note: Tools have different Request and
                                    Response format as compared to Functions.
                                    Check our tools guide for more details
                                  </div>
                                  <div className={'form--cell-div'}>
                                    <Formcontrol2Item
                                      dataWId={
                                        '379fe386-af88-ed7e-3780-62a6bbc10af6'
                                      }
                                      name={'Assistant-Tools'}
                                      dataName={'Assistant Tools'}
                                      id={'Assistant-Tools'}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10b11'}
                            divText={'Predefined Functions'}
                            description={
                              "We've pre-built functions for common use cases. You can enable them and configure them below."
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <CardformrowItem
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df8b83f0ea54f89e5f916_smarties-icon-endcall.svg'
                                  }
                                  divText={'Enable End Call Function'}
                                  description={
                                    'This will allow the assistant to end the call from its side. (Best for gpt-4 and bigger models.)'
                                  }
                                />
                                <CardformrowItem
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df8b69fd0be54a895dd18_smarties-icon-keypad.svg'
                                  }
                                  divText={'Dial Keypad'}
                                  description={
                                    'This sets whether the assistant can dial digits on the keypad. Read More'
                                  }
                                />
                                <div className={'form-row-2 flex'}>
                                  <div className={'form-col'}>
                                    <div className={'form--cell-div'}>
                                      <label
                                        htmlFor={''}
                                        className={'form-label-2'}
                                      >
                                        Phone number
                                      </label>
                                      <div className={'form-control-2'}>
                                        <div className={'form-button-group'}>
                                          <div
                                            className={'select-phone-number'}
                                          >
                                            <select
                                              id={'tool-phone-number'}
                                              name={'tool-phone-number'}
                                              data-name={'Tool Phone Number'}
                                              className={
                                                'select-field group w-select'
                                              }
                                            >
                                              <option value={''}>US</option>
                                              <option value={'deepgram'}>
                                                deepgram
                                              </option>
                                              <option value={'Second'}>
                                                Second choice
                                              </option>
                                              <option value={'Third'}>
                                                Third choice
                                              </option>
                                            </select>
                                          </div>
                                          <div className={'input-phone-number'}>
                                            <input
                                              className={
                                                'form-input group w-input'
                                              }
                                              maxlength={'256'}
                                              name={'Background-Sound-URL-2'}
                                              data-name={
                                                'Background Sound URL 2'
                                              }
                                              placeholder={'+1 (555) 000-0000'}
                                              type={'tel'}
                                              id={'Background-Sound-URL-2'}
                                              required
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
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10b3e'}
                            divText={'Custom Functions'}
                            description={
                              "Define your custom functions here to enhance your assistant's capabilities. You can use your own code or tools like Pipedream or Make for the Setup."
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <div className={'form-banner'}>
                                  Note: Tools have different Request and
                                  Response format as compared to Functions.
                                  Check our tools guide for more details
                                </div>
                                <Formrow2Item />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id={'section-analysis'}
                      className={'assistant-section'}
                    >
                      <AssistanthdItem
                        src={
                          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4cbb0e61fe94039c0c0_smarties-icon-analysis.svg'
                        }
                        title={'ANALYSIS'}
                        width={'24'}
                        height={'24'}
                      />
                      <div className={'assistant-cards-container'}>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10b59'}
                            divText={'Summary'}
                            description={
                              "This is the prompt that's used to summarize the call. The output is stored in call.analysis.summary . You can also find the summary in the Call Logs Page."
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <Formrow2Item12
                                  id={'System-Prompt-2'}
                                  name={'System-Prompt-2'}
                                  dataName={'System Prompt 2'}
                                />
                                <Formrow2Item27
                                  label={'Success Evaluation Rubric'}
                                  description={
                                    'This enforces the rubric of the evaluation upon the Success Evaluation.'
                                  }
                                  id={'Analysis-Success-Evaluation-Rubric'}
                                  name={'Analysis-Success-Evaluation-Rubric'}
                                  dataName={
                                    'Analysis Success Evaluation Rubric'
                                  }
                                  optionText={
                                    'No Punctuations Boundaries Added'
                                  }
                                />
                                <CardformsubrowItem29 />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10b87'}
                            divText={'Structured Data'}
                            description={
                              'Extract structured data from call conversation. You can use Data Schema standalone or in combination with Structured Data Prompt. If both are provided, they are concatenated into appropriate instructions.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <Formrow2Item18 />
                                <CardformsubrowItem29 />
                                <div>
                                  <div
                                    className={
                                      'card-form-row flex structure-data'
                                    }
                                  >
                                    <div className={'card-structured-data'}>
                                      <div className={'card-form-row-content'}>
                                        <div>
                                          <div>
                                            <div className={'form-row-2 flex'}>
                                              <FormcolItem9
                                                label={'Name'}
                                                name={'Background-Sound-URL-3'}
                                                dataName={
                                                  'Background Sound URL 3'
                                                }
                                                id={'Background-Sound-URL-3'}
                                              />
                                              <div className={'form-col'}>
                                                <div
                                                  className={'form--cell-div'}
                                                >
                                                  <label
                                                    htmlFor={''}
                                                    className={'form-label-2'}
                                                  >
                                                    Type
                                                  </label>
                                                  <div
                                                    className={'div-block-13'}
                                                  >
                                                    <div
                                                      className={
                                                        'form-control-2 _40'
                                                      }
                                                    >
                                                      <SelectfieldItem
                                                        id={
                                                          'Analysis-Structured-Data-Type'
                                                        }
                                                        name={
                                                          'Analysis-Structured-Data-Type'
                                                        }
                                                        dataName={
                                                          'Analysis Structured Data Type'
                                                        }
                                                        value={'deepgram'}
                                                        optionText={'deepgram'}
                                                        optionText1={'String'}
                                                      />
                                                    </div>
                                                    <div
                                                      className={
                                                        'checbox-small'
                                                      }
                                                    >
                                                      <WcheckboxItem
                                                        name={'checkbox-3'}
                                                        id={'checkbox-3'}
                                                        dataName={'Checkbox 3'}
                                                        htmlFor={'checkbox-3'}
                                                        label={'Is Enum'}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className={'form-col'}>
                                                <div
                                                  className={'form--cell-div'}
                                                >
                                                  <label
                                                    htmlFor={''}
                                                    className={'form-label-2'}
                                                  >
                                                    Required
                                                  </label>
                                                  <div
                                                    className={'form-control-2'}
                                                  >
                                                    <WcheckboxItem
                                                      name={
                                                        'Analysis-Structured-Data-Required'
                                                      }
                                                      id={
                                                        'Analysis-Structured-Data-Required'
                                                      }
                                                      dataName={
                                                        'Analysis Structured Data Required'
                                                      }
                                                      htmlFor={
                                                        'Analysis-Structured-Data-Required'
                                                      }
                                                      label={'Mark as required'}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Formrow2Item13 />
                                      <div className={'btn-icon-delete'}>
                                        <img
                                          loading={'lazy'}
                                          src={
                                            'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681d2106bd82e64bf878b407_smarties-icon-delete.svg'
                                          }
                                          alt={''}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <AddformsubItem />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id={'section-advanced'}
                      className={'assistant-section'}
                    >
                      <AssistanthdItem
                        src={
                          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb394f4a57d79337a4b5d_smarties-icon-advanced.svg'
                        }
                        title={'advanced'}
                        width={'19'}
                        height={'19'}
                      />
                      <div className={'assistant-cards-container'}>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10be5'}
                            divText={'Privacy'}
                            description={
                              'This section allows you to configure the privacy settings for the assistant.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <CardformrowItem
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa190e2f26fe8c3c6d97_smarties-icon-lock.svg'
                                  }
                                  divText={'HIPAA Compliance'}
                                  description={
                                    'When this is enabled, no logs, recordings, or transcriptions will be stored.'
                                  }
                                />
                                <CardformrowItem21
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18f667ce45112f5bf4_smarties-icon-card.svg'
                                  }
                                  divText={'PCI Compliance'}
                                  description={
                                    'When enabled, only PCI-compliant providers can be selected.'
                                  }
                                />
                                <CardformrowItem30
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa188f64b8715716271d_smarties-icon-mic.svg'
                                  }
                                  divText={'Audio Recording'}
                                  description={
                                    'Record the conversation with the assistant.'
                                  }
                                  id={'Advanced-Audio-Recording'}
                                  name={'Advanced-Audio-Recording'}
                                  dataName={'Advanced Audio Recording'}
                                  optionText={'Select Format'}
                                />
                                <CardformrowItem21
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa188f64b87157162717_smarties-icon-video.svg'
                                  }
                                  divText={'Video Recording'}
                                  description={
                                    'Enable or disable video recording during a web call. This will record the video of your user.'
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10c1e'}
                            divText={'Start Speaking Plan'}
                            description={
                              'This is the plan for when the assistant should start talking.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <CardformrowItem32
                                  divText={'Wait seconds'}
                                  description={
                                    'This is how long assistant waits before speaking.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
                                  }
                                />
                                <CardformrowItem30
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa1891c8ba4fdcc6eb33_smarties-icon-smart.svg'
                                  }
                                  divText={'Smart Endpointing'}
                                  description={
                                    'Enable for more accurate speech endpoint detection. LiveKit is only available in English.'
                                  }
                                  id={'Advanced-Audio-Recording-2'}
                                  name={'Advanced-Audio-Recording-2'}
                                  dataName={'Advanced Audio Recording 2'}
                                  optionText={'Select Format'}
                                />
                                <CardformrowItem32
                                  divText={'On Punctuation Seconds'}
                                  description={
                                    'Minimum seconds to wait after transcription ending with punctuation.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
                                  }
                                />
                                <CardformrowItem32
                                  divText={'On No Punctuation Seconds'}
                                  description={
                                    'Minimum seconds to wait after transcription ending without punctuation.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
                                  }
                                />
                                <CardformrowItem32
                                  divText={'On Number Seconds'}
                                  description={
                                    'Minimum seconds to wait after transcription ending with a number.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10c96'}
                            divText={'Voicemail Detection'}
                            description={
                              'Configure how the assistant detects and handles voicemail.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <CardformrowItem30
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfaf13b9a15e7280b3bf2_smarties-icon-hourglass.svg'
                                  }
                                  divText={'Voicemail Detection Provider'}
                                  description={
                                    'Vapi uses advanced AI for detection. Google/OpenAI use simpler models. Twilio uses traditional AMD.'
                                  }
                                  id={'Advanced-Voicemail-Detection'}
                                  name={'Advanced-Voicemail-Detection'}
                                  dataName={'Advanced Voicemail Detection'}
                                  optionText={'Off'}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10cae'}
                            divText={'Start Speaking Plan'}
                            description={
                              'This is the plan for when the assistant should start talking.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <CardformrowItem32
                                  divText={'Number of words'}
                                  description={
                                    'This is the number of words that the customer has to say before the assistant will stop talking.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa2658c410b30f86ec35_smarties-icon-number.svg'
                                  }
                                />
                                <CardformrowItem32
                                  divText={'Voice seconds'}
                                  description={
                                    'This is the seconds customer has to speak before the assistant stops talking.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
                                  }
                                />
                                <div className={'card-form-row'}>
                                  <div className={'card-form-row-left'}>
                                    <div className={'smarties-icon-card-row'}>
                                      <img
                                        width={'34'}
                                        height={'34'}
                                        alt={''}
                                        src={
                                          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
                                        }
                                        loading={'lazy'}
                                      />
                                    </div>
                                    <div className={'card-form-row-text'}>
                                      <div className={'card-form-row-text'}>
                                        Back off seconds
                                      </div>
                                      <div
                                        className={'card-form-row-description'}
                                      >
                                        This is the seconds to wait before the
                                        assistant will start talking again after
                                        being interrupted.
                                      </div>
                                    </div>
                                  </div>
                                  <RowsliderItem28 />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10d02'}
                            divText={'Call Timeout Settings'}
                            description={
                              'Configure when the assistant should end a call based on silence or duration.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <CardformrowItem32
                                  divText={'Silence Timeout'}
                                  description={
                                    'How long to wait before a call is automatically ended due to inactivity.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg'
                                  }
                                />
                                <CardformrowItem32
                                  divText={'Maximum Duration'}
                                  description={
                                    'The maximum number of seconds a call will last.'
                                  }
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df7e1435a52177a969893_smarties-icon-speed.svg'
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10d3e'}
                            divText={'Keypad Input Settings'}
                            description={
                              'Configure whether a user can input digits via the keypad, and when to process the input.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <CardformrowItem21
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df8b69fd0be54a895dd18_smarties-icon-keypad.svg'
                                  }
                                  divText={'Enable Keypad Input'}
                                  description={
                                    'Accept user input via the keypad'
                                  }
                                />
                                <CardformrowItem33
                                  src={
                                    'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg'
                                  }
                                  divText={'Timeout'}
                                  description={
                                    "The number of seconds to wait before processing the user's keypad input. Set to 0 to only wait for a delimiter."
                                  }
                                />
                                <div className={'card-form-row'}>
                                  <CardformrowleftItem15
                                    src={
                                      'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa2658c410b30f86ec35_smarties-icon-number.svg'
                                    }
                                    divText={'Delimiter'}
                                    description={
                                      "A character that will be used to determine when to process the user's keypad input. If both delimiter and timeout are set, the first to be reached will cause the input to be processed."
                                    }
                                  />
                                  <div className={'div-block-13'}>
                                    <ReusableItem11 label={'#'} />
                                    <ReusableItem11 label={'*'} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={'card-assistant'}>
                          <CardassistanthdItem
                            dataWId={'379fe386-af88-ed7e-3780-62a6bbc10d83'}
                            divText={'Messaging'}
                            description={
                              'Message configuration for messages that are sent to and from the assistant.'
                            }
                          />
                          <div className={'card-assistant-content'}>
                            <div className={'card-content'}>
                              <div className={'col-assistant-model'}>
                                <div className={'card-structured-data'}>
                                  <div>Server Settings</div>
                                  <div className={'card-form-row-content'}>
                                    <div>
                                      <div>
                                        <Formrow2Item26
                                          id={'Analysis-Structured-Data-Type-2'}
                                          name={
                                            'Analysis-Structured-Data-Type-2'
                                          }
                                          dataName={
                                            'Analysis Structured Data Type 2'
                                          }
                                          optionText={'String'}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Formrow2Item13 />
                                </div>
                                <Formrow2Item18 />
                                <CardformsubrowItem29 />
                                <div>
                                  <div
                                    className={
                                      'card-form-row flex structure-data'
                                    }
                                  >
                                    <div className={'form-row-2 flex'}>
                                      <div className={'text-form-sub'}>
                                        Server Settings
                                      </div>
                                    </div>
                                    <Formrow2Item26
                                      id={'Advanced-Server-Settings'}
                                      name={'Advanced-Server-Settings'}
                                      dataName={'Advanced Server Settings'}
                                      optionText={'Select one...'}
                                    />
                                    <div className={'form-row-2 flex'}>
                                      <FormcolItem9
                                        label={'Secret Token'}
                                        name={'Messaging-Server-Token'}
                                        dataName={'Messaging Server Token'}
                                        id={'Messaging-Server-Token'}
                                      />
                                      <FormcolItem9
                                        label={'Timeout (seconds)'}
                                        name={'Messaging-Timeout-seconds'}
                                        dataName={'Messaging Timeout Seconds'}
                                        id={'Messaging-Timeout-seconds'}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={'form-row-2'}>
                                  <div
                                    className={
                                      'card-form-row flex structure-data'
                                    }
                                  >
                                    <div className={'form-row-2 flex'}>
                                      <ReusableItem
                                        label={'HTTP Headers'}
                                        description={
                                          'Custom HTTP headers to include in API requests to your server'
                                        }
                                      />
                                      <div className={'add-form-sub small'}>
                                        <img
                                          width={'18'}
                                          height={'18'}
                                          alt={''}
                                          src={
                                            'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cddae22e0050186cea03e_smarties-icon-add-circle.svg'
                                          }
                                          loading={'lazy'}
                                        />
                                        <div className={'text-18'}>
                                          Create New Tool
                                        </div>
                                      </div>
                                    </div>
                                    <Formrow2Item />
                                  </div>
                                </div>
                                <Formrow2Item37
                                  label={'Client Messages'}
                                  description={
                                    'These are the messages that will be sent to the Client SDKs.'
                                  }
                                  dataWId={
                                    '379fe386-af88-ed7e-3780-62a6bbc10df3'
                                  }
                                />
                                <Formrow2Item37
                                  label={'Server Messages'}
                                  description={
                                    'These are the messages that will be sent to the Server URL configured.'
                                  }
                                  dataWId={
                                    '379fe386-af88-ed7e-3780-62a6bbc10e17'
                                  }
                                />
                                <Formrow2Item22
                                  label={'Voicemail Message'}
                                  description={
                                    'This is the message that the assistant will say if the call is forwarded to voicemail.'
                                  }
                                  id={'Voicemail-Message'}
                                  name={'Voicemail-Message'}
                                  dataName={'Voicemail Message'}
                                  placeholder={
                                    "Hi, you've reached Leo at SmartHome Innovations. Sorry I missed your call. Please leave a message, and I'll get back to you as soon as possible."
                                  }
                                />
                                <Formrow2Item22
                                  label={'End Call Message'}
                                  description={
                                    'This is the message that the assistant will say if the call is ended.'
                                  }
                                  id={'End-Call-Message'}
                                  name={'End-Call-Message'}
                                  dataName={'End Call Message'}
                                  placeholder={
                                    'Thanks for reaching out to SmartHome Innovations. It was great assisting you. Have a wonderful day!'
                                  }
                                />
                                <div className={'form-row-2'}>
                                  <div
                                    className={
                                      'card-form-row flex structure-data'
                                    }
                                  >
                                    <div className={'form-row-2'}>
                                      <ReusableItem
                                        label={'Idle Messages'}
                                        description={
                                          "Messages that the assistant will speak when the user hasn't responded."
                                        }
                                      />
                                      <div className={'form-control-2'}>
                                        <SelectfieldItem
                                          id={'Advanced-Server-Idle-Messages'}
                                          name={'Advanced-Server-Idle-Messages'}
                                          dataName={
                                            'Advanced Server Idle Messages'
                                          }
                                          value={'deepgram'}
                                          optionText={'deepgram'}
                                          optionText1={'Select idle messages'}
                                        />
                                      </div>
                                    </div>
                                    <CardformrowItem33
                                      src={
                                        'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e64fc824d6014684_smarties-icon-message.svg'
                                      }
                                      divText={'Max Idle Messages'}
                                      description={
                                        'Maximum number of times idle messages can be spoken during the call.'
                                      }
                                    />
                                    <CardformrowItem33
                                      src={
                                        'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa2658c410b30f86ec35_smarties-icon-number.svg'
                                      }
                                      divText={'Idle Timeout'}
                                      description={
                                        'Timeout in seconds before an idle message is spoken.'
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
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

export default MaincontentLayout39;
