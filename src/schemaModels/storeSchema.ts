import Realm from 'realm';

export class Device extends Realm.Object<Device> {
  deviceId!: string;
  terminalId?: string;
  deviceName!: string;
  location!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Device',
    embedded: true,
    properties: {
      deviceId: 'string',
      terminalId: 'string?',
      deviceName: 'string',
      location: 'string',
    },
  };
}

export class Store extends Realm.Object<Store> {
  id!: string;
  serverId?: string;
  emailAddress!: string;
  storeName!: string;
  ain?: string;
  address?: string;
  country?: any;
  state?: any;
  city?: any;
  createdOn!: string;
  modifiedOn?: string;
  createdBy?: string;
  devices?: Realm.List<Device>;

  static schema: Realm.ObjectSchema = {
    name: 'Store',
    primaryKey: 'id',
    properties: {
      id: 'string',
      emailAddress: 'string',
      serverId: 'string?',
      storeName: 'string',
      ain: 'string?',
      address: 'string?',
      country: 'string?',
      state: 'string?',
      city: 'string?',
      createdOn: 'string',
      modifiedOn: 'string?',
      createdBy: 'string?',
      devices: {type: 'list', objectType: 'Device'},
    },
  };
}
