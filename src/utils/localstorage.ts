import AsyncStorage from '@react-native-async-storage/async-storage';
export const getSavedState = (itemKey: string) => {
  let savedState = {};
  try {
    let savedItem;
    AsyncStorage.getItem(itemKey).then(item => {
      savedItem = item;
    });
    if (typeof savedItem === 'string') {
      return JSON.parse(savedItem);
    }
    return savedState;
  } catch (error) {
    return savedState;
  }
};

export const getUserPermissions = (): Set<string> => {
  const userInfo = getSavedState('GHOSTUser');
  if (userInfo && userInfo.permission) {
    return new Set(userInfo.permission);
  }
  return new Set([]);
};

export async function saveLocalState(itemKey: string, itemValue: any) {
  await AsyncStorage.setItem(itemKey, itemValue);
}

export async function deleteLocalState(itemKey: string) {
  await AsyncStorage.removeItem(itemKey);
}
