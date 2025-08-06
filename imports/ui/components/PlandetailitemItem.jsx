import React from 'react';
import PlandetailtextcontentItem from './PlandetailtextcontentItem';

const PlandetailitemItem = ({ title, description }) => {
  return (
    <div className={'plandetail-item'}>
      <div className={'plandetail-icon'}>
        <img
          src={
            'https://cdn.prod.website-files.com/681a00468b98375f74c9201b/681df156a4287c3b2984d73c_icon-park-solid%3Acheck-one.svg'
          }
          loading={'lazy'}
          width={'21'}
          height={'21'}
          alt={''}
          className={'icon-check'}
        />
      </div>
      <PlandetailtextcontentItem
        title={'Social content + buzz generation'}
        description={'Automatically generate blogs around trending topics'}
      />
    </div>
  );
};

export default PlandetailitemItem;
