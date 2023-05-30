import { ProductPreview, FilterValues } from "../../models";
import { filterProducts } from "../../libs/products";
import ErrorMessage from "../ErrorMessage";
import ProductCard from "../ProductCard";
import styles from "./ProductList.module.scss";

type ProductListProps = {
  products: ProductPreview[];
  filterValues: FilterValues;
};

const ProductList = ({ products, filterValues }: ProductListProps) => {
  const filteredProducts = filterProducts(products, filterValues);

  return (
    <section className={styles.productList}>
      <h1 className="visually-hidden">Shop page</h1>
      {!filteredProducts.length ? (
        <NoProduct />
      ) : (
        filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))
      )}
    </section>
  );
};

const NoProduct = () => {
  return <ErrorMessage>No product available!</ErrorMessage>;
};

export default ProductList;
