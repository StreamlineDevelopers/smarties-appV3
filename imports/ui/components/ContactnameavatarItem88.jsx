import React from 'react';

const ContactnameavatarItem88 = ({ src }) => {
  return (
    <div className={'contact-name-avatar'}>
      <img
        src={src || 'images/smarties-avatar-02_1smarties-avatar-02.png'}
        loading={'lazy'}
        alt={''}
      />
      <div className={'dot-online'}></div>
    </div>
  );
};

export default ContactnameavatarItem88;
