import React from 'react';

const WeathertempraturerowItem = ({}) => {
  return (
    <div className={'weather-temprature-row'}>
      <div className={'icon-weather'}>
        <img
          src={'images/smarties-contact-icon-weather.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div className={'file-info-data'}>{'62°F, Cloudy'}</div>
    </div>
  );
};

export default WeathertempraturerowItem;
