import React from 'react';
import ObjectionresponsetagsItem from './ObjectionresponsetagsItem';

const ObjectionresponsetagsdivItem = ({ divText, divText1 }) => {
  return (
    <div className={'objection-response-tags-div'}>
      {divText && divText.length > 0 && divText.map((tag, index) => (
        <ObjectionresponsetagsItem key={index} divText={tag} />
      ))}
      {/* <ObjectionresponsetagsItem divText={'Pricing'} />
      <ObjectionresponsetagsItem divText={'ROI'} />
      <ObjectionresponsetagsItem divText={'Value'} /> */}
    </div>
  );
};

export default ObjectionresponsetagsdivItem;
