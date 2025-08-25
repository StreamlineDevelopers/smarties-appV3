import e from 'cors';
import React from 'react';

// Component: FormrowItem110
// Type: repetition
// Props: ["htmlFor","name","dataName","id","htmlFor1","name1","dataName1","id1"]

const FormrowItem110 = ({ htmlFor, name, dataName, id, htmlFor1, name1, dataName1, id1, secretToken = "", timeout = 20, setSecretToken = () => { }, setServerTimeout = () => { } }) => {
  return (
    <div className="form-row horizontal g-15"><div className="form-col"><div className="form-control"><label htmlFor={htmlFor || "secret-token-2"} className="form-label">Secret Token</label><input value={secretToken} onChange={setSecretToken} className="form-input w-input" maxlength="256" name={name || "secret-token-2"} data-name={dataName || "Secret Token 2"} placeholder="" type="text" id={id || "secret-token-2"} /></div></div><div className="form-col"><div className="form-control"><label htmlFor={htmlFor1 || "timeout-2"} className="form-label">Timeout (seconds)</label><input value={timeout} onChange={setServerTimeout} className="form-input w-input" maxlength="256" name={name1 || "timeout-2"} data-name={dataName1 || "Timeout 2"} placeholder="" type="number" id={id1 || "timeout-2"} /></div></div></div>
  );
};

export default FormrowItem110;