import React from 'react';
import IconbtnaiItem from './IconbtnaiItem';

const Btnstyle1Item = ({ iconSrc, divText }) => {
  return (
    <a href={'#'} className={'btn-style1 outline-small w-inline-block'}>
      <IconbtnaiItem
        iconSrc={'/svgs/icon-a276247ca9d3bf079b48aff4d0922437.svg'}
      />
      <div>{divText || 'Regenerate'}</div>
    </a>
  );
};

export default Btnstyle1Item;
