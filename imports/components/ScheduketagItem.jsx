import React from 'react';
import IcontopicstagItem410 from './IcontopicstagItem410';

const ScheduketagItem = ({ divText }) => {
  return (
    <div className="scheduke-tag">
      <IcontopicstagItem410 />
      <div>{divText || 'Mon'}</div>
    </div>
  );
};

export default ScheduketagItem;
