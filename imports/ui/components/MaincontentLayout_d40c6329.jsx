import React from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import InboxitemItem_6d265a8b from './InboxitemItem_6d265a8b';
import MenuitemItem_6b295b9a from './MenuitemItem_6b295b9a';
import FormrowItem_6c8184ec from './FormrowItem_6c8184ec';
import FormrowItem_e7b693eb from './FormrowItem_e7b693eb';
import FormrowItem_447d1c8c from './FormrowItem_447d1c8c';
import PopupformhddivItem_83351cd3 from './PopupformhddivItem_83351cd3';
import Noticedivstyle2Item from './Noticedivstyle2Item';
import PropertylistItem from './PropertylistItem';
import PropertydivItem from './PropertydivItem';
import FormrowItem_28bc7af8 from './FormrowItem_28bc7af8';
import HeaderlistItem from './HeaderlistItem';
import MessagedivItem from './MessagedivItem';

const MaincontentLayout_d40c6329 = ({}) => {
  return (
    <div
      id={'w-node-c154995a-eaa2-9240-5cd5-fba7b19ee9d0-f14725b1'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>{'Tools'}</div>
          </div>
        </div>
        <div className={'mainwidth-control horizontal'}>
          <div className={'sidebar-temp'}>
            <a
              data-w-id={'c154995a-eaa2-9240-5cd5-fba7b19ee9d8'}
              href={'#'}
              className={'btn-style1 w-inline-block'}
            >
              <div className={'btn-icon'}>
                <img src={'../images/Search_1.svg'} loading={'lazy'} alt={''} />
              </div>
              <div>{'Create Tool'}</div>
            </a>
            <div className={'search-formblock w-form'}>
              <form
                id={'wf-form-search-form'}
                name={'wf-form-search-form'}
                data-name={'search form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725b1'}
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
                  <div className={'text-block'}>{'First Part of Number'}</div>
                </div>
                <nav className={'filterdropdown-list w-dropdown-list'}>
                  <a
                    href={'#'}
                    className={'filter-dropdownlink w-dropdown-link'}
                  >
                    {'First Part of Number'}
                  </a>
                  <a
                    href={'#'}
                    className={'filter-dropdownlink w-dropdown-link'}
                  >
                    {'Last Part of Number'}
                  </a>
                  <a
                    href={'#'}
                    className={'filter-dropdownlink w-dropdown-link'}
                  >
                    {'First Part of Number'}
                  </a>
                </nav>
              </div>
            </div>
            <div className={'inbox-list'}>
              <InboxitemItem_6d265a8b divText={'send_text_tool'} />
              <InboxitemItem_6d265a8b divText={'function_tool'} />
            </div>
          </div>
          <div className={'mainbody-col'}>
            <div className={'w-form'}>
              <form
                id={'wf-form-tool-form'}
                name={'wf-form-tool-form'}
                data-name={'tool form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725b1'}
                data-wf-element-id={'c154995a-eaa2-9240-5cd5-fba7b19eea0e'}
              >
                <div className={'form-body'}>
                  <div className={'phonenumber-group'}>
                    <div className={'phonenumber-top'}>
                      <div className={'phonenumber-topleft'}>
                        <div className={'settings-title'}>
                          {'send_text_tool'}
                        </div>
                        <div className={'settings-sublabel'}>
                          {'1d1c1f8f-1077-4de0-942c-68c769e263db'}
                        </div>
                      </div>
                      <div className={'phonenumber-topright'}>
                        <div className={'assistant-buttons-div'}>
                          <div className={'button-save'}>
                            <div>{'Save'}</div>
                            <div className={'fluentchat-28-regular'}>
                              <img
                                loading={'lazy'}
                                src={'../images/smarties-save.svg'}
                                alt={''}
                              />
                            </div>
                          </div>
                          <div className={'button-chat'}>
                            <div className={'button-label'}>{'Code'}</div>
                            <img
                              loading={'lazy'}
                              src={'../images/smarties-code.svg'}
                              alt={''}
                            />
                          </div>
                          <div className={'button-test'}>
                            <div className={'button-label'}>{'Test'}</div>
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
                          <div className={'assistant-menu'}>
                            <div
                              data-w-id={'a7e802d3-c731-78c6-f0b4-c63f3316bcae'}
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
                                src={
                                  '../images/smarties-icon-delete_outline.svg'
                                }
                                divText={'Delete'}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'phonenumber-group'}>
                    <FormrowItem_6c8184ec
                      label={'Tool Name'}
                      name={'tool-name-2'}
                      dataName={'Tool Name 2'}
                      type={'text'}
                      id={'tool-name-2'}
                    />
                    <FormrowItem_e7b693eb
                      label={'Tool Description'}
                      id={'tool-description-2'}
                      name={'tool-description-2'}
                      dataName={'Tool Description 2'}
                    />
                    <FormrowItem_447d1c8c
                      name={'check-async-2'}
                      id={'check-async-2'}
                      dataName={'Check Async 2'}
                      htmlFor={'check-async-2'}
                      name1={'check-strict-2'}
                      id1={'check-strict-2'}
                      dataName1={'Check Strict 2'}
                      htmlFor1={'check-strict-2'}
                    />
                  </div>
                  <div className={'phonenumber-group'}>
                    <div className={'form-row'}>
                      <div className={'form-control'}>
                        <PopupformhddivItem_83351cd3
                          divText={'Parameters'}
                          dataWId={'1849b75f-9350-98c1-3481-367f0109f99d'}
                          label={'Add Property'}
                        />
                        <Noticedivstyle2Item
                          divText={
                            'No properties configured. Click "Add Property" to add your first propery.'
                          }
                        />
                        <PropertylistItem
                          dataWId={'1849b75f-9350-98c1-3481-367f0109f9ac'}
                        />
                        <PropertydivItem
                          htmlFor={'parameter-name-2'}
                          name={'parameter-name-2'}
                          dataName={'Parameter Name 2'}
                          id={'parameter-name-2'}
                          htmlFor1={'parameter-type-2'}
                          id1={'parameter-type-2'}
                          name1={'parameter-type-2'}
                          dataName1={'Parameter Type 2'}
                          id2={'parameter-description-2'}
                          name2={'parameter-description-2'}
                          dataName2={'Parameter Description 2'}
                          name3={'check-parameter-required-2'}
                          id3={'check-parameter-required-2'}
                          dataName3={'Check Parameter Required 2'}
                          htmlFor2={'check-parameter-required-2'}
                          dataWId={'1849b75f-9350-98c1-3481-367f0109f9c5'}
                          dataWId1={'1849b75f-9350-98c1-3481-367f0109f9c8'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={'phonenumber-group'}>
                    <FormrowItem_6c8184ec
                      label={'Server URL'}
                      name={'server-url-2'}
                      dataName={'Server Url 2'}
                      type={'url'}
                      id={'server-url-2'}
                    />
                    <FormrowItem_28bc7af8
                      htmlFor={'secret-token-2'}
                      name={'secret-token-2'}
                      dataName={'Secret Token 2'}
                      id={'secret-token-2'}
                      htmlFor1={'timeout-2'}
                      name1={'timeout-2'}
                      dataName1={'Timeout 2'}
                      id1={'timeout-2'}
                    />
                  </div>
                  <div className={'phonenumber-group'}>
                    <div className={'form-row'}>
                      <div className={'form-control'}>
                        <PopupformhddivItem_83351cd3
                          divText={'HTTP Headers'}
                          dataWId={'1849b75f-9350-98c1-3481-367f0109f9e2'}
                          label={'Add Header'}
                        />
                        <Noticedivstyle2Item
                          divText={
                            'No headers configured. Click "Add Header" to add your first header.'
                          }
                        />
                        <HeaderlistItem
                          name={'header-name-2'}
                          dataName={'Header Name 2'}
                          id={'header-name-2'}
                          name1={'header-value-2'}
                          dataName1={'Header Value 2'}
                          id1={'header-value-2'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={'phonenumber-group'}>
                    <div className={'form-row'}>
                      <div className={'form-control'}>
                        <PopupformhddivItem_83351cd3
                          divText={'Messages'}
                          dataWId={'1849b75f-9350-98c1-3481-367f0109f9fa'}
                          label={'Add Message'}
                        />
                        <Noticedivstyle2Item
                          divText={
                            'No messages configured. Click "Add Message" to add your first message.'
                          }
                        />
                        <MessagedivItem
                          htmlFor={'message-type-2'}
                          id={'message-type-2'}
                          name={'message-type-2'}
                          dataName={'Message Type 2'}
                          dataWId={'1849b75f-9350-98c1-3481-367f0109fa08'}
                        />
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
      </div>
    </div>
  );
};

export default MaincontentLayout_d40c6329;
