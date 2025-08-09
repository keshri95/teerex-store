import { AiOutlineSearch } from "react-icons/ai";
import { TbFilter } from "react-icons/tb";
import "./index.css";
import React from "react";
import PropTypes from "prop-types";

const Search = ({ query, searchProduct, setQuery, toggleSideBar }) => {
  // console.log(typeof toggleSideBar);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduct();
  };
  return (
    <React.Fragment>
      <form className="sidebar-product-search" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" className="search-btn" onClick={searchProduct}>
          <AiOutlineSearch />
        </button>
        <button type="button" className="filter-btn" onClick={toggleSideBar}>
          <TbFilter />
        </button>
      </form>
    </React.Fragment>
  );
};

Search.propTypes = {
  query: PropTypes.string,
  searchProduct: PropTypes.func,
  setQuery: PropTypes.func,
  toggleSideBar: PropTypes.func,
};

export default Search;
