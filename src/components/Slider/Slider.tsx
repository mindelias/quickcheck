import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/common';
// import localStorageKeys from '../../core/constants/local-storage-keys';

const AuthSlider = (props: any) => {
  const {SlideImage, heading, subHeading} = props;

  //   const setAppOpened = async () => {
  //     await AsyncStorage.setItem(localStorageKeys.appOpened, '1');
  //   };

  useEffect(() => {
    //    setAppOpened()
  }, []);

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: '100%',
          flex: 1,
          marginBottom: 25,
          alignItems: 'center',
        }}>
        <SlideImage resizeMode="contain" />
      </View>
      <Text
        style={{
          ...globalStyles.heading2,
          ...globalStyles.fontWeightBold,
          textAlign: 'center',

          marginBottom: 20,
        }}>
        {heading}
      </Text>
      <Text
        style={{
          ...globalStyles.heading5,
          color: colors.dark,
          textAlign: 'center',
        }}>
        {subHeading}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    marginBottom: 20,
  },
});

export default AuthSlider;
