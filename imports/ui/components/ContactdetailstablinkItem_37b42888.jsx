import React from 'react';
import IconseoItem from './IconseoItem';

const ContactdetailstablinkItem_37b42888 = ({ dataWTab, iconSrc, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={'contactdetails-tablink w-inline-block w-tab-link'}
    >
      <IconseoItem
        iconSrc={'/svgs/icon-b04ee831d7f339cacdc12ae7e67a7a13.svg'}
      />
      <div>{divText || 'Social Posts'}</div>
    </a>
  );
};

export default ContactdetailstablinkItem_37b42888;
