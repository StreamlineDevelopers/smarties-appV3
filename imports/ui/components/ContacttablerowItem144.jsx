import React from 'react';
import WcheckboxItem96 from './WcheckboxItem96';
import ContacttablecelldivItem125 from './ContacttablecelldivItem125';
import ContacttablecelldivItem118 from './ContacttablecelldivItem118';
import ContacttablecelldivItem110 from './ContacttablecelldivItem110';
import ContacttablecelldivItem129 from './ContacttablecelldivItem129';
import ContacttablecelldivItem119 from './ContacttablecelldivItem119';
import ContacttablecelldivItem136 from './ContacttablecelldivItem136';
import ContacttablecelldivItem112 from './ContacttablecelldivItem112';
import ContacttablecelldivItem89 from './ContacttablecelldivItem89';
import ContacttablecelldivItem90 from './ContacttablecelldivItem90';
import ContacttablecelldivItem113 from './ContacttablecelldivItem113';
import ContacttablecelldivItem133 from './ContacttablecelldivItem133';
import ContacttablecelldivItem114 from './ContacttablecelldivItem114';

const ContacttablerowItem144 = ({
  dataWId,
  dataWId1,
  dataWId2,
  dataWId3,
  dataWId4,
  dataWId5,
  dataWId6,
}) => {
  return (
    <div
      data-w-id={dataWId || 'd5d24fc8-f7d9-5f76-d442-ba200f41338a'}
      className={'contact--table-row'}
    >
      <div className={'contact-table-cell-div _w-3'}>
        <WcheckboxItem96 dataWId={'e126a55e-d39a-9fdc-2dc4-f201db972168'} />
      </div>
      <ContacttablecelldivItem125 />
      <ContacttablecelldivItem118
        src={'images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={'Sarah Johnson'}
      />
      <ContacttablecelldivItem110 divText={'VP of Marketing'} />
      <ContacttablecelldivItem129
        divText={'sarah.j@techcorp.com'}
        divText1={'+1 (555) 123-4567'}
      />
      <ContacttablecelldivItem119 />
      <ContacttablecelldivItem136
        dataWId={'d5d24fc8-f7d9-5f76-d442-ba200f41339b'}
        dataWId1={'792124c6-0a43-6117-09ca-054912cce46e'}
        divText={'Se, CA'}
        divText1={'San Francisco, CA'}
      />
      <ContacttablecelldivItem112 />
      <ContacttablecelldivItem89 />
      <ContacttablecelldivItem90 />
      <ContacttablecelldivItem113 divText={'6'} />
      <ContacttablecelldivItem133
        dataWId={'5d9ed109-0287-49e5-d932-829a7a498bbb'}
        dataWId1={'7ee79f28-1055-c466-27e8-3173f706dca1'}
      />
      <ContacttablecelldivItem114
        dataWId={'d9d41f7f-0057-93a0-759a-4f4719e2e394'}
      />
    </div>
  );
};

export default ContacttablerowItem144;
