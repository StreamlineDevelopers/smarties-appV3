import React from 'react';
import IconbtnaiItem from './IconbtnaiItem';

const ButtonaiItem = ({ iconSrc, divText }) => {
  return (
    <div className={'button-ai'}>
      <IconbtnaiItem
        iconSrc={'/svgs/icon-d6eb0f8f4675f37a48ff3594bfa2a4ea.svg'}
      />
      <div>{divText || 'Make Friendlier'}</div>
    </div>
  );
};

export default ButtonaiItem;
