import React from 'react';
import IconembedItem from './IconembedItem';

const Btnstyle1Item365 = ({ iconSrc, divText }) => {
  return (
    <a href={'#'} className={'btn-style1 outline w-inline-block'}>
      <IconembedItem
        iconSrc={'/svgs/icon-42cfb7faf3c4b50e7f6f1863e42bc9e6.svg'}
      />
      <div>{divText || 'Generate More Variations'}</div>
    </a>
  );
};

export default Btnstyle1Item365;
