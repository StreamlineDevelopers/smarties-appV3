import React from 'react';

const Menuitem2Item = ({ src, divText }) => {
  return (
    <div className={'menu-item-2'}>
      <div className={'menu-item-icon'}>
        <img
          loading={'lazy'}
          src={
            src ||
            'https://cdn.prod.website-files.com/688b6671a965c0c9a8b117a1/688b7fe296eb413c7eda8de5_mark-as-read.svg'
          }
          alt={''}
        />
      </div>
      <div>{divText || 'Mark as Read'}</div>
    </div>
  );
};

export default Menuitem2Item;
