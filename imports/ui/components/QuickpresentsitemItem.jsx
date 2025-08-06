import React from 'react';
import QuickpresentsitemleftItem from './QuickpresentsitemleftItem';
import QuickpresentsitemleftItem366 from './QuickpresentsitemleftItem366';

const QuickpresentsitemItem = ({ itemText }) => {
  return (
    <a href="#" target="_blank" className="quickpresents-item">
      <QuickpresentsitemleftItem
        itemText={itemText || 'Limited-time discount'}
      />
      <QuickpresentsitemleftItem366 />
    </a>
  );
};

export default QuickpresentsitemItem;
