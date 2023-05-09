import StarRatings from "react-star-ratings";
import { IProduct } from "../../models";
import { formatCurrency } from "../../services/utils";
import styles from "./ProductInfo.module.scss";

type ProductInfoProps = {
  product: IProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className={styles.productInfo}>
      <h1 className={styles.title}>{product.title}</h1>
      <div className={styles.price}>{formatCurrency(product.price)}</div>
      <dl>
        <dt>{"DESCRIZIONE"}</dt>
        <dd>{product.description}</dd>
        <dt>{"MARCA"}</dt>
        <dd className="text-upper">{product.brand}</dd>
        <dt>{"CATEGORIA"}</dt>
        <dd className="text-upper">{product.category}</dd>
        {product.rating && (
          <>
            <dt>{"RECENSIONI"}</dt>
            <dd>
              <StarRatings
                rating={product.rating}
                numberOfStars={5}
                starRatedColor="#FFC700"
                starDimension="24px"
                starSpacing="0px"
              />
            </dd>
          </>
        )}
      </dl>
      <button>AGGIUNGI AL CARRELLO</button>
    </div>
  );
};

export default ProductInfo;
