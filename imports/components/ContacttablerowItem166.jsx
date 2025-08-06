import React from 'react';
import WcheckboxItem114 from './WcheckboxItem114';
import ContacttablecelldivItem147 from './ContacttablecelldivItem147';
import ContacttablecelldivItem138 from './ContacttablecelldivItem138';
import ContacttablecelldivItem130 from './ContacttablecelldivItem130';
import ContacttablecelldivItem152 from './ContacttablecelldivItem152';
import ContacttablecelldivItem135 from './ContacttablecelldivItem135';
import ContacttablecelldivItem159 from './ContacttablecelldivItem159';
import ContacttablecelldivItem121 from './ContacttablecelldivItem121';
import ContacttablecelldivItem110 from './ContacttablecelldivItem110';
import ContacttablecelldivItem108 from './ContacttablecelldivItem108';
import ContacttablecelldivItem133 from './ContacttablecelldivItem133';
import ContacttablecelldivItem141 from './ContacttablecelldivItem141';
import ContacttablecelldivItem134 from './ContacttablecelldivItem134';

const ContacttablerowItem166 = ({
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
      className="contact--table-row"
    >
      <div className="contact-table-cell-div _w-3">
        <WcheckboxItem114
          dataWId={dataWId1 || '14a5560b-10e9-89de-42ba-ec1f5053f75c'}
        />
      </div>
      <ContacttablecelldivItem147 />
      <ContacttablecelldivItem138
        src="images/smarties-avatar-04_1smarties-avatar-04.png"
        divText="Alice Brown"
      />
      <ContacttablecelldivItem130 divText="Developer" />
      <ContacttablecelldivItem152
        divText="alice.b@techcorp.com"
        divText1="+1 (555) 232-3158"
      />
      <ContacttablecelldivItem135 />
      <ContacttablecelldivItem159
        dataWId={dataWId2 || '14a5560b-10e9-89de-42ba-ec1f5053f784'}
        dataWId1={dataWId3 || '14a5560b-10e9-89de-42ba-ec1f5053f789'}
        divText="Ne, NY"
        divText1="New York, NY"
      />
      <ContacttablecelldivItem121 />
      <ContacttablecelldivItem110 />
      <ContacttablecelldivItem108 />
      <ContacttablecelldivItem133 divText="10" />
      <ContacttablecelldivItem141
        dataWId={dataWId4 || '14a5560b-10e9-89de-42ba-ec1f5053f7ab'}
      />
      <ContacttablecelldivItem134
        dataWId={dataWId5 || '14a5560b-10e9-89de-42ba-ec1f5053f7b2'}
      />
    </div>
  );
};

export default ContacttablerowItem166;
