import React from 'react';
import MaincontentLayout_01c82af6 from '../components/MaincontentLayout_01c82af6';
import SidebarLayout from '../components/SidebarLayout';
import TopbarLayout_faed4412 from '../components/TopbarLayout_faed4412';
import TablecelldivItem from '../components/TablecelldivItem';
import TablecelldivItem_1074fda0 from '../components/TablecelldivItem_1074fda0';
import TablecelldivItem_e2b278af from '../components/TablecelldivItem_e2b278af';
import TablecelldivItem_5adc2253 from '../components/TablecelldivItem_5adc2253';
import TablecelldivItem_32fbc566 from '../components/TablecelldivItem_32fbc566';
import TablecelldivItem_6d53c853 from '../components/TablecelldivItem_6d53c853';
import TablecelldivItem_36735cb6 from '../components/TablecelldivItem_36735cb6';
import TablecelldivItem_5d77e023 from '../components/TablecelldivItem_5d77e023';

const Customermemorycenter = () => {
  return (
    <>
      <div className={'page-wrap'}>
        <MaincontentLayout_01c82af6 />
        <SidebarLayout />
        <TopbarLayout_faed4412 />
        <div className={'popup-dataenrichment'}>
          <div className={'popup-card _w-70'}>
            <div className={'card-settings-hd-div'}>
              <div className={'card-settings-hd'}>Data Enrichment</div>
            </div>
            <div
              data-w-id={'2d62093f-af62-36e2-bc25-a6f698497f53'}
              className={'popup-close'}
            >
              <img src={'../images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
            <div className={'popup-dataenrichment-body'}>
              <div className={'dataenrichment-loadingscreen'}>
                <div className={'dataenrichment-loading'}>
                  <div
                    data-w-id={'2d62093f-af62-36e2-bc25-a6f698497f58'}
                    data-animation-type={'lottie'}
                    data-src={'../documents/smarties-loading.json'}
                    data-loop={'1'}
                    data-direction={'1'}
                    data-autoplay={'1'}
                    data-is-ix2-target={'0'}
                    data-renderer={'svg'}
                    data-default-duration={'0'}
                    data-duration={'0'}
                  ></div>
                </div>
                <div>Searching for additional contact information...</div>
              </div>
              <div className={'dataenrichment-content'}>
                <div>
                  We found the following additional information about Sarah
                  Johnson:
                </div>
                <div className={'data-enrichment-table-div'}>
                  <div className={'table-header'}>
                    <TablecelldivItem divText={'Field'} />
                    <div className={'table-cell-div stretch'}>
                      <div className={'table-date-text'}>Value Found</div>
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
                          <div className={'confidence-percent-text'}>96%</div>
                        </div>
                      </div>
                      <TablecelldivItem_6d53c853
                        src={'../images/smarties-contact-icon-lock.svg'}
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
                          <div className={'confidence-percent-text'}>88%</div>
                        </div>
                      </div>
                      <TablecelldivItem_6d53c853
                        src={'../images/smarties-icon-check-green.svg'}
                        divText={'Enriched'}
                      />
                      <div className={'table-cell-div _w-10'}>
                        <a
                          href={'#'}
                          className={
                            'data-enrichment-btn--style1 bg-grey w-inline-block'
                          }
                        >
                          <div>View</div>
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
                          <div className={'file-info-data'}>Free</div>
                        </div>
                      </div>
                      <div className={'table-cell-div _w-10'}>
                        <a
                          href={'#'}
                          className={
                            'data-enrichment-btn--style1 bg-green w-inline-block'
                          }
                        >
                          <div>Import</div>
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
                          <div className={'confidence-percent-text'}>82%</div>
                        </div>
                      </div>
                      <TablecelldivItem_6d53c853
                        src={'../images/smarties-contact-icon-lock.svg'}
                        divText={'Locked'}
                      />
                      <TablecelldivItem_36735cb6 />
                    </div>
                    <div className={'dataenrichment---table-row'}>
                      <TablecelldivItem_e2b278af divText={'Region'} />
                      <TablecelldivItem_5adc2253 label={'North America'} />
                      <TablecelldivItem_32fbc566 label={'CRM Sync'} />
                      <TablecelldivItem_5d77e023 />
                      <TablecelldivItem_6d53c853
                        src={'../images/smarties-contact-icon-lock.svg'}
                        divText={'Locked'}
                      />
                      <TablecelldivItem_36735cb6 />
                    </div>
                  </div>
                </div>
                <div className={'datanerichment-unlock-card'}>
                  <div className={'datanerichment-unlock-card-left'}>
                    <div className={'datanerichment-unlock-card-title'}>
                      Unlock Premium Data
                    </div>
                    <div className={'datanerichment-unlock-card-subtext'}>
                      Get access to 3 locked items
                    </div>
                  </div>
                  <div className={'datanerichment-unlock-card-right'}>
                    <a
                      href={'#'}
                      className={
                        'data-enrichment-btn--style1 unlockpremium-white w-inline-block'
                      }
                    >
                      <div>30 Credits</div>
                    </a>
                    <a
                      href={'#'}
                      className={
                        'data-enrichment-btn--style1 unlockpremium w-inline-block'
                      }
                    >
                      <div>$9 USD</div>
                    </a>
                  </div>
                </div>
                <div className={'form-btn-container'}>
                  <a href={'#'} className={'btn-style1 outline'}>
                    <div>Cancel</div>
                  </a>
                  <a href={'#'} className={'btn-style1 bg-green'}>
                    <div>Update Contact</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customermemorycenter;
