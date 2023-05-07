import { IProduct } from "../../models";
import ErrorMessage from "../ErrorMessage"

type ProductListProps = {
  products: IProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  console.log(products)
  if (!products.length)
    return <NoProduct />;

  return <>Product list</>
}

const NoProduct = () => {
  return <ErrorMessage>No product available!</ErrorMessage>
}

export default ProductList;
