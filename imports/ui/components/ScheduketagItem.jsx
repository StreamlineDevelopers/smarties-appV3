import React from 'react';
import IcontopicstagItem_49455c8e from './IcontopicstagItem_49455c8e';

const ScheduketagItem = ({ divText }) => {
  return (
    <div className={'scheduke-tag'}>
      <IcontopicstagItem_49455c8e />
      <div>{divText || 'Mon'}</div>
    </div>
  );
};

export default ScheduketagItem;
