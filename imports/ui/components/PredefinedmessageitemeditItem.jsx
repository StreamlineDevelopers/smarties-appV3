import React from 'react';
import PredefinedmessageitemoptionsItem_755941bf from './PredefinedmessageitemoptionsItem_755941bf';

const PredefinedmessageitemeditItem = ({ dataWId, dataWId1 }) => {
  return (
    <div className={'predefinedmessage-item-edit'}>
      <input
        className={'textfield w-input'}
        maxlength={'256'}
        name={'Edit-Message'}
        data-name={'Edit Message'}
        placeholder={'Edit Message'}
        type={'text'}
        id={'Edit-Message'}
        required
      />
      <PredefinedmessageitemoptionsItem_755941bf
        dataWId={'e9961061-815e-bc1d-0680-25a48e920598'}
        dataWId1={'e9961061-815e-bc1d-0680-25a48e92059a'}
      />
    </div>
  );
};

export default PredefinedmessageitemeditItem;
