import React from 'react';
import TopbarLayout_eae2bb4b from '../components/TopbarLayout_eae2bb4b';
import MaincontentLayout_afeed9cd from '../components/MaincontentLayout_afeed9cd';
import SidebarLayout from '../components/SidebarLayout';
import CardsettingshddivItem from '../components/CardsettingshddivItem';
import FormrowItem_ce4d5db1 from '../components/FormrowItem_ce4d5db1';
import FormrowItem_55033cc5 from '../components/FormrowItem_55033cc5';
import FormcontrolItem_a3540037 from '../components/FormcontrolItem_a3540037';
import FormbtncontainerItem from '../components/FormbtncontainerItem';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';
import ListitemItem from '../components/ListitemItem';

const Buildloyalty = () => {
  return (
    <>
      <div className={'page-wrap'}>
        <TopbarLayout_eae2bb4b />
        <MaincontentLayout_afeed9cd />
        <SidebarLayout />
        <div className={'popup-upload-document'}>
          <div className={'popup-card'}>
            <CardsettingshddivItem divText={'Upload Documents'} />
            <div className={'w-form'}>
              <form
                id={'wf-form-upload-doc-form'}
                name={'wf-form-upload-doc-form'}
                data-name={'upload doc form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725d9'}
                data-wf-element-id={'a0603396-7cfe-87df-6b65-c8cff2c4b9e2'}
              >
                <div className={'form-body'}>
                  <FormrowItem_ce4d5db1 id={'assistant-name'} />
                  <FormrowItem_55033cc5 id={'assistant-description'} />
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
                          src={'../images/smarties-file.svg'}
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
                              src={'../images/smarties-filetrash.svg'}
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
                        src={'../images/smarties-alert-circle.svg'}
                        alt={''}
                      />
                    </div>
                    <div className={'notice-text'}>
                      Training time depends on the amount of content. Larger
                      documents may take longer to process.
                    </div>
                  </div>
                  <FormbtncontainerItem />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'a0603396-7cfe-87df-6b65-c8cff2c4ba24'}
              className={'popup-close'}
            >
              <img src={'../images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
          </div>
        </div>
        <div className={'popup-recordvoice'}>
          <div className={'popup-card'}>
            <CardsettingshddivItem divText={'Record Voice'} />
            <div className={'w-form'}>
              <form
                id={'wf-form-record-voice-form'}
                name={'wf-form-record-voice-form'}
                data-name={'record voice form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725d9'}
                data-wf-element-id={'a0603396-7cfe-87df-6b65-c8cff2c4ba2c'}
              >
                <div className={'form-body'}>
                  <FormrowItem_ce4d5db1 id={'assistant-name-2'} />
                  <FormrowItem_55033cc5 id={'assistant-description-2'} />
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
                        src={'../images/smarties-alert-circle-blue.svg'}
                        alt={''}
                      />
                    </div>
                    <div className={'notice-text'}>
                      You can also upload pre-recorded audio files instead of
                      recording new ones.
                    </div>
                  </div>
                  <FormbtncontainerItem />
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'a0603396-7cfe-87df-6b65-c8cff2c4ba64'}
              className={'popup-close'}
            >
              <img src={'../images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildloyalty;
