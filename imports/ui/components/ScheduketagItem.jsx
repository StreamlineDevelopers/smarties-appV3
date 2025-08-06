import React from 'react';
import IcontopicstagItem358 from './IcontopicstagItem358';

const ScheduketagItem = ({ divText }) => {
  return (
    <div className={'scheduke-tag'}>
      <IcontopicstagItem358 />
      <div>{divText || 'Mon'}</div>
    </div>
  );
};

export default ScheduketagItem;
