import React from 'react';

const Noticedivstyle2Item = ({ divText }) => {
  return (
    <div className={'notice-div-style2 bg-grey'}>
      <div className={'notice-text'}>
        {divText ||
          'No properties configured. Click "Add Property" to add your first propery.'}
      </div>
    </div>
  );
};

export default Noticedivstyle2Item;
