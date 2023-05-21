import { IProduct, FilterValues } from "../models";

export const filterProducts = (products: IProduct[], filters: FilterValues) => {
  if(!products.length) return [];
  if (filters.category === "" && filters.brand === "") return products;
  // filter products
  return products
    .filter((product) => product.category.toLowerCase().includes(filters.category.toLowerCase()))
    .filter((product) => product.brand.toLowerCase().includes(filters.brand.toLowerCase()));
};
