import React, { useEffect, useRef, useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout4 from '../components-v2/MaincontentLayout4';
import TopbarLayout5 from '../components-v2/TopbarLayout5';
import WformdoneItem from '../components-v2/WformdoneItem';
import WformfailItem from '../components-v2/WformfailItem';
import ListitemassistantItem from '../components-v2/ListitemassistantItem';
import MenuitemItem from '../components-v2/MenuitemItem';
import AssistantbuttonItem from '../components-v2/AssistantbuttonItem';
import NavlineItem from '../components-v2/NavlineItem';
import CostcontainerItem from '../components-v2/CostcontainerItem';
import CostinfoItem from '../components-v2/CostinfoItem';
import AssistanthdItem from '../components-v2/AssistanthdItem';
import CardassistanthdItem from '../components-v2/CardassistanthdItem';
import CardassistanthdleftItem from '../components-v2/CardassistanthdleftItem';
import FormcelldivItem from '../components-v2/FormcelldivItem';
import Formrow2Item from '../components-v2/Formrow2Item';
import FormcelldivItem6 from '../components-v2/FormcelldivItem6';
import SystemprompttextareaItem from '../components-v2/SystemprompttextareaItem';
import Formrow2Item7 from '../components-v2/Formrow2Item7';
import FormcelldivItem8 from '../components-v2/FormcelldivItem8';
import SelectfieldItem from '../components-v2/SelectfieldItem';
import FormsliderItem from '../components-v2/FormsliderItem';
import SliderItem from '../components-v2/SliderItem';
import ProgressItem from '../components-v2/ProgressItem';
import CardformrowItem from '../components-v2/CardformrowItem';
import CardformrowleftItem from '../components-v2/CardformrowleftItem';
import SubrowtextItem from '../components-v2/SubrowtextItem';
import SwitchdivItem from '../components-v2/SwitchdivItem';
import FormcolItem from '../components-v2/FormcolItem';
import WcheckboxItem from '../components-v2/WcheckboxItem';
import Formrow2Item9 from '../components-v2/Formrow2Item9';
import FormcelldivItem10 from '../components-v2/FormcelldivItem10';
import ReusableItem11 from '../components-v2/ReusableItem11';
import FormcolItem12 from '../components-v2/FormcolItem12';
import CardformsubrowItem from '../components-v2/CardformsubrowItem';
import RowsliderItem from '../components-v2/RowsliderItem';
import SlidercontainerItem from '../components-v2/SlidercontainerItem';
import SliderlabelItem from '../components-v2/SliderlabelItem';
import Formcontrol2Item from '../components-v2/Formcontrol2Item';
import ReusableItem13 from '../components-v2/ReusableItem13';
import ToolsearchItem from '../components-v2/ToolsearchItem';
import Divblock9Item from '../components-v2/Divblock9Item';
import WcheckboxItem14 from '../components-v2/WcheckboxItem14';
import ReusableItem15 from '../components-v2/ReusableItem15';
import ReusableItem16 from '../components-v2/ReusableItem16';
import AddformsubItem from '../components-v2/AddformsubItem';
import Formrow2Item17 from '../components-v2/Formrow2Item17';
import CreatefunctionItem from '../components-v2/CreatefunctionItem';
import CardformsubrowItem18 from '../components-v2/CardformsubrowItem18';
import RowsliderItem19 from '../components-v2/RowsliderItem19';
import Formrow2Item20 from '../components-v2/Formrow2Item20';
import FormcelldivItem21 from '../components-v2/FormcelldivItem21';
import FormcolItem22 from '../components-v2/FormcolItem22';
import FormcelldivItem23 from '../components-v2/FormcelldivItem23';
import Formrow2Item24 from '../components-v2/Formrow2Item24';
import FormcelldivItem25 from '../components-v2/FormcelldivItem25';
import FirstmessagetextareaItem from '../components-v2/FirstmessagetextareaItem';
import CardformrowItem26 from '../components-v2/CardformrowItem26';
import CardformrowleftItem27 from '../components-v2/CardformrowleftItem27';
import ReusableItem28 from '../components-v2/ReusableItem28';
import CardformrowItem29 from '../components-v2/CardformrowItem29';
import RowselectItem from '../components-v2/RowselectItem';
import CardformrowItem30 from '../components-v2/CardformrowItem30';
import CardformrowItem31 from '../components-v2/CardformrowItem31';
import CardformrowleftItem32 from '../components-v2/CardformrowleftItem32';
import Divblock12Item from '../components-v2/Divblock12Item';
import ReusableItem33 from '../components-v2/ReusableItem33';
import Formrow2Item34 from '../components-v2/Formrow2Item34';
import Formrow2Item35 from '../components-v2/Formrow2Item35';
import FormcolItem36 from '../components-v2/FormcolItem36';
import FormcelldivItem37 from '../components-v2/FormcelldivItem37';
import Formrow2Item38 from '../components-v2/Formrow2Item38';
import FormcolItem39 from '../components-v2/FormcolItem39';
import SidemenulabeldivItem from '../components-v2/SidemenulabeldivItem';
import SidemenuitemItem from '../components-v2/SidemenuitemItem';
import ReusableItem from '../components-v2/ReusableItem';
import SidemenuitemItem40 from '../components-v2/SidemenuitemItem40';
import SvgiconItem from '../components-v2/SvgiconItem';
import Layer1Item from '../components-v2/Layer1Item';
import ReusableItem1 from '../components-v2/ReusableItem1';
import SvgiconItem2 from '../components-v2/SvgiconItem2';
import Layer1Item3 from '../components-v2/Layer1Item3';
import { ASSISTANT, SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import AssistantWatcher from '../../api/client/watchers/vapi/AssistantWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import KnowledgeBaseWatcher from '../../api/client/watchers/KnowledgeBaseWatcher';
import Loader from '../components-v2/common/Loader';
import Formrow2Itemkb from '../components-v2/Formrow2Itemkb';
import { Toaster } from 'sonner';
import Client from '../../api/client/Client';
import MultiSelectDropdown from '../custom/MultiSelectDropdown';
import ToolsWatcher from '../../api/client/watchers/vapi/ToolsWatcher';
import AvatarInitials from '../custom/AvatarInitials';
import { useLocation } from 'react-router-dom';

const Assistant = () => {
  const watcher = useRef(AssistantWatcher).current;
  const kbWatcher = useRef(KnowledgeBaseWatcher).current;
  const listRef = useRef(null);
  const chatRef = useRef(null);
  const [kbList, setKbList] = useState([]);
  const [selectedKb, setSelectedKb] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [formData, setFormData] = useState({
    name: ''
  });
  const [newMessage, setNewMessage] = useState("");
  const location = useLocation();

  useWatcher(watcher);
  useWatcher(kbWatcher);


  useEffect(() => {
    if (location.state?.openModal) {
      watcher.setValue(ASSISTANT.IS_ASSISTANT_POPUP_OPEN, true)
    }
  }, [location.state]);

  const isAssistantSectionOpen = watcher.getValue("isAssistantSectionOpen");
  const isAssistantPopupOpen = watcher.getValue(ASSISTANT.IS_ASSISTANT_POPUP_OPEN);
  const selectedAssistant = watcher.getValue(ASSISTANT.SELECTED_ASSISTANT);
  const isChatOpen = watcher.getValue('isChatOpen');
  const selectedAssistantDB = watcher.getValue("dbAssistant");
  const assistantDataModel = watcher.getValue(ASSISTANT.MODEL);

  const isLoading = watcher.getValue("isLoadingAssistants");
  const assistants = watcher.Assistants;
  const isCallActive = watcher.getValue('callActive');
  const isLoadingCall = watcher.getValue('isCallLoading');
  const chats = watcher.getValue("chats") || [];
  const voiceList = watcher.getValue("voicesList") || [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    watcher.setValue("isLoadingAssistants", true);
    watcher.listen();
    watcher.fetchAllAssistants();
    watcher.fetchVoices();
    return () => {
      watcher.clear();
      watcher.removeListener();
      watcher.endCall();
    };
  }, []);


  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // If we're near the bottom (within 20px) and not currently loading
    if (scrollHeight - scrollTop - clientHeight < 20 && !isLoading) {
      watcher.fetchAllAssistants({ isLoadmore: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await watcher.createAssistant(formData);
    watcher.setValue(ASSISTANT.IS_ASSISTANT_POPUP_OPEN, false);
  };

  const fetchKbList = async () => {
    const res = await kbWatcher.fetchKnowledgeBase();
    setKbList(res);
    if (res && res.length > 0) {
      const matchingKb = res.find(kb => kb.collectionid === selectedAssistantDB.kbcollectionid);
      if (matchingKb) {
        setSelectedKb(matchingKb.collectionid);
        watcher.setValue("assistantKnowledgeBase", matchingKb.collectionid);
      } else {
        setSelectedKb(res[0].id);
        watcher.setValue("assistantKnowledgeBase", res[0].collectionid);
      }
    }
  };

  const fetchVoice = async () => {
    if (voiceList && voiceList.length > 0) {
      const matchingVoice = voiceList.find(voice => voice.voiceid === selectedAssistantDB.voice);
      if (matchingVoice) {
        setSelectedVoice(matchingVoice.voiceid);
        watcher.setValue("assistantVoice", matchingVoice);
      } else {
        setSelectedVoice(voices[0].voiceid);
        watcher.setValue("assistantVoice", voices[0]);
      }
    }
  }

  const fetchAllTools = async () => {
    setIsLoadingTools(true);
    await toolsWatcher.fetchAllTools();
    setIsLoadingTools(false);
  };

  useEffect(() => {
    if (selectedAssistantDB) {
      fetchKbList();
      fetchVoice();
      fetchAllTools();
      watcher.setValue("assistantName", selectedAssistantDB.name);
      watcher.setValue("firstMessage", selectedAssistantDB.firstmessage);
      const systemPrompt = selectedAssistantDB.systemprompt;
      watcher.setValue("systemPrompt", systemPrompt);
    }
  }, [selectedAssistantDB]);

  let assistantName = watcher.getValue("assistantName");
  let firstMessage = watcher.getValue("firstMessage");
  let messages = watcher.getValue("systemPrompt");

  const handleKbChange = (e) => {
    setSelectedKb(e.target.value);
    watcher.setValue("assistantKnowledgeBase", e.target.value);
  };

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
    const matchingVoice = voiceList.find(voice => voice.voiceid === e.target.value);
    watcher.setValue("assistantVoice", matchingVoice);
  };

  // Chats

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chats]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    // if (newMessage.trim() === "") return;

    // const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // const message = {
    //     id: messages.length + 1,
    //     text: newMessage,
    //     sender: "me",
    //     time: currentTime
    // };

    // setMessages([...messages, message]);
    // setNewMessage("");

    watcher.handleSendChat(newMessage);
    setNewMessage(""); // Clear the input field after sending
  };

  //---------------Tools-------------------//

  const toolsWatcher = useRef(ToolsWatcher).current;
  const [selectedTools, setSelectedTools] = useState([]);
  const [isLoadingTools, setIsLoadingTools] = useState(false);
  useWatcher(toolsWatcher);
  const tools = toolsWatcher.Tools;

  const assistantTools = watcher.getValue("selectedTools");

  // Update selected tools when selectedAssistant changes
  useEffect(() => {
    if (selectedAssistantDB && selectedAssistantDB.toolidsList) {
      setSelectedTools(selectedAssistantDB.toolidsList);
      const selectedToolObjects = tools.filter(tool => selectedAssistantDB.toolidsList.includes(tool.id));
      watcher.setValue("selectedTools", selectedToolObjects);
    }
  }, [isLoadingTools]);

  const handleToolChange = (event) => {
    const selectedIds = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedTools(selectedIds);
    const selectedToolObjects = tools.filter(tool => selectedIds.includes(tool.id));
    watcher.setValue("selectedTools", selectedToolObjects);
  };

  return (
    <>
      <div className="page-wrap">
        <MaincontentLayout4>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Assistant Configuration</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            <div className="mainwidth-control">
              <div className="assistant-main-container">
                <div className="sidebar-assistant">
                  <a data-w-id="afafd7a2-890e-f397-22fe-a3f2fc28385d" href="#" className="btn-style1 w-inline-block" onClick={() => watcher.setValue(ASSISTANT.IS_ASSISTANT_POPUP_OPEN, true)} >
                    <div className="btn-icon"><img src="../images/Search.svg" loading="lazy" alt="" /></div>
                    <div>Create Assistant</div>
                  </a>
                  <div className="search-formblock w-form">
                    <form id="wf-form-search-form" name="wf-form-search-form" data-name="search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="9aaf37b2-a011-864e-493e-ccb9979ed0bd">
                      <div className="form-body">
                        <div className="form-row mb-0">
                          <input
                            className="inbox-search w-input"
                            maxlength="256"
                            name="search-2"
                            data-name="Search 2"
                            placeholder="Search"
                            type="text"
                            id="search-2"
                            required
                            onChange={(e) => watcher.searchAssistants(e.target.value)}
                          /></div>
                      </div>
                    </form>
                    <WformdoneItem />
                    <WformfailItem />
                  </div>
                  <div ref={listRef}
                    className="list-assistant"
                    style={{
                      maxHeight: 'calc(100vh - 200px)',
                      overflowY: 'auto',
                      padding: '10px',
                      scrollBehavior: 'smooth'
                    }}
                    onScroll={handleScroll}
                  >
                    {isLoading ? <Loader /> : (
                      assistants.length ? assistants.map((assistant) => (
                        <ListitemassistantItem key={assistant.id} assistant={assistant} />
                      )) : "No assistants found"
                    )}
                  </div>
                </div>
                {isAssistantSectionOpen ? (
                  <div className="assistant-content">
                    <div className="assistant-controls">
                      <div className="assistant-name-details">
                        <div className="text-assistant-name">{selectedAssistant.name}</div>
                        <div className="text-assistant-details">{selectedAssistant.id}</div>
                      </div>
                      <div className="assistant-buttons-div">
                        {/* <div className="button-edit"><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a13cc00a2604de3bd_smarties-icon-pencil.svg" loading="lazy" className="smarties-icon-pencil" /></div>
                        <div className="button-test">
                          <div className="button-label">Test</div><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0b46c4c1e4c0be5746_smarties-icon-play.svg" loading="lazy" className="smarties-icon-play" />
                        </div> */}
                        <div className="button-chat" onClick={() => watcher.setValue('isChatOpen', true)}>
                          <div className="button-label">Chat</div><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a33e4300a494891b6_smarties-icon-chat.svg" loading="lazy" className="smarties-icon-chat" />
                        </div>
                        <div className="button-call-contain">
                          <div data-w-id="379fe386-af88-ed7e-3780-62a6bbc10947" className="button-talk-to-assistant"
                            style={{ backgroundColor: isCallActive ? "#e14617" : "", opacity: isLoadingCall ? 0.5 : 1, pointerEvents: isLoadingCall ? 'none' : 'auto' }}
                            onClick={() => isCallActive ? watcher.endCall() : watcher.talkToAssistant()}
                          >
                            {isLoading ? <Loader text='Connecting...' size={12} /> :
                              <>
                                <div className="button-label-orange" style={{ color: isCallActive ? '#fff' : '' }}>{isCallActive ? "End Call" : "Talk to Assistant"}</div>
                                <div className="fluentchat-28-regular" style={{ display: isCallActive ? 'none' : '' }}><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0afa140afcbeae1062_smarties-icon-call.svg" loading="lazy" className="smarties-icon-call" />
                                </div>
                              </>}
                          </div>
                          <div className="button-loading">
                            <div className="button-label">Connecting</div>
                            <div className="lottie-animation" data-w-id="dc3a33ce-7c91-d3be-d5a5-3d70277e78c7" data-animation-type="lottie" data-src="../documents/smarties-loading-animation-3.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0" data-duration="1.7666666666666666"></div>
                          </div>
                          <div data-w-id="592e4b93-831d-c748-76be-b78928ce6855" className="button-end-call">
                            <div className="button-label-orange-copy">End Call</div>
                            <div className="fluentchat-28-regular"><img width="15" height="15" alt="" src="../images/smarties-endcall.svg" loading="lazy" className="smarties-icon-call" /></div>
                          </div>
                        </div>
                        <div>
                          <div data-delay="0" data-hover="false" className="dropdown-publish w-dropdown" >
                            <div className="dropdown-publish-toggle w-dropdown-toggle" onClick={() => watcher.publishAssistant()} style={{ opacity: watcher.getValue("LoadingPublishAssistant") || isCallActive ? 0.5 : 1, pointerEvents: watcher.getValue("LoadingPublishAssistant") || isCallActive ? 'none' : 'auto' }}>
                              <div className="icon-3 w-icon-dropdown-toggle"></div>
                              <div>Publish{watcher.getValue("LoadingPublishAssistant") && 'ing...'}</div>
                            </div>
                            {/* <nav className="dropdown-list w-dropdown-list">
                              <a href="#" className="dropdown-link w-dropdown-link">View Changes</a>
                              <a href="#" className="dropdown-link w-dropdown-link">Discard Changes</a>
                            </nav> */}
                          </div>
                        </div>
                        <div className="assistant-menu">
                          {/* <div data-w-id="379fe386-af88-ed7e-3780-62a6bbc10959" className="button-menu"><img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg" loading="lazy" className="smarties-icon-menu" /></div> */}
                          <div className="menu-dropdown">
                            <MenuitemItem src="../images/smarties-icon-version.svg" textDiv="Version History" />
                            <MenuitemItem src="../images/smarties-icon-document.svg" textDiv="Call Logs" />
                            <MenuitemItem src="../images/smarties-icon-duplicate.svg" textDiv="Duplicate" />
                            <MenuitemItem src="../images/smarties-icon-delete_outline.svg" textDiv="Delete" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="assistant-nav-div">
                      <div className="assistant-nav">
                        <AssistantbuttonItem id="model" href="#section-model" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce453b478ee39320e500b_smarties-icon-model.svg" textDiv="Model" />
                        <div className="nav-line"></div>
                        <AssistantbuttonItem id="transcriber" href="#section-transcriber" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce456d66657258663032a_smarties-icon-transcriber.svg" textDiv="Transcriber" />
                        <div className="nav-line"></div>
                        <AssistantbuttonItem id="voice" href="#section-voice" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce456a9e81cf11c50971a_smarties-icon-voice.svg" textDiv="Voice" />
                        <NavlineItem />
                        <AssistantbuttonItem id="tools" href="#section-tools" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4581ad40a3c6f5d8afc_smarties-icon-tools.svg" textDiv="Tools" />
                        <NavlineItem />
                        <AssistantbuttonItem id="analysis" href="#section-analysis" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4cbb0e61fe94039c0c0_smarties-icon-analysis.svg" textDiv="Analysis" />
                        <NavlineItem />
                        <AssistantbuttonItem id="advanced" href="#section-advanced" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4581ad40a3c6f5d8afc_smarties-icon-tools.svg" textDiv="Advanced" />
                        <NavlineItem />
                      </div>
                    </div> */}
                    <div id="scroll-container" className="assistant-main-content">
                      <div className="w-form">
                        <form id="wf-form-Assistant-Settings-Form" name="wf-form-Assistant-Settings-Form" data-name="Assistant Settings Form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="379fe386-af88-ed7e-3780-62a6bbc10981">
                          {/* <div className="assistant-summary">
                            <CostcontainerItem textDiv="Cost" textDiv1="~$0.08 /min" />
                            <CostcontainerItem textDiv="Latency" textDiv1="~600 ms" />
                          </div> */}
                          {!selectedAssistantDB ? <Loader /> :
                            <section id="section-model" className="assistant-section">
                              <AssistanthdItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb3039ccd3756bdd97431_smarties-icon-model.svg" textDiv="Model" width="24" height="24" />
                              <div className="assistant-cards-container">
                                <div className="card-assistant">
                                  <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10999" textDiv="Model" textDiv1="Configure the behavior of the assistant." />
                                  <div className="card-assistant-content">
                                    <div className="card-content-model">
                                      <div className="col-assistant-model">
                                        <div className="form-row-2">
                                          <FormcelldivItem textLabel="Assistant Name" name="Assistant-Name" dataName="Assistant Name" placeholder="Leo" id="Assistant-Name" value={assistantName} onChange={(e) => watcher.setValue("assistantName", e.target.value)} />
                                        </div>
                                        <div className="form-row-2">
                                          <div className="form--cell-div"><label htmlFor="" className="form-label-2">First Message</label>
                                            <div className="first-message-textarea">
                                              <div className="form-textararea-div"><textarea id="First-Message" name="First-Message" maxlength="5000" data-name="First Message" placeholder="Hi there! I'm Leo, your go-to for any SmartHome Innovations queries. How can I assist you today?" className="form-input-textarea w-input" value={firstMessage} onChange={(e) => watcher.setValue("firstMessage", e.target.value)}></textarea></div>
                                            </div>
                                          </div>
                                        </div>
                                        <Formrow2Item id="System-Prompt" name="System-Prompt" dataName="System Prompt" value={messages} onChange={(e) => watcher.setValue("systemPrompt", e.target.value)} />
                                      </div>
                                      <div className="model-settings">
                                        <div className="form-hd-small">Model Settings</div>
                                        <div className="model-settings-container">
                                          <Formrow2Item7 textLabel="Provider" id="Provider" name="Provider" dataName="Provider" textOption="openai" textOption1="Select one..."
                                            options={[
                                              { label: selectedAssistant.model.provider, value: selectedAssistant.model.provider },
                                            ]}
                                            value={selectedAssistant.modelprovider}
                                            onChange={(e) => watcher.setAssistantConfig(ASSISTANT.MODEL, "provider", e.target.value)}
                                          />
                                          <Formrow2Item7 textLabel="Model" id="Model" name="Model" dataName="Model" textOption="gpt-3.5-turbo" textOption1="Select one..."
                                            options={[
                                              { label: selectedAssistant.model.model, value: selectedAssistant.model.model },
                                            ]}
                                            value={selectedAssistant.model}
                                            onChange={(e) => watcher.setAssistantConfig(ASSISTANT.MODEL, "model", e.target.value)}
                                          />
                                          <Formrow2Itemkb textLabel="Files" id="Files" name="Files" dataName="Files" textOption="First choice" textOption1="Select Files" options={kbList} value={selectedKb} onChange={handleKbChange} />
                                          {/* <div className="form-row-2">
                                            <div className="form--cell-div">
                                              <div className="temperature-div"><label htmlFor="" className="form-label-2">Temperature</label>
                                                <div className="form-control-2 small"><input className="form-input small w-input" maxlength="256" name="Temperature" data-name="Temperature" placeholder="0.7" type="number" id="Temperature" required /></div>
                                              </div>
                                              <FormsliderItem />
                                            </div>
                                          </div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          }
                          {/* <section id="section-transcriber" className="assistant-section">
                            <AssistanthdItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb39440e5bb4abe33c31d_smarties-icon-transcriber.svg" textDiv="Transcriber" width="24" height="24" />
                            <div className="assistant-cards-container">
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc109e9" textDiv="Transcriber" textDiv1="Configure the behavior of the transcriber." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <Formrow2Item7 textLabel="Provider" id="transcriber-provider" name="transcriber-provider" dataName="Transcriber Provider" value="deepgram" textOption="deepgram" textOption1="Select one..." />
                                      <Formrow2Item7 textLabel="Model" id="transcriber-provider-2" name="transcriber-provider-2" dataName="Transcriber Provider 2" value="deepgram" textOption="deepgram" textOption1="Select one..." />
                                      <CardformrowItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfc7e46f2135cf7a6b901_smarties-icon-sound.svg" textDiv="Background Denoising Enabled" textDiv1="Filter background noise while the user is talking." />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                         */}
                          <section id="section-voice" className="assistant-section">
                            <AssistanthdItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb394934718ed4b4076d9_smarties-icon-voice.svg" textDiv="Voice" width="24" height="24" />
                            <div className="assistant-cards-container">
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10a13" textDiv="Voice Configuration" textDiv1="Select a voice from the list, or sync your voice library if it's missing. If errors persist, enable custom voice and add a voice ID." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <div className="form-row-2 flex">
                                        <FormcolItem textLabel="Provider" id="Voice-Provider" name="Voice-Provider" dataName="Voice Provider" textOption="Select one..."
                                          options={[
                                            { label: "vapi", value: "vapi" },
                                          ]}
                                          value={selectedAssistant.voiceProvider}
                                          onChange={(e) => watcher.setAssistantConfig(ASSISTANT.VOICE_CONFIGURATION, "provider", e.target.value)}
                                        />
                                        <FormcolItem textLabel="Voice" id="Voice-Voice" name="Voice-Voice" dataName="Voice Voice" textOption="Select one..."
                                          options={voiceList.map((v) => ({
                                            label: v.name,
                                            value: v.voiceid
                                          }))}
                                          value={selectedVoice}
                                          onChange={handleVoiceChange}
                                        />
                                      </div>
                                      {/* <div className="form-row-2 flex">
                                        <div className="form-col">
                                          <div className="form--cell-div"><WcheckboxItem name="checkbox" id="checkbox" dataName="Checkbox" htmlFor="checkbox" textSpan="Add Voice ID Manually" /></div>
                                        </div>
                                      </div>
                                      <Formrow2Item9 textLabel="Model" textDiv="This is the model that will be used." id="Voice-Model" name="Voice-Model" dataName="Voice Model" textOption="Select one..." /> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10a3c" textDiv="Additional Configuration" textDiv1="Configure additional settings for the voice of your assistant." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <div className="form-row-2 flex">
                                        <FormcolItem textLabel="Background Sound" id="Background-Sound" name="Background-Sound" dataName="Background Sound" textOption="Select one..." />
                                        <FormcolItem12 textLabel="Background Sound URL" name="Background-Sound-URL" dataName="Background Sound URL" id="Background-Sound-URL" />
                                        <FormcolItem12 textLabel="Input Min Characters" name="Input-Min-Characters" dataName="Input Min Characters" id="Input-Min-Characters" />
                                      </div>
                                      <Formrow2Item9 textLabel="Punctuation Boundaries" textDiv="These are the punctuations that are considered valid boundaries or delimiters. This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in." id="Punctuation-Boundaries" name="Punctuation-Boundaries" dataName="Punctuation Boundaries" textOption="No Punctuations Boundaries Added" />
                                      <div className="card-form-row flex">
                                        <div className="div-block-2">
                                          <CardformrowleftItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df7e1435a52177a969893_smarties-icon-speed.svg" textDiv="Custom Speed Enabled" textDiv1="Enable precise control over voice speed with a custom slider. When disabled, preset speeds will be used." />
                                          <SwitchdivItem />
                                          <MenuitemItem src="../images/smarties-icon-version.svg" textDiv="Version History" />
                                        </div>
                                        <div className="card-form-row-content">
                                          <CardformsubrowItem textDiv="Speed" textDiv1="Normal" />
                                          <div className="line-horizontal"></div>
                                          <CardformsubrowItem textDiv="Anger" textDiv1="none" />
                                          <CardformsubrowItem textDiv="Positivity" textDiv1="none" />
                                          <CardformsubrowItem textDiv="Surprise" textDiv1="none" />
                                          <CardformsubrowItem textDiv="Sadness" textDiv1="none" />
                                          <CardformsubrowItem textDiv="Curiosity" textDiv1="none" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </section>
                          {assistantTools &&
                            <section id="section-tools" className="assistant-section">
                              <AssistanthdItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb394c0c53c3cc4a9906b_smarties-icon-tools.svg" textDiv="Tools" width="24" height="24" />
                              <div className="assistant-cards-container">
                                <div className="card-assistant">
                                  <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10ae5" textDiv="Tools" textDiv1="Tools enable voicebots to perform actions during calls. Add tools from the" />
                                  <div className="card-assistant-content">
                                    <div className="card-content">
                                      <div className="col-assistant-model">
                                        <div className="form-row-2">
                                          <div style={{ width: '100%' }}>
                                            <MultiSelectDropdown
                                              id="Analysis-Structured-Data-Type-2"
                                              name="Analysis-Structured-Data-Type-2"
                                              options={tools}
                                              selectedValues={selectedTools}
                                              onChange={handleToolChange}
                                              placeholder="Select tools"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10b11" textDiv="Predefined Functions" textDiv1="We've pre-built functions for common use cases. You can enable them and configure them below." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <CardformrowItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df8b83f0ea54f89e5f916_smarties-icon-endcall.svg" textDiv="Enable End Call Function" textDiv1="This will allow the assistant to end the call from its side. (Best for gpt-4 and bigger models.)" />
                                      <CardformrowItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df8b69fd0be54a895dd18_smarties-icon-keypad.svg" textDiv="Dial Keypad" textDiv1="This sets whether the assistant can dial digits on the keypad. Read More" />
                                      <div className="form-row-2 flex">
                                        <div className="form-col">
                                          <div className="form--cell-div"><label htmlFor="" className="form-label-2">Phone number</label>
                                            <div className="form-control-2">
                                              <div className="form-button-group">
                                                <div className="select-phone-number"><select id="tool-phone-number" name="tool-phone-number" data-name="Tool Phone Number" className="select-field group w-select">
                                                  <option value="">US</option>
                                                  <option value="deepgram">deepgram</option>
                                                  <option value="Second">Second choice</option>
                                                  <option value="Third">Third choice</option>
                                                </select></div>
                                                <div className="input-phone-number"><input className="form-input group w-input" maxlength="256" name="Background-Sound-URL-2" data-name="Background Sound URL 2" placeholder="+1 (555) 000-0000" type="tel" id="Background-Sound-URL-2" required /></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10b3e" textDiv="Custom Functions" textDiv1="Define your custom functions here to enhance your assistant's capabilities. You can use your own code or tools like Pipedream or Make for the Setup." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <div className="form-banner">Note: Tools have different Request and Response format as compared to Functions. Check our tools guide for more details</div>
                                      <Formrow2Item17 />
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              </div>
                            </section>}
                          {/* <section id="section-analysis" className="assistant-section">
                            <AssistanthdItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681ce4cbb0e61fe94039c0c0_smarties-icon-analysis.svg" textDiv="ANALYSIS" width="24" height="24" />
                            <div className="assistant-cards-container">
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10b59" textDiv="Summary" textDiv1="This is the prompt that's used to summarize the call. The output is stored in call.analysis.summary . You can also find the summary in the Call Logs Page." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <Formrow2Item id="System-Prompt-2" name="System-Prompt-2" dataName="System Prompt 2" />
                                      <Formrow2Item9 textLabel="Success Evaluation Rubric" textDiv="This enforces the rubric of the evaluation upon the Success Evaluation." id="Analysis-Success-Evaluation-Rubric" name="Analysis-Success-Evaluation-Rubric" dataName="Analysis Success Evaluation Rubric" textOption="No Punctuations Boundaries Added" />
                                      <CardformsubrowItem18 />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10b87" textDiv="Structured Data" textDiv1="Extract structured data from call conversation. You can use Data Schema standalone or in combination with Structured Data Prompt. If both are provided, they are concatenated into appropriate instructions." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <Formrow2Item20 />
                                      <CardformsubrowItem18 />
                                      <div>
                                        <div className="card-form-row flex structure-data">
                                          <div className="card-structured-data">
                                            <div className="card-form-row-content">
                                              <div>
                                                <div>
                                                  <div className="form-row-2 flex">
                                                    <FormcolItem22 textLabel="Name" name="Background-Sound-URL-3" dataName="Background Sound URL 3" id="Background-Sound-URL-3" />
                                                    <div className="form-col">
                                                      <div className="form--cell-div"><label htmlFor="" className="form-label-2">Type</label>
                                                        <div className="div-block-13">
                                                          <div className="form-control-2 _40"><SelectfieldItem id="Analysis-Structured-Data-Type" name="Analysis-Structured-Data-Type" dataName="Analysis Structured Data Type" value="deepgram" textOption="deepgram" textOption1="String" /></div>
                                                          <div className="checbox-small"><WcheckboxItem name="checkbox-3" id="checkbox-3" dataName="Checkbox 3" htmlFor="checkbox-3" textSpan="Is Enum" /></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="form-col">
                                                      <div className="form--cell-div"><label htmlFor="" className="form-label-2">Required</label>
                                                        <div className="form-control-2"><WcheckboxItem name="Analysis-Structured-Data-Required" id="Analysis-Structured-Data-Required" dataName="Analysis Structured Data Required" htmlFor="Analysis-Structured-Data-Required" textSpan="Mark as required" /></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <Formrow2Item24 />
                                            <div className="btn-icon-delete"><img loading="lazy" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681d2106bd82e64bf878b407_smarties-icon-delete.svg" alt="" /></div>
                                          </div>
                                        </div>
                                        <AddformsubItem />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section id="section-advanced" className="assistant-section">
                            <AssistanthdItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb394f4a57d79337a4b5d_smarties-icon-advanced.svg" textDiv="advanced" width="19" height="19" />
                            <div className="assistant-cards-container">
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10be5" textDiv="Privacy" textDiv1="This section allows you to configure the privacy settings for the assistant." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <CardformrowItem src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa190e2f26fe8c3c6d97_smarties-icon-lock.svg" textDiv="HIPAA Compliance" textDiv1="When this is enabled, no logs, recordings, or transcriptions will be stored." />
                                      <CardformrowItem26 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18f667ce45112f5bf4_smarties-icon-card.svg" textDiv="PCI Compliance" textDiv1="When enabled, only PCI-compliant providers can be selected." />
                                      <CardformrowItem29 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa188f64b8715716271d_smarties-icon-mic.svg" textDiv="Audio Recording" textDiv1="Record the conversation with the assistant." id="Advanced-Audio-Recording" name="Advanced-Audio-Recording" dataName="Advanced Audio Recording" textOption="Select Format" />
                                      <CardformrowItem26 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa188f64b87157162717_smarties-icon-video.svg" textDiv="Video Recording" textDiv1="Enable or disable video recording during a web call. This will record the video of your user." />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10c1e" textDiv="Start Speaking Plan" textDiv1="This is the plan for when the assistant should start talking." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <CardformrowItem30 textDiv="Wait seconds" textDiv1="This is how long assistant waits before speaking." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg" />
                                      <CardformrowItem29 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa1891c8ba4fdcc6eb33_smarties-icon-smart.svg" textDiv="Smart Endpointing" textDiv1="Enable for more accurate speech endpoint detection. LiveKit is only available in English." id="Advanced-Audio-Recording-2" name="Advanced-Audio-Recording-2" dataName="Advanced Audio Recording 2" textOption="Select Format" />
                                      <CardformrowItem30 textDiv="On Punctuation Seconds" textDiv1="Minimum seconds to wait after transcription ending with punctuation." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg" />
                                      <CardformrowItem30 textDiv="On No Punctuation Seconds" textDiv1="Minimum seconds to wait after transcription ending without punctuation." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg" />
                                      <CardformrowItem30 textDiv="On Number Seconds" textDiv1="Minimum seconds to wait after transcription ending with a number." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10c96" textDiv="Voicemail Detection" textDiv1="Configure how the assistant detects and handles voicemail." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <CardformrowItem29 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfaf13b9a15e7280b3bf2_smarties-icon-hourglass.svg" textDiv="Voicemail Detection Provider" textDiv1="Vapi uses advanced AI for detection. Google/OpenAI use simpler models. Twilio uses traditional AMD." id="Advanced-Voicemail-Detection" name="Advanced-Voicemail-Detection" dataName="Advanced Voicemail Detection" textOption="Off" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10cae" textDiv="Start Speaking Plan" textDiv1="This is the plan for when the assistant should start talking." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <CardformrowItem30 textDiv="Number of words" textDiv1="This is the number of words that the customer has to say before the assistant will stop talking." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa2658c410b30f86ec35_smarties-icon-number.svg" />
                                      <CardformrowItem30 textDiv="Voice seconds" textDiv1="This is the seconds customer has to speak before the assistant stops talking." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg" />
                                      <div className="card-form-row">
                                        <div className="card-form-row-left">
                                          <div className="smarties-icon-card-row"><img width="34" height="34" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg" loading="lazy" /></div>
                                          <div className="card-form-row-text">
                                            <div className="card-form-row-text">Back off seconds</div>
                                            <div className="card-form-row-description">This is the seconds to wait before the assistant will start talking again after being interrupted.</div>
                                          </div>
                                        </div>
                                        <RowsliderItem19 />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10d02" textDiv="Call Timeout Settings" textDiv1="Configure when the assistant should end a call based on silence or duration." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <CardformrowItem30 textDiv="Silence Timeout" textDiv1="How long to wait before a call is automatically ended due to inactivity." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg" />
                                      <CardformrowItem30 textDiv="Maximum Duration" textDiv1="The maximum number of seconds a call will last." src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df7e1435a52177a969893_smarties-icon-speed.svg" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10d3e" textDiv="Keypad Input Settings" textDiv1="Configure whether a user can input digits via the keypad, and when to process the input." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <CardformrowItem26 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681df8b69fd0be54a895dd18_smarties-icon-keypad.svg" textDiv="Enable Keypad Input" textDiv1="Accept user input via the keypad" />
                                      <CardformrowItem31 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg" textDiv="Timeout" textDiv1="The number of seconds to wait before processing the user's keypad input.Set to 0 to only wait for a delimiter." />
                                      <div className="card-form-row">
                                        <CardformrowleftItem32 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa2658c410b30f86ec35_smarties-icon-number.svg" textDiv="Delimiter" textDiv1="A character that will be used to determine when to process the user's keypad input.If both delimiter and timeout are set, the first to be reached will cause the input to be processed." />
                                        <div className="div-block-13">
                                          <ReusableItem33 textSpan="#" />
                                          <ReusableItem33 textSpan="*" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-assistant">
                                <CardassistanthdItem dataWId="379fe386-af88-ed7e-3780-62a6bbc10d83" textDiv="Messaging" textDiv1="Message configuration for messages that are sent to and from the assistant." />
                                <div className="card-assistant-content">
                                  <div className="card-content">
                                    <div className="col-assistant-model">
                                      <div className="card-structured-data">
                                        <div>Server Settings</div>
                                        <div className="card-form-row-content">
                                          <div>
                                            <div>
                                              <Formrow2Item34 id="Analysis-Structured-Data-Type-2" name="Analysis-Structured-Data-Type-2" dataName="Analysis Structured Data Type 2" textOption="String" />
                                            </div>
                                          </div>
                                        </div>
                                        <Formrow2Item24 />
                                      </div>
                                      <Formrow2Item20 />
                                      <CardformsubrowItem18 />
                                      <div>
                                        <div className="card-form-row flex structure-data">
                                          <div className="form-row-2 flex">
                                            <div className="text-form-sub">Server Settings</div>
                                          </div>
                                          <Formrow2Item34 id="Advanced-Server-Settings" name="Advanced-Server-Settings" dataName="Advanced Server Settings" textOption="Select one..." />
                                          <div className="form-row-2 flex">
                                            <FormcolItem22 textLabel="Secret Token" name="Messaging-Server-Token" dataName="Messaging Server Token" id="Messaging-Server-Token" />
                                            <FormcolItem22 textLabel="Timeout (seconds)" name="Messaging-Timeout-seconds" dataName="Messaging Timeout Seconds" id="Messaging-Timeout-seconds" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-row-2">
                                        <div className="card-form-row flex structure-data">
                                          <div className="form-row-2 flex">
                                            <ReusableItem11 textLabel="HTTP Headers" textDiv="Custom HTTP headers to include in API requests to your server" />
                                            <div className="add-form-sub small"><img width="18" height="18" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cddae22e0050186cea03e_smarties-icon-add-circle.svg" loading="lazy" />
                                              <div className="text-18">Create New Tool</div>
                                            </div>
                                          </div>
                                          <Formrow2Item17 />
                                        </div>
                                      </div>
                                      <Formrow2Item35 textLabel="Client Messages" textDiv="These are the messages that will be sent to the Client SDKs." dataWId="379fe386-af88-ed7e-3780-62a6bbc10df3" />
                                      <Formrow2Item35 textLabel="Server Messages" textDiv="These are the messages that will be sent to the Server URL configured." dataWId="379fe386-af88-ed7e-3780-62a6bbc10e17" />
                                      <Formrow2Item38 textLabel="Voicemail Message" textDiv="This is the message that the assistant will say if the call is forwarded to voicemail." id="Voicemail-Message" name="Voicemail-Message" dataName="Voicemail Message" placeholder="Hi, you've reached Leo at SmartHome Innovations. Sorry I missed your call. Please leave a message, and I'll get back to you as soon as possible." />
                                      <Formrow2Item38 textLabel="End Call Message" textDiv="This is the message that the assistant will say if the call is ended." id="End-Call-Message" name="End-Call-Message" dataName="End Call Message" placeholder="Thanks for reaching out to SmartHome Innovations. It was great assisting you. Have a wonderful day!" />
                                      <div className="form-row-2">
                                        <div className="card-form-row flex structure-data">
                                          <div className="form-row-2">
                                            <ReusableItem11 textLabel="Idle Messages" textDiv="Messages that the assistant will speak when the user hasn't responded." />
                                            <div className="form-control-2"><SelectfieldItem id="Advanced-Server-Idle-Messages" name="Advanced-Server-Idle-Messages" dataName="Advanced Server Idle Messages" value="deepgram" textOption="deepgram" textOption1="Select idle messages" /></div>
                                          </div>
                                          <CardformrowItem31 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e64fc824d6014684_smarties-icon-message.svg" textDiv="Max Idle Messages" textDiv1="Maximum number of times idle messages can be spoken during the call." />
                                          <CardformrowItem31 src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa2658c410b30f86ec35_smarties-icon-number.svg" textDiv="Idle Timeout" textDiv1="Timeout in seconds before an idle message is spoken." />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section> */}
                        </form>
                        <WformdoneItem />
                        <WformfailItem />
                      </div>
                    </div>
                  </div>) : (
                  isAssistantSectionOpen == undefined ? "" : <Loader />
                )}
              </div>
            </div>
          </div>
        </MaincontentLayout4>
        <SidebarLayout />
        <TopbarLayout5>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                {/* <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div> */}
              </div>
            </form>
            <WformdoneItem />
            <WformfailItem />
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
        <div className="popup-createphonenumber" style={{ display: isAssistantPopupOpen ? "flex" : "none" }}>
          {
            watcher.getValue("isLoadingCreate") ? <Loader /> :
              <div className="popup-card _w-50">
                <div className="card-settings-hd-div">
                  <div className="card-settings-hd">Create Assistant</div>
                </div>
                <div className="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="dd817661-5700-ca78-940f-32045820c7b8" onSubmit={handleSubmit}>
                    <div className="form-body">
                      <div className="form-row"><input className="inbox-search w-input" maxlength="256" name="name" data-name="Field 3" placeholder="Enter Assistant Name" type="text" id="field-3" required value={formData.name} onChange={handleInputChange} /></div>
                      <div className="notice-div">
                        <div className="notice-icon"><img src="../images/smarties-alert-circle.svg" loading="lazy" alt="" /></div>
                        <div className="notice-text">You can create multiple assistants, each with its own unique configuration and capabilities.</div>
                      </div>
                      <div className="form-btn-container mb-20">
                        <a href="#" className="btn-style1 outline" onClick={() => watcher.setValue(ASSISTANT.IS_ASSISTANT_POPUP_OPEN, false)}>
                          <div>Cancel</div>
                        </a>
                        <button href="#" className="btn-style1" type="submit">
                          <div>Create</div>
                        </button>
                      </div>
                      <div className="notice-div bg-blue">
                        <div className="notice-icon"><img src="../images/smarties-alert-circle-blue.svg" loading="lazy" alt="" /></div>
                        <div className="notice-text">After creating your assistant, you can configure its model, voice, tools, and other settings in the assistant configuration panel.</div>
                      </div>
                    </div>
                  </form>
                  <WformdoneItem />
                  <WformfailItem />
                </div>
                <div data-w-id="dd817661-5700-ca78-940f-32045820c7d3" className="popup-close" onClick={() => watcher.setValue(ASSISTANT.IS_ASSISTANT_POPUP_OPEN, false)}><img src="../images/smarties-x.svg" loading="lazy" alt="" /></div>
              </div>
          }
        </div >
        {selectedAssistantDB &&
          <div id="w-node-_2f84a106-7b03-6bbf-546e-055f10d4edd2-06be0a76" className="chat-wrap" style={{ display: selectedAssistantDB ? 'block' : 'none' }}>
            <div data-w-id="5e893b25-49be-ebb6-93d8-223b702d8b87" className="chat-icon-btn" onClick={() => watcher.setValue('isChatOpen', true)}><img loading="lazy" src="../images/smarties-head.png" alt="" />
              <div className="chatmenu-avatar"><img loading="lazy" src="https://cdn.prod.website-files.com/67ee6a2e2b4993b208083866/67efbf691923fc6908f56d0c_smarties-icon-chat.svg" alt="" className="image-100" /></div>
            </div>
            {isChatOpen &&
              <div className="chat-main" style={{ display: isChatOpen ? 'block' : 'none' }}>
                <div className="chat-main-top">
                  <div className="text-assistant-name smaller">{watcher.getValue("dbAssistant").name}</div>
                  <div data-w-id="e7c02759-5e85-ca82-bed6-e0d41ef45c4d" className="chat-close" onClick={() => watcher.setValue('isChatOpen', false)}><img src="../images/smarties-x.svg" loading="lazy" alt="" /></div>
                </div>
                <div className="chat-content" ref={chatRef}>
                  {chats.map((data, index) => {
                    const { direction, message, timestamp } = data;
                    if (direction !== 'outbound') {
                      return (
                        <div key={index} className="smartie-bubble-container">
                          <div className="smarties-avatar-small"></div>
                          <div>
                            <div className="smartie-bubble">
                              <div>{message}</div>
                            </div>
                            <div className="chat-time">{timestamp}</div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index} className="user-bubble-container">
                          <div className="user-bubble">
                            <div>{message}</div>
                          </div>
                          <div className="chat-time">{timestamp}</div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="write-chat">
                  <div className="chat-form-div">
                    <div className="form-block w-form">
                      <form id="wf-form-chat-form" name="wf-form-chat-form" data-name="chat form" method="get" className="chat-form" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="af5fe9b4-ecff-04c7-4715-fdcbb803b348">
                        <div className="textarea-div"><textarea id="chatfield" name="chatfield" maxlength="5000" data-name="Chatfield" placeholder="Write your message here..." className="chat-type-area w-input"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                        ></textarea></div>
                        <div className="button-send" onClick={handleSendMessage} style={{ cursor: "pointer" }}><img loading="lazy" src="https://cdn.prod.website-files.com/67ee6a2e2b4993b208083866/67eea4c90fdd2d72ba32b16a_smarties-button-send.svg" alt="" /></div>
                      </form>
                      <WformdoneItem />
                      <WformfailItem />
                    </div>
                  </div>
                </div>
              </div>}
          </div>}
      </div >
      <Toaster />



    </>
  );
};

export default Assistant;