import React from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';
import FilterdropdownItem_7bd05a35 from './FilterdropdownItem_7bd05a35';
import MessaginginboxavatarcolItem_efdfc05e from './MessaginginboxavatarcolItem_efdfc05e';
import DataenrichmentinboxtextcontentItem from './DataenrichmentinboxtextcontentItem';
import DataenrichmentinboxitemItem from './DataenrichmentinboxitemItem';
import PopupformhddivItem from './PopupformhddivItem';
import SwitchdivItem from './SwitchdivItem';
import PlanusagedivtextcontentItem_d2163fea from './PlanusagedivtextcontentItem_d2163fea';
import PlanusageprogressrowItem from './PlanusageprogressrowItem';
import DataenrichmentformrowItem from './DataenrichmentformrowItem';
import Btnstyle1Item_9db8e4f6 from './Btnstyle1Item_9db8e4f6';
import RecentactivitycardItem from './RecentactivitycardItem';
import EnrichmentusagecardItem_f913bdb2 from './EnrichmentusagecardItem_f913bdb2';

const MaincontentLayout_bc404bde = ({}) => {
  return (
    <div
      id={'w-node-_7247def3-be94-f575-1c70-aa1428f48413-f14725cf'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>
              {'Data Enrichment Control'}
            </div>
          </div>
        </div>
        <div className={'mainwidth-control messaging'}>
          <div className={'sidebar-temp'}>
            <div className={'search-formblock w-form'}>
              <form
                id={'wf-form-search-form'}
                name={'wf-form-search-form'}
                data-name={'search form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725cf'}
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
            <div className={'messaging-tabpane-div'}>
              <div className={'filter-row gap-10'}>
                <FilterdropdownItem_7bd05a35 divText={'Role'} />
                <FilterdropdownItem_7bd05a35 divText={'Status'} />
              </div>
              <div className={'inbox-list gap-5'}>
                <a
                  href={'#'}
                  className={'dataenrichment-inbox-item active w-inline-block'}
                >
                  <MessaginginboxavatarcolItem_efdfc05e
                    src={'../images/smarties-avatar-03_1smarties-avatar-03.png'}
                  />
                  <DataenrichmentinboxtextcontentItem
                    divText={'Alex Johnson'}
                    divText1={'Agent'}
                  />
                </a>
                <a
                  href={'#'}
                  className={'dataenrichment-inbox-item w-inline-block'}
                >
                  <MessaginginboxavatarcolItem_efdfc05e
                    src={'../images/smarties-avatar-01_1smarties-avatar-01.png'}
                  />
                  <DataenrichmentinboxtextcontentItem
                    divText={'James Wilson'}
                    divText1={'senior agent'}
                  />
                </a>
                <DataenrichmentinboxitemItem
                  src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
                  divText={'Sarah Parker'}
                />
                <DataenrichmentinboxitemItem
                  src={'../images/smarties-avatar-04_1smarties-avatar-04.png'}
                  divText={'Olivia Brown'}
                />
              </div>
            </div>
          </div>
          <div className={'mainbody-col'}>
            <div className={'w-form'}>
              <form
                id={'wf-form-tool-form'}
                name={'wf-form-tool-form'}
                data-name={'tool form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725cf'}
                data-wf-element-id={'a9c7f9bd-65da-c1db-8867-dd6631816c38'}
              >
                <div className={'form-body'}>
                  <div className={'phonenumber-group'}>
                    <div className={'phonenumber-top'}>
                      <div className={'messaging-main-topleft'}>
                        <div className={'messaging-inbox-avatar-top'}>
                          <img
                            src={
                              '../images/smarties-avatar-03_1smarties-avatar-03.png'
                            }
                            loading={'lazy'}
                            alt={''}
                          />
                        </div>
                        <div className={'messaging-inbox-toptextcontent'}>
                          <div className={'dataenrichment-control-name-div'}>
                            <div className={'messaging-top-name'}>
                              {'Alex Johnson'}
                            </div>
                            <div className={'dataenrich-agent-tab'}>
                              {'Agent'}
                            </div>
                          </div>
                          <div className={'messaging-top-userstatus'}>
                            <div>{'alex.johnson@quantixos.com'}</div>
                          </div>
                          <div className={'dataenrichment-top-plan-row'}>
                            <div className={'dataenrichment-top-plan-row-text'}>
                              {'Team Plan – Max 25 Enrichments/day'}
                            </div>
                            <a
                              href={'#'}
                              className={'upgrade-plan-link w-inline-block'}
                            >
                              <div>{'Upgrade Plan'}</div>
                              <div className={'upgrde-plan-link-icon'}>
                                <img
                                  src={'../images/smarties-icon-upgrade.svg'}
                                  loading={'lazy'}
                                  alt={''}
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={'phonenumber-topright'}>
                        <a
                          data-w-id={'82c81a2f-54cc-8988-e03b-2fc13fab19e7'}
                          href={'#'}
                          className={
                            'btn-style1 outline-orange stretch w-inline-block'
                          }
                        >
                          <div className={'btn-icon'}>
                            <img
                              src={'../images/smarties-icon-showactivity.svg'}
                              loading={'lazy'}
                              alt={''}
                            />
                          </div>
                          <div>{'Show Activity'}</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={'dataenrichment-control-group'}>
                    <PopupformhddivItem
                      divText={'Data Enrichment Permissions'}
                    />
                    <div className={'dataenrichment-formrow'}>
                      <div className={'card-form-row-left'}>
                        <div className={'subrow-text'}>
                          <div className={'card-form-row-text'}>
                            {'Allow this agent to perform data enrichment'}
                          </div>
                        </div>
                      </div>
                      <SwitchdivItem />
                    </div>
                    <div className={'form-row mb-0'}>
                      <div className={'form-control'}>
                        <div className={'form-label'}>
                          {'Max Enrichments Per Day'}
                        </div>
                        <select
                          id={'field'}
                          name={'field'}
                          data-name={'Field'}
                          className={'selectfield w-select'}
                        >
                          <option value={''}>{'25 per day'}</option>
                          <option value={'First'}>{'First choice'}</option>
                          <option value={'Second'}>{'Second choice'}</option>
                          <option value={'Third'}>{'Third choice'}</option>
                        </select>
                      </div>
                    </div>
                    <div className={'teamplan-notice'}>
                      <div className={'teamplan-notice-icon'}>
                        <img
                          src={'../images/Frame_17.svg'}
                          loading={'lazy'}
                          width={'16'}
                          height={'16'}
                          alt={''}
                          className={'teamplan-notice-icon-image'}
                        />
                      </div>
                      <div className={'teamplan-notice-textcontent'}>
                        <div className={'teamplan-notice-text'}>
                          {'Team Plan:'}
                        </div>
                        <div className={'teamplan-notice-description'}>
                          {' 25 enrichments per day by default'}
                        </div>
                      </div>
                    </div>
                    <div className={'plan-usage-div'}>
                      <PlanusagedivtextcontentItem_d2163fea
                        label={'Current Usage'}
                        divText={'7/50 today'}
                      />
                      <PlanusageprogressrowItem />
                    </div>
                  </div>
                  <div className={'dataenrichment-control-group'}>
                    <PopupformhddivItem divText={'Field Visibility Controls'} />
                    <div className={'fieldcontrol-list'}>
                      <DataenrichmentformrowItem divText={'IP Address'} />
                      <DataenrichmentformrowItem divText={'Location'} />
                      <DataenrichmentformrowItem divText={'Weather'} />
                      <DataenrichmentformrowItem divText={'Device Info'} />
                      <DataenrichmentformrowItem divText={'Social Profiles'} />
                    </div>
                  </div>
                  <div className={'dataenrichment-control-group'}>
                    <div className={'form-btn-container'}>
                      <Btnstyle1Item_9db8e4f6 />
                      <a href={'#'} className={'btn-style1'}>
                        <div>{'Save Settings'}</div>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
          </div>
          <div className={'activityusage-sidebar'}>
            <div className={'messaging-sidebar-hd-div align-inbetween'}>
              <div className={'messaging-sidebar-h1'}>{'Activity & Usage'}</div>
              <div
                data-w-id={'045797f6-421e-08fe-9c85-68a3508aeef8'}
                className={'sidebar-close'}
              >
                <img src={'../images/Frame_5.svg'} loading={'lazy'} alt={''} />
              </div>
            </div>
            <div className={'messaging-sidebar-cards'}>
              <div className={'sidebar-contact-body'}>
                <div className={'messaging-sidebar-h2'}>
                  {'Recent Activity'}
                </div>
                <div className={'contact-row-container'}>
                  <RecentactivitycardItem
                    divText={'IP Address visibility enabled'}
                  />
                  <RecentactivitycardItem
                    divText={'Enrichment limit changed to 25/day'}
                  />
                  <RecentactivitycardItem
                    divText={'Location data editing disabled'}
                  />
                </div>
              </div>
            </div>
            <div className={'messaging-sidebar-cards'}>
              <div className={'sidebar-contact-body'}>
                <div className={'messaging-sidebar-h2'}>
                  {'Enrichment Usage'}
                </div>
                <div className={'contact-row-container'}>
                  <EnrichmentusagecardItem_f913bdb2
                    label={'Today'}
                    divText={'8 / 25'}
                  />
                  <EnrichmentusagecardItem_f913bdb2
                    label={'Yesterday'}
                    divText={'22 / 25'}
                  />
                  <EnrichmentusagecardItem_f913bdb2
                    label={'Jun 15'}
                    divText={'15 / 25'}
                  />
                  <EnrichmentusagecardItem_f913bdb2
                    label={'Jun 14'}
                    divText={'19 / 25'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout_bc404bde;
