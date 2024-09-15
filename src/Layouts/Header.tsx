import {useDrawerStatus} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';
import {colors} from '../styles/colors';
import ToggleIcon from '../assets/icons/nav-tab-toggle-icon.svg';

const Header = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
  options: any;
}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';

  return (
    <View style={styles.headerWrapper}>
      {/* <DrawerToggleButton />
       */}

      {!isDrawerOpen && (
        <ToggleIcon onPress={() => navigation.toggleDrawer()} />
      )}
      <Text>{route.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.appBgColor2,
    borderBottomColor: colors.appBgColor3,
    borderBottomWidth: 1,
    padding: 20,
    height: vs(38),
  },
});
export default Header;
