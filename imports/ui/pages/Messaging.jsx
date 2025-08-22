import React, { useRef } from 'react';
import MaincontentLayout_a2a4d449 from '../components/MaincontentLayout_a2a4d449';
import SidebarLayout from '../components/SidebarLayout';
import TopbarLayout_e018487f from '../components/TopbarLayout_e018487f';
import CardsettingshddivItem_3964fe2e from '../components/CardsettingshddivItem_3964fe2e';
import TablecelldivItem from '../components/TablecelldivItem';
import TablecelldivItem_1074fda0 from '../components/TablecelldivItem_1074fda0';
import TablecelldivItem_e2b278af from '../components/TablecelldivItem_e2b278af';
import TablecelldivItem_5adc2253 from '../components/TablecelldivItem_5adc2253';
import TablecelldivItem_32fbc566 from '../components/TablecelldivItem_32fbc566';
import TablecelldivItem_131c18fd from '../components/TablecelldivItem_131c18fd';
import TablecelldivItem_36735cb6 from '../components/TablecelldivItem_36735cb6';
import TablecelldivItem_5d77e023 from '../components/TablecelldivItem_5d77e023';
import PredefinedmessageitemItem from '../components/PredefinedmessageitemItem';
import PredefinedmessageitemcontentItem from '../components/PredefinedmessageitemcontentItem';
import PredefinedmessageitemeditItem from '../components/PredefinedmessageitemeditItem';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';
import MessagingWatcher, { INTERACTION } from '../../api/client/watchers/MessagingWatcher';
import { useWatcher } from '../../api/client/Watcher2';

