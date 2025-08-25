import React, { useRef, useState } from 'react';
import AssistantWatcher from '../../../api/client/watchers/vapi/AssistantWatcher';
import { useWatcher } from '../../../api/client/Watcher2';

// InboundChat component - displays messages from others
const InboundChat = ({ message, timestamp }) => {
    return (
        <div className="inbound-message">
            <div className="message-bubble inbound">
                {message}
            </div>
            <div className="message-time">{timestamp}</div>
        </div>
    );
};

// OutboundChat component - displays messages sent by the user
const OutboundChat = ({ message, timestamp }) => {
    return (
        <div className="outbound-message">
            <div className="message-bubble outbound">
                {message}
            </div>
            <div className="message-time">{timestamp}</div>
        </div>
    );
};

// Main ChatBox component
const ChatBox = ({ isOpen = false, onClose }) => {
    const watcher = useRef(AssistantWatcher).current;
    useWatcher(watcher);
    const chats = watcher.getValue("chats") || [];
    const chatRef = useRef(null);

    React.useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chats]); // Trigger scroll when new messages are added

    const [newMessage, setNewMessage] = useState("");
    const [chatOpen, setChatOpen] = useState(isOpen);

    // Update internal state when prop changes
    React.useEffect(() => {
        if (isOpen) watcher.loadChat();
        setChatOpen(isOpen);
    }, [isOpen]);

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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleOpen = () => {
        setChatOpen(true);
    };

    const handleClose = () => {
        setChatOpen(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="chat-popup-wrapper" style={{ display: chatOpen ? "block" : "none" }}>
            {chatOpen ? (
                <div className="chat-container popup-open">
                    <div className="chat-header">
                        <h2>{watcher.getValue("dbAssistant").name}</h2>
                        <button className="close-button" onClick={handleClose}>×</button>
                    </div>
                    <div className="messages-container" ref={chatRef}>
                        {chats.map((data, index) => {
                            const { direction, message, timestamp } = data;
                            if (direction === 'outbound') {
                                return <OutboundChat key={index} message={message} timestamp={timestamp} />
                            } else {
                                return <InboundChat key={index} message={message} timestamp={timestamp} />
                            }
                        })}
                    </div>

                    <div className="input-container">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            ) : (
                <button className="chat-button" onClick={handleOpen}>
                    Chat
                </button>
            )}
        </div>
    );
};

export default ChatBox;