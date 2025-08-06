import React from 'react';
import IconbtnaiItem from './IconbtnaiItem';

const Btnstyle1Item195 = ({ iconSrc, divText }) => {
  return (
    <a href={'#'} className={'btn-style1 outline-small w-inline-block'}>
      <IconbtnaiItem
        iconSrc={'/svgs/icon-db45b509cc5f222fdb487293b54b62ae.svg'}
      />
      <div>{divText || 'Insert Sound Effect'}</div>
    </a>
  );
};

export default Btnstyle1Item195;
