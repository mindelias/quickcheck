import Realm, {BSON} from 'realm';

export class Item extends Realm.Object<Item> {
  _id!: BSON.ObjectId;
  title!: string;
  isComplete!: boolean;
  summary!: string;
  owner_id!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Item',
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      // All todo items will default to incomplete
      title: 'string',
      isComplete: {type: 'bool', default: false},
      summary: 'string',
      owner_id: 'string',
    },
  };
}

// export const RealmContext = createRealmContext({
//   schema: [Item],
// });
