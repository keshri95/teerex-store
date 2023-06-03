/* eslint-disable no-unused-vars */
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import { productColors, productGender, productType, productPrice } from "../utils/filterOptions"; 


const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState([]);

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
    if(query.length > 0){

      const searchTerm = data?.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
    })

    setData(searchTerm)
    setQuery("")
    }
}

const searchProduct = () => {
  if (query.length > 0) {
    const searchTerm = data?.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setData(searchTerm);
    setQuery("");
  }
};

const filterProductByOptions = () => {
  let filteredProducts = data;
  if (selectedColors.length > 0) {
    filteredProducts = filteredProducts?.filter((item) =>
      selectedColors.includes(item.color)
    );
  }

  if (selectedGender.length > 0) {
    filteredProducts = filteredProducts?.filter((item) =>
      selectedGender.includes(item.gender)
    );
  }

  if (selectedPrice !== "") {
    const priceRange = selectedPrice.trim().split("-");
    if (priceRange.length > 1) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.price >= parseInt(priceRange[0]) &&
          item.price <= parseInt(priceRange[1])
      );
    } else {
      filteredProducts = filteredProducts?.filter(
        (item) => item.price >= parseInt(priceRange[0])
      );
    }
  }

  if (selectedType.length > 0) {
    filteredProducts = filteredProducts?.filter((item) =>
      selectedType.includes(item.type)
    );
  }

  setData(filteredProducts);
};

const filterProductByColor = (e) => {
  const { checked, value } = e.target;

  if (checked) {
    const updatedColors = [...selectedColors, value];
    setSelectedColors(updatedColors);
  } else {
    const updatedColors = selectedColors?.filter((color) => color !== value);
    setSelectedColors(updatedColors);
    setData(filterProduct)
  }
};

const filterProductByGender = (e) => {
  const { checked, value } = e.target;

  if (checked) {
    const updatedGender = [...selectedGender, value];
    setSelectedGender(updatedGender);
  } else {
    const updatedGender = selectedGender?.filter((gender) => gender !== value);
    setSelectedGender(updatedGender);
    setData(filterProduct)
  }
};

const filterProductByPrice = (e) => {
  const { checked, value } = e.target;

  if (checked) {
    setSelectedPrice(value);
  } else {
    setSelectedPrice("");
    setData(filterProduct)
  }
};

const filterProductByType = (e) => {
  const { checked, value } = e.target;

  if (checked) {
    const updatedType = [...selectedType, value];
    setSelectedType(updatedType);
  } else {
    const updatedType = selectedType.filter((type) => type !== value);
    setSelectedType(updatedType);
    setData(filterProduct)
  }
};

  const toggleSideBar = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    filterProductByOptions();
  }, [selectedColors, selectedGender, selectedPrice, selectedType]);


  return (
    <div className="home__container">
      <Search
        query={query}
        searchProdcut={searchProdcut}
        setQuery={setQuery}
        toggleSideBar={toggleSideBar}
        data={data}
      />
      <div className="prodct__home">
        <Sidebar
          filterProductByColor={filterProductByColor}
          filterProductByGender={filterProductByGender}
          filterProductByPrice={filterProductByPrice}
          filterProductByType={filterProductByType}
          toggle={toggle}
          productColors={productColors}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          productGender={productGender}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          productPrice={productPrice}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          productType={productType}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <section className="all__products">
          {data.length > 1 ? (
            data?.map((elem, id) => <Product key={id} elem={elem} />)
          ) : (
            <p>No match Found</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
