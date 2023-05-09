import { useLoaderData } from "react-router-dom";
import { IProduct } from "../models";
import ProductDetail from "../components/ProductDetail";

const ProductPage = () => {
  const product = useLoaderData() as IProduct;

  return (
    <ProductDetail product={product} />
  )
}

export default ProductPage;
