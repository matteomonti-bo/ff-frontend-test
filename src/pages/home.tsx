import { useLoaderData } from "react-router-dom";
import { IProduct } from "../models";
import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  const products = useLoaderData() as IProduct[];

  return (
    <>
      <div>filter here</div>
      <ProductList products={products} />
    </>
  )
}

export default HomePage;
