import React from 'react';
import ContactagenttooltipItem from './ContactagenttooltipItem';

const ContacttableagentsavatarItem = ({ dataWId }) => {
  return (
    <div
      data-w-id={dataWId || '5d9ed109-0287-49e5-d932-829a7a498bbb'}
      className={'contact-table-agents-avatar'}
    >
      <img
        src={'images/smarties-avatar-04_1smarties-avatar-04.png'}
        loading={'lazy'}
        alt={''}
      />
      <ContactagenttooltipItem />
    </div>
  );
};

export default ContacttableagentsavatarItem;
