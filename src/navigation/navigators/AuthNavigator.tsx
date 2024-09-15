// AppNavigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import authRoutes from '../routes/auth-routes';
import {routes} from '../routes/routesData';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.login}>
      {authRoutes.map((view, index) => (
        <Stack.Screen
          key={index}
          name={view.route}
          options={{headerShown: false}}
          component={view.component}
        />
      ))}
    </Stack.Navigator>
  );
};
export default AuthNavigator;
