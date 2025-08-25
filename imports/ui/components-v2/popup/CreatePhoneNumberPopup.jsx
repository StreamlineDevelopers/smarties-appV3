import React, { useRef, useState } from 'react';
import PhoneWatcher from '../../../api/client/watchers/vapi/PhoneWatcher';
import { useWatcher } from '../../../api/client/Watcher2';

const CreatePhoneNumberPopup = ({
    isOpen = false,
    onClose = () => { }
}) => {
    const watcher = useRef(PhoneWatcher).current;
    useWatcher(watcher);
    const [availableNumbers, setAvailableNumbers] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const handleBuyNumber = () => {
        if (selectedNumber) {
            watcher.buyPhoneNumber(selectedNumber.id);
            onClose();
        }
    }

    return (
        <div className="popup-createphonenumber" style={{ display: isOpen ? "flex" : "none" }}>
            <div className="popup-card _w-50">
                <div className="card-settings-hd-div">
                    <div className="card-settings-hd">Create Phone Number</div>
                </div>
                <div className="w-form">
                    <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        data-wf-page-id="681cb797412031922452f170"
                        data-wf-element-id="2abaa22a-e736-543a-3594-0506323e6095"
                        aria-label="Email Form"
                    >
                        <div className="form-body">
                            <div className="form-row">
                                <input
                                    className="inbox-search w-input"
                                    maxLength={256}
                                    name="field-3"
                                    onChange={async (e) => {
                                        const res = await watcher.searchAvailableNumbers(e.target.value)
                                        setAvailableNumbers(res);
                                        setSelectedNumber(null); // Reset selection when searching
                                    }}
                                    data-name="Field 3"
                                    placeholder="Search Phone number"
                                    type="text"
                                    id="field-3"
                                    required=""
                                />
                            </div>
                            <div className="phone-numbers-list">
                                {availableNumbers.length > 0 && availableNumbers.map((number) => (
                                    <div
                                        key={number.id}
                                        className={`phone-number-item ${selectedNumber?.id === number.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedNumber(number)}
                                        style={{
                                            padding: '10px',
                                            margin: '5px 0',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            backgroundColor: selectedNumber?.id === number.id ? '#e6f3ff' : 'white'
                                        }}
                                    >
                                        {number.number} - {number.countryCode}
                                    </div>
                                ))}
                            </div>
                            <div className="notice-div">
                                <div className="notice-icon">
                                    <img
                                        src="https://cdn.prod.website-files.com/681b8d3699e41f297aad49da/681cb2e0fa140afcbeb11ad8_smarties-alert-circle.svg"
                                        loading="lazy"
                                        alt=""
                                    />
                                </div>
                                <div className="notice-text">
                                    SMARTIES Phone Numbers are free of charge, and limited to 10
                                    numbers per wallet.
                                </div>
                            </div>
                            <div className="form-btn-container mb-20">
                                <a href="#" className="btn-style1 outline" onClick={onClose}>
                                    <div>Cancel</div>
                                </a>
                                <a href="#" className="btn-style1" onClick={handleBuyNumber}>
                                    <div>Create</div>
                                </a>
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
                                    Functionality to create Vapi phone numbers is only available for
                                    the US. For phone numbers from other regions, please use the
                                    Import Phone Numbers feature.
                                </div>
                            </div>
                        </div>
                    </form>
                    <div
                        className="w-form-done"
                        tabIndex={-1}
                        role="region"
                        aria-label="Email Form success"
                    >
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div
                        className="w-form-fail"
                        tabIndex={-1}
                        role="region"
                        aria-label="Email Form failure"
                    >
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
                <div
                    className="popup-close"
                    onClick={onClose}
                >
                    <img
                        src="/images/smarties-x.svg"
                        loading="lazy"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default CreatePhoneNumberPopup;