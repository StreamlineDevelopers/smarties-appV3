import React from 'react';
import IconembedItem from './IconembedItem';

const Btnstyle1Item_428901ed = ({ dataWId, onClick = () => { } }) => {
  return (
    <a
      data-w-id={dataWId || 'af78a5e9-3d00-bcbe-5687-6bc6c1c501ed'}
      // href={'#'}
      className={'btn-style1 outline w-inline-block'}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <IconembedItem
        iconSrc={'/svgs/icon-fb771ed4c3d17f238d153146492793f6.svg'}
      />
      <div>Back</div>
    </a>
  );
};

export default Btnstyle1Item_428901ed;
