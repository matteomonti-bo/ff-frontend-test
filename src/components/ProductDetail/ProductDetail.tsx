import { IProduct } from "../../models";
import ProductSlider from "../ProductSlider";
import ProductInfo from "../ProductInfo";
import styles from "./ProductDetail.module.scss"

type ProductDetailProps = {
  product: IProduct
}

const ProductDetail = ({ product }:ProductDetailProps) => {
  const images = product?.images || [product.thumbnail]

  return (
    <article className={styles.productDetail}>
      <ProductSlider images={images} title={product.title} />
      <ProductInfo product={product} />
    </article>
  )
}

export default ProductDetail;
