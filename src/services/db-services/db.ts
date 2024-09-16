import {
  SQLiteDatabase,
  openDatabase,
  enablePromise,
} from 'react-native-sqlite-storage';

enablePromise(true);

// class DatabaseManager {
//   private static instance: DatabaseManager | null = null;
//   private db: SQLiteDatabase | null = null;

//   private constructor() {} // Make the constructor private to enforce singleton pattern

//   public static getInstance(): DatabaseManager {
//     if (!DatabaseManager.instance) {
//       DatabaseManager.instance = new DatabaseManager();
//     }
//     return DatabaseManager.instance;
//   }

//   public async connectToDatabase(): Promise<SQLiteDatabase> {
//     if (!this.db) {
//       this.db = await openDatabase(
//         {name: 'QuickCheck.db', location: 'default'},
//         () => console.log('Database connected'),
//         error => console.error('Error connecting to database', error),
//       );
//       await this.createTables();
//     }
//     return this.db;
//   }

//   public async createTables(): Promise<void> {
//     if (!this.db) {
//       throw new Error('Database not initialized');
//     }

//     const queries = [
//       `CREATE TABLE IF NOT EXISTS Users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         firstName TEXT,
//         lastName TEXT,
//         phoneNumber TEXT
//         emailAddress TEXT,
//         password TEXT
//       )`,
//     ];

//     for (const query of queries) {
//       await this.db.executeSql(query);
//     }
//   }
// }

// export default DatabaseManager;

// Enable promise for SQLite

export const connectToDatabase = async () => {
  return openDatabase(
    {name: 'QuickCheck.db', location: 'default'},
    () => {},
    error => {
      console.error(error);
      throw Error('Could not connect to database');
    },
  );
};

export const createTables = async (db: SQLiteDatabase) => {
  const usersQuery = `
     CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        phoneNumber TEXT,
        emailAddress TEXT,
        password TEXT
     )
    `;
  try {
    await db.executeSql(usersQuery);
  } catch (error) {
    console.error(error);
    throw Error('Failed to create tables');
  }
};
