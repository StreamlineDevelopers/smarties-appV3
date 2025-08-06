import React from 'react';
import ObjectionresponsetopleftItem from './ObjectionresponsetopleftItem';
import ObjectionresponsetoprightItem from './ObjectionresponsetoprightItem';

const ObjectionresponsetopItem = ({ divText, divText1, divText2, dataWId }) => {
  return (
    <div className={'objection-response-top'}>
      <ObjectionresponsetopleftItem
        divText={'Response #1'}
        divText1={'ROI'}
        divText2={'Value'}
      />
      <ObjectionresponsetoprightItem
        dataWId={'6c69d6e6-d7e0-44df-2be5-fd5ef4d20f56'}
      />
    </div>
  );
};

export default ObjectionresponsetopItem;
