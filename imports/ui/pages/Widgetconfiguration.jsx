import React, { useEffect, useRef, useState } from 'react';
import MaincontentLayout_69014e15 from '../components/MaincontentLayout_69014e15';
import SidebarLayout from '../components/SidebarLayout';
import TopbarLayout_6c435aa4 from '../components/TopbarLayout_6c435aa4';
import FormrowItem_ca5d0667 from '../components/FormrowItem_ca5d0667';
import FormhddivrightItem_34200126 from '../components/FormhddivrightItem_34200126';
import Noticedivstyle2Item_b196be0b from '../components/Noticedivstyle2Item_b196be0b';
import DomainlistItem from '../components/DomainlistItem';
import DomaindivItem from '../components/DomaindivItem';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';
import WidgetWatcher from '../../api/client/watchers/WidgetWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import AssistantWatcher from '../../api/client/watchers/vapi/AssistantWatcher';

const Widgetconfiguration = () => {
  const watcher = useRef(WidgetWatcher).current;
  const watcher2 = useRef(AssistantWatcher).current;
  useWatcher(watcher);
  useWatcher(watcher2);

  const [domain, setDomain] = useState([]);
  const [name, setName] = useState('');
  const [selectedAssistant, setSelectedAssistant] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const showPopUp = watcher.getValue('showPopUp');
  const isLoadingCreation = watcher.getValue("isLoadingCreation");
  const assistant = watcher2.Assistants;
  const isWebsiteVerifying = watcher.getValue("isWebsiteVerifying");

  const fetchData = async () => {
    await watcher.fetchWidgetConfig();
    await watcher2.fetchAllAssistants();
  };

  useEffect(() => {
    watcher.setValue("isLoadingWidget", true);
    watcher.listen();
    fetchData();
    return () => {
      watcher.clear();
      watcher.removeListener();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if all domains are valid
    const allValid = domain.every(item => item.isValid);
    if (!allValid) {
      toast.error('Please check all domains and make sure they are valid', {
        style: TOAST_STYLE.ERROR
      });
      return;
    }

    // check if there are duplicate domains
    const duplicateDomains = domain.filter(item => item.value);
    const hasDuplicates = duplicateDomains.some((item, index) =>
      duplicateDomains.findIndex(d => d.value === item.value) !== index
    );

    if (hasDuplicates) {
      toast.error('Duplicate domains are not allowed', {
        style: TOAST_STYLE.ERROR
      });
      return;
    }

    const data = {
      name: name,
      domain: domain.map(item => item.value),
      assistantId: selectedAssistant ? selectedAssistant.assistantid : null,
      assistantidllm: selectedAssistant ? selectedAssistant.assistantidllm : null,
    };
    watcher.createWidgetConfig(data).then((res) => {
      if (res) {
        setDomain([]); // Clear the domain state after submission
        setName(''); // Clear the name input after submission
        setSelectedAssistant([]);
        setDomain([]);
      }
    });
  };

  const handleAddDomain = () => {
    // do not add if domain is already in the list  and if isWebsiteVerifying is true
    if (isWebsiteVerifying) {
      toast.warning('Please wait for the domain to be verified', {
        style: TOAST_STYLE.WARNING
      });
      return;
    }

    if (!showPopup && !isAddDomainOpen) setDomain([]);

    setDomain(prevParams => {
      const newParams = [...prevParams, {
        key: '',
        value: '',
      }];
      return newParams;
    });
  };

  return (
    <>
      <div className={'page-wrap'}>
        <MaincontentLayout_69014e15 />
        <SidebarLayout />
        <TopbarLayout_6c435aa4 />
        <div className={'popup-create-config'} style={{ display: showPopUp ? 'flex' : 'none' }}>
          {isLoadingCreation ? <Loader /> : <div className={'popup-card _w-50'}>
            <div className={'card-settings-hd-div'}>
              <div className={'card-settings-hd'}>{'Create Configuration'}</div>
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
                  <FormrowItem_ca5d0667
                    label={'Configuration Name'}
                    name={'config-name'}
                    dataName={'config name'}
                    type={'text'}
                    id={'config-name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="dropdown-group">
                    <label>Select Assistant</label>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                      <select
                        className="select-field w-select"
                        onChange={(e) => {
                          const selectedItem = JSON.parse(e.target.value);
                          setSelectedAssistant(selectedItem);
                        }}
                      >
                        <option value="" >Select Assistant</option>
                        {assistant && assistant.map((item, index) => (
                          <option key={index} value={JSON.stringify(item)}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={'form-row'}>
                    <div className={'form-control'}>
                      <div className={'popup-form-hd-div'}>
                        <div className={'form-hd-div-left'}>
                          <div className={'form-label'}>{'Domain'}</div>
                        </div>
                        <FormhddivrightItem_34200126
                          dataWId={'b4274f11-8c4c-3670-a676-a8a0e61dff7e'}
                          onClick={() => {
                            watcher.setValue('isAddHeaderOpen', true);
                            handleAddDomain();
                          }}
                        />
                      </div>
                      {domain.length == 0 &&
                        <Noticedivstyle2Item_b196be0b />}
                      {
                        domain.map((domain, index) => (
                          <DomaindivItem
                            onBlur={handleDomainInputBlur}
                            key={index}
                            isValid={domain.isValid}
                            index={index} domain={domain.value} handleDomainChange={handleDomainChange} handleRemoveDomain={handleRemoveDomain} isAddDomainOpen={isAddDomainOpen} onClose={() => watcher.setValue('isAddHeaderOpen', false)} name="header-name" dataName="header name" id="header-name" name1="header-value" dataName1="header value" id1="header-value" />
                        ))
                      }
                    </div>
                  </div>
                  <div className={'form-btn-container'}>
                    <a href={'#'} className={'btn-style1 outline'}
                      onClick={() => {
                        watcher.setValue("showPopUp", false);
                        setName("");
                        setSelectedAssistant([]);
                        setDomain([]);
                        watcher.setValue("showPopUp", false);
                      }}
                    >
                      <div>{'Cancel'}</div>
                    </a>
                    <a href={'#'} className={'btn-style1'} onClick={handleSubmit}>
                      <div>{'Submit'}</div>
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
          </div>}
        </div>
      </div>
    </>
  );
};

export default Widgetconfiguration;
