import { IProduct } from "../models";

const domain = "https://dummyjson.com/";

const getProducts = async (): Promise<IProduct[]> => {
  let products = [];
  try {
    const response = await fetch(domain + "/products");
     // if some error occured
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      handleErrors(message);
    } else {
      // get the json result
      products = await response.json();
    }
  } catch (error) {
    const message = `An error has occured: ${error}`;
    handleErrors(message);
  }

  return products;
};

const getCategories = (products: IProduct[]) => {
  return Array.from(new Set(products.map((i) => i.category)));
};

const handleErrors = (message: string) => {
  console.error(message);
};

export {getProducts, getCategories};
