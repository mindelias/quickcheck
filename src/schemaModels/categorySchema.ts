import Realm from 'realm';

export class Category extends Realm.Object {
  id!: string;
  value!: string;
  label!: string;
  static schema = {
    name: 'Category',
    // embedded: true,
    primaryKey: 'value',
    properties: {
      id: 'string',
      value: 'string',
      label: 'string',
    },
  };
}
