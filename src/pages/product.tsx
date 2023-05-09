import { useLoaderData } from "react-router-dom";
import { IProduct } from "../models";
import ProductSlider from "../components/ProductSlider";
import ProductInfo from "../components/ProductInfo";

const ProductPage = () => {
  const product = useLoaderData() as IProduct;
  const images = product?.images || [product.thumbnail]

  return (
    <article>
      <ProductSlider images={images} title={product.title} />
      <ProductInfo />
    </article>
  )
}

export default ProductPage;
