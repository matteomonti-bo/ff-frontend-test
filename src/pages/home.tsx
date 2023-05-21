import { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { IProduct, FilterFields } from "../models";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";
import { getFilterData } from "../services/products";

const initialFilterValues : FilterFields = {
  category: "",
  brand: ""
}

const HomePage = () => {
  const products = useLoaderData() as IProduct[];
  const [filterValues, setFilterValues] = useState(initialFilterValues)
  // recupero i valori distinti di category e brand da filtrare (prendo solo i primi 3 item ai fini della prova)
  const filterData = useMemo(() => getFilterData(products), [products])
  // filter inputs change
  const handleFilterChange = (name: string, value: string) => {
    setFilterValues(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      <FilterBar filters={filterData} onInputChange={handleFilterChange} />
      <ProductList products={products} filters={filterValues} />
    </>
  )
}

export default HomePage;
