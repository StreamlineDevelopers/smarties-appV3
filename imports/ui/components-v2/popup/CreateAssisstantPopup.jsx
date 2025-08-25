import React, { useState } from 'react';

const CreateAssisstantPopup = ({ isOpen = false, onClose = () => { }, onSubmit = () => { } }) => {
    const [formData, setFormData] = useState({
        name: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="popup-createphonenumber" style={{ display: isOpen ? "flex" : "none" }}>
            <div className="popup-card _w-50">
                <div className="card-settings-hd-div">
                    <div className="card-settings-hd">Create Assistant</div>
                </div>
                <div className="w-form">
                    <form id="email-form" name="email-form" onSubmit={handleSubmit}>
                        <div className="form-body">
                            <div className="form-row">
                                <input
                                    className="w-input"
                                    maxLength={256}
                                    name="name"
                                    placeholder="Assistant Name"
                                    type="text"
                                    id="name"
                                    required={true}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="notice-div">
                                <div className="notice-icon">
                                    <img
                                        src="/images/smarties-alert-circle.svg"
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
                                <button type="submit" className="btn-style1">
                                    <div>Create</div>
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
                <div className="popup-close" onClick={onClose}>
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

export default CreateAssisstantPopup;