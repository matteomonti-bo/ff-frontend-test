import { IProduct } from "../../models";
import ErrorMessage from "../ErrorMessage"
import ProductCard from "../ProductCard";

type ProductListProps = {
  products: IProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  if (!products.length)
    return <NoProduct />;

  // product card map
  const items = products.map( (item) => <ProductCard key={item.id} product={item} />)

  return (
    <section>
      <h1 className="visually-hidden">Shop page</h1>
      {items}
    </section>
  )
}

const NoProduct = () => {
  return <ErrorMessage>No product available!</ErrorMessage>
}

export default ProductList;
