import { AiOutlineSearch } from "react-icons/ai";
import { TbFilter } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const Search = ({ query, searchProdcut, setQuery, toggleSideBar, data }) => {
  return (
    <div className="sidebar__product_search">
      <input
        className="search__bar"
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search__btn" onClick={() => searchProdcut(data)}>
        <AiOutlineSearch />
      </button>
      <button className="filter__btn">
        <TbFilter onClick={toggleSideBar} />
      </button>
    </div>
  );
};

export default Search;
