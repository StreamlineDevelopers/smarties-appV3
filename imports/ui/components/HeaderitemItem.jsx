import React from 'react';
import FormcolItem433 from './FormcolItem433';

const HeaderitemItem = ({ name, dataName, id, name1, dataName1, id1 }) => {
  return (
    <div className="header-item">
      <FormcolItem433
        name={name || 'header-name-2'}
        dataName={dataName || 'Header Name 2'}
        placeholder="Header Name"
        id={id || 'header-name-2'}
      />
      <FormcolItem433
        name={name1 || 'header-value-2'}
        dataName={dataName1 || 'Header Value 2'}
        placeholder="Value"
        id={id1 || 'header-value-2'}
      />
      <div className="property-icon">
        <img loading="lazy" src="../images/smarties-filetrash.svg" alt="" />
      </div>
    </div>
  );
};

export default HeaderitemItem;
