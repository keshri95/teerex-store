import { BsCurrencyRupee } from "react-icons/bs";
import "./index.css";
import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({
  filterProductByColor,
  filterProductByGender,
  filterProductByPrice,
  filterProductByType,
  toggle,
  productColors,
  selectedColors,
  productGender,
  selectedGender,
  productPrice,
  selectedPrice,
  productType,
  selectedType,
}) => {
  // console.log(typeof productColors);

  return (
    <React.Fragment>
      <aside className={`product-filter ${toggle ? "visible" : ""}`}>
        <section className="filter-section">
          <h3>Colour</h3>
          {productColors?.map((color, index) => (
            <div className="filter-item" key={index}>
              <input
                type="checkbox"
                name="color"
                value={color}
                onChange={filterProductByColor}
                checked={selectedColors?.includes(color)}
              />
              <label htmlFor="color">{color}</label>
            </div>
          ))}
        </section>
        <section className="filter-section">
          <h3>Gender</h3>
          {productGender?.map((gender, index) => (
            <div className="filter-item" key={index}>
              <input
                type="checkbox"
                name="gender"
                value={gender}
                onChange={filterProductByGender}
                checked={selectedGender?.includes(gender)}
              />
              <label htmlFor="gender">{gender}</label>
            </div>
          ))}
        </section>
        <section className="filter-section">
          <h3>Price</h3>
          {productPrice?.map((price, index) => (
            <div className="filter-item" key={index}>
              <input
                type="checkbox"
                value={price}
                onChange={filterProductByPrice}
                checked={selectedPrice === price}
              />
              <label htmlFor="price">
                {" "}
                <BsCurrencyRupee /> {price}
              </label>
            </div>
          ))}
        </section>
        <section className="filter-section">
          <h3>Type</h3>
          {productType?.map((type, index) => (
            <div className="filter-item" key={index}>
              <input
                type="checkbox"
                value={type}
                onChange={filterProductByType}
                checked={selectedType?.includes(type)}
              />
              <label htmlFor="type">{type}</label>
            </div>
          ))}
        </section>
      </aside>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  filterProductByColor: PropTypes.func,
  filterProductByGender: PropTypes.func,
  filterProductByPrice: PropTypes.func,
  filterProductByType: PropTypes.func,
  toggle: PropTypes.bool,
  productColors: PropTypes.array,
  selectedColors: PropTypes.array,
  productGender: PropTypes.array,
  selectedGender: PropTypes.array,
  productPrice: PropTypes.array,
  selectedPrice: PropTypes.string,
  productType: PropTypes.array,
  selectedType: PropTypes.array,
};

export default Sidebar;
