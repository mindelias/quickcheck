// import type {Moment} from 'moment';

export type Product = {
  id: string | number;
  title: string;
  description?: string;
  features?: string;
  price: number | string;
  keywords?: string;
  url?: string;
  rating?: number;
  quantity: number;
  inventory?: string;
  minRestockLevel?: number;
  isNotify?: boolean;
  trackQuantity?: boolean;
  sellWhileOutOfStock?: boolean;
  stock: number;
  category?: Category;
  subcategory?: Category;
  discountPercentage?: number;
  brand?: string;
  thumbnail?: string;
  status?: number;
  images?: Array<string>;
  createdOn?: string;
  modifiedOn?: string;
  isChecked?: boolean;
};
