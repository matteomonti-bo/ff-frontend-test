import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import StarRatings from "react-star-ratings";
import { IProduct } from "../../models";
import { formatCurrency } from "../../services/utils";
import styles from "./ProductInfo.module.scss";

type ProductInfoProps = {
  product: IProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { itemsCount, setItemsCount } = useContext(CartContext)

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.title}>{product.title}</h1>
      <div className={styles.price}>{formatCurrency(product.price)}</div>
      <dl>
        <dt>{"DESCRIZIONE"}</dt>
        <dd className={styles.paragraph}><p>{product.description}</p></dd>
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
      <button onClick={() => {setItemsCount(itemsCount+1)}}>AGGIUNGI AL CARRELLO</button>
    </div>
  );
};

export default ProductInfo;
