import React from 'react';
import MaincontentLayout413 from '../components/MaincontentLayout413';
import SidebarLayout414 from '../components/SidebarLayout414';
import TopbarLayout412 from '../components/TopbarLayout412';
import FormrowItem410 from '../components/FormrowItem410';
import FormhddivrightItem409 from '../components/FormhddivrightItem409';
import Noticedivstyle2Item402 from '../components/Noticedivstyle2Item402';
import DomainlistItem from '../components/DomainlistItem';
import DomaindivItem from '../components/DomaindivItem';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';

const Widgetconfiguration = () => {
  return (
    <>
      <div className={'page-wrap'}>
        <MaincontentLayout413 />
        <SidebarLayout414 />
        <TopbarLayout412 />
        <div className={'popup-create-config'}>
          <div className={'popup-card _w-50'}>
            <div className={'card-settings-hd-div'}>
              <div className={'card-settings-hd'}>Create Configuration</div>
            </div>
            <div className={'w-form'}>
              <form
                id={'wf-form-create-configuration-form'}
                name={'wf-form-create-configuration-form'}
                data-name={'create configuration form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725bb'}
                data-wf-element-id={'63a9b66e-78d6-7eee-4643-e54302a9ae49'}
              >
                <div className={'form-body'}>
                  <FormrowItem410
                    label={'Configuration Name'}
                    name={'config-name'}
                    dataName={'config name'}
                    type={'text'}
                    id={'config-name'}
                  />
                  <div className={'form-row'}>
                    <div className={'form-control'}>
                      <div className={'popup-form-hd-div'}>
                        <div className={'form-hd-div-left'}>
                          <div className={'form-label'}>Domain</div>
                        </div>
                        <FormhddivrightItem409
                          dataWId={'b4274f11-8c4c-3670-a676-a8a0e61dff7e'}
                        />
                      </div>
                      <Noticedivstyle2Item402 />
                      <DomainlistItem
                        dataWId={'b4274f11-8c4c-3670-a676-a8a0e61dff8d'}
                        dataWId1={'b4274f11-8c4c-3670-a676-a8a0e61dff96'}
                      />
                      <DomaindivItem
                        id={'domain-name'}
                        dataWId={'b4274f11-8c4c-3670-a676-a8a0e61dff9f'}
                        dataWId1={'b4274f11-8c4c-3670-a676-a8a0e61dffa2'}
                      />
                    </div>
                  </div>
                  <div className={'form-btn-container'}>
                    <a href={'#'} className={'btn-style1 outline'}>
                      <div>Cancel</div>
                    </a>
                    <a href={'#'} className={'btn-style1'}>
                      <div>Submit</div>
                    </a>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'63a9b66e-78d6-7eee-4643-e54302a9aee3'}
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

export default Widgetconfiguration;
