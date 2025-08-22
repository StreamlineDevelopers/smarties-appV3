import React from 'react';
import PredefinedmessageitemleftItem from './PredefinedmessageitemleftItem';
import PredefinedmessageitemrightItem from './PredefinedmessageitemrightItem';

const PredefinedmessageitemcontentItem = ({ divText, dataWId, dataWId1 }) => {
  return (
    <div className={'predefinedmessage-item-content'}>
      <PredefinedmessageitemleftItem divText={'Thank you for Contacting Us'} />
      <PredefinedmessageitemrightItem
        dataWId={'29ed52c6-4b8b-54d0-8d09-eecab356bbd0'}
        dataWId1={'a8fd72d0-20c2-081c-fda7-5e6e895e1552'}
      />
    </div>
  );
};

export default PredefinedmessageitemcontentItem;
