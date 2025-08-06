import React from 'react';
import WeathertempraturerowItem from './WeathertempraturerowItem';

const ContactweathermaindivleftItem = ({}) => {
  return (
    <div className={'contact-weather-maindiv-left'}>
      <div className={'file-info-data'}>San Francisco, CA</div>
      <WeathertempraturerowItem />
    </div>
  );
};

export default ContactweathermaindivleftItem;
