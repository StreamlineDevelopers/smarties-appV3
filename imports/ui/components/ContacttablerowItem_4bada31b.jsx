import React from 'react';
import WcheckboxItem_a909ee55 from './WcheckboxItem_a909ee55';
import ContacttablecelldivItem_3d6ae678 from './ContacttablecelldivItem_3d6ae678';
import ContacttablecelldivItem_7b26120f from './ContacttablecelldivItem_7b26120f';
import ContacttablecelldivItem_3fbd2ad0 from './ContacttablecelldivItem_3fbd2ad0';
import ContacttablecelldivItem_8523b50c from './ContacttablecelldivItem_8523b50c';
import ContacttablecelldivItem_446310f9 from './ContacttablecelldivItem_446310f9';
import ContacttablecelldivItem_4419d72d from './ContacttablecelldivItem_4419d72d';
import ContacttablecelldivItem_d0271244 from './ContacttablecelldivItem_d0271244';
import ContacttablecelldivItem_d662707d from './ContacttablecelldivItem_d662707d';
import ContacttablecelldivItem_2357e1ce from './ContacttablecelldivItem_2357e1ce';
import ContacttablecelldivItem_c8963027 from './ContacttablecelldivItem_c8963027';
import ContacttablecelldivItem_d76113e2 from './ContacttablecelldivItem_d76113e2';
import ContacttablecelldivItem_2fbb1f8c from './ContacttablecelldivItem_2fbb1f8c';

const ContacttablerowItem_4bada31b = ({
  dataWId,
  dataWId1,
  dataWId2,
  dataWId3,
  dataWId4,
  dataWId5,
  dataWId6,
  onShowContactDetails = () => { },
}) => {
  return (
    <div
      data-w-id={dataWId || 'd5d24fc8-f7d9-5f76-d442-ba200f41338a'}
      className={'contact--table-row'}
    >
      <div className={'contact-table-cell-div _w-3'}>
        <WcheckboxItem_a909ee55
          dataWId={'e126a55e-d39a-9fdc-2dc4-f201db972168'}
        />
      </div>
      <ContacttablecelldivItem_3d6ae678 />
      <ContacttablecelldivItem_7b26120f
        src={'images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={'Sarah Johnson'}
      />
      <ContacttablecelldivItem_3fbd2ad0 divText={'VP of Marketing'} />
      <ContacttablecelldivItem_8523b50c
        divText={'sarah.j@techcorp.com'}
        divText1={'+1 (555) 123-4567'}
      />
      <ContacttablecelldivItem_446310f9 />
      <ContacttablecelldivItem_4419d72d
        dataWId={'d5d24fc8-f7d9-5f76-d442-ba200f41339b'}
        dataWId1={'792124c6-0a43-6117-09ca-054912cce46e'}
        divText={'Se, CA'}
        divText1={'San Francisco, CA'}
      />
      <ContacttablecelldivItem_d0271244 />
      <ContacttablecelldivItem_d662707d />
      <ContacttablecelldivItem_2357e1ce />
      <ContacttablecelldivItem_c8963027 divText={'6'} />
      <ContacttablecelldivItem_d76113e2
        dataWId={'5d9ed109-0287-49e5-d932-829a7a498bbb'}
        dataWId1={'7ee79f28-1055-c466-27e8-3173f706dca1'}
      />
      <ContacttablecelldivItem_2fbb1f8c
        dataWId={'d9d41f7f-0057-93a0-759a-4f4719e2e394'}
        onShowContactDetails={onShowContactDetails}
      />
    </div>
  );
};

export default ContacttablerowItem_4bada31b;
