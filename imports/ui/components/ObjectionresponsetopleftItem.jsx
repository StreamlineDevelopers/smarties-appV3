import React from 'react';
import ObjectionresponsetagsdivItem from './ObjectionresponsetagsdivItem';

const ObjectionresponsetopleftItem = ({ divText, divText1, divText2 }) => {
  return (
    <div className={'objection-response-topleft'}>
      <div className={'objection-response-hd'}>{divText || 'Response #1'}</div>
      <ObjectionresponsetagsdivItem divText={divText1} divText1={divText2} />
    </div>
  );
};

export default ObjectionresponsetopleftItem;
