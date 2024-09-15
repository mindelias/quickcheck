import Realm from 'realm';

export class Permission extends Realm.Object {
  id!: string;
  name!: string; // Name of the permission like 'Edit sales', 'Add product', etc.

  static schema: Realm.ObjectSchema = {
    name: 'Permission',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
    },
  };
}

export class Role extends Realm.Object {
  id!: string;
  name!: string; // Role name like 'Admin', 'Sales rep', etc.
  permissions!: Realm.List<Permission>; // List of permissions associated with this role

  static schema: Realm.ObjectSchema = {
    name: 'Role',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      permissions: {type: 'list', objectType: 'Permission'},
    },
  };
}
