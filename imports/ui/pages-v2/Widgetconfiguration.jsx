import React, { useEffect, useRef, useState } from 'react';
import { Copy } from 'lucide-react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout117 from '../components-v2/MaincontentLayout117';
import TopbarLayout118 from '../components-v2/TopbarLayout118';
import WformdoneItem from '../components-v2/WformdoneItem';
import WformfailItem from '../components-v2/WformfailItem';
import InboxitemItem119 from '../components-v2/InboxitemItem119';
import MenuitemItem81 from '../components-v2/MenuitemItem81';
import ConfiginfoItem from '../components-v2/ConfiginfoItem';
import FormhddivrightItem120 from '../components-v2/FormhddivrightItem120';
import ButtonaddmessageItem121 from '../components-v2/ButtonaddmessageItem121';
import Noticedivstyle2Item122 from '../components-v2/Noticedivstyle2Item122';
import DomainlistItem from '../components-v2/DomainlistItem';
import DomaindivItem from '../components-v2/DomaindivItem';
import { SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS, TOAST_STYLE } from '../../api/common/const';
import { useWatcher } from '../../api/client/Watcher2';
import Loader from '../components-v2/common/Loader';
import { Toaster } from 'sonner';
import WidgetWatcher from '../../api/client/watchers/WidgetWatcher';
import FormrowItem94 from '../components-v2/FormrowItem94';
import AssistantWatcher from '../../api/client/watchers/vapi/AssistantWatcher';
import Client from '../../api/client/Client';

import TopbarLayout5 from '../components-v2/TopbarLayout5';
import AvatarInitials from '../custom/AvatarInitials';
import { toast } from "sonner";
import useDebounce from '../custom/useDebounce';

