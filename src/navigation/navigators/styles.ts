import {StyleSheet} from 'react-native';
import {
  moderateVerticalScale,
  moderateScale as ms,
} from 'react-native-size-matters';
import {globalStyles} from '../../styles/common';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors.appBgColor,
    // paddingVertical: ms(16),
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.appBgColor2,
    borderBottomColor: colors.appBgColor3,
    borderBottomWidth: 2,
    paddingVertical: ms(10),
    paddingHorizontal: ms(16),
    // height: ms(38),
    height: moderateVerticalScale(55),
  },
  profileName: {
    ...globalStyles.heading5,
    color: colors.black,
    fontWeight: '600',
  },
  profileDate: {
    ...globalStyles.small,
    color: colors.black,
    opacity: 0.5,
  },
  navBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  navBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  navBarTitle: {
    color: colors.black,
    textTransform: 'capitalize',
    // fontSize: ms(16),
  },
  gutter: {
    gap: 5,
  },
});
