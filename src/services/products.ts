import { IProduct, FiltersType, Filters } from "../models";

const domain = "https://dummyjson.com";

const getProducts = async (): Promise<IProduct[]> => {
  let products = [];
  try {
    const response = await fetch(domain + "/products?limit=20");
     // if some error occured
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      handleErrors(message);
    } else {
      // get the json result
      const json = await response.json();
      products = json.products;
    }
  } catch (error) {
    const message = `An error has occured: ${error}`;
    handleErrors(message);
  }

  return products;
};

const getProduct = async (id: string | undefined): Promise<IProduct | null> => {
  let product = null;
  // check if product id is valid
  if(typeof id !== "string"){
    const message = `product id not valid`;
    handleErrors(message);
    return product;
  }
  try {
    const response = await fetch(domain + "/products/" + id);
    // if some error occured
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      handleErrors(message);
    } else {
      // get the json result
      product = await response.json();
    }
  } catch (error) {
    const message = `An error has occured: ${error}`;
    handleErrors(message);
  }
  return product;
};

const getDistinctValues = (products: IProduct[], field: FiltersType) => {
  return Array.from(new Set(products.map((i) => i[field])));
};

const getFilterData = (products: IProduct[]) : Filters => {
  const category = getDistinctValues(products, FiltersType.Category).slice(0, 3);
  const brand = getDistinctValues(products, FiltersType.Brand).slice(0, 3);
  return {
    category,
    brand
  }
}

const handleErrors = (message: string) => {
  console.error(message);
};

export {getProducts, getProduct, getFilterData};
