import React from 'react';
import ReusableItem217 from './ReusableItem217';
import TrendingtopicitembotItem from './TrendingtopicitembotItem';

const SocialradiocardItem = ({ label, dataWId }) => {
  return (
    <div className="social-radiocard">
      <ReusableItem217
        label={label || '5 Strategies for Effective Team Management'}
      />
      <TrendingtopicitembotItem
        dataWId={dataWId || '183aca65-1bf9-f04d-110c-920eb3d9fda9'}
      />
    </div>
  );
};

export default SocialradiocardItem;
