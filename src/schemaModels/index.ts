import {Category} from './categorySchema';
import {Payment, PaymentType, PaymentChannelInfo} from './paymentChannel';
import {Product} from './productSchema';
import {Permission, Role} from './roleAndPermission';
import {SaleProducts} from './saleProductsSchema';
import {SalesNotes} from './salesNotes';
import {Sales} from './salesSchema';
import {Store, Device} from './storeSchema';
import {User} from './userSchema';

export const models = [
  Product,
  SaleProducts,
  SalesNotes,
  Sales,
  Category,
  Payment,
  PaymentType,
  PaymentChannelInfo,
  User,
  Role,
  Permission,
  Store,
  Device,
];
