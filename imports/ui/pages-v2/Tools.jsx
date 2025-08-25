import React, { useEffect, useRef, useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout91 from '../components-v2/MaincontentLayout91';
import TopbarLayout92 from '../components-v2/TopbarLayout92';
import WformdoneItem from '../components-v2/WformdoneItem';
import WformfailItem from '../components-v2/WformfailItem';
import InboxitemItem93 from '../components-v2/InboxitemItem93';
import MenuitemItem81 from '../components-v2/MenuitemItem81';
import FormrowItem94 from '../components-v2/FormrowItem94';
import FormcontrolItem95 from '../components-v2/FormcontrolItem95';
import FormrowItem96 from '../components-v2/FormrowItem96';
import FormcontrolItem97 from '../components-v2/FormcontrolItem97';
import FormrowItem98 from '../components-v2/FormrowItem98';
import WcheckboxItem99 from '../components-v2/WcheckboxItem99';
import PopupformhddivItem from '../components-v2/PopupformhddivItem';
import FormhddivleftItem from '../components-v2/FormhddivleftItem';
import FormhddivrightItem from '../components-v2/FormhddivrightItem';
import ButtonaddmessageItem from '../components-v2/ButtonaddmessageItem';
import Noticedivstyle2Item from '../components-v2/Noticedivstyle2Item';
import PropertylistItem from '../components-v2/PropertylistItem';
import PropertyitemItem from '../components-v2/PropertyitemItem';
import PropertyitemleftItem from '../components-v2/PropertyitemleftItem';
import PropertyitemrightItem100 from '../components-v2/PropertyitemrightItem100';
import PropertydivItem from '../components-v2/PropertydivItem';
import FormrowItem101 from '../components-v2/FormrowItem101';
import FormcolItem102 from '../components-v2/FormcolItem102';
import FormcontrolItem103 from '../components-v2/FormcontrolItem103';
import FormcolItem104 from '../components-v2/FormcolItem104';
import FormcontrolItem105 from '../components-v2/FormcontrolItem105';
import SelectfieldItem106 from '../components-v2/SelectfieldItem106';
import FormbtncontainerItem107 from '../components-v2/FormbtncontainerItem107';
import Btnstyle1Item108 from '../components-v2/Btnstyle1Item108';
import Btnstyle1Item109 from '../components-v2/Btnstyle1Item109';
import FormrowItem110 from '../components-v2/FormrowItem110';
import HeaderlistItem from '../components-v2/HeaderlistItem';
import HeaderitemItem from '../components-v2/HeaderitemItem';
import FormcolItem111 from '../components-v2/FormcolItem111';
import MessagedivItem from '../components-v2/MessagedivItem';
import FormrowItem112 from '../components-v2/FormrowItem112';
import FormbtncontainerItem113 from '../components-v2/FormbtncontainerItem113';
import Btnstyle1Item114 from '../components-v2/Btnstyle1Item114';
import SidemenulabeldivItem from '../components-v2/SidemenulabeldivItem';
import SidemenuitemItem from '../components-v2/SidemenuitemItem';
import ReusableItem from '../components-v2/ReusableItem';
import SvgiconItem from '../components-v2/SvgiconItem';
import Layer1Item from '../components-v2/Layer1Item';
import ReusableItem1 from '../components-v2/ReusableItem1';
import SvgiconItem2 from '../components-v2/SvgiconItem2';
import Layer1Item3 from '../components-v2/Layer1Item3';
import PopupformhddivItem115 from '../components-v2/PopupformhddivItem115';
import FormhddivleftItem116 from '../components-v2/FormhddivleftItem116';
import { SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS, TOAST_STYLE } from '../../api/common/const';
import ToolsWatcher from '../../../imports/api/client/watchers/vapi/ToolsWatcher';
import { useWatcher } from '../../../imports/api/client/Watcher2';
import Loader from '../components-v2/common/Loader';
import { toast, Toaster } from 'sonner';
import Client from '../../api/client/Client';

import TopbarLayout5 from '../components-v2/TopbarLayout5';
import AvatarInitials from '../custom/AvatarInitials';
import useDebounce from '../custom/useDebounce';


const MESSAGE_TYPES = [
  'Request Start',
  'Request Complete',
  'Request Failed',
  'Request Response Delayed'
];

const Tools = () => {
  const [toolName, setToolName] = useState('');
  const [description, setDescription] = useState('');
  const [asyncOpt, setAsyncOpt] = useState(false);
  const [strictOpt, setStrictOpt] = useState(false);
  const [serverUrl, setServerUrl] = useState('');
  const [secretToken, setSecretToken] = useState('');
  const [timeout, setServerTimeout] = useState(20);
  const [parameters, setParameters] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [selectedMessageType, setSelectedMessageType] = useState('');
  const [error, setError] = useState(null);
  const [show, setShow] = useState(-1);
  const [showModal, setShowModal] = useState(-1);
  const [showSave, setShowSave] = useState(false);
  const listRef = useRef(null);
  const watcher = useRef(ToolsWatcher).current;
  useWatcher(watcher);

  useEffect(() => {
    watcher.setValue("isLoadingTools", true);
    watcher.listen();
    watcher.fetchAllTools();
    return () => {
      watcher.removeListener();
      watcher.clear();
    };
  }, []);

  const isInitialMount = useRef(true);
  const [searchTerm, setSearchTerm] = useState('');
  const isLoading = watcher.getValue("isLoadingTools");
  const isCreateToolPopupOpen = watcher.getValue('isCreateToolPopupOpen');
  const isAddHeaderOpen = watcher.getValue('isAddHeaderOpen');
  const isAddHeaderUpdate = watcher.getValue('isAddHeaderUpdate');
  const isFetchingTool = watcher.getValue('isFetchingTool');
  const tools = watcher.Tools;
  const UpdateLoading = watcher.getValue('UpdateLoading');
  const currentSelectedIndex = watcher.getValue('currentSelectedIndex');

  let currentTool = watcher.getValue('currentTool');
  if (!currentTool) currentTool = {};

  // Update Handlers
  const handleCurrentToolChange = (field, value) => {
    const updatedTool = { ...currentTool };
    updatedTool[field] = value;
    watcher.setValue('currentTool', updatedTool);
  };
  //for Server Configuration State
  const handleServerConfigChange = (field, value) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.serverConfig) {
      updatedTool.serverConfig = {};
    }
    updatedTool.serverConfig[field] = value;
    watcher.setValue('currentTool', updatedTool);
  };
  // for Parameters State
  const handleParametersChange = (index, field, value) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.parameters) {
      updatedTool.parameters = { properties: [] };
    }
    const updatedParams = [...updatedTool.parameters.properties];
    updatedParams[index] = {
      ...updatedParams[index],
      [field]: field === 'required' ? !updatedParams[index][field] : value
    };
    updatedTool.parameters.properties = updatedParams;
    watcher.setValue('currentTool', updatedTool);
  };

  const handleAddParameters = () => {
    if (show != -1) return;
    const updatedTool = { ...currentTool };
    if (!updatedTool.parameters) {
      updatedTool.parameters = { properties: [] };
    }
    updatedTool.parameters.properties.push({
      name: '',
      type: 'string',
      description: '',
      required: false,
    });
    watcher.setValue('currentTool', updatedTool);
    setShow(updatedTool.parameters.properties.length - 1);
  };

  const handleDeleteParameter = (index) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.parameters) {
      updatedTool.parameters = { properties: [] };
    }
    if (updatedTool.parameters.properties.length === 1) {
      toast.error('At least one parameter is required.', {
        style: TOAST_STYLE.ERROR
      });
      return;
    }
    updatedTool.parameters.properties = updatedTool.parameters.properties.filter((_, i) => i !== index);
    watcher.setValue('currentTool', updatedTool);
  };

  const handleDeleteUpdateParamaters = (index) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.parameters) {
      updatedTool.parameters = { properties: [] };
    }
    const param = updatedTool.parameters.properties[index];
    // Only delete if both name and description are empty or whitespace
    if ((!param.name || param.name.trim() === '') && (!param.description || param.description.trim() === '')) {
      if (updatedTool.parameters.properties.length === 1) {
        toast.error('At least one parameter is required.', {
          style: TOAST_STYLE.ERROR
        });
        return;
      }
      updatedTool.parameters.properties = updatedTool.parameters.properties.filter((_, i) => i !== index);
      watcher.setValue('currentTool', updatedTool);
    }
  };

  const handleValidateProperties = () => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.parameters || !updatedTool.parameters.properties || updatedTool.parameters.properties.length === 0) {
      toast.error('At least one parameter is required.', {
        style: TOAST_STYLE.ERROR
      });
      return false;
    }

    // Check for empty parameter names
    const hasEmptyNames = updatedTool.parameters.properties.some(param => !param.name || param.name.trim() === '');
    if (hasEmptyNames) {
      toast.error('All parameters must have a name.', {
        style: TOAST_STYLE.ERROR
      });
      return false;
    }

    // Check for duplicate parameter names
    const names = updatedTool.parameters.properties.map(param => param.name);
    const uniqueNames = new Set(names);
    if (names.length !== uniqueNames.size) {
      toast.error('Duplicate parameter names are not allowed.', {
        style: TOAST_STYLE.ERROR
      });
      return false;
    }

    for (const param of updatedTool.parameters.properties) {
      if (!param.name || !param.type) {
        toast.error('All parameters must have a name and type.', {
          style: TOAST_STYLE.ERROR
        });
        return false;
      }
    }
    setShow(-1);
    return true;
  };

  // for Headers State
  const handleHeaderChangeUpdate = (index, field, value) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.headers) {
      updatedTool.headers = [];
    }
    const updatedHeaders = [...updatedTool.headers];
    updatedHeaders[index] = {
      ...updatedHeaders[index],
      [field]: value
    };
    updatedTool.headers = updatedHeaders;
    watcher.setValue('currentTool', updatedTool);
  };

  const handleRemoveHeaderUpdate = (index) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.headers) {
      updatedTool.headers = [];
    }
    updatedTool.headers = updatedTool.headers.filter((_, i) => i !== index);
    watcher.setValue('currentTool', updatedTool);
  };

  const handleAddHeaderUpdate = () => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.headers) {
      updatedTool.headers = [];
    }
    updatedTool.headers.push({
      key: '',
      value: ''
    });
    watcher.setValue('currentTool', updatedTool);
  };


  // for Messages State
  const handleMessageChangeUpdate = (index, field, value) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.messages) {
      updatedTool.messages = [];
    }
    const updatedMessages = [...updatedTool.messages];
    updatedMessages[index] = {
      ...updatedMessages[index],
      [field]: value
    };
    updatedTool.messages = updatedMessages;
    watcher.setValue('currentTool', updatedTool);
  };

  const handleRemoveMessageUpdate = (index) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.messages) {
      updatedTool.messages = [];
    }
    updatedTool.messages = updatedTool.messages.filter((_, i) => i !== index);
    watcher.setValue('currentTool', updatedTool);
  };

  const handleAddMessageUpdate = (type) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.messages) {
      updatedTool.messages = [];
    }
    updatedTool.messages.push({
      type: type,
      content: '',
      conditions: []
    });
    watcher.setValue('currentTool', updatedTool);
  };

  const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;

    if (
      typeof obj1 !== 'object' ||
      obj1 === null ||
      typeof obj2 !== 'object' ||
      obj2 === null
    ) {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
  };

  useEffect(() => {
    if (tools[currentSelectedIndex] && currentTool) {
      setShowSave(!deepEqual(tools[currentSelectedIndex], currentTool));
    }
  }, [currentTool, tools]);

  //------------- For Creation and Update---------------//

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // If we're near the bottom (within 20px) and not currently loading
    if (scrollHeight - scrollTop - clientHeight < 20 && !isLoading) {
      watcher.fetchAllTools({ isLoadmore: true });
    }
  };

  const handleValidateFormProperties = (index) => {
    const hasEmptyNames = parameters.some(param => !param.name || param.name.trim() === '');
    if (hasEmptyNames) {
      toast.error('All parameters must have a name.', {
        style: TOAST_STYLE.ERROR
      });
      return false;
    }

    // Check for duplicate parameter names
    const names = parameters.map(param => param.name);
    const uniqueNames = new Set(names);
    if (names.length !== uniqueNames.size) {
      toast.error('Duplicate parameter names are not allowed.', {
        style: TOAST_STYLE.ERROR
      });
      return false;
    }

    if (!parameters || parameters.length === 0) {
      toast.error('At least one parameter is required.', {
        style: TOAST_STYLE.ERROR
      });
      return false;
    }

    for (const param of parameters) {
      if (!param.name || !param.type) {
        toast.error('All parameters must have a name and type.', {
          style: TOAST_STYLE.ERROR
        });
        return false;
      }
    }
    setShowModal(-1);
    return true;
  };

  const handleCreateTools = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const data = {
      name: toolName,
      description,
      parameters,
      serverUrl,
      secretToken,
      timeout,
      headers,
      messages,
      async: asyncOpt,
      strict: strictOpt,
    };
    if (!data.name || !data.serverUrl) {
      setError('Tool name and server URL are required.');
      return setSubmissionStatus('fail');
    }
    if (data.parameters.length === 0) {
      setError('At least one parameter is required.');
      return setSubmissionStatus('fail');
    }

    // Validate that all parameters have non-empty names
    const emptyParameterNames = data.parameters.filter(param => !param.name || param.name.trim() === '');
    if (emptyParameterNames.length > 0) {
      setError('All parameters must have a name. Please fill in all parameter names.');
      return setSubmissionStatus('fail');
    }

    // Check for duplicate parameter names
    const parameterNames = data.parameters.map(param => param.name);
    const uniqueNames = new Set(parameterNames);
    if (parameterNames.length !== uniqueNames.size) {
      setError('Duplicate parameter names are not allowed.');
      return setSubmissionStatus('fail');
    }

    watcher.setValue("isLoadingTools", true);
    let result;
    try {
      result = await watcher.handleSaveTools(data);
      if (result) {
        setSubmissionStatus('success');
        clearStates();
        watcher.setValue('isCreateToolPopupOpen', false);
        watcher.setValue("isLoadingTools", false);
        setShowModal(-1);
      }
    } catch (error) {
      setSubmissionStatus('fail');
      clearStates();
      setShowModal(-1);
    }
  };

  const handleUpdateTools = async (e) => {
    e.preventDefault();

    // Validate and clean parameters
    let rawParameters = currentTool.parameters?.properties || [];
    let filteredParameters = rawParameters.filter(
      (param) => typeof param.name === 'string' && param.name.trim() !== ''
    );
    let seenNames = new Set();
    let uniqueParameters = filteredParameters.filter((param) => {
      if (seenNames.has(param.name)) return false;
      seenNames.add(param.name);
      return true;
    });

    // --- Sync required property for backend ---
    // For each parameter, set required: true if its name is in the required array, else false
    const requiredNames = currentTool.parameters?.required || [];
    uniqueParameters = uniqueParameters.map(param => ({
      ...param,
      required: requiredNames.includes(param.name)
    }));
    // --- End sync required property ---

    // Validate and clean headers
    let rawHeaders = currentTool.headers || [];

    if (rawHeaders.length > 0) {
      const allValid = rawHeaders.every(
        (header) =>
          typeof header.key === 'string' &&
          header.key.trim() !== '' &&
          typeof header.value === 'string' &&
          header.value.trim() !== ''
      );

      if (!allValid) {
        return toast.error('All headers must have a non-empty key and value.', {
          style: TOAST_STYLE.ERROR,
        });
      }
    }

    const data = {
      id: currentTool.id,
      name: currentTool.name,
      description: currentTool.description,
      parameters: uniqueParameters,
      serverUrl: currentTool.serverConfig?.serverurl || '',
      secretToken: currentTool.serverConfig?.secret || '',
      timeout: currentTool.serverConfig?.timeout || 20,
      headers: rawHeaders,
      messages: currentTool.messages || [],
      async: currentTool.async,
      strict: currentTool.strict,
    };

    // Required field checks
    if (!data.name || !data.serverUrl) {
      return toast.error('Tool name and server URL are required.', {
        style: TOAST_STYLE.ERROR,
      });
    }

    if (data.parameters.length === 0) {
      return toast.error('At least one valid, non-duplicate parameter is required.', {
        style: TOAST_STYLE.ERROR,
      });
    }

    // Optional: you can enforce at least one valid header if needed
    // if (rawHeaders.length > 0 && validHeaders.length === 0) {
    //   return toast.error('Headers must have non-empty name and value.', {
    //     style: TOAST_STYLE.ERROR,
    //   });
    // }

    let result;
    try {
      result = await watcher.handleUpdateTools(data);
      if (result) {
        setSubmissionStatus('success');
        clearStates();
        setShowSave(false);
      }
    } catch (error) {
      setSubmissionStatus('fail');
      clearStates();
      setShowSave(false);
    }

    if (result) {
      setTimeout(() => {
        setSubmissionStatus('idle');
        watcher.setValue('isCreateToolPopupOpen', false);
      }, 3000);
    }
  };

  //---------------for Modal Data----------------//


  const clearStates = () => {
    setToolName('');
    setDescription('');
    setAsyncOpt(false);
    setStrictOpt(false);
    setServerUrl('');
    setSecretToken('');
    setServerTimeout(20);
    setParameters([]);
    setHeaders([]);
    setMessages([]);
    setSubmissionStatus('idle');
    setSelectedMessageType('');
  };

  const handleAddParameter = () => {
    if (showModal != -1) return;
    const hasEmptyNames = parameters.some(param => !param.name || param.name.trim() === '');
    if (hasEmptyNames) {
      toast.error('Please complete existing parameter names before adding new ones.', {
        style: TOAST_STYLE.ERROR
      });
      return;
    }

    setParameters(prevParams => {
      const newParams = [...prevParams, {
        name: '',
        type: 'string',
        description: '',
        required: false,
        enums: []
      }];
      return newParams;
    });
    setShowModal(parameters.length);
  };

  const handleParameterChange = (index, field, value, isBlur = false) => {
    let val = value;
    // Only validate parameter names on blur or submit, not on every keystroke
    if (field === 'name' && isBlur) {
      // Check if this is a blur event (value is the final value)
      if (!val || val.trim() === '') {
        toast.error('Parameter name cannot be empty.', {
          style: TOAST_STYLE.ERROR
        });
        return;
      }

      // Check for duplicate names
      if (parameters.some((param, i) => i !== index && param.name === val)) {
        toast.error('Parameter name already exists.', {
          style: TOAST_STYLE.ERROR
        });
        val = '';
        return;
      }
    }

    setParameters(prevParams => {
      const updatedParams = [...prevParams];
      const newValue = field === 'required' ? !updatedParams[index][field] : val;
      updatedParams[index] = {
        ...updatedParams[index],
        [field]: newValue
      };
      return updatedParams;
    });
  };

  const handleDeleteParamaters = (index) => {
    setParameters(prevParameters => prevParameters.filter((_, i) => i !== index));
  };

  const handleAddHeader = () => {
    // setHeaders([...headers, { key: '', value: '' }]);
    setHeaders(prevParams => {
      const newParams = [...prevParams, {
        key: '',
        value: '',
      }];
      return newParams;
    });
  };

  const handleHeaderChange = (index, field, value) => {
    const updated = [...headers];
    updated[index][field] = value;
    setHeaders(updated);
  };

  const handleRemoveHeader = (index) => {
    const updated = headers.filter((_, i) => i !== index);
    setHeaders(updated);
  };

  const handleAddMessage = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (!selectedMessageType || messages.some((msg) => msg.type === selectedMessageType)) return;
    setMessages([...messages, { type: selectedMessageType, content: '', conditions: [] }]);
    setSelectedMessageType('');
  };

  const handleRemoveMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  const handleMessageChange = (index, field, value) => {
    const updated = [...messages];
    updated[index][field] = value;
    setMessages(updated);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (debouncedSearchTerm.length >= 3) {
      watcher.fetchAllTools({
        searchQuery: debouncedSearchTerm,
        isLoadmore: false
      });
    }
    else if (debouncedSearchTerm.length === 0) {
      watcher.fetchAllTools({
        searchQuery: null,
        isLoadmore: false
      });
    }
  }, [debouncedSearchTerm, watcher]);

  // --- Add this helper for update mode ---
  const isParamRequired = (paramName) => {
    return (
      currentTool.parameters &&
      Array.isArray(currentTool.parameters.required) &&
      currentTool.parameters.required.includes(paramName)
    );
  };

  // --- Add this handler for update mode ---
  const handleChangeRequiredUpdate = (index) => {
    const updatedTool = { ...currentTool };
    if (!updatedTool.parameters) {
      updatedTool.parameters = { properties: [], required: [] };
    }
    if (!Array.isArray(updatedTool.parameters.required)) {
      updatedTool.parameters.required = [];
    }
    const paramName = updatedTool.parameters.properties[index]?.name;
    if (!paramName) return;
    if (updatedTool.parameters.required.includes(paramName)) {
      updatedTool.parameters.required = updatedTool.parameters.required.filter((n) => n !== paramName);
    } else {
      updatedTool.parameters.required.push(paramName);
    }
    watcher.setValue('currentTool', updatedTool);
  };

  return (
    <>

      <div className="page-wrap">
        <MaincontentLayout91>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Tools</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            <div className="mainwidth-control horizontal">
              <div className="sidebar-temp">
                <button
                  type="button"
                  className="btn-style1 w-inline-block"
                  onClick={() => { watcher.setValue('isCreateToolPopupOpen', true); }}
                >
                  <div className="btn-icon"><img src="../images/Search.svg" loading="lazy" alt="" /></div>
                  <div>Create Tool</div>
                </button>
                <div className="search-formblock w-form">
                  <form id="wf-form-search-form" name="wf-form-search-form" data-name="search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a72" data-wf-element-id="9aaf37b2-a011-864e-493e-ccb9979ed0bd">
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
                <div
                  ref={listRef}
                  className="inbox-list"
                  style={{
                    maxHeight: 'calc(100vh - 200px)',
                    overflowY: 'auto',
                    padding: '10px',
                    scrollBehavior: 'smooth'
                  }}
                  onScroll={handleScroll}
                >
                  {isLoading ? (
                    <Loader />
                  ) : (
                    tools.length > 0 ? tools.map((tool, index) =>
                      <InboxitemItem93
                        isCurrent={currentSelectedIndex === index}
                        key={tool.id}
                        textDiv={tool.name}
                        onClick={() => {
                          watcher.setValue('selectedTool', tool);
                          watcher.setValue('currentSelectedIndex', index);
                          watcher.fetchTool(tool.id);
                          setShow(-1);
                        }}
                      />
                    ) :
                      <div>No tools found</div>
                  )}
                </div>
              </div>
              {isFetchingTool === null || isFetchingTool === undefined ? null : (
                isFetchingTool ? <Loader /> :
                  <div className="mainbody-col">
                    <div className="w-form">
                      <form id="wf-form-tool-form" name="wf-form-tool-form" data-name="tool form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a72" data-wf-element-id="c154995a-eaa2-9240-5cd5-fba7b19eea0e">
                        <div className="form-body">
                          <div className="phonenumber-group">
                            <div className="phonenumber-top">
                              <div className="phonenumber-topleft">
                                <div className="settings-title">{currentTool.name ? currentTool.name : ""}</div>
                                <div className="settings-sublabel">{currentTool.id ? currentTool.id : ""}</div>
                              </div>
                              <div className="phonenumber-topright">
                                <div className="assistant-buttons-div">
                                  <div className="button-save" onClick={handleUpdateTools} style={{ opacity: UpdateLoading || !showSave ? 0.5 : 1, pointerEvents: UpdateLoading || !showSave ? 'none' : 'auto' }}>
                                    <div>Save</div>
                                    <div className="fluentchat-28-regular"><img loading="lazy" src="../images/smarties-save.svg" alt="" /></div>
                                  </div>
                                  {/* <div className="button-chat">
                                    <div className="button-label">Code</div><img loading="lazy" src="../images/smarties-code.svg" alt="" />
                                  </div>
                                  <div className="button-test">
                                    <div className="button-label">Test</div><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0b46c4c1e4c0be5746_smarties-icon-play.svg" loading="lazy" className="smarties-icon-play" />
                                  </div> */}
                                  <div className="assistant-menu">
                                    <div data-w-id="a7e802d3-c731-78c6-f0b4-c63f3316bcae" className="button-menu"><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg" loading="lazy" className="smarties-icon-menu" /></div>
                                    <div className="menu-dropdown">
                                      <MenuitemItem81 src="../images/smarties-icon-version.svg" textDiv="Version History" />
                                      <MenuitemItem81 src="../images/smarties-icon-document.svg" textDiv="Call Logs" />
                                      <MenuitemItem81 src="../images/smarties-icon-duplicate.svg" textDiv="Duplicate" />
                                      <MenuitemItem81 src="../images/smarties-icon-delete_outline.svg" textDiv="Delete" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="phonenumber-group">
                            <FormrowItem94 textDiv="Tool Name" name="tool-name-2" dataName="Tool Name 2" type="text" id="tool-name-2" value={currentTool.name} onChange={(e) => handleCurrentToolChange('name', e.target.value)} />
                            <FormrowItem96 textDiv="Tool Description" id="tool-description-2" name="tool-description-2" dataName="Tool Description 2" value={currentTool.description} onChange={(e) => handleCurrentToolChange('description', e.target.value)} />
                            <FormrowItem98 name="check-async-2" id="check-async-2" dataName="Check Async 2" htmlFor="check-async-2" name1="check-strict-2" id1="check-strict-2" dataName1="Check Strict 2" htmlFor1="check-strict-2" isAsyncOpt={currentTool.async} onChangeAsyncOpt={(e) => handleCurrentToolChange('async', !currentTool.async)} isStrictOpt={currentTool.strict} onChangeStrictOpt={(e) => handleCurrentToolChange('strict', !currentTool.strict)} />
                          </div>
                          <div className="phonenumber-group">
                            <div className="form-row">
                              <div className="form-control">
                                <PopupformhddivItem textDiv="Parameters" dataWId="1849b75f-9350-98c1-3481-367f0109f99d" textDiv1="Add Property" onClick={() => {
                                  watcher.setValue('isAddPropertyUpdate', true);
                                  handleAddParameters();
                                }} />
                                {/* Display notice if no parameters are configured */}
                                {!currentTool.parameters && currentTool.parameters.properties.length < 1 && <Noticedivstyle2Item textDiv="No properties configured. Click Add Property to add your first propery." />}
                                {/* Display existing parameters */}
                                {currentTool.parameters && currentTool.parameters.properties.map((param, index) => {
                                  return (
                                    <PropertylistItem showRow={index !== show} size={currentTool.parameters && currentTool.parameters.properties.length} dataWId="be1b7be0-9191-c686-ba08-742e8f7b2750" name={param.name} onClick={() => handleDeleteParameter(index)} onEdit={() => setShow(index)} />
                                  )
                                })}
                                {
                                  (currentTool.parameters && currentTool.parameters.properties.length > 0) &&
                                  currentTool.parameters.properties.map((param, index) => (
                                    <PropertydivItem
                                      key={index}
                                      index={index}
                                      value1={param.name}
                                      value2={param.type}
                                      value3={param.description}
                                      required={isParamRequired(param.name)}
                                      handleParameterChange={(e) => handleParametersChange(index, 'name', e.target.value, e.type === 'blur')}
                                      selectParameters={(e) => handleParametersChange(index, 'type', e.target.value)}
                                      handleChangeDescription={(e) => handleParametersChange(index, 'description', e.target.value)}
                                      handleChangeRequired={() => handleChangeRequiredUpdate(index)}
                                      isAddPropertyOpen={show}
                                      onClose={() => { setShow(-1); handleDeleteUpdateParamaters(index); }}
                                      onSubmit={() => handleValidateProperties(index)}
                                      htmlFor="parameter-name"
                                      name="parameter-name"
                                      dataName="parameter name"
                                      id="parameter-name"
                                      htmlFor1="parameter-type"
                                      id1="parameter-type"
                                      name1="parameter-type"
                                      dataName1="parameter type"
                                      id2="parameter-description"
                                      name2="parameter-description"
                                      dataName2="parameter description"
                                      name3="check-parameter-required"
                                      id3="check-parameter-required"
                                      dataName3="check parameter required"
                                      htmlFor2="check-parameter-required"
                                      dataWId="8e487be4-09b1-5c33-31cf-862b98316027"
                                      dataWId1="8e487be4-09b1-5c33-31cf-862b9831602a"
                                    />
                                  ))
                                }
                                {/* <PropertydivItem htmlFor="parameter-name-2" name="parameter-name-2" dataName="Parameter Name 2" id="parameter-name-2" htmlFor1="parameter-type-2" id1="parameter-type-2" name1="parameter-type-2" dataName1="Parameter Type 2" id2="parameter-description-2" name2="parameter-description-2" dataName2="Parameter Description 2" name3="check-parameter-required-2" id3="check-parameter-required-2" dataName3="Check Parameter Required 2" htmlFor2="check-parameter-required-2" dataWId="1849b75f-9350-98c1-3481-367f0109f9c5" dataWId1="1849b75f-9350-98c1-3481-367f0109f9c8" /> */}
                              </div>
                            </div>
                          </div>
                          <div className="phonenumber-group">
                            <FormrowItem94 value={currentTool.serverConfig.serverurl} onChange={(e) => handleServerConfigChange('serverurl', e.target.value)} textDiv="Server URL" name="server-url-2" dataName="Server Url 2" type="url" id="server-url-2" />
                            <FormrowItem110 secretToken={currentTool.serverConfig.secret} timeout={currentTool.serverConfig.timeout} setSecretToken={(e) => handleServerConfigChange('secret', e.target.value)} setServerTimeout={(e) => handleServerConfigChange('timeout', e.target.value)} htmlFor="secret-token-2" name="secret-token-2" dataName="Secret Token 2" id="secret-token-2" htmlFor1="timeout-2" name1="timeout-2" dataName1="Timeout 2" id1="timeout-2" />
                          </div>
                          <div className="phonenumber-group">
                            <div className="form-row">
                              <div className="form-control">
                                <PopupformhddivItem textDiv="HTTP Headers" dataWId="1849b75f-9350-98c1-3481-367f0109f9e2" textDiv1="Add Header" onClick={() => {
                                  watcher.setValue('isAddHeaderUpdate', true);
                                  handleAddHeaderUpdate();
                                }} />
                                {currentTool.headers && currentTool.headers.length < 1 && <Noticedivstyle2Item textDiv="No headers configured. Click Add Header to add your first header." />}
                                {currentTool.headers && currentTool.headers.length > 0 &&
                                  currentTool.headers.map((header, index) =>
                                    <HeaderlistItem key={index} index={index} header={header} handleHeaderKeyChange={(e) => handleHeaderChangeUpdate(index, 'key', e.target.value)} handleHeaderValueChange={(e) => handleHeaderChangeUpdate(index, 'value', e.target.value)} handleHeaderRemove={handleRemoveHeaderUpdate} isAddHeaderOpen={isAddHeaderUpdate} onClose={() => watcher.setValue('isAddHeaderOpen', false)} name="header-name" dataName="header name" id="header-name" name1="header-value" dataName1="header value" id1="header-value" />
                                  )
                                }
                              </div>
                            </div>
                          </div>
                          <div className="phonenumber-group">
                            <div className="form-row">
                              <div className="form-control">
                                <PopupformhddivItem115
                                  type="message"
                                  textDiv="Messages"
                                  dataWId="7529e335-786c-b4d4-9e50-b56416b0c584"
                                  textDiv1="Add Message"
                                />

                                {(!currentTool.messages || currentTool.messages.length === 0) && (
                                  <Noticedivstyle2Item textDiv="No messages configured. Click Add Message to add your first message." />
                                )}
                                {currentTool.messages && currentTool.messages.map((message, index) => (
                                  <div key={index} className="parameter-box">
                                    <div className="button-row right">
                                      <h4>{message.type}</h4>
                                    </div>
                                    <div className="form-group">
                                      <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <label>Content</label>
                                        <button className="btn-style1 outline" onClick={(e) => {
                                          e.preventDefault();
                                          handleRemoveMessageUpdate(index);
                                        }}>Cancel</button>
                                      </div>
                                      <textarea
                                        className="form-input-textarea w-input"
                                        placeholder="Enter message content"
                                        value={message.content}
                                        onChange={(e) => handleMessageChangeUpdate(index, 'content', e.target.value)}
                                      />
                                    </div>
                                  </div>
                                ))}
                                <div className="dropdown-group">
                                  <label>Add Message</label>
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <select
                                      className="select-field w-select"
                                      value={selectedMessageType}
                                      onChange={(e) => setSelectedMessageType(e.target.value)}
                                    >
                                      <option value="" disabled>Select Message Type</option>
                                      {MESSAGE_TYPES.filter(type => !currentTool.messages?.some(m => m.type === type)).map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                      ))}
                                    </select>
                                    <button
                                      className="btn-style1"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (selectedMessageType) {
                                          handleAddMessageUpdate(selectedMessageType);
                                          setSelectedMessageType('');
                                        }
                                      }}
                                    >
                                      Apply
                                    </button>
                                    <button
                                      className="btn-style1 outline"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedMessageType('');
                                      }}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <WformdoneItem />
                      <WformfailItem />
                    </div>
                  </div>
              )}
            </div>
          </div>
        </MaincontentLayout91>
        <SidebarLayout />
        {/* <TopbarLayout92>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a72" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
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
        </TopbarLayout92> */}
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
        <div className="popup-create-tool" style={{ display: isCreateToolPopupOpen ? 'flex' : 'none' }}>
          <div className="popup-card _w-50">
            <div className="card-settings-hd-div">
              <div className="card-settings-hd">Create Tool</div>
            </div>
            <div className="w-form">
              <form id="wf-form-create-tool-form" name="wf-form-create-tool-form" data-name="create tool form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a72" data-wf-element-id="4a1ac76e-9d23-6e8a-fa81-b7af8845bfe2" >
                <div className="form-body">
                  <FormrowItem94 textDiv="Tool Name" name="tool-name" dataName="tool name" type="text" id="tool-name" value={toolName} onChange={(e) => setToolName(e.target.value)} />
                  <FormrowItem96 textDiv="Tool Description" id="tool-description" name="tool-description" dataName="tool description" value={description} onChange={(e) => setDescription(e.target.value)} />
                  <FormrowItem98 name="check-async" id="check-async" dataName="check async" htmlFor="check-async" name1="check-strict" id1="check-strict" dataName1="check strict" htmlFor1="check-strict" isAsyncOpt={asyncOpt} onChangeAsyncOpt={(e) => setAsyncOpt(!asyncOpt)} isStrictOpt={strictOpt} onChangeStrictOpt={(e) => setStrictOpt(!strictOpt)} />
                  <div className="form-row">
                    <div className="form-control">
                      <PopupformhddivItem115 textDiv="Parameters" dataWId="5d5b0e1b-d041-c3a2-4aae-d2d218c8b916" textDiv1="Add Property" onClick={() => {
                        handleAddParameter();
                      }} />
                      {!parameters.length && <Noticedivstyle2Item textDiv="No properties configured. Click Add Property to add your first propery." />}
                      {/* <PropertylistItem key={index} name={param.name} onDelete={() => handleDeleteParamaters(index)} dataWId="be1b7be0-9191-c686-ba08-742e8f7b2750" /> */}
                      {parameters.length > 0 && parameters.map((param, index) => (
                        <PropertylistItem showRow={index !== showModal} dataWId="be1b7be0-9191-c686-ba08-742e8f7b2750" name={param.name} onClick={() => handleDeleteParamaters(index)} onEdit={() => setShowModal(index)} showModal={showModal} />
                      ))}
                      {
                        parameters.map((param, index) => (
                          <PropertydivItem
                            key={index}
                            index={index}
                            required={param.required}
                            handleParameterChange={(e) => handleParameterChange(index, 'name', e.target.value, e.type === 'blur')}
                            selectParameters={(e) => handleParameterChange(index, 'type', e.target.value)}
                            handleChangeDescription={(e) => handleParameterChange(index, 'description', e.target.value)}
                            handleChangeRequired={(e) => handleParameterChange(index, 'required', e.target.value)}
                            isAddPropertyOpen={showModal}
                            onClose={() => { setShowModal(-1); handleDeleteParamaters(index); }}
                            onSubmit={() => handleValidateFormProperties(index)}
                            htmlFor="parameter-name"
                            name="parameter-name"
                            dataName="parameter name"
                            id="parameter-name"
                            htmlFor1="parameter-type"
                            id1="parameter-type"
                            name1="parameter-type"
                            dataName1="parameter type"
                            id2="parameter-description"
                            name2="parameter-description"
                            dataName2="parameter description"
                            name3="check-parameter-required"
                            id3="check-parameter-required"
                            dataName3="check parameter required"
                            htmlFor2="check-parameter-required"
                            dataWId="8e487be4-09b1-5c33-31cf-862b98316027"
                            dataWId1="8e487be4-09b1-5c33-31cf-862b9831602a"
                          />
                        )
                        )
                      }
                    </div>
                  </div>
                  <FormrowItem94 textDiv="Server URL" name="server-url" dataName="server url" type="url" id="server-url" value={serverUrl} onChange={(e) => setServerUrl(e.target.value)} />
                  <FormrowItem110 htmlFor="secret-token" name="secret-token" dataName="secret token" id="secret-token" htmlFor1="timeout" name1="timeout" dataName1="timeout" id1="timeout" secretToken={secretToken} timeout={timeout} setServerTimeout={(e) => setServerTimeout(e.target.value)} setSecretToken={(e) => setSecretToken(e.target.value)} />
                  <div className="form-row">
                    <div className="form-control">
                      <PopupformhddivItem115 textDiv="HTTP Headers" dataWId="bc828a3c-f17a-4ef9-7308-6b5473ce977d" textDiv1="Add Header" onClick={() => {
                        watcher.setValue('isAddHeaderOpen', true);
                        handleAddHeader();
                      }} />
                      <Noticedivstyle2Item textDiv="No headers configured. Click Add Header to add your first header." />
                      {
                        headers.map((header, index) => (
                          <HeaderlistItem key={index} index={index} header={header} handleHeaderKeyChange={(e) => handleHeaderChange(index, 'key', e.target.value)} handleHeaderValueChange={(e) => handleHeaderChange(index, 'value', e.target.value)} handleHeaderRemove={handleRemoveHeader} isAddHeaderOpen={isAddHeaderOpen} onClose={() => watcher.setValue('isAddHeaderOpen', false)} name="header-name" dataName="header name" id="header-name" name1="header-value" dataName1="header value" id1="header-value" />
                        ))
                      }
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-control">
                      <PopupformhddivItem115
                        type="message"
                        textDiv="Messages"
                        dataWId="7529e335-786c-b4d4-9e50-b56416b0c584"
                        textDiv1="Add Message"
                      />

                      {messages.length === 0 && (
                        <Noticedivstyle2Item textDiv="No messages configured. Click Add Message to add your first message." />
                      )}
                      {messages.map((message, index) => (
                        <div key={index} className="parameter-box">
                          <div className="button-row right">
                            <h4>{message.type}</h4>
                          </div>
                          <div className="form-group">
                            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                              <label>Content</label>
                              <button className="btn-style1 outline" onClick={(e) => {
                                e.preventDefault();
                                handleRemoveMessage(index);
                              }}>Cancel</button>
                            </div>
                            <textarea
                              className="form-input-textarea w-input"
                              placeholder="Enter message content"
                              value={message.content}
                              onChange={(e) => handleMessageChange(index, 'content', e.target.value)}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="dropdown-group">
                        <label>Add Message</label>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <select
                            className="select-field w-select"
                            value={selectedMessageType}
                            onChange={(e) => setSelectedMessageType(e.target.value)}
                          >
                            <option value="" disabled>Select Message Type</option>
                            {MESSAGE_TYPES.filter(type => !messages.some(m => m.type === type)).map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          <button className="btn-style1" onClick={handleAddMessage}>Apply</button>
                          <button className="btn-style1 outline" onClick={(e) => {
                            e.preventDefault();
                            setSelectedMessageType('');
                          }}>Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn-container">
                    <a href="#" className="btn-style1 outline" onClick={() => watcher.setValue("isCreateToolPopupOpen", false)}>
                      <div>Cancel</div>
                    </a>
                    <Btnstyle1Item114 textDiv="Submit" type="submit" onClick={handleCreateTools} />
                  </div>
                </div>
              </form>
              {submissionStatus === "success" && <WformdoneItem status={submissionStatus} />}
              {submissionStatus === "fail" && <WformfailItem status={submissionStatus} message={error} />}
            </div>
            <div data-w-id="4a1ac76e-9d23-6e8a-fa81-b7af8845c024" className="popup-close" onClick={() => watcher.setValue("isCreateToolPopupOpen", false)}><img src="../images/smarties-x.svg" loading="lazy" alt="" /></div>
          </div>
        </div >
      </div >
      <Toaster />



    </>
  );
};

export default Tools;