const Widgetconfiguration = () => {
  const [toggleSecret, setToggleSecret] = useState(false);
  const [domain, setDomain] = useState([]);
  const [name, setName] = useState('');
  const [selectedAssistant, setSelectedAssistant] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [domainsListEdit, setDomainsListEdit] = useState({});
  const [isEditingTitle, setIsEditSelectedName] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [selectedDomain, setSelectedDomain] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isCreatingDomain, setIsCreatingDomain] = useState(false);
  const [updateNewDomain, setUpdateNewDomain] = useState({
    value: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const listRef = useRef(null);
  const isInitialMount = useRef(true);
  const watcher = useRef(WidgetWatcher).current;
  const watcher2 = useRef(AssistantWatcher).current;
  useWatcher(watcher);
  useWatcher(watcher2);

  const isAddDomainOpen = watcher.getValue('isAddHeaderOpen') || false;
  const currentWidget = watcher.getValue('currentWidget');
  const isLoading = watcher.getValue("isLoadingWidget");
  const isLoadingCreation = watcher.getValue("isLoadingCreation");
  const showPopUp = watcher.getValue('showPopUp');
  const assistant = watcher2.Assistants;
  const widgetData = watcher.Widget;
  const isWebsiteVerifying = watcher.getValue("isWebsiteVerifying");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!currentWidget) return;

      const isNameChanged = selectedName !== currentWidget.name;

      // Check if domains have changed by comparing the actual values
      const hasDomainsChanged = () => {
        // If the number of domains is different, there's definitely a change
        if (selectedDomain.length !== currentWidget.domainsList.length) {
          return true;
        }

        // Check if any domain value has changed
        return selectedDomain.some((domain, index) => {
          const originalDomain = currentWidget.domainsList[index];
          return domain.value !== originalDomain;
        });
      };

      const domainsChanged = hasDomainsChanged();
      setHasUnsavedChanges(isNameChanged || domainsChanged);
    }, 500);

    return () => clearTimeout(handler);
  }, [selectedName, selectedDomain, currentWidget]);

  // ========================================
  // DOMAIN MANAGEMENT HANDLERS
  // ========================================

  const handleDomainClick = (index) => {
    setDomainsListEdit((prev) => ({ ...prev, [index]: true }));
  };

  const handleNewDomainApply = (index, field, value) => {
    setSelectedDomain(prevState => ([
      ...prevState,
      { value: value }
    ]));
    setUpdateNewDomain({ value: '' });
    setIsCreatingDomain(false);
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

  const handleSelectedDomainChange = (index, field, value) => {
    const updated = [...selectedDomain];
    // Ensure we maintain the same structure for all domains
    updated[index] = {
      value: value,
      isValid: updated[index]?.isValid ?? true
    };
    setSelectedDomain(updated);
    setHasUnsavedChanges(true);
  };

  const handleUpdateNewDomainChange = (index, field, value) => {
    setUpdateNewDomain(prevState => ({ ...prevState, [field]: value }));
  };

  const handleDomainChange = (index, field, value) => {
    const updated = [...domain];
    updated[index][field] = value;
    setDomain(updated);
  };

  const handleDomainInputBlur = async () => {
    const len = domain.length;
    const currentDomain = domain[len - 1].value

    domain[len - 1].isValid = false;
    const isValid = await watcher.checkDomain(currentDomain);
    if (!isValid) {
      toast.error(`Invalid domain: ${currentDomain}`, {
        style: TOAST_STYLE.ERROR
      });
    }

    const updated = [...domain];
    updated[len - 1].isValid = isValid;
    setDomain(updated);
  };

  const handleRemoveDomain = (index) => {
    const updated = domain.filter((_, i) => i !== index);
    setDomain(updated);
  };

  const handleRemoveSelectedDomain = (index) => {
    const updated = selectedDomain.filter((_, i) => i !== index);
    setSelectedDomain(updated);
  };

  const handleOnCloseCreateDomain = () => {
    setIsCreatingDomain(false);
    setUpdateNewDomain(prevState => ({ ...prevState, value: '' }));
  };

  const handleOnCloseDomainEdit = (index) => {
    setDomainsListEdit((prev) => ({ ...prev, [index]: false }));
  };

  const handleSaveDomainEdit = async (index) => {
    const domainValue = selectedDomain[index];
    if (!domainValue.value) {
      toast.error('Please enter a domain', {
        style: TOAST_STYLE.ERROR
      });
      return;
    }

    try {
      const isValid = await watcher.checkDomain(domainValue.value);
      if (!isValid) {
        toast.error(`Invalid domain: ${domainValue.value}`, {
          style: TOAST_STYLE.ERROR
        });
        return;
      }

      // Update the domain validity
      setSelectedDomain(prevItems => {
        const updatedItems = [...prevItems];
        updatedItems[index] = {
          ...updatedItems[index],
          isValid: true
        };
        return updatedItems;
      });

      // Close the edit mode
      setDomainsListEdit((prev) => ({ ...prev, [index]: false }));
    } catch (error) {
      toast.error('Failed to validate domain', {
        style: TOAST_STYLE.ERROR
      });
    }
  };

  // ========================================
  // WIDGET SELECTION & INITIALIZATION HANDLERS
  // ========================================

  const handleWidgetSelect = (widget) => {
    if (hasUnsavedChanges) {
      if (window.confirm('You have unsaved changes. Do you want to discard them?')) {
        initializeChanges(widget);
        setDomainsListEdit({});
        watcher.setValue("currentWidget", widget);
        watcher.setValue("isAddDomainOpen", widget);
        setSelectedDomain(widget.domainsList.map(domain => ({ value: domain })));
      }
    } else {
      watcher.setValue("isAddDomainOpen", widget);
      setDomainsListEdit({});
      watcher.setValue("currentWidget", widget);
      initializeChanges(widget);
    }
  };

  const initializeChanges = (widget) => {
    setSelectedName(widget.name);
    // Ensure consistent structure for all domains
    setSelectedDomain(widget.domainsList.map(domain => ({
      value: domain,
      isValid: true
    })));
  };

  // ========================================
  // TITLE/NAME EDITING HANDLERS
  // ========================================

  const handleTitleClick = () => {
    setIsEditSelectedName(true);
  };

  const handleInputBlur = () => {
    setIsEditSelectedName(false);
    setSelectedName(selectedName);
  };

  const handleInputChange = (e) => {
    setSelectedName(e.target.value);
  };

  // ========================================
  // FORM SUBMISSION & UPDATE HANDLERS
  // ========================================

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
        setShowPopup(false);
      }
    });
  };

  const handleUpdate = async () => {
    if (!hasUnsavedChanges || !currentWidget) return;
    setHasUnsavedChanges(false);
    // Validate all domains when save is clicked
    const validationPromises = selectedDomain.map(async (domain) => {
      const isValid = await watcher.checkDomain(domain.value);
      return { value: domain.value, isValid };
    });

    const validatedDomains = await Promise.all(validationPromises);
    setSelectedDomain(validatedDomains);

    // Check if all domains are valid
    const allValid = validatedDomains.every(domain => domain.isValid);
    if (!allValid) {
      toast.error('Please check all domains and make sure they are valid', {
        style: TOAST_STYLE.ERROR
      });
      return;
    }

    const data = {
      id: currentWidget.id,
      name: selectedName,
      domain: validatedDomains.map(domain => domain.value),
      siteId: currentWidget.siteid,
      widgetUrl: currentWidget.widgeturl,
      assistantidcall: currentWidget.assistantidcall,
      assistantidllm: currentWidget.assistantidllm
    };

    try {
      await watcher.updateWidgetConfig(data);

      // Update the current widget in the watcher
      const updatedWidget = {
        ...currentWidget,
        name: selectedName,
        domainsList: validatedDomains.map(domain => domain.value)
      };
      watcher.setValue("currentWidget", updatedWidget);

    } catch (error) {
      toast.error('Failed to update configuration', {
        style: TOAST_STYLE.ERROR
      });
    }
  };

  // ========================================
  // SCROLL & DATA FETCHING HANDLERS
  // ========================================

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // If we're near the bottom (within 20px) and not currently loading
    if (scrollHeight - scrollTop - clientHeight < 20 && !isLoading) {
      watcher.fetchWidgetConfig({ isLoadmore: true });
    }
  };

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

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (debouncedSearchTerm.length >= 3) {
      watcher.fetchWidgetConfig({
        searchQuery: debouncedSearchTerm,
        isLoadmore: false
      });
    }
    else if (debouncedSearchTerm.length === 0) {
      watcher.fetchWidgetConfig({
        searchQuery: null,
        isLoadmore: false
      });
    }
  }, [debouncedSearchTerm, watcher]);

  return (
    <>

      <div className="page-wrap">
        <MaincontentLayout117>
          <div className="scroll-content flex">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Widget Configuration</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            <div className="mainwidth-control horizontal stretch">
              <div className="sidebar-temp">
                <button data-w-id="63a9b66e-78d6-7eee-4643-e54302a9ad55" href="#" className="btn-style1 w-inline-block" onClick={() => watcher.setValue('showPopUp', true)}>
                  <div className="btn-icon"><img src="../images/Search.svg" loading="lazy" alt="" /></div>
                  <div>Create Configuration</div>
                </button>
                <div className="search-formblock w-form">
                  <form id="wf-form-search-form" name="wf-form-search-form" data-name="search form" method="get" data-wf-page-id="6843114a3ccc58b804d638d7" data-wf-element-id="9aaf37b2-a011-864e-493e-ccb9979ed0bd">
                    <div className="form-body">
                      <div className="form-row mb-0"><input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="inbox-search w-input" maxlength="256" name="search-2" data-name="Search 2" placeholder="Search" type="text" id="search-2" required /></div>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
                {/* <div className="filter-row">
                  <div data-hover="false" data-delay="0" className="filter-dropdown w-dropdown">
                    <div className="filter-dropdown-toggle w-dropdown-toggle">
                      <div className="icon-2 w-icon-dropdown-toggle"></div>
                      <div className="text-block">First Part of Number</div>
                    </div>
                    <nav className="filterdropdown-list w-dropdown-list">
                      <a href="#" className="filter-dropdownlink w-dropdown-link">First Part of Number</a>
                      <a href="#" className="filter-dropdownlink w-dropdown-link">Last Part of Number</a>
                      <a href="#" className="filter-dropdownlink w-dropdown-link">First Part of Number</a>
                    </nav>
                  </div>
                </div> */}
                <div className="inbox-list" ref={listRef}
                  style={{
                    maxHeight: '400px',
                    overflowY: 'auto',
                    padding: '10px',
                    scrollBehavior: 'smooth'
                  }}
                  onScroll={handleScroll}>
                  {isLoading ? <Loader /> : (
                    widgetData.length ? widgetData.map((widget, index) => (
                      <InboxitemItem119
                        key={index}
                        textDiv={widget.name}
                        isCurrent={widget.id === currentWidget?.id}
                        onClick={() => handleWidgetSelect(widget)}
                      />
                    )) : <div className="no-data">No widgets found</div>
                  )}
                </div>
              </div>
              {
                currentWidget &&
                <div className="mainbody-col">
                  <div className="w-form">
                    <form id="wf-form-configuration-form" name="wf-form-configuration-form" data-name="configuration form" method="get" data-wf-page-id="6843114a3ccc58b804d638d7" data-wf-element-id="63a9b66e-78d6-7eee-4643-e54302a9ad71">
                      <div className="form-body">
                        <div className="phonenumber-group">
                          <div className="phonenumber-top">
                            <div className="phonenumber-topleft" onClick={handleTitleClick}>
                              {isEditingTitle ? (
                                <input
                                  className="form-input w-input settings-title"
                                  type="text"
                                  value={selectedName}
                                  onChange={handleInputChange}
                                  onBlur={handleInputBlur}
                                />
                              ) : (
                                <div className="settings-title">{selectedName}</div>
                              )}
                              {/* <div className="settings-title">{selectedName}</div> */}
                            </div>
                            <div className="phonenumber-topright">
                              <div className="assistant-buttons-div">
                                <div className={`button-save ${hasUnsavedChanges ? '' : 'disabled'}`} onClick={handleUpdate} style={{ cursor: hasUnsavedChanges ? "pointer" : "not-allowed", opacity: hasUnsavedChanges ? 1 : 0.4 }}>
                                  <div>Save</div>
                                  <div className="fluentchat-28-regular"><img loading="lazy" src="../images/smarties-save.svg" alt="" /></div>
                                </div>
                                <div className="button-test" onClick={() => watcher.loadWidget(currentWidget.siteid)}>
                                  <div className="button-label">Test</div><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0b46c4c1e4c0be5746_smarties-icon-play.svg" loading="lazy" className="smarties-icon-play" />
                                </div>
                                {/*<div className="button-chat">
                                  <div className="button-label">Trash</div><img loading="lazy" src="../images/smarties-icon-trash-mini.svg" alt="" className="smarties-icon-play" />
                                </div> */}
                                {/* <div className="assistant-menu">
                                  <div data-w-id="63a9b66e-78d6-7eee-4643-e54302a9ad8a" className="button-menu"><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg" loading="lazy" className="smarties-icon-menu" /></div>
                                  <div className="menu-dropdown">
                                    <MenuitemItem81 src="../images/smarties-icon-version.svg" textDiv="Version History" />
                                    <MenuitemItem81 src="../images/smarties-icon-document.svg" textDiv="Call Logs" />
                                    <MenuitemItem81 src="../images/smarties-icon-duplicate.svg" textDiv="Duplicate" />
                                    <MenuitemItem81 src="../images/smarties-icon-delete_outline.svg" textDiv="Delete" />
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="phonenumber-group">
                          <div className="config-info-contain">
                            <ConfiginfoItem textDiv="Name" textDiv1={currentWidget.name} />
                            <ConfiginfoItem textDiv="Site ID" textDiv1={currentWidget.siteid} />
                            <ConfiginfoItem textDiv="Widget URL" textDiv1={<>
                              {currentWidget.widgeturl || "No URL"}
                              <Copy height={16} width={20} />
                            </>} onClick={() => watcher.formatWidgetUrl(currentWidget.siteid)} />
                            <ConfiginfoItem textDiv="Secret" textDiv1={currentWidget.secret} toggleSecret={toggleSecret} onClick={() => setToggleSecret(prevState => !prevState)} />
                          </div>
                        </div>
                        <div className="phonenumber-group">
                          <div className="form-row">
                            <div className="form-control">
                              <div className="popup-form-hd-div">
                                <div className="form-hd-div-left">
                                  <div className="table-date-hd-text">Domain</div>
                                </div>
                                <FormhddivrightItem120 dataWId="5cefa7b3-c9ea-0bf4-45d3-c9b1b57787a2" onClick={() => setIsCreatingDomain(true)} />
                              </div>
                              {currentWidget.domainsList.length < 1 && <Noticedivstyle2Item122 />}
                              {
                                isCreatingDomain && <DomaindivItem onClick={() => handleNewDomainApply(null, "value", updateNewDomain.value)} isEditDomainOpen={isCreatingDomain} index={0} domain={updateNewDomain.value} handleDomainChange={handleUpdateNewDomainChange} isAddDomainOpen={isCreatingDomain} onClose={handleOnCloseCreateDomain} name="header-name" dataName="header name" id="header-name" name1="header-value" dataName1="header value" id1="header-value" />
                              }
                              {
                                (currentWidget && currentWidget.domainsList.length > 0) &&
                                selectedDomain.map((domainValue, index) => (
                                  domainsListEdit[index] ? (
                                    <DomaindivItem
                                      key={index}
                                      index={index}
                                      domain={selectedDomain[index]}
                                      isEditDomainOpen={domainsListEdit[index]}
                                      handleDomainChange={handleSelectedDomainChange}
                                      isAddDomainOpen={domainsListEdit[index]}
                                      onClose={() => handleOnCloseDomainEdit(index)}
                                      onClick={() => handleSaveDomainEdit(index)}
                                      name="header-name"
                                      dataName="header name"
                                      id="header-name"
                                      name1="header-value"
                                      dataName1="header value"
                                      id1="header-value"
                                      isValid={selectedDomain[index].isValid}
                                    />
                                  ) : (
                                    <DomainlistItem key={index} domain={domainValue.value} onDelete={() => handleRemoveSelectedDomain(index)} onClick={() => handleDomainClick(index)} dataWId="b4274f11-8c4c-3670-a676-a8a0e61dff8d" dataWId1="b4274f11-8c4c-3670-a676-a8a0e61dff96" />
                                  )
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <WformdoneItem />
                    <WformfailItem />
                  </div>
                </div>
              }
            </div>
          </div>
        </MaincontentLayout117>
        <SidebarLayout />
        {/* <TopbarLayout118>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="6843114a3ccc58b804d638d7" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div>
              </div>
            </form>
            <WformdoneItem />
            <WformfailItem />
          </div>
          <div className="topbar-right">
            <div className="topbar-icons-div"><img src="../images/vuesaxlinearmessage-question.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /><img src="../images/vuesaxlinearnotification.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /></div>
            <div className="topbar-userdropdown-toggle">
              <div className="top-user-dropdown-text">{Client.CurrentUser && Client.CurrentUser.username}</div>
              <img src="../images/Mask-Group.svg" loading="lazy" width="38" height="38" alt="" className="topbar-user-avatar" />
              <img src="../images/vuesaxoutlinearrow-down.svg" loading="lazy" width="18" height="18" alt="" className="topbar-chevron-down" />
            </div>
          </div>
        </TopbarLayout118> */}
        <TopbarLayout5>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                {/* <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div> */}
              </div>
            </form>
          </div>
          <div className="topbar-right">
            {/* <div className="topbar-icons-div"><img src="../images/vuesaxlinearmessage-question.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /><img src="../images/vuesaxlinearnotification.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /></div> */}
            <div className="topbar-userdropdown-toggle">
              <div className="top-user-dropdown-text">{Client.CurrentUser && Client.CurrentUser.username}</div>
              <AvatarInitials name={Client.CurrentUser && Client.CurrentUser.username} size={38} />
              {/* <img src="../images/Mask-Group.svg" loading="lazy" width="38" height="38" alt="" className="topbar-user-avatar" /> */}
              {/* <img src="../images/vuesaxoutlinearrow-down.svg" loading="lazy" width="18" height="18" alt="" className="topbar-chevron-down" /> */}
            </div>
          </div>
        </TopbarLayout5>
        <div className="popup-create-config" style={{ display: showPopUp ? 'flex' : 'none' }}>
          {isLoadingCreation ? <Loader /> : <div className="popup-card _w-50">
            <div className="card-settings-hd-div">
              <div className="card-settings-hd">Create Configuration</div>
            </div>
            <div className="w-form">
              <form id="wf-form-create-configuration-form" name="wf-form-create-configuration-form" data-name="create configuration form" method="get" data-wf-page-id="6843114a3ccc58b804d638d7" data-wf-element-id="63a9b66e-78d6-7eee-4643-e54302a9ae49">
                <div className="form-body">
                  <FormrowItem94 textDiv="Name" name="tool-name" dataName="tool name" type="text" id="tool-name" value={name} onChange={(e) => setName(e.target.value)} />
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
                  <div className="form-row">
                    <div className="form-control">
                      <div className="popup-form-hd-div">
                        <div className="form-hd-div-left">
                          <div className="form-label">Domain  </div>
                        </div>
                        <FormhddivrightItem120 dataWId="b4274f11-8c4c-3670-a676-a8a0e61dff7e" onClick={() => {
                          watcher.setValue('isAddHeaderOpen', true);
                          handleAddDomain();
                        }} />
                      </div>
                      {domain.length == 0 &&
                        <Noticedivstyle2Item122 />}
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
                  <div className="form-btn-container">
                    <a href="#" className="btn-style1 outline" onClick={() => {
                      watcher.setValue("showPopUp", false);
                      setName("");
                      setSelectedAssistant([]);
                      setDomain([]);
                      watcher.setValue("showPopUp", false);
                    }}>
                      <div>Cancel</div>
                    </a>
                    <a href="#" className="btn-style1" onClick={handleSubmit}>
                      <div>Submit</div>
                    </a>
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div data-w-id="63a9b66e-78d6-7eee-4643-e54302a9aee3" className="popup-close" onClick={() => watcher.setValue("showPopUp", false)}><img src="../images/smarties-x.svg" loading="lazy" alt="" /></div>
          </div>
          }
        </div>
      </div>


      <Toaster />
    </>
  );
};

export default Widgetconfiguration;