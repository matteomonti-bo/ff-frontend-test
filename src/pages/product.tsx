import { useLoaderData } from "react-router-dom";
import { IProduct } from "../models";

const ProductPage = () => {
  const product = useLoaderData() as IProduct;
  console.log(product)

  return (
    <>Product!</>
  )
}

export default ProductPage;
