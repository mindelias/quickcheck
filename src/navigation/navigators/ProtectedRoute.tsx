import React, {useEffect, useState, ReactNode, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {routes} from '../routes/routesData';
import SalesIcon from '../../assets/icons/sales.svg';
import HomeIcon from '../../assets/icons/home.svg';
import ProductIcon from '../../assets/icons/product.svg';
import SettingsIcon from '../../assets/icons/settings-icon.svg';
import {SvgProps} from 'react-native-svg';
import {styles} from './styles';
import {globalStyles} from '../../styles/common';
import useAuthtStore from '../../store/auth/signup.store';
import dayjs from 'dayjs';
import {getFirstName} from '../../utils/helpers';
import {LOGIN_TOKEN} from '../../utils/constants';

interface Props {
  navigation: NavigationProp<any, any>;
  route?: any;
  headerContent?: ReactNode; // Define headerContent prop to accept any valid ReactNode
  children?: ReactNode;
}

const ProtectedRoute: React.FC<Props> = props => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const {userData} = useAuthtStore();

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
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.navBarLeft}>
          {props.route.name === 'home' ? (
            <View>
              <Text style={styles.profileName}>
                Hello,
                {getFirstName(userData?.fullName!) || userData?.fullName}
              </Text>
              <Text style={styles.profileDate}>
                {dayjs().format('dddd, MMMM D, YYYY')}
              </Text>
            </View>
          ) : (
            <View
              style={{...globalStyles.centerHorizontally, ...styles.gutter}}>
              <GetIcon route={props.route} width={20} height={20} />
              <Text style={styles.navBarTitle}>{props.route.name}</Text>
            </View>
          )}
        </View>
        {props.headerContent && <View>{props.headerContent}</View>}
      </View>
      {/* <WrappedComponent
          {...props}
          navigation={props.navigation}
          route={props.route}
        /> */}
      {props.children}
    </View>
  );
};

const GetIcon: React.FC<SvgProps & {route: any}> = ({route}) => {
  const icon = useMemo(() => {
    switch (route.name) {
      case 'home':
        return <HomeIcon />;
      case 'products':
        return <ProductIcon />;
      case 'cart':
        return <SalesIcon />;
      case 'settings':
        return <SettingsIcon />;
      default:
        return <HomeIcon />;
    }
  }, [route.name]);

  return icon;
};

export default ProtectedRoute;
