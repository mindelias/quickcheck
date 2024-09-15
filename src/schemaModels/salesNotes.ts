import Realm from 'realm';

export class SalesNotes extends Realm.Object {
  id!: string;
  notes!: string;
  key!: string;
  createdOn!: string;
  createdBy!: string;
  static schema: Realm.ObjectSchema = {
    name: 'SalesNotes',
    embedded: true,
    // primaryKey: 'key',
    properties: {
      id: 'string',
      notes: 'string',
      key: 'string',
      createdOn: 'string',
      createdBy: 'string',
    },
  };
}
