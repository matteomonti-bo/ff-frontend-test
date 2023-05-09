import { useLoaderData } from "react-router-dom";
import { IProduct } from "../models";
import ProductDetail from "../components/ProductDetail";
import BreadCrumb from "../components/BreadCrumb";

const ProductPage = () => {
  const product = useLoaderData() as IProduct;

  return (
    <>
      <BreadCrumb category={product.category} title={product.title} />
      <ProductDetail product={product} />
    </>
  )
}

export default ProductPage;
