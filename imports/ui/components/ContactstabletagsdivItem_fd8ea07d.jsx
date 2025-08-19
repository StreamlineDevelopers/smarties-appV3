import React from 'react';

const ContactstabletagsdivItem_fd8ea07d = ({ status }) => {
  let statusLabel = '';
  let bgClass = '';

  switch (status) {
    case 'published':
      statusLabel = 'Published';
      bgClass = 'bg-green';
      break;
    case 'draft':
      statusLabel = 'Draft';
      bgClass = 'bg-silver';
      break;
    case 'scheduled':
      statusLabel = 'Schedule';
      bgClass = 'bg-blue';
      break;
    case 'archived':
      statusLabel = 'Archived';
      bgClass = 'bg-yellow';
      break;
    default:
      statusLabel = 'Unknown';
      bgClass = 'bg-gray'; // fallback
  }

  return (
    <div className={'contacts-table-tags-div'}>
      <div className={`contact-table-tag ${bgClass}`}>
        {statusLabel}
      </div>
    </div>
  );
};

export default ContactstabletagsdivItem_fd8ea07d;
