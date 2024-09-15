import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import ToggleIcon from '../../assets/icons/nav-tab-toggle-icon.svg';
import AvicashLogo from '../../assets/icons/avicash-logo.svg';
import SettingsIcon from '../../assets/icons/settings-icon.svg';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {moderateVerticalScale, ms} from 'react-native-size-matters';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../styles/colors';
import useAuthtStore from '../../store/auth/signup.store';
import {globalStyles} from '../../styles/common';
import {deleteLocalState, saveLocalState} from '../../utils/localstorage';
import {LOCK_TOKEN, LOCK_TOKEN_VALUE, LOGIN_TOKEN} from '../../utils/constants';

const CustomDrawerContent = (props: any) => {
  const {state, ...rest} = props;
  const {userData, updateStoreData} = useAuthtStore();
  const activeRoute = props.state.routes[props.state.index];
  const isActive =
    activeRoute.name === 'AppRoutes' &&
    activeRoute.params.screen === 'settings';

  const newState = {...state}; // copy state
  newState.routes = newState.routes.filter(
    (route: any) => route.name !== 'Settings',
  ); // remove Settings from the list
  newState.index = newState.routes.findIndex(
    (route: any) => route.name === state.routes[state.index].name,
  ); // ensure correct index

  const handleLogout = () => {
    updateStoreData({
      isLoggedIn: false,
      userData: null,
      showBackgroundImage: true,
    });
    deleteLocalState(LOGIN_TOKEN);
    // props.navigation.navigate('AppRoutes', {screen: 'login'});
  };
  const handleLockScreen = () => {
    updateStoreData({
      isLoggedIn: false,
      showBackgroundImage: true,
    });
    deleteLocalState(LOGIN_TOKEN);
    saveLocalState(LOCK_TOKEN, LOCK_TOKEN_VALUE);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sideNavHeader}>
        <View style={styles.logoWrapper}>
          {/* <Image
          source={require('../../assets/icons/avicash-logo.svg')}
          style={styles.toggleIcon}
        /> */}
          <AvicashLogo style={styles.toggleIcon} />

          <Text style={styles.logoName}>AviCash</Text>
        </View>

        <View>
          {/* <Image
          source={require('../../assets/icons/nav-tab-toggle-icon.svg')}
          style={styles.toggleIcon}
        /> */}
          <ToggleIcon onPress={() => props.navigation.toggleDrawer()} />
        </View>
      </View>
      <DrawerContentScrollView
        contentContainerStyle={Instyles.container}
        {...rest}
        state={newState}>
        <DrawerItemList {...rest} state={newState} />

        <View style={Instyles.settingsContainer}>
          <DrawerItem
            label="Settings"
            // eslint-disable-next-line react/no-unstable-nested-components
            icon={() => <SettingsIcon width={20} height={20} />}
            activeTintColor={isActive ? colors.black : colors.faintMidnightBlue}
            activeBackgroundColor={isActive ? colors.white : 'transparent'}
            inactiveTintColor={colors.black}
            onPress={() =>
              props.navigation.navigate('AppRoutes', {screen: 'settings'})
            }
            style={isActive ? Instyles.activeItem : {}}
          />
        </View>
        <View style={Instyles.drawerFooterContainer}>
          <View style={Instyles.drawerFooterItem}>
            <TouchableOpacity
              style={[globalStyles.flexHorizontal, globalStyles.gutterMd]}
              onPress={handleLockScreen}>
              <IonicIcons name="lock-closed-outline" size={20} color="black" />
              <Text style={globalStyles.small}>Lock Screen</Text>
            </TouchableOpacity>
          </View>

          <View style={Instyles.drawerFooterItem}>
            <View style={[globalStyles.flexHorizontal, globalStyles.gutterSm]}>
              <IonicIcons
                name="person-circle-outline"
                size={ms(25)}
                color="black"
              />
              <View>
                <Text style={Instyles.userName}>{userData?.fullName}</Text>
                <Text style={Instyles.userRole}> {userData?.role?.name}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleLogout}>
              <Icons name="logout" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
const Instyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  settingsContainer: {
    paddingTop: moderateVerticalScale(40),
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    height: heightPercentageToDP('35%'),
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'space-between', // This pushes the settings to the bottom
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  drawerFooterContainer: {
    flexDirection: 'column',
  },
  drawerFooterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    marginLeft: ms(5),
  },
  userName: {
    ...globalStyles.paragraph,
  },
  userRole: {
    ...globalStyles.small,
    opacity: 0.7,
  },
  activeItem: {
    backgroundColor: colors.white, // Example color
  },
});
