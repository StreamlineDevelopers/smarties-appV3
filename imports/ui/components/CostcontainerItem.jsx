import React from 'react';
import CostinfoItem from './CostinfoItem';

const CostcontainerItem = ({ label, label1 }) => {
  return (
    <div className={'cost-container'}>
      <CostinfoItem label={'Cost'} label1={'~$0.08 /min'} />
      <img
        width={'407'}
        height={'7'}
        alt={''}
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb4ea107b645038482152_Latency-Bar.svg'
        }
        loading={'lazy'}
        className={'cost-bar'}
      />
    </div>
  );
};

export default CostcontainerItem;
