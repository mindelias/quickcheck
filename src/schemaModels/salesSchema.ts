import Realm from 'realm';
import RNFS from 'react-native-fs';
import {SaleProducts} from './saleProductsSchema';
import {SalesNotes} from './salesNotes';
import {models} from '.';

export class Sales extends Realm.Object<Sales> {
  id!: string;
  products?: Realm.List<SaleProducts>;
  totalPrice?: number;
  totalAmount?: number;
  serverId?: string;
  cartId?: string;
  storeId?: string;
  transactionRef?: string;
  totalItems?: number;
  paymentChannel?: number;
  paymentStatus?: number;
  transactionDate?: string;
  rollbackdate?: string;
  isTransactionDateEdited?: boolean;
  notes?: Realm.List<SalesNotes>;
  createdOn!: string;
  modifiedOn?: string;
  createdBy?: string;

  static schema: Realm.ObjectSchema = {
    name: 'Sales',
    primaryKey: 'id',
    properties: {
      id: 'string',
      products: {type: 'list', objectType: 'SaleProducts'},
      totalPrice: 'int?',
      totalAmount: 'int?',
      serverId: 'string?',
      storeId: 'string?',
      cartId: 'string?',
      transactionRef: 'string?',
      totalItems: 'int?',
      paymentChannel: 'int?',
      paymentStatus: 'int?',
      transactionDate: 'string?',
      rollbackdate: 'string?',
      isTransactionDateEdited: 'bool?',
      notes: {type: 'list', objectType: 'SalesNotes'},
      createdOn: 'string',
      createdBy: 'string?',
      modifiedOn: 'string?',
    },
  };
}

const initializeRealm = async () => {
  try {
    // Get the default Realm path
    const realmPath = Realm.defaultPath;

    // Check if the Realm file exists and delete it
    const fileExists = await RNFS.exists(realmPath);
    if (fileExists) {
      await RNFS.unlink(realmPath);
      console.log('Existing Realm file deleted');
    }

    // Open Realm with the new schema
    const realm = new Realm({
      schema: models,
      schemaVersion: 0, // Increment the schema version if needed
    });

    console.log('New Realm instance created');
  } catch (error) {
    console.error('Error initializing Realm:', error);
  }
};

// // Call the function to initialize Realm
initializeRealm();
