import React from 'react';

const ScriptinjectortextItem = ({}) => {
  return (
    <div className={'scriptinjector-text'}>
      {'function recommendProducts(userHistory) {  '}
      <br />
      {'// Algorithm to analyze user preferences  '}
      <br />
      {'const preferences = analyzePreferences(userHistory);  '}
      <br />
      <br />
      {'// Filter catalog based on preferences  '}
      <br />
      {'return catalog.filter(product =>    '}
      <br />
      {'matchesPreferences(product, preferences)  '}
      <br />
      {').slice(0, 5); // Return top 5 matches'}
      <br />
      {'}'}
    </div>
  );
};

export default ScriptinjectortextItem;
