import React from "react";

import { searchIcon } from "../../assets/svg";

import "./search-input.scss";

const SearchInput = () => (
  <div className="input-group">
    <span className="input-group-text">
      <img src={searchIcon} alt="" />
    </span>
    <input name="search" type="text" className="form-control" />
  </div>
);

export default SearchInput;
