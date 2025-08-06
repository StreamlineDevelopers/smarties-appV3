import React from 'react';
import ObjectionresponsetagsItem from './ObjectionresponsetagsItem';

const ObjectionresponsetagsdivItem = ({ divText, divText1 }) => {
  return (
    <div className={'objection-response-tags-div'}>
      <ObjectionresponsetagsItem divText={'Pricing'} />
      <ObjectionresponsetagsItem divText={'ROI'} />
      <ObjectionresponsetagsItem divText={'Value'} />
    </div>
  );
};

export default ObjectionresponsetagsdivItem;
