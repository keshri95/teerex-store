// import { RxCross2 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ filterProductByColor,filterProductByGender,filterProductByPrice, filterProductByType,toggle  }) => {
  return (
    <div className={`product__filter ${toggle ? "visible" : ""}`}>

      {/* {!toggle && ( */}
        {/* <div> */}
          {/* <button className="close__btn" onClick={hideSidebar}>
            <RxCross2 />
          </button> */}
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
        {/* </div> */}
      {/* )} */}
     </div>

  );
};

export default Sidebar;
