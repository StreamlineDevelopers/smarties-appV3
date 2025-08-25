import React, { useEffect, useRef, useState } from 'react';
import FileUploadWatcher from '../../../api/client/watchers/vapi/FileUploadWatcher';
import { useWatcher } from '../../../api/client/Watcher2';

const AssignFileToKnowledgeBase = ({ isOpen = false, onClose = () => { }, onSubmit = () => { }, currentSelected }) => {
    const formRef = useRef(null);
    const watcher = useRef(FileUploadWatcher).current;

    useWatcher(watcher);
    const isLoading = watcher.getValue("isLoadingFiles");
    const files = watcher.Files;

    useEffect(() => {
        watcher.setValue("isLoadingFiles", true);
        // setTimeout(() => {
        watcher.fetchFiles();
        // }, 3000);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formRef);
        onClose();
    };

    useEffect(() => {
        if (!isOpen && formRef.current) {
            formRef.current.reset();
        }
    }, [isOpen]);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const nearBottom = scrollHeight - scrollTop - clientHeight < 20;
        if (nearBottom && !isLoading) {
            watcher.fetchFiles({ isLoadmore: true });
        }
    };



    return (
        <div className="popup-createphonenumber" style={{ display: isOpen ? "flex" : "none" }}>
            <div className="popup-card _w-50">
                <div className="card-settings-hd-div">
                    <div className="card-settings-hd">Assign File</div>
                </div>
                <div className="w-form">
                    <form ref={formRef} id="email-form" name="email-form" onSubmit={handleSubmit}>
                        <div className="form-body">
                            <div
                                className="form-row"
                                style={{
                                    maxHeight: '500px',
                                    overflowY: 'auto',
                                    paddingRight: '6px',
                                    marginBottom: '16px',
                                    border: '1px solid #eee',
                                    borderRadius: '6px',
                                }}
                                onScroll={handleScroll}
                            >
                                {files.map((file) => {
                                    const isAlreadyAdded = currentSelected?.filesList?.some(
                                        (selectedFile) => selectedFile.id === file.id
                                    );

                                    return (
                                        <div
                                            key={file.id}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '8px 12px',
                                                border: isAlreadyAdded ? '1px solid green' : '1px solid #ccc',
                                                backgroundColor: isAlreadyAdded ? '#e6f7e6' : 'white',
                                                borderRadius: '6px',
                                                marginBottom: '8px',
                                                width: '100%',
                                            }}
                                        >
                                            <span style={{ fontSize: '14px', fontWeight: '500' }}>
                                                {file.name}{' '}
                                                {isAlreadyAdded && (
                                                    <span style={{ color: 'green' }}>
                                                        (Already Assigned)
                                                    </span>
                                                )}
                                            </span>
                                            <input
                                                type="checkbox"
                                                name={file.id}
                                                defaultChecked={isAlreadyAdded}
                                                disabled={isAlreadyAdded}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="form-btn-container mb-20">
                                <a href="#" className="btn-style1 outline" onClick={onClose}>
                                    <div>Cancel</div>
                                </a>
                                <button type="submit" className="btn-style1">
                                    <div>Submit</div>
                                </button>
                            </div>
                            <div className="notice-div bg-blue">
                                <div className="notice-icon">
                                    <img
                                        src="/images/smarties-alert-circle-blue.svg"
                                        loading="lazy"
                                        alt=""
                                    />
                                </div>
                                <div className="notice-text">
                                    You can assign files to your knowledge base. Please select the
                                    files you want to assign.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="popup-close" onClick={onClose}>
                    <img src="/images/smarties-x.svg" loading="lazy" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AssignFileToKnowledgeBase;
