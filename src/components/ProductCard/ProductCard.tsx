import { IProduct } from "../../models";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: IProduct;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.thumb}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <div className={styles.category}>{product.category}</div>
    </article>
  )
}

export default ProductCard;
