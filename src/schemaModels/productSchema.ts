import Realm from 'realm';
import {Category} from './categorySchema';

export class Product extends Realm.Object<Product> {
  id!: string;
  title!: string;
  description?: string;
  features?: string;
  price!: string | number;
  keywords?: string;
  url?: string;
  rating?: string | number;
  quantity!: number;
  stock?: string | number;
  inventory?: string;
  trackQuantity?: boolean;
  category?: Category;
  subcategory?: Category;
  discountPercentage?: string | number;
  brand?: string;
  thumbnail?: string;
  images?: Array<string>;
  createdOn!: string;
  modifiedOn?: string;
  status?: number;
  minRestockLevel?: number;
  sellWhileOutOfStock?: boolean;
  isNotify?: boolean;

  static schema: Realm.ObjectSchema = {
    name: 'Product',
    primaryKey: 'id',
    // embedded: true,
    properties: {
      id: 'string',
      title: 'string',
      description: 'string',
      features: 'string?',
      price: 'mixed',
      keywords: 'string?',
      url: 'string?',
      rating: 'mixed?',
      quantity: 'int',
      stock: 'mixed?',
      inventory: 'string?',
      trackQuantity: 'bool?',
      category: 'Category?',
      subcategory: 'Category?',
      discountPercentage: 'mixed?',
      brand: 'string?',
      thumbnail: 'string?',
      images: 'string?[]',
      createdOn: 'string',
      modifiedOn: 'string?',
      status: 'int?',
      minRestockLevel: 'int?',
      isNotify: 'bool?',
      sellWhileOutOfStock: 'bool?',
    },
  };
}
