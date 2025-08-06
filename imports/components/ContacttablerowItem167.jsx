import React from 'react';
import WcheckboxItem114 from './WcheckboxItem114';
import ContacttablecelldivItem148 from './ContacttablecelldivItem148';
import ContacttablecelldivItem138 from './ContacttablecelldivItem138';
import ContacttablecelldivItem130 from './ContacttablecelldivItem130';
import ContacttablecelldivItem152 from './ContacttablecelldivItem152';
import ContacttablecelldivItem139 from './ContacttablecelldivItem139';
import ContacttablecelldivItem159 from './ContacttablecelldivItem159';
import ContacttablecelldivItem132 from './ContacttablecelldivItem132';
import ContacttablecelldivItem107 from './ContacttablecelldivItem107';
import ContacttablecelldivItem108 from './ContacttablecelldivItem108';
import ContacttablecelldivItem133 from './ContacttablecelldivItem133';
import ContacttablecelldivItem156 from './ContacttablecelldivItem156';
import ContacttablecelldivItem134 from './ContacttablecelldivItem134';

const ContacttablerowItem167 = ({
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
      className="contact--table-row"
    >
      <div className="contact-table-cell-div _w-3">
        <WcheckboxItem114
          dataWId={dataWId1 || 'e126a55e-d39a-9fdc-2dc4-f201db972168'}
        />
      </div>
      <ContacttablecelldivItem148 />
      <ContacttablecelldivItem138
        src="images/smarties-avatar-02_1smarties-avatar-02.png"
        divText="Sarah Johnson"
      />
      <ContacttablecelldivItem130 divText="VP of Marketing" />
      <ContacttablecelldivItem152
        divText="sarah.j@techcorp.com"
        divText1="+1 (555) 123-4567"
      />
      <ContacttablecelldivItem139 />
      <ContacttablecelldivItem159
        dataWId={dataWId2 || 'd5d24fc8-f7d9-5f76-d442-ba200f41339b'}
        dataWId1={dataWId3 || '792124c6-0a43-6117-09ca-054912cce46e'}
        divText="Se, CA"
        divText1="San Francisco, CA"
      />
      <ContacttablecelldivItem132 />
      <ContacttablecelldivItem107 />
      <ContacttablecelldivItem108 />
      <ContacttablecelldivItem133 divText="6" />
      <ContacttablecelldivItem156
        dataWId={dataWId4 || '5d9ed109-0287-49e5-d932-829a7a498bbb'}
        dataWId1={dataWId5 || '7ee79f28-1055-c466-27e8-3173f706dca1'}
      />
      <ContacttablecelldivItem134
        dataWId={dataWId6 || 'd9d41f7f-0057-93a0-759a-4f4719e2e394'}
      />
    </div>
  );
};

export default ContacttablerowItem167;
