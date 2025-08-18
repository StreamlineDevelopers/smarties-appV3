import React from 'react';
import IconembedItem from './IconembedItem';

const Btnstyle1Item_c79bbac4 = ({ dataWId, onClick = () => { } }) => {
  return (
    <a
      data-w-id={dataWId || '56a22ee8-48a6-d322-7d35-b57347bcd420'}
      href={'#'}
      className={'btn-style1 outline w-inline-block'}
      onClick={onClick}
    >
      <IconembedItem
        iconSrc={'/svgs/icon-fb771ed4c3d17f238d153146492793f6.svg'}
      />
      <div>{'Back'}</div>
    </a>
  );
};

export default Btnstyle1Item_c79bbac4;
