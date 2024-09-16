import {connectToDatabase} from './db';

export const createUser = async (payload: User) => {
  const db = await connectToDatabase();
  const {emailAddress, password, firstName, lastName, phoneNumber} = payload;
  const sql =
    'INSERT INTO Users (emailAddress, password, firstName, lastName, phoneNumber ) VALUES (?, ?, ?, ?, ?)';

  try {
    return db.executeSql(sql, [
      emailAddress,
      password,
      firstName,
      lastName,
      phoneNumber,
    ]);
  } catch (error) {
    console.error('Failed to create user', error);
  }
};

export const loginService = async ({emailAddress, password}: User) => {
  const db = await connectToDatabase();
  try {
    const sql = 'SELECT * FROM Users WHERE emailAddress = ? AND password = ?';
    const results = await db.executeSql(sql, [emailAddress, password]);
    if (results[0].rows.length > 0) {
      // User found, return the user data
      const user = results[0].rows.item(0);
      console.log('User found:', user);
      return user;
    } else {
      // No user found with the given credentials
      console.log('No user found with the given credentials');
      return null;
    }
  } catch (error) {
    console.error('Login failed', error);
    return null;
  }
};

export const getAllUsers = async () => {
  const db = await connectToDatabase();
  try {
    const results = await db.executeSql('SELECT * FROM Users');
    const rows = results[0].rows;
    let users = [];
    for (let i = 0; i < rows.length; i++) {
      users.push(rows.item(i));
    }
    return users;
  } catch (error) {
    console.error('Failed to retrieve data', error);
    return [];
  }
};

// const UserService = () => {
//   openDB();

//   const getAllUsers = async () => {
//     try {
//       const results = await db.executeSql('SELECT * FROM User');
//       const rows = results[0].rows;
//       let users = [];
//       for (let i = 0; i < rows.length; i++) {
//         users.push(rows.item(i));
//       }
//       return users;
//     } catch (error) {
//       console.error('Failed to retrieve data', error);
//       return [];
//     }
//   };

//   const login = async ({emailAddress, password}: User) => {
//     try {
//       const sql = 'SELECT * FROM User WHERE emailAddress = ? AND password = ?';
//       const results = await db.executeSql(sql, [emailAddress, password]);
//       const rows = results[0].rows;
//       return rows.length > 0 ? rows.item(0) : null;
//     } catch (error) {
//       console.error('Login failed', error);
//       return null;
//     }
//   };

//   const createUser = async (payload: User) => {
//     const {emailAddress, password, firstName, lastName, phoneNumber} = payload;
//     const sql =
//       'INSERT INTO User (emailAddress, password, firstName, lastName, phoneNumber ) VALUES (?, ?, ?, ?, ?)';
//     // const results = await db.executeSql(sql, [
//     //   emailAddress,
//     //   password,
//     //   firstName,
//     //   lastName,
//     //   phoneNumber,
//     // ]);
//     return db.executeSql(sql, [
//       emailAddress,
//       password,
//       firstName,
//       lastName,
//       phoneNumber,
//     ]);
//   };

//   //   const createUser = async (payload) => {
//   //     const { emailAddress, password, firstName, lastName, phoneNumber } = payload;
//   //     const sql = 'INSERT INTO User (emailAddress, password, firstName, lastName, phoneNumber) VALUES (?, ?, ?, ?, ?)';
//   //     try {
//   //         const results = await db.executeSql(sql, [emailAddress, password, firstName, lastName, phoneNumber]);
//   //         console.log('User created with ID:', results[0].insertId);
//   //         return results[0].insertId;
//   //     } catch (error) {
//   //         console.error("Create user failed", error);
//   //         return null;
//   //     }
//   // };

//   return {
//     openDB,
//     getAllUsers,
//     createUser,
//     login,
//   };
// };
