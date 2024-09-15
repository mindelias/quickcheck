import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../navigation/routes/routesData';
import Home from '../screens/home/Home';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MobileBottomTab = () => {
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

export default MobileBottomTab;
