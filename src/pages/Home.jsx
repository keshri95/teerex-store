import {AiOutlineSearch} from 'react-icons/ai';
import {TbFilter} from 'react-icons/tb'
import Product from "../components/Product"
import { useEffect, useState } from 'react';
import { fetchFromAPI, searchItems } from "../utils/fetchFromAPI"

function Home() {
 
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const [filterProduct, setFilterProduct] = useState([])



    useEffect(() => {
        fetchFromAPI()
        .then((res) => {
            setData(res)
            setFilterProduct(res)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    const searchProdcut = () => {
        let result = searchItems(data, query)
        setData(result)
        setQuery("")
    }

    const filterProductByColor =(e) => {
        const {checked, value} = e.target

        if(checked){
            
            const matchColor = data.filter((item) => {
               return item.color === value
            })
            setData(matchColor)
        } else{
            setData(filterProduct)
        }
    }


    const filterProductByGender = (e) => {
        const { checked, value } = e.target

        if(checked){
            const matchGender = data.filter((item) => {
                return item.gender === value
            })
            setData(matchGender)
        } else{
            setData(filterProduct)
        }
    }


return (
  <div>
      <div className='sidebar__product_search'>
      <input type="text" placeholder='Search for products...' value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className='search__btn' onClick={() =>searchProdcut(data)}><AiOutlineSearch/></button>
      <button className='filter__btn'><TbFilter/></button>
      </div>
     <div className="prodct__home">
      <div className='product__filter'>
          <div>
              <h3>Colour</h3>
              <input type="checkbox" name='color' value="Red" onChange={filterProductByColor} /> <span>Red</span>
              <br />
              <input type="checkbox" name='color' value="blue" onChange={filterProductByColor} /> <span>Blue</span>
              <br />
              <input type="checkbox" name='color' value="green" onChange={filterProductByColor} /> <span>Green</span>
          </div>
          <div>
              <h3>Gender</h3>
              <input type="checkbox" name='gender' value="Men" onChange={filterProductByGender} /> <span>Men</span>
              <br />
              <input type="checkbox" name='gender' value="Women" onChange={filterProductByGender} /> <span>Women</span>
          </div>
          <div>
              <h3>Price</h3>
              <input type="checkbox" /> <span>0 - Rs250</span>
              <br />
              <input type="checkbox" /> <span>Rs251 - Rs400</span>
              <br />
              <input type="checkbox" /> <span>Rs450</span>
          </div>
          <div>
              <h3>Type</h3>
              <input type="checkbox" /> <span>Polo</span>
              <br />
              <input type="checkbox" /> <span>Hoodie</span>
              <br />
              <input type="checkbox" /> <span>Basic</span>
          </div>

      </div>
      <div className="all__products">
        {
          data.length > 1 ? data?.map((elem, id) => (
                <Product key={id} elem={elem} />
            )) : <p>No match Found</p>
        }
      </div>
     </div>

  </div>
  )
}

export default Home