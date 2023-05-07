import { IProduct } from "../../models";
import ErrorMessage from "../ErrorMessage"
import ProductCard from "../ProductCard";
import styles from "./ProductList.module.scss"

type ProductListProps = {
  products: IProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  if (!products.length)
    return <NoProduct />;

  // product card map
  const items = products.map( (item) => <ProductCard key={item.id} product={item} />)

  return (
    <section className={styles.productList}>
      <h1 className="visually-hidden">Shop page</h1>
      {items}
    </section>
  )
}

const NoProduct = () => {
  return <ErrorMessage>No product available!</ErrorMessage>
}

export default ProductList;
