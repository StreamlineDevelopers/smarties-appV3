import React from 'react';
import ContactweathermaindivleftItem from './ContactweathermaindivleftItem';
import LocationmapminiItem from './LocationmapminiItem';

const ContactweathermaindivItem = ({}) => {
  return (
    <div className={'contact-weather-maindiv'}>
      <ContactweathermaindivleftItem />
      <LocationmapminiItem />
    </div>
  );
};

export default ContactweathermaindivItem;
