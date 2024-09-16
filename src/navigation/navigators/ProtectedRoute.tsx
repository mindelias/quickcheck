import React, {useEffect, useState, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {routes} from '../routes/routesData';
import {styles} from './styles';
import {LOGIN_TOKEN} from '../../utils/constants';

interface Props {
  navigation: NavigationProp<any, any>;
  // Define headerContent prop to accept any valid ReactNode
  children?: ReactNode;
}

const ProtectedRoute: React.FC<Props> = props => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem(LOGIN_TOKEN);
        if (token) {
          // User is authenticated
          setAuthenticated(true);
        } else {
          // No token found, redirect to login screen
          props.navigation.navigate(routes.login);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        props.navigation.navigate(routes.login);
      } finally {
        setLoading(false); // Always set loading to false after authentication check
      }
    };

    checkAuth();
  }, [props.navigation]); // Include props.navigation in the dependency array

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!authenticated) {
    // If not authenticated, don't render the WrappedComponent
    return null;
  }

  // Render the WrappedComponent if authenticated
  return <View style={styles.container}>{props.children}</View>;
};

export default ProtectedRoute;
