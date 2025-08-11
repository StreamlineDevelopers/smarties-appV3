import React, { useRef } from 'react';
import TopbarLayout_031042b8 from '../components/TopbarLayout_031042b8';
import MaincontentLayout_91d34823 from '../components/MaincontentLayout_91d34823';
import SidebarLayout from '../components/SidebarLayout';
import CardsettingshddivItem from '../components/CardsettingshddivItem';
import FormrowItem_ce4d5db1 from '../components/FormrowItem_ce4d5db1';
import FormrowItem_55033cc5 from '../components/FormrowItem_55033cc5';
import FormcontrolItem_a3540037 from '../components/FormcontrolItem_a3540037';
import FormbtncontainerItem from '../components/FormbtncontainerItem';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';
import ListitemItem from '../components/ListitemItem';
import IndexWatcher, { ASSISTANT_FORM, POPUP } from '../../api/client/watchers/IndexWatcher';
import { useWatcher } from '../../api/client/Watcher2';


const Index = () => {
  const watcher = useRef(IndexWatcher).current;
  useWatcher(watcher);

  const isUploadDocumentPopupOpen = watcher.getValue(POPUP.UPLOAD_DOCUMENT);
  const isRecordVoicePopupOpen = watcher.getValue(POPUP.RECORD_VOICE);

  return (
    <>
      <div className={'page-wrap'}>
        <TopbarLayout_031042b8 />
        <MaincontentLayout_91d34823 />
        <SidebarLayout />
        <div className={'popup-upload-document'} style={{ display: isUploadDocumentPopupOpen ? 'flex' : 'none' }}>
          <div className={'popup-card'}>
            <CardsettingshddivItem divText={'Upload Documents'} />
            <div className={'w-form'}>
              <form
                id={'wf-form-upload-doc-form'}
                name={'wf-form-upload-doc-form'}
                data-name={'upload doc form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f147256a'}
                data-wf-element-id={'1de059f2-77c2-8d93-3a9c-b53409cc6a0f'}
              >
                <div className={'form-body'}>
                  <FormrowItem_ce4d5db1 id={'assistant-name'} value={watcher.getValue(ASSISTANT_FORM.NAME)} onChange={(e) => watcher.setValue(ASSISTANT_FORM.NAME, e.target.value)} />
                  <FormrowItem_55033cc5 id={'assistant-description'} value={watcher.getValue(ASSISTANT_FORM.DESCRIPTION)} onChange={(e) => watcher.setValue(ASSISTANT_FORM.DESCRIPTION, e.target.value)} />
                  <div className={'form-row'}>
                    <FormcontrolItem_a3540037 label={'Upload Documents'} />
                    <div className={'file-upload-base'}>
                      <div className={'file-upload-content'}>
                        <div className={'fileupload-icon'}>
                          <img
                            width={'20'}
                            height={'20'}
                            alt={''}
                            src={
                              'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681cad4bdaec95b6d81530f7_upload-cloud.svg'
                            }
                            loading={'lazy'}
                            className={'upload-cloud'}
                          />
                        </div>
                        <div className={'file-upload-texts'}>
                          <div className={'fileupload-label'}>
                            <a href={'#'} className={'spanlink-upload'}>
                              Click to upload
                            </a>{' '}
                            or drag and drop
                          </div>
                          <div className={'fileupload-sublabel'}>
                            SVG, PNG, JPG or GIF (max. 800x400px)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'form-row'}>
                    <FormcontrolItem_a3540037 label={'Uploaded Files (1)'} />
                    <div className={'uploadedfile-item'}>
                      <div className={'uploadeditem-icon'}>
                        <img
                          loading={'lazy'}
                          src={'images/smarties-file.svg'}
                          alt={''}
                        />
                      </div>
                      <div className={'uploadeditem-content'}>
                        <div className={'uploadeditem-left'}>
                          <div className={'uploadeditem-title'}>
                            Dashboard prototype recording.mp4
                          </div>
                          <div className={'uploadeditem-filesize'}>16 MB</div>
                          <div className={'progressbar-div'}>
                            <div className={'progress-bar-container'}>
                              <div className={'progress-bar _w-40'}></div>
                            </div>
                            <div className={'progress-percent-text'}>40%</div>
                          </div>
                        </div>
                        <div className={'uploadeditem-right'}>
                          <div className={'item-trash'}>
                            <img
                              loading={'lazy'}
                              src={'images/smarties-filetrash.svg'}
                              alt={''}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'notice-div'}>
                    <div className={'notice-icon'}>
                      <img
                        loading={'lazy'}
                        src={'images/smarties-alert-circle.svg'}
                        alt={''}
                      />
                    </div>
                    <div className={'notice-text'}>
                      Training time depends on the amount of content. Larger
                      documents may take longer to process.
                    </div>
                  </div>
                  <FormbtncontainerItem handleSubmit={() => watcher.SubmitUploadDocumentForm()} handleCancel={() => watcher.setUploadDocumentPopup(false)} />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'2dbd5768-3788-eb14-8b45-fb7744b0a391'}
              className={'popup-close'}
              onClick={() => watcher.setUploadDocumentPopup(false)}
            >
              <img src={'images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
          </div>
        </div>
        <div className={'popup-recordvoice'} style={{ display: isRecordVoicePopupOpen ? 'flex' : 'none' }}>
          <div className={'popup-card'}>
            <CardsettingshddivItem divText={'Record Voice'} />
            <div className={'w-form'}>
              <form
                id={'wf-form-record-voice-form'}
                name={'wf-form-record-voice-form'}
                data-name={'record voice form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f147256a'}
                data-wf-element-id={'85855c31-c03d-5480-b4ae-bfcf12bbf628'}
              >
                <div className={'form-body'}>
                  <FormrowItem_ce4d5db1 id={'assistant-name-2'} value={watcher.getValue(ASSISTANT_FORM.NAME)} onChange={(e) => watcher.setValue(ASSISTANT_FORM.NAME, e.target.value)} />
                  <FormrowItem_55033cc5 id={'assistant-description-2'} value={watcher.getValue(ASSISTANT_FORM.DESCRIPTION)} onChange={(e) => watcher.setValue(ASSISTANT_FORM.DESCRIPTION, e.target.value)} />
                  <div className={'form-row'}>
                    <div className={'recordvoice-maindiv'}>
                      <div className={'mic-button'}>
                        <img
                          width={'47'}
                          height={'47'}
                          alt={''}
                          src={
                            'https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681cb402437d7f765e0fa033_Mic.svg'
                          }
                          loading={'lazy'}
                          className={'mic'}
                        />
                      </div>
                      <div className={'recordvoice-textcontent'}>
                        <div className={'recordvoice-label'}>
                          Start Recording
                        </div>
                        <div className={'recordvoice-sublabel'}>
                          Click the button to begin
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'form-row'}>
                    <FormcontrolItem_a3540037 label={'Recording Tips'} />
                    <ul role={'list'} className={'recordingtip-list'}>
                      <ListitemItem
                        divText={'Speak clearly and at a normal pace'}
                      />
                      <ListitemItem
                        divText={
                          'Include the kinds of questions users might ask'
                        }
                      />
                      <ListitemItem
                        divText={
                          'Record in a quiet environment with minimal background noise'
                        }
                      />
                      <ListitemItem
                        divText={
                          'You can record multiple sessions to provide more training data'
                        }
                      />
                    </ul>
                  </div>
                  <div className={'notice-div bg-blue'}>
                    <div className={'notice-icon'}>
                      <img
                        loading={'lazy'}
                        src={'images/smarties-alert-circle-blue.svg'}
                        alt={''}
                      />
                    </div>
                    <div className={'notice-text'}>
                      You can also upload pre-recorded audio files instead of
                      recording new ones.
                    </div>
                  </div>
                  <FormbtncontainerItem handleSubmit={() => watcher.SubmitRecordVoiceForm()} handleCancel={() => watcher.setRecordVoicePopup(false)} />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'85855c31-c03d-5480-b4ae-bfcf12bbf66a'}
              className={'popup-close'}
              onClick={() => watcher.setRecordVoicePopup(false)}
            >
              <img src={'images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
