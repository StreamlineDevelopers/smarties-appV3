import React from 'react';

const Assetsearchdiv2Item = ({ props }) => {
  return (
    <form action="/search" className="asset-search-div-2 w-form">
      <input
        className="asset-search w-input"
        maxlength="256"
        name="query"
        placeholder="Search…"
        type="search"
        id="search"
        required
      />
      <input type="submit" className="search-button w-button" value="Search" />
    </form>
  );
};

export default Assetsearchdiv2Item;
