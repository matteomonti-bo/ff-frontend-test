import { useLoaderData } from "react-router-dom";
import { IProduct } from "../models";

const HomePage = () => {
  const products = useLoaderData() as IProduct[];
  console.log(products)

  return (
    <>Home!</>
  )
}

export default HomePage;
