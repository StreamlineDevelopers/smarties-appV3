import React from 'react';
import SelectfieldItem_98fbf92f from './SelectfieldItem_98fbf92f';
import ButtonaiItem from './ButtonaiItem';

const PodcastitemcontroldivleftItem = ({}) => {
  return (
    <div className={'podcast-item-controldiv-left'}>
      <div>
        <SelectfieldItem_98fbf92f />
      </div>
      <ButtonaiItem
        iconSrc={'/svgs/icon-d6eb0f8f4675f37a48ff3594bfa2a4ea.svg'}
        divText={'Make Friendlier'}
      />
      <ButtonaiItem
        iconSrc={'/svgs/icon-193a5a7c3bbb6ffafe822ccebcd54266.svg'}
        divText={'Add Stat'}
      />
      <ButtonaiItem
        iconSrc={'/svgs/icon-264091f0dd96f8acd9e354e87f9f10a8.svg'}
        divText={'Shorten'}
      />
    </div>
  );
};

export default PodcastitemcontroldivleftItem;
