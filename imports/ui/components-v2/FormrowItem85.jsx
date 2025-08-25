import React, { useRef, useState } from 'react';
import { useWatcher } from '../../api/client/Watcher2';
import AssistantWatcher from '../../api/client/watchers/vapi/AssistantWatcher';
// Component: FormrowItem85
// Type: repetition
// Props: ["id","name","dataName"]

const FormrowItem85 = ({ id, name, dataName, label = "Assistant Description", details = {} }) => {
  const watcher = useRef(AssistantWatcher).current;
  useWatcher(watcher);
  const [assistants, setAssistants] = useState([]);
  return (
    <div className="form-row">
      <div className="form-control">
        <div className="form-label">{label}</div>
        <button onClick={async (e) => {
          e.preventDefault();
          e.stopPropagation();
          const a = await watcher.fetchAllAssistants()
          setAssistants(a.assistantsList)
        }}>Fetch Assistants</button>
        <div className="settings-row-formdata">
          <select id={id} name={id} className="selectfield _w-100 w-select" onChange={async (e) => {
            watcher.setValue('isAssigningAssistant', true);
            await watcher.assignAssistantToPhoneNumber(details.number, e.target.value)
            watcher.setValue('isAssigningAssistant', false);
          }}>
            {assistants.length > 0 ? assistants.map((assistant) => {
              return <option value={assistant.assistantid}>{assistant.name}</option>
            }) : <option value="no-assistants">No assistants found</option>}
          </select></div>
      </div>
    </div>
  );
};

export default FormrowItem85;