import { AiOutlineSearch } from "react-icons/ai";
import { TbFilter } from "react-icons/tb";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { fetchFromAPI, searchItems } from "../utils/fetchFromAPI";
import { RxCross2 } from "react-icons/rx"
const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const [filterProduct, setFilterProduct] = useState([]);

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    fetchFromAPI()
      .then((res) => {
        setData(res);
        setFilterProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchProdcut = () => {
    let result = searchItems(data, query);
    setData(result);
    setQuery("");
  };

  const filterProductByColor = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      const matchColor = data.filter((item) => {
        return item.color === value;
      });
      setData(matchColor);
    } else {
      setData(filterProduct);
    }
  };

  const filterProductByGender = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      const matchGender = data.filter((item) => {
        return item.gender === value;
      });
      setData(matchGender);
    } else {
      setData(filterProduct);
    }
  };

  const filterProductByPrice = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      let price = value.trim().split("-");
      if (price.length > 1) {
        let matchPrice = data.filter((item) => {
          return item.price >= price[0] && item.price <= price[1];
        });
        setData(matchPrice);
      } else {
        let matchPrice = data.filter((item) => item.price >= 401);
        setData(matchPrice);
      }
    } else {
      setData(filterProduct);
    }
  };

  const filterProductByType = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      const matchType = data.filter((item) => {
        return item.type === value;
      });
      setData(matchType);
    } else {
      setData(filterProduct);
    }
  };

  const toggleSideBar = () => {
    setToggle(!toggle)
  }
  const hideSidebar  = () =>{
    setToggle(!toggle)
  }

  return (
    <div className="home__container">
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
      <div className="prodct__home">
        {
          !toggle && (
            <div className="product__filter">
        <button className="close__btn" onClick={hideSidebar}><RxCross2 /></button>
          <div className="filter__by_color">
            <h3>Colour</h3>
            <div className="color">
              <input
                type="checkbox"
                name="color"
                value="Red"
                onChange={filterProductByColor}
              />
              <span>Red</span>
            </div>

            <div className="color">
              <input
                type="checkbox"
                name="color"
                value="Blue"
                onChange={filterProductByColor}
              />
              <span>Blue</span>
            </div>
            <div className="color">
              <input
                type="checkbox"
                name="color"
                value="Green"
                onChange={filterProductByColor}
              />
              <span>Green</span>
            </div>
          </div>

          <div className="filter__by_gender">
            <h3>Gender</h3>
            <div className="gender">
              <input
                type="checkbox"
                name="gender"
                value="Men"
                onChange={filterProductByGender}
              />
              <span>Men</span>
            </div>

            <div className="gender">
              <input
                type="checkbox"
                name="gender"
                value="Women"
                onChange={filterProductByGender}
              />
              <span>Women</span>
            </div>
          </div>
          <div className="filter__by_price">
            <h3>Price</h3>
            <div className="price">
              <input
                type="checkbox"
                value="0-250"
                onChange={filterProductByPrice}
              />
              <span>0 - Rs250</span>
            </div>
            <div className="price">
              <input
                type="checkbox"
                value="251-400"
                onChange={filterProductByPrice}
              />
              <span>Rs251-Rs400</span>
            </div>
            <div className="price">
              <input
                type="checkbox"
                value="450"
                onChange={filterProductByPrice}
              />
              <span>Rs450</span>
            </div>
          </div>
          <div className="filter__by_type">
            <h3>Type</h3>
            <div className="type">
              <input
                type="checkbox"
                value="Polo"
                onChange={filterProductByType}
              />
              <span>Polo</span>
            </div>
            <div className="type">
              <input
                type="checkbox"
                value="Hoodie"
                onChange={filterProductByType}
              />
              <span>Hoodie</span>
            </div>
            <div className="type">
              <input
                type="checkbox"
                value="Basic"
                onChange={filterProductByType}
              />
              <span>Basic</span>
            </div>
          </div>
        </div>
          )
        }
        

        <div className="all__products">
          {data.length > 1 ? (
            data?.map((elem, id) => <Product key={id} elem={elem} />)
          ) : (
            <p>No match Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
