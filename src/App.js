import { useState, useEffect } from "react";
import ProductOverview from "./components/ProductOverview";
import ProductFilter from "./components/ProductFilter";
const axios = require("axios").default;

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://pfp-public-productdb-api.azurewebsites.net/api/product/search",
        {
          page: 1,
          pageSize: 60,
          searchText: "",
          productCategoryTypeIds: [],
          complianceTypeIds: [],
          sourceTypeIds: [],
        }
      )
      .then((response) => {
        setProducts(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
 
  return (
    <div className="App">
      <ProductFilter />
      <ProductOverview products={products} />
    </div>
  );
}

export default App;
