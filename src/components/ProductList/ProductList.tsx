import { IProduct, FilterFields } from "../../models";
import ErrorMessage from "../ErrorMessage"
import ProductCard from "../ProductCard";
import styles from "./ProductList.module.scss"

type ProductListProps = {
  products: IProduct[];
  filters: FilterFields
};

const ProductList = ({ products, filters }: ProductListProps) => {
  if (!products.length)
    return <NoProduct />;

  // copy onbject and filter products
  const filterProducts = (products: IProduct[]) => {
    if (filters.category === "" && filters.brand === "") return products;
    // filter products
    return products
      .filter((product) => product.category.toLowerCase().includes(filters.category.toLowerCase()))
      .filter((product) => product.brand.toLowerCase().includes(filters.brand.toLowerCase()));
  };

  const filteredProducts = filterProducts(products);
  const items = filteredProducts.map( (item) => <ProductCard key={item.id} product={item} />)

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
