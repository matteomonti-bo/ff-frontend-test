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

export type ProductPreview = Pick<IProduct, 'id' | 'title' | 'category' | 'brand' | 'thumbnail'> & Partial<IProduct>

export enum FiltersType {
  Category = "category",
  Brand = "brand"
}

export type Filters = Record<FiltersType, string[]>
export type FilterValues = Record<FiltersType, string>
