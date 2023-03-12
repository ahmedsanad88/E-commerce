import type { IProduct } from '../products/products';

export interface ICategory {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
