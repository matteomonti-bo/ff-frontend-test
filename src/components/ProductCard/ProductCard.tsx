import { ProductPreview } from "../../models";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: ProductPreview;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.thumb}>
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </Link>
      <h2>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h2>
      <div className={styles.category}>{product.category}</div>
    </article>
  );
};

export default ProductCard;
