import React from 'react';

const FirstmessagetextareaItem = ({}) => {
  return (
    <div className={'first-message-textarea'}>
      <div className={'form-textararea-div'}>
        <textarea
          id={'First-Message-2'}
          name={'First-Message-2'}
          maxlength={'5000'}
          data-name={'First Message 2'}
          placeholder={
            "Hi there! I'm Leo, your go-to for any SmartHome Innovations queries. How can I assist you today?"
          }
          className={'form-input-textarea white w-input'}
        ></textarea>
      </div>
    </div>
  );
};

export default FirstmessagetextareaItem;