const Messaging = () => {
  const watcher = useRef(MessagingWatcher).current;
  useWatcher(watcher);

  const isPredefinedAnswerPopup = watcher.getValue("POPUP.PREDEFINED_ANSWER") ?? false;
  const predefinedAnswers = watcher.getValue(INTERACTION.PREDEFINED_ANSWERS);
  return (
    <>
      <div className={'page-wrap'}>
        <MaincontentLayout_a2a4d449 />
        <SidebarLayout />
        <TopbarLayout_e018487f />
        <div className={'popup-dataenrichment'}>
          <div className={'popup-card _w-70'}>
            <CardsettingshddivItem_3964fe2e divText={'Data Enrichment'} />
            <div
              data-w-id={'01e36d25-1069-b8b4-9bb5-3938bbc89703'}
              className={'popup-close'}
            >
              <img src={'images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
            <div className={'popup-dataenrichment-body'}>
              <div className={'dataenrichment-loadingscreen'}>
                <div className={'dataenrichment-loading'}>
                  <div
                    data-w-id={'3e26e4cb-468c-746f-733f-ea5397fee34d'}
                    data-animation-type={'lottie'}
                    data-src={'documents/smarties-loading.json'}
                    data-loop={'1'}
                    data-direction={'1'}
                    data-autoplay={'1'}
                    data-is-ix2-target={'0'}
                    data-renderer={'svg'}
                    data-default-duration={'0'}
                    data-duration={'0'}
                  ></div>
                </div>
                <div>{'Searching for additional contact information...'}</div>
              </div>
              <div className={'dataenrichment-content'}>
                <div>
                  {
                    'We found the following additional information about Sarah Johnson:'
                  }
                </div>
                <div className={'data-enrichment-table-div'}>
                  <div className={'table-header'}>
                    <TablecelldivItem divText={'Field'} />
                    <div className={'table-cell-div stretch'}>
                      <div className={'table-date-text'}>{'Value Found'}</div>
                    </div>
                    <TablecelldivItem_1074fda0 divText={'Source'} />
                    <TablecelldivItem divText={'Confidence'} />
                    <TablecelldivItem_1074fda0 divText={'Status'} />
                    <TablecelldivItem_1074fda0 divText={'Action'} />
                  </div>
                  <div className={'table-content'}>
                    <div className={'dataenrichment---table-row'}>
                      <TablecelldivItem_e2b278af divText={'LinkedIn'} />
                      <TablecelldivItem_5adc2253
                        label={'linkedin.com/in/sarahjohnson'}
                      />
                      <TablecelldivItem_32fbc566 label={'Linkedin'} />
                      <div className={'table-cell-div'}>
                        <div className={'confidence-row'}>
                          <div className={'confidence-percentage'}>
                            <div className={'confidence-percent'}></div>
                          </div>
                          <div className={'confidence-percent-text'}>
                            {'96%'}
                          </div>
                        </div>
                      </div>
                      <TablecelldivItem_131c18fd
                        src={'images/smarties-contact-icon-lock.svg'}
                        divText={'Locked'}
                      />
                      <TablecelldivItem_36735cb6 />
                    </div>
                    <div className={'dataenrichment---table-row'}>
                      <TablecelldivItem_e2b278af divText={'Job Title'} />
                      <TablecelldivItem_5adc2253
                        label={'Director of Operations'}
                      />
                      <TablecelldivItem_32fbc566 label={'Company'} />
                      <div className={'table-cell-div'}>
                        <div className={'confidence-row'}>
                          <div className={'confidence-percentage'}>
                            <div className={'confidence-percent _w-88'}></div>
                          </div>
                          <div className={'confidence-percent-text'}>
                            {'88%'}
                          </div>
                        </div>
                      </div>
                      <TablecelldivItem_131c18fd
                        src={'images/smarties-icon-check-green.svg'}
                        divText={'Enriched'}
                      />
                      <div className={'table-cell-div _w-10'}>
                        <a
                          href={'#'}
                          className={
                            'data-enrichment-btn--style1 bg-grey w-inline-block'
                          }
                        >
                          <div>{'View'}</div>
                        </a>
                      </div>
                    </div>
                    <div className={'dataenrichment---table-row'}>
                      <TablecelldivItem_e2b278af divText={'Region'} />
                      <TablecelldivItem_5adc2253 label={'North America'} />
                      <TablecelldivItem_32fbc566 label={'CRM Sync'} />
                      <TablecelldivItem_5d77e023 />
                      <div className={'table-cell-div _w-10'}>
                        <div className={'dataenrichmentstatus'}>
                          <div className={'file-info-data'}>{'Free'}</div>
                        </div>
                      </div>
                      <div className={'table-cell-div _w-10'}>
                        <a
                          href={'#'}
                          className={
                            'data-enrichment-btn--style1 bg-green w-inline-block'
                          }
                        >
                          <div>{'Import'}</div>
                        </a>
                      </div>
                    </div>
                    <div className={'dataenrichment---table-row'}>
                      <TablecelldivItem_e2b278af divText={'Company Size'} />
                      <TablecelldivItem_5adc2253 label={'50-100 employees'} />
                      <TablecelldivItem_32fbc566 label={'LinkedIn'} />
                      <div className={'table-cell-div'}>
                        <div className={'confidence-row'}>
                          <div className={'confidence-percentage'}>
                            <div className={'confidence-percent _w-82'}></div>
                          </div>
                          <div className={'confidence-percent-text'}>
                            {'82%'}
                          </div>
                        </div>
                      </div>
                      <TablecelldivItem_131c18fd
                        src={'images/smarties-contact-icon-lock.svg'}
                        divText={'Locked'}
                      />
                      <TablecelldivItem_36735cb6 />
                    </div>
                    <div className={'dataenrichment---table-row'}>
                      <TablecelldivItem_e2b278af divText={'Region'} />
                      <TablecelldivItem_5adc2253 label={'North America'} />
                      <TablecelldivItem_32fbc566 label={'CRM Sync'} />
                      <TablecelldivItem_5d77e023 />
                      <TablecelldivItem_131c18fd
                        src={'images/smarties-contact-icon-lock.svg'}
                        divText={'Locked'}
                      />
                      <TablecelldivItem_36735cb6 />
                    </div>
                  </div>
                </div>
                <div className={'datanerichment-unlock-card'}>
                  <div className={'datanerichment-unlock-card-left'}>
                    <div className={'datanerichment-unlock-card-title'}>
                      {'Unlock Premium Data'}
                    </div>
                    <div className={'datanerichment-unlock-card-subtext'}>
                      {'Get access to 3 locked items'}
                    </div>
                  </div>
                  <div className={'datanerichment-unlock-card-right'}>
                    <a
                      href={'#'}
                      className={
                        'data-enrichment-btn--style1 unlockpremium-white w-inline-block'
                      }
                    >
                      <div>{'30 Credits'}</div>
                    </a>
                    <a
                      href={'#'}
                      className={
                        'data-enrichment-btn--style1 unlockpremium w-inline-block'
                      }
                    >
                      <div>{'$9 USD'}</div>
                    </a>
                  </div>
                </div>
                <div className={'form-btn-container'}>
                  <a href={'#'} className={'btn-style1 outline'}>
                    <div>{'Cancel'}</div>
                  </a>
                  <a href={'#'} className={'btn-style1 bg-green'}>
                    <div>{'Update Contact'}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'popup-predefinedmessagesmanage'} style={{ display: isPredefinedAnswerPopup ? 'flex' : 'none' }}>
          <div className={'popup-card _w-50'}>
            <CardsettingshddivItem_3964fe2e divText={'Predefined Messages'} />
            <div
              data-w-id={'15a540b7-31e9-8d30-23a0-1780e9d44c18'}
              className={'popup-close'}
              onClick={() => watcher.setValue("POPUP.PREDEFINED_ANSWER", false)}
            >
              <img src={'images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
            <div className={'popup-predefinedmessage-body'}>
              <div className={'predefinedmessage-formblock w-form'}>
                <form
                  id={'wf-form-predefined-message-form'}
                  name={'wf-form-predefined-message-form'}
                  data-name={'predefined message form'}
                  method={'get'}
                  className={'predefinedmessage-form'}
                  data-wf-page-id={'68a6ed699293ec31a61d4e86'}
                  data-wf-element-id={'beb81a9e-d666-ef0d-cd78-693dc255a4eb'}
                >
                  <div className={'addmessage-row'}>
                    <input
                      className={'textfield large w-input'}
                      maxlength={'256'}
                      name={'addmessage'}
                      data-name={'addmessage'}
                      placeholder={'+ Add New Message'}
                      type={'text'}
                      id={'addmessage'}
                      onChange={(e) => watcher.setValue("PREDEFINED_ANSWER.BODY", e.target.value)}
                    />
                    <a
                      data-w-id={'a5a8b9a5-7b8d-f8eb-3219-5f06b744c7a0'}
                      href={'#'}
                      className={'btn-style1 w-inline-block'}
                      onClick={() => watcher.addPredefinedAnswer({ body: watcher.getValue("PREDEFINED_ANSWER.BODY") })}
                    >
                      <div className={'btn-icon'}>
                        <img
                          loading={'lazy'}
                          src={'/images/SearchPlus.svg'}
                          alt={''}
                        />
                      </div>
                      <div>{'Add'}</div>
                    </a>
                  </div>
                  <div className={'predefinedmessage-list'}>
                    {predefinedAnswers && predefinedAnswers.length > 0 && predefinedAnswers.map((answer) => {
                      return (
                        <PredefinedmessageitemItem
                          key={answer._id}
                          id={answer._id}
                          divText={answer.body}
                          status={answer.status}
                          dataWId={'29ed52c6-4b8b-54d0-8d09-eecab356bbd0'}
                          dataWId1={'a8fd72d0-20c2-081c-fda7-5e6e895e1552'}
                          dataWId2={'e9961061-815e-bc1d-0680-25a48e920598'}
                          dataWId3={'e9961061-815e-bc1d-0680-25a48e92059a'}
                        />
                      )
                    })}
                    {/* <PredefinedmessageitemItem
                      divText={"I'll check that for you"}
                      dataWId={'a2f45c9b-47a5-3640-95a4-d6508887b6de'}
                      dataWId1={'a2f45c9b-47a5-3640-95a4-d6508887b6e6'}
                      dataWId2={'a2f45c9b-47a5-3640-95a4-d6508887b6ed'}
                      dataWId3={'a2f45c9b-47a5-3640-95a4-d6508887b6ef'}
                    />
                    <PredefinedmessageitemItem
                      divText={'Is there anything else?'}
                      dataWId={'a4d0aa35-fb0d-9a99-cfde-d9b554c82c59'}
                      dataWId1={'a4d0aa35-fb0d-9a99-cfde-d9b554c82c61'}
                      dataWId2={'a4d0aa35-fb0d-9a99-cfde-d9b554c82c68'}
                      dataWId3={'a4d0aa35-fb0d-9a99-cfde-d9b554c82c6a'}
                    /> */}
                    <div className={'predefinedmessage-item new'}>
                      <div className={'predefinedmessage-drag'}>
                        <img
                          loading={'lazy'}
                          src={'images/smarties-quickrep-icon-02.svg'}
                          alt={''}
                        />
                      </div>
                      <PredefinedmessageitemcontentItem
                        divText={'Predefined Message 04'}
                        dataWId={'41eed608-5bd3-9e70-918b-17ef5ea69911'}
                        dataWId1={'41eed608-5bd3-9e70-918b-17ef5ea69919'}
                      />
                      <PredefinedmessageitemeditItem
                        dataWId={'41eed608-5bd3-9e70-918b-17ef5ea69920'}
                        dataWId1={'41eed608-5bd3-9e70-918b-17ef5ea69922'}
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
      </div>
    </>
  );
};

export default Messaging;
