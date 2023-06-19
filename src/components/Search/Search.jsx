import { AiOutlineSearch } from "react-icons/ai";
import { TbFilter } from "react-icons/tb";
import "./index.css";
import React from "react";

const Search = ({ query, searchProduct, setQuery, toggleSideBar }) => {
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

export default Search;
