import React from 'react';
import PredefinedmessageitemcontentItem from './PredefinedmessageitemcontentItem';
import PredefinedmessageitemeditItem from './PredefinedmessageitemeditItem';

const PredefinedmessageitemItem = ({
  id,
  divText,
  status,
  dataWId,
  dataWId1,
  dataWId2,
  dataWId3,
}) => {
  return (
    <div className={'predefinedmessage-item'}>
      <div className={'predefinedmessage-drag'}>
        <img
          loading={'lazy'}
          src={'images/smarties-quickrep-icon-02.svg'}
          alt={''}
        />
      </div>
      <PredefinedmessageitemcontentItem
        id={id}
        divText={divText}
        status={status}
        dataWId={'29ed52c6-4b8b-54d0-8d09-eecab356bbd0'}
        dataWId1={'a8fd72d0-20c2-081c-fda7-5e6e895e1552'}
      />
      <PredefinedmessageitemeditItem
        answer={divText}
        id={id}
        dataWId={'e9961061-815e-bc1d-0680-25a48e920598'}
        dataWId1={'e9961061-815e-bc1d-0680-25a48e92059a'}
      />
    </div>
  );
};

export default PredefinedmessageitemItem;
