import {StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import {moderateScale} from 'react-native-size-matters';

const regularFontFamily = 'Uncut-Sans-Regular';
const mediumFontFamily = 'Uncut-Sans-Medium';
const boldFontFamily = 'Uncut-Sans-Bold';

const semiBoldFontFamily = 'Uncut-Sans-SemiBold';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  wFull: {
    width: '100%',
  },
  pageWrapper: {
    flex: 1,
    backgroundColor: colors.appBgColor,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  // Flex Styles
  flexHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerHorizontally: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerHorizontalBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerVerticalBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerVertically: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Gutter Styles
  gutterSm: {
    gap: 5,
  },
  gutterMd: {
    gap: moderateScale(10),
  },
  // Text Styles
  paragraph: {
    fontSize: moderateScale(10),
    fontFamily: regularFontFamily,
    color: colors.black,
  },
  small: {
    fontSize: moderateScale(8),
    fontFamily: regularFontFamily,
    color: colors.black,
  },
  textGrey: {
    fontSize: moderateScale(8),
    fontFamily: regularFontFamily,
    color: colors.charcoal,
  },
  textMuted: {
    color: colors.black,
    opacity: 0.5,
  },
  disabledText: {
    color: colors.semiTransparentCharcoal,
  },
  textDark: {
    color: colors.black,
  },

  // Heading
  header: {
    fontSize: moderateScale(30),
    fontFamily: boldFontFamily,
  },
  heading1: {
    fontSize: moderateScale(29),
    fontFamily: semiBoldFontFamily,
    fontWeight: '700',
  },
  heading2: {
    fontSize: moderateScale(25),
    fontFamily: semiBoldFontFamily,
    fontWeight: '700',
  },
  heading3: {
    fontSize: moderateScale(20),
    fontFamily: semiBoldFontFamily,
    fontWeight: '600',
  },
  heading4: {
    fontSize: moderateScale(15, 0.5),
    fontFamily: regularFontFamily,
    fontWeight: '600',
    color: colors.black,
  },

  heading5: {
    fontSize: moderateScale(10),
    fontFamily: semiBoldFontFamily,
    color: colors.black,
  },

  heading5Bold: {
    fontSize: moderateScale(12),
    fontFamily: boldFontFamily,
    color: colors.black,
  },

  heading6: {
    fontSize: moderateScale(5),
    fontFamily: semiBoldFontFamily,
  },

  // Input
  input: {
    height: 50, // 50,
    width: '100%',
    backgroundColor: colors.appBgColor3,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: moderateScale(15),
    marginTop: moderateScale(5),
  },
  inputActive: {
    backgroundColor: colors.white,
  },
  inputLight: {
    backgroundColor: colors.appBgColor2,
    borderColor: colors.borderColor3,
  },

  // Font Weights
  fontWeightBold: {
    fontFamily: boldFontFamily,
  },
  fontWeightSemiBold: {
    fontFamily: semiBoldFontFamily,
  },
  fontweightMedium: {
    fontFamily: mediumFontFamily,
  },
  fontWeightNormal: {
    fontFamily: regularFontFamily,
  },
  bold: {
    fontWeight: '700',
  },

  // Opacity
  opacity: {
    opacity: 0.5,
  },
  opacity70: {
    opacity: 0.7,
  },

  // Margin
  mt10: {
    marginTop: 10,
  },
});
