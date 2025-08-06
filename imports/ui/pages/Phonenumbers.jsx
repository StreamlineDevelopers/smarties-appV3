import React from 'react';
import MaincontentLayout342 from '../components/MaincontentLayout342';
import SidebarLayout343 from '../components/SidebarLayout343';
import TopbarLayout341 from '../components/TopbarLayout341';
import Btnstyle1Item334 from '../components/Btnstyle1Item334';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';

const Phonenumbers = () => {
  return (
    <>
      <div className={'page-wrap'}>
        <MaincontentLayout342 />
        <SidebarLayout343 />
        <TopbarLayout341 />
        <div className={'popup-createphonenumber'}>
          <div className={'popup-card _w-50'}>
            <div className={'card-settings-hd-div'}>
              <div className={'card-settings-hd'}>Create Phone Number</div>
            </div>
            <div className={'w-form'}>
              <form
                id={'wf-form-create-phone-number-form'}
                name={'wf-form-create-phone-number-form'}
                data-name={'create phone number form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725b0'}
                data-wf-element-id={'2abaa22a-e736-543a-3594-0506323e6095'}
              >
                <div className={'form-body'}>
                  <div className={'form-row'}>
                    <input
                      className={'inbox-search w-input'}
                      maxlength={'256'}
                      name={'search-phone-number'}
                      data-name={'search phone number'}
                      placeholder={'Search Phone number'}
                      type={'text'}
                      id={'search-phone-number'}
                      required
                    />
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
                      SMARTIES Phone Numbers are free of charge, and limited to
                      10 numbers per wallet.
                    </div>
                  </div>
                  <div className={'form-btn-container mb-20'}>
                    <Btnstyle1Item334 divText={'Cancel'} />
                    <a href={'#'} className={'btn-style1'}>
                      <div>Create</div>
                    </a>
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
                      Functionality to create Vapi phone numbers is only
                      available for the US. For phone numbers from other
                      regions, please use the Import Phone Numbers feature.
                    </div>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'2abaa22a-e736-543a-3594-0506323e60cd'}
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

export default Phonenumbers;
