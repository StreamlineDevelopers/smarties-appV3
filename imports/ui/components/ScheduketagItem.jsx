import React from 'react';
import IcontopicstagItem_5b3a7172 from './IcontopicstagItem_5b3a7172';

const ScheduketagItem = ({ divText }) => {
  return (
    <div className={'scheduke-tag'}>
      <IcontopicstagItem_5b3a7172 />
      <div>{divText || 'Mon'}</div>
    </div>
  );
};

export default ScheduketagItem;
