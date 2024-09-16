import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {routes} from '../routes/routesData';
import Home from '../../screens/home/Home';
import {colors} from '../../styles/colors';
import {verticalScale} from 'react-native-size-matters';
import NewStories from '../../screens/stories/NewStories';
import TopStories from '../../screens/stories/TopStories';
import ProfileScreen from '../../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          paddingVertical: 10,
          height: verticalScale(50),
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5,
        },
      }}>
      <Tab.Screen
        name={routes.home}
        component={Home}
        options={{
          title: 'Home',

          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, focused, size = 20}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.topStories}
        component={TopStories}
        options={{
          title: 'Top Stories',
          headerShown: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, focused, size = 20}) => (
            <Icon
              name={focused ? 'book' : 'book-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.newStories}
        component={NewStories}
        options={{
          title: 'New Stories',
          headerShown: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, focused, size = 20}) => (
            <Icon
              name={focused ? 'newspaper' : 'newspaper-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.profile}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, focused, size = 20}) => (
            <Icon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
