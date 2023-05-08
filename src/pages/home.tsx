import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IProduct, FilterFields } from "../models";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

const initialFilterValues : FilterFields = {
  category: "",
  brand: ""
}

const HomePage = () => {
  const products = useLoaderData() as IProduct[];
  const [filterValues, setFilterValues] = useState(initialFilterValues)

  // filter inputs change
  const handleFilterInputChange = (name: string, value: string) => {
    //const { name, value } = e.target;
    setFilterValues(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      <FilterBar products={products} filterValues={filterValues} onInputChange={handleFilterInputChange} />
      <ProductList products={products} />
    </>
  )
}

export default HomePage;
