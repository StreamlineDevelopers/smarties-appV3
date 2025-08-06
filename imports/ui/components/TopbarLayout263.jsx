import React from 'react';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';

const TopbarLayout263 = ({}) => {
  return (
    <div
      id={'w-node-_96faac07-e42f-8f07-752f-e90f55680421-f147256a'}
      className={'topbar'}
    >
      <div className={'search-formblock w-form'}>
        <form
          id={'wf-form-topbar-search-form'}
          name={'wf-form-topbar-search-form'}
          data-name={'topbar search form'}
          method={'get'}
          data-wf-page-id={'688b61ee631f6165f147256a'}
          data-wf-element-id={'a3424936-2c2b-64f9-580b-0e1d51641508'}
        >
          <div className={'form-body'}>
            <div className={'form-row mb-0'}>
              <input
                className={'topbar-inputsearch w-input'}
                maxlength={'256'}
                name={'topbar-search'}
                data-name={'topbar search'}
                placeholder={'Search for anything'}
                type={'text'}
                id={'topbar-search'}
                required
              />
            </div>
          </div>
        </form>
        <WformdoneItem />
        <WformfailItem />
      </div>
      <div className={'topbar-right'}>
        <div className={'topbar-icons-div'}>
          <img
            src={'images/vuesaxlinearmessage-question.svg'}
            loading={'lazy'}
            width={'24'}
            height={'24'}
            alt={''}
            className={'topbar-chevron-down'}
          />
          <img
            src={'images/vuesaxlinearnotification.svg'}
            loading={'lazy'}
            width={'24'}
            height={'24'}
            alt={''}
            className={'topbar-chevron-down'}
          />
        </div>
        <div className={'topbar-dropdown-contain'}>
          <div className={'topbar-userdropdown-toggle'}>
            <div className={'badge'}>
              <img
                src={'images/smarties-badge-pro.png'}
                loading={'lazy'}
                alt={''}
              />
            </div>
            <img
              src={'images/Mask-Group.svg'}
              loading={'lazy'}
              width={'38'}
              height={'38'}
              alt={''}
              className={'topbar-user-avatar'}
            />
            <img
              src={'images/vuesaxoutlinearrow-down.svg'}
              loading={'lazy'}
              width={'18'}
              height={'18'}
              alt={''}
              className={'topbar-chevron-down'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopbarLayout263;
