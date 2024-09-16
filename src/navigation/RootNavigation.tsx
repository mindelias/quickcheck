// App.js
import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAuthtStore from '../store/auth/signup.store';
import {LOGIN_TOKEN} from '../utils/constants';

// import ItemList from '../screens/home/ItemsList';

const Stack = createNativeStackNavigator();
const RootNavigation = (props: any) => {
  const [loading, setLoading] = useState(true);
  const {isLoggedIn} = useAuthtStore();
  const checkAuth = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem(LOGIN_TOKEN);
      if (token) {
        props.navigation.navigate('app', {screen: 'home'});
      } else {
        props.navigation.navigate('auth', {screen: 'login'});
      }
    } catch (error) {
      props.navigation.navigate('auth', {screen: 'login'});
      console.error('Error checking authentication:', error);
    } finally {
      setLoading(false);
    }
  }, [props.navigation]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) {
    return null; // Render loading screen if authentication status is being checked
  }

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="app"
            component={AppNavigator}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="Items" component={ItemList} /> */}
          <Stack.Screen
            name="auth"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
