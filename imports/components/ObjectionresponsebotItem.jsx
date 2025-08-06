import React from 'react';
import ObjectionresponsebotleftItem from './ObjectionresponsebotleftItem';
import ObjectionresponsebotrightItem from './ObjectionresponsebotrightItem';

const ObjectionresponsebotItem = ({ props }) => {
  return (
    <div className="objection-response-bot">
      <ObjectionresponsebotleftItem />
      <ObjectionresponsebotrightItem />
    </div>
  );
};

export default ObjectionresponsebotItem;
