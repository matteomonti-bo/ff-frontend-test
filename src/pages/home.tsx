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
  const handleFilterChange = (name: string, value: string) => {
    setFilterValues(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      <FilterBar products={products} onInputChange={handleFilterChange} />
      <ProductList products={products} filters={filterValues} />
    </>
  )
}

export default HomePage;
