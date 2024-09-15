import Realm from 'realm';
import {Sales} from './salesSchema';

export const newVersion = 0;
export const migration = (oldRealm: Realm, newRealm: Realm) => {
  if (oldRealm.schemaVersion < newVersion) {
    const oldObjects = oldRealm.objects('Sales');
    const newObjects = newRealm.objects('Sales');

    // Get the properties of the new schema
    const newSchemaProperties = Sales.schema.properties;

    for (let i = 0; i < oldObjects.length; i++) {
      const oldObject = oldObjects[i];
      const newObject = newObjects[i];

      // Iterate over the new schema properties
      for (const prop in newSchemaProperties) {
        if (!(prop in oldObject)) {
          const propertyType = newSchemaProperties[prop];

          // Set default values based on property type
          if (propertyType === 'bool?' || propertyType === 'bool') {
            (newObject as any)[prop] = false;
          } else if (propertyType === 'string?' || propertyType === 'string') {
            (newObject as any)[prop] = '';
          } else if (propertyType === 'int?' || propertyType === 'int') {
            (newObject as any)[prop] = 0;
          } else if (propertyType === 'float?' || propertyType === 'float') {
            (newObject as any)[prop] = 0.0;
          } else if (propertyType === 'double?' || propertyType === 'double') {
            (newObject as any)[prop] = 0.0;
          } else if (propertyType === 'list') {
            (newObject as any)[prop] = [];
          } else {
            (newObject as any)[prop] = null;
          }
        }
      }
    }
  }
};
