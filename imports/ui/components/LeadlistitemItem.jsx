import React from 'react';
import MessaginginboxitemleftItem from './MessaginginboxitemleftItem';

const LeadlistitemItem = ({ src, divText, divText1 }) => {
  return (
    <a href={'#'} className={'leadlist-item w-inline-block'}>
      <MessaginginboxitemleftItem
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={'Emma Wilson'}
        divText1={'emmaw@email.com'}
      />
    </a>
  );
};

export default LeadlistitemItem;
