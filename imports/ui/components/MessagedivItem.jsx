import React from 'react';
import FormrowItem452 from './FormrowItem452';
import FormbtncontainerItem444 from './FormbtncontainerItem444';

const MessagedivItem = ({ htmlFor, id, name, dataName, dataWId }) => {
  return (
    <div className="message-div">
      <FormrowItem452
        htmlFor={htmlFor || 'message-type-2'}
        id={id || 'message-type-2'}
        name={name || 'message-type-2'}
        dataName={dataName || 'Message Type 2'}
      />
      <FormbtncontainerItem444
        dataWId={dataWId || '1849b75f-9350-98c1-3481-367f0109fa08'}
      />
    </div>
  );
};

export default MessagedivItem;
