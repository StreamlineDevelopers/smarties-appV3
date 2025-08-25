import React, { useState } from 'react';
import './ToolConfigForm.css';

const MESSAGE_TYPES = [
    'Request Start',
    'Request Complete',
    'Request Failed',
    'Request Response Delayed'
];

export default function ToolConfigForm({ isOpen = false, onClose = () => { }, onSubmit = () => { }, isFetchingTool }) {
    const [toolName, setToolName] = useState('function_tool');
    const [description, setDescription] = useState('');
    const [asyncOpt, setAsyncOpt] = useState(false);
    const [strictOpt, setStrictOpt] = useState(false);
    const [serverUrl, setServerUrl] = useState('');
    const [secretToken, setSecretToken] = useState('');
    const [timeout, setTimeout] = useState(20);
    const [parameters, setParameters] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedMessageType, setSelectedMessageType] = useState('');

    const handleAddParameter = () => {
        setParameters([...parameters, { name: '', type: 'string', description: '', required: false, enums: [] }]);
    };

    const handleParameterChange = (index, field, value) => {
        const updated = [...parameters];
        updated[index][field] = value;
        setParameters(updated);
    };

    const handleAddHeader = () => {
        setHeaders([...headers, { key: '', value: '' }]);
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

    const handleAddMessage = () => {
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

    const handleSubmit = () => {
        onSubmit({
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
        });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-scrollable">
                <div className="modal">
                    <button className="close-button" onClick={onClose}>&times;</button>
                    <div className="form-container">
                        <div className="form-group">
                            <label>Tool Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value={toolName}
                                onChange={(e) => setToolName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                rows="3"
                                className="form-textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="checkbox-group">
                            <label>
                                <input type="checkbox" checked={asyncOpt} onChange={() => setAsyncOpt(!asyncOpt)} /> Async
                            </label>
                            <label>
                                <input type="checkbox" checked={strictOpt} onChange={() => setStrictOpt(!strictOpt)} /> Strict
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Parameters</label>
                            {parameters.length === 0 && (
                                <div className="placeholder-box">
                                    No properties configured. Click "Add Property" to add your first property.
                                </div>
                            )}
                            {parameters.map((param, index) => (
                                <div key={index} className="parameter-box">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                value={param.name}
                                                onChange={(e) => handleParameterChange(index, 'name', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Type</label>
                                            <select
                                                className="form-input"
                                                value={param.type}
                                                onChange={(e) => handleParameterChange(index, 'type', e.target.value)}
                                            >
                                                <option value="string">string</option>
                                                <option value="number">number</option>
                                                <option value="boolean">boolean</option>
                                                <option value="object">object</option>
                                                <option value="array">array</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            className="form-textarea"
                                            value={param.description}
                                            onChange={(e) => handleParameterChange(index, 'description', e.target.value)}
                                        />
                                    </div>
                                    <div className="checkbox-group">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={param.required}
                                                onChange={(e) => handleParameterChange(index, 'required', e.target.checked)}
                                            />{' '}
                                            Required
                                        </label>
                                    </div>
                                    <div className="button-row right">
                                        <button className="form-button cancel" onClick={() => {
                                            const filtered = parameters.filter((_, i) => i !== index);
                                            setParameters(filtered);
                                        }}>Cancel</button>
                                        <button className="form-button">Apply</button>
                                    </div>
                                </div>
                            ))}
                            <button className="form-button" onClick={handleAddParameter}>+ Add Property</button>
                        </div>

                        <div className="form-group">
                            <label>Server URL</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="https://api.example.com/function"
                                value={serverUrl}
                                onChange={(e) => setServerUrl(e.target.value)}
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Secret Token</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    value={secretToken}
                                    onChange={(e) => setSecretToken(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Timeout (seconds)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    value={timeout}
                                    onChange={(e) => setTimeout(Number(e.target.value))}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>HTTP Headers</label>
                            {headers.length === 0 && (
                                <div className="placeholder-box">
                                    No headers configured. Click "Add Header" to add your first header.
                                </div>
                            )}
                            {headers.map((header, index) => (
                                <div key={index} className="form-row">
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Header Name"
                                        value={header.key}
                                        onChange={(e) => handleHeaderChange(index, 'key', e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Value"
                                        value={header.value}
                                        onChange={(e) => handleHeaderChange(index, 'value', e.target.value)}
                                    />
                                    <button className="form-button cancel" onClick={() => handleRemoveHeader(index)}>
                                        &#128465;
                                    </button>
                                </div>
                            ))}
                            <button className="form-button" onClick={handleAddHeader}>+ Add Header</button>
                        </div>

                        <div className="form-group">
                            <label>Messages</label>
                            {messages.length === 0 && (
                                <div className="placeholder-box">
                                    No messages configured. Click "Add Message" to add your first message.
                                </div>
                            )}
                            {messages.map((message, index) => (
                                <div key={index} className="parameter-box">
                                    <div className="button-row right">
                                        <h4>{message.type}</h4>
                                        <button className="form-button cancel" onClick={() => handleRemoveMessage(index)}>Cancel</button>
                                    </div>
                                    <div className="form-group">
                                        <label>Content</label>
                                        <textarea
                                            className="form-textarea"
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
                                        className="form-input"
                                        value={selectedMessageType}
                                        onChange={(e) => setSelectedMessageType(e.target.value)}
                                    >
                                        <option value="" disabled>Select Message Type</option>
                                        {MESSAGE_TYPES.filter(type => !messages.some(m => m.type === type)).map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <button className="form-button" onClick={handleAddMessage}>Apply</button>
                                    <button className="form-button cancel" onClick={() => setSelectedMessageType('')}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div className="button-row">
                            <button className="form-button" onClick={handleSubmit} disabled={isFetchingTool}>
                                {isFetchingTool ? 'Saving...' : 'Submit'}
                            </button>
                            <button className="form-button cancel" onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}