import {CartItemType} from '../store/cart/type';
import {UpdateMode} from 'realm';

const UserService = () => {
  //   realm.close();

  const getAllUser = () => {
    return [];
  };

  const login = (payload: LoginFormValues) => {
    return [
      {
        emailAddress: '',
        password: '',
      },
    ];
    // if (payload.password) {
    //   return realm
    //     .objects('User')
    //     .filtered(
    //       'emailAddress == $0 AND password == $1',
    //       payload.emailAddress,
    //       payload.password,
    //     );
    // }
  };

  const createUser = (payload: any) => {
    console.log('==UPDATED_PAYLOAD==', JSON.stringify(payload, null, 2));
  };

  const updateUser = (_payload: CartItemType) => {
    // const user = realm.objectForPrimaryKey('User', payload.id);
    // const user = realm.objectForPrimaryKey('User', payload.id);

    return realm.write(() => {
      // return realm.create('User', payload, 'modified' as UpdateMode);
      // Object.keys(payload).forEach(key => {
      //   user[key] = payload[key];
      // });
    });
  };

  // const deleteProduct = (id) => {
  //   const product = realm.objectForPrimaryKey('Product', id);
  //   if (product) {
  //     realm.write(() => {
  //       realm.delete(product);
  //     });
  //   }
  // };

  return {
    getAllUser,
    createUser,
    updateUser,
    login,
  };
};

export default UserService;
