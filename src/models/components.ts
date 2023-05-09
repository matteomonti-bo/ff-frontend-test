export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export enum FiltersType {
  Category = "category",
  Brand = "brand"
}

export type FilterFields = {
  category: string
  brand: string;
}
