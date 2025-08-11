import React from 'react';
import WcheckboxItem_a909ee55 from './WcheckboxItem_a909ee55';
import ContacttablecelldivItem_e6e82ec2 from './ContacttablecelldivItem_e6e82ec2';
import ContacttablecelldivItem_7b26120f from './ContacttablecelldivItem_7b26120f';
import ContacttablecelldivItem_3fbd2ad0 from './ContacttablecelldivItem_3fbd2ad0';
import ContacttablecelldivItem_8523b50c from './ContacttablecelldivItem_8523b50c';
import ContacttablecelldivItem_8c0c687a from './ContacttablecelldivItem_8c0c687a';
import ContacttablecelldivItem_4419d72d from './ContacttablecelldivItem_4419d72d';
import ContacttablecelldivItem_93d27bf5 from './ContacttablecelldivItem_93d27bf5';
import ContacttablecelldivItem_09876796 from './ContacttablecelldivItem_09876796';
import ContacttablecelldivItem_2357e1ce from './ContacttablecelldivItem_2357e1ce';
import ContacttablecelldivItem_c8963027 from './ContacttablecelldivItem_c8963027';
import ContacttablecelldivItem_cb22bbc2 from './ContacttablecelldivItem_cb22bbc2';
import ContacttablecelldivItem_2fbb1f8c from './ContacttablecelldivItem_2fbb1f8c';

const ContacttablerowItem_94f10029 = ({
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
        <WcheckboxItem_a909ee55
          dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f75c'}
        />
      </div>
      <ContacttablecelldivItem_e6e82ec2
        iconSrc={'/svgs/icon-30ef407d14ab18dd518f51635a4d8df4.svg'}
      />
      <ContacttablecelldivItem_7b26120f
        src={'images/smarties-avatar-04_1smarties-avatar-04.png'}
        divText={'Alice Brown'}
      />
      <ContacttablecelldivItem_3fbd2ad0 divText={'Developer'} />
      <ContacttablecelldivItem_8523b50c
        divText={'alice.b@techcorp.com'}
        divText1={'+1 (555) 232-3158'}
      />
      <ContacttablecelldivItem_8c0c687a />
      <ContacttablecelldivItem_4419d72d
        dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f784'}
        dataWId1={'14a5560b-10e9-89de-42ba-ec1f5053f789'}
        divText={'Ne, NY'}
        divText1={'New York, NY'}
      />
      <ContacttablecelldivItem_93d27bf5 />
      <ContacttablecelldivItem_09876796 />
      <ContacttablecelldivItem_2357e1ce />
      <ContacttablecelldivItem_c8963027 divText={'10'} />
      <ContacttablecelldivItem_cb22bbc2
        dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f7ab'}
      />
      <ContacttablecelldivItem_2fbb1f8c
        dataWId={'14a5560b-10e9-89de-42ba-ec1f5053f7b2'}
      />
    </div>
  );
};

export default ContacttablerowItem_94f10029;
