import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import {routes} from '../routes/routesData';
import Home from '../../screens/home/Home';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name={routes.home}
        component={Home}
        options={{
          title: 'Home',

          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size = 20}) => (
            <HomeIcon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
