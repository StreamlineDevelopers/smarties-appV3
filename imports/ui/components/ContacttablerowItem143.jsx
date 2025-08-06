import React from 'react';
import WcheckboxItem96 from './WcheckboxItem96';
import ContacttablecelldivItem124 from './ContacttablecelldivItem124';
import ContacttablecelldivItem118 from './ContacttablecelldivItem118';
import ContacttablecelldivItem110 from './ContacttablecelldivItem110';
import ContacttablecelldivItem129 from './ContacttablecelldivItem129';
import ContacttablecelldivItem115 from './ContacttablecelldivItem115';
import ContacttablecelldivItem136 from './ContacttablecelldivItem136';
import ContacttablecelldivItem102 from './ContacttablecelldivItem102';
import ContacttablecelldivItem92 from './ContacttablecelldivItem92';
import ContacttablecelldivItem90 from './ContacttablecelldivItem90';
import ContacttablecelldivItem113 from './ContacttablecelldivItem113';
import ContacttablecelldivItem121 from './ContacttablecelldivItem121';
import ContacttablecelldivItem114 from './ContacttablecelldivItem114';

const ContacttablerowItem143 = ({
  dataWId,
  dataWId1,
  dataWId2,
  dataWId3,
  dataWId4,
  dataWId5,
}) => {
  return (
    <div
      data-w-id={dataWId || '14a5560b-10e9-89de-42ba-ec1f5053f759'}
      className={'contact--table-row'}
    >
      <div className={'contact-table-cell-div _w-3'}>
        <WcheckboxItem96 dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f75c'} />
      </div>
      <ContacttablecelldivItem124
        iconSrc={'/svgs/icon-30ef407d14ab18dd518f51635a4d8df4.svg'}
      />
      <ContacttablecelldivItem118
        src={'images/smarties-avatar-04_1smarties-avatar-04.png'}
        divText={'Alice Brown'}
      />
      <ContacttablecelldivItem110 divText={'Developer'} />
      <ContacttablecelldivItem129
        divText={'alice.b@techcorp.com'}
        divText1={'+1 (555) 232-3158'}
      />
      <ContacttablecelldivItem115 />
      <ContacttablecelldivItem136
        dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f784'}
        dataWId1={'14a5560b-10e9-89de-42ba-ec1f5053f789'}
        divText={'Ne, NY'}
        divText1={'New York, NY'}
      />
      <ContacttablecelldivItem102 />
      <ContacttablecelldivItem92 />
      <ContacttablecelldivItem90 />
      <ContacttablecelldivItem113 divText={'10'} />
      <ContacttablecelldivItem121
        dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f7ab'}
      />
      <ContacttablecelldivItem114
        dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f7b2'}
      />
    </div>
  );
};

export default ContacttablerowItem143;
