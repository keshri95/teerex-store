import { BsCurrencyRupee} from "react-icons/bs"
const Sidebar = ({
  filterProductByColor,
  filterProductByGender,
  filterProductByPrice,
  filterProductByType,
  toggle,
  productColors,
  selectedColors,
  setSelectedColors,
  productGender,
  selectedGender,
  setSelectedGender,
  productPrice,
  selectedPrice,
  setSelectedPrice,
  productType,
  selectedType,
  setSelectedType,
}) => {

  return (
    <aside className={`product__filter ${toggle ? "visible" : ""}`}>
    <section className="filter__by_color">
      <h3>Colour</h3>
      {productColors?.map((color, index) => (
        <div className="color" key={index}>
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
    <section className="filter__by_gender">
      <h3>Gender</h3>
      {productGender?.map((gender, index) => (
        <div className="gender" key={index}>
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
    <section className="filter__by_price">
      <h3>Price</h3>
      {productPrice?.map((price, index) => (
        <div className="price" key={index}>
          <input
            type="checkbox"
            value={price}
            onChange={filterProductByPrice}
            checked={selectedPrice === price}
          />
          <label htmlFor="price"> <BsCurrencyRupee /> {price}</label>
        </div>
      ))}
    </section>
    <section className="filter__by_type">
      <h3>Type</h3>
      {productType?.map((type, index) => (
        <div className="type" key={index}>
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
  );
};

export default Sidebar;
