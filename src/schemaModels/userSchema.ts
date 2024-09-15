import Realm from 'realm';
import {Store} from './storeSchema';
import {Role} from './roleAndPermission';

export class User extends Realm.Object<User> {
  id!: string;
  serverId?: string;
  fullName!: string;
  emailAddress!: string;
  phoneNumber!: string;
  password!: string;
  role!: Role;
  pin?: number;
  stores?: Realm.List<Store>;
  createdOn!: string;
  createdBy?: string;
  updatedOn?: string;

  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: 'string',
      serverId: 'string?',
      fullName: 'string',
      emailAddress: 'string',
      phoneNumber: 'string',
      password: 'string',
      role: 'Role',
      pin: 'int?',
      createdOn: 'string',
      createdBy: 'string?',
      updatedOn: 'string?',
      stores: {type: 'list', objectType: 'Store'},
    },
  };
}
