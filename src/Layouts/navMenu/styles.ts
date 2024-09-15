import {StyleSheet} from 'react-native';
import {
  scale as s,
  moderateVerticalScale as ms,
} from 'react-native-size-matters';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {globalStyles} from '../../styles/common';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBgColor,
    // backgroundColor: 'red',
    paddingTop: ms(0),
    // paddingHorizontal: ms(20),
  },
  sideNavHeader: {
    ...globalStyles.centerHorizontalBetween,
    gap: ms(5),
    paddingHorizontal: ms(10),
    paddingVertical: ms(18),
    borderColor: colors.borderColor,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
  },
  logoWrapper: {
    // flex: 1,
    ...globalStyles.centerHorizontally,
    gap: ms(8),
  },
  toggleIcon: {
    // position: 'absolute',
    // top: ms(10),
    // right: ms(10),
    width: s(24),
    height: s(24),
  },
  logoName: {
    color: colors.black,
    ...globalStyles.heading5,
  },
});
