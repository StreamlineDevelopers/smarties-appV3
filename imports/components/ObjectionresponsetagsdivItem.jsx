import React from 'react';
import ObjectionresponsetagsItem from './ObjectionresponsetagsItem';

const ObjectionresponsetagsdivItem = ({ divText, divText1 }) => {
  return (
    <div className="objection-response-tags-div">
      <ObjectionresponsetagsItem divText="Pricing" />
      <ObjectionresponsetagsItem divText={divText || 'ROI'} />
      <ObjectionresponsetagsItem divText={divText1 || 'Value'} />
    </div>
  );
};

export default ObjectionresponsetagsdivItem;
