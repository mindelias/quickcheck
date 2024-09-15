import {StyleSheet} from 'react-native';
import {moderateScale as ms, verticalScale} from 'react-native-size-matters';
import {colors} from './colors';
import {globalStyles} from './common';

export const styles = StyleSheet.create({
  scrollContainer: {
    maxHeight: ms(200), // Set max height for scrolling area
    flexGrow: 1,
  },
  filterContainer: {
    // width: '100%',
    paddingHorizontal: ms(10),
    paddingVertical: ms(8),
    // marginHorizontal: ms(30),
  },
  filterTitle: {
    fontSize: ms(14),
    color: colors.black,
    marginBottom: ms(10),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resetBtn: {
    elevation: 2, // Simulate 2px blur radius
    shadowColor: colors.darkTranslucentNavy,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: colors.semiTransparentCharcoal,
  },
  showFilterMenuBtn: {
    // flex: 1,
    paddingHorizontal: ms(5),
    borderRadius: ms(10),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    elevation: 2, // Simulate 2px blur radius
    shadowColor: colors.fadedNavy,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: colors.faintMidnightBlue,
    height: ms(25),

    // width: ms()
  },
  filterBtn: {
    elevation: 2, // Simulate 2px blur radius
    shadowColor: colors.fadedNavy,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: colors.faintMidnightBlue,
    marginHorizontal: 12,
  },
  dateRangeContainer: {
    ...globalStyles.centerHorizontalBetween,
    backgroundColor: colors.appBgColor2,
    paddingHorizontal: ms(10),
    paddingVertical: ms(9),
    borderRadius: 12,
    marginBottom: ms(18),
  },
  buttonItemContainer: {
    paddingHorizontal: ms(5),
    paddingVertical: 2,
    marginBottom: 2,
    gap: 5,
    ...globalStyles.flexHorizontal,
  },
  buttonsContainer: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  oldOrNewSortText: {
    fontSize: ms(9),
    color: colors.black,
  },
  oldOrNewSortContainer: {
    ...globalStyles.centerHorizontalBetween,
    paddingHorizontal: ms(8),
    paddingVertical: ms(7),
    marginTop: 5,
  },
  activeOldOrNewSort: {
    backgroundColor: colors.appBgColor2,
    borderRadius: 8,
  },
  dateRangeTitle: {
    color: colors.black,
    fontSize: ms(10), //16,
  },
  subscriptTextWrapper: {
    width: ms(12),
    height: ms(12),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    top: -5,
  },
  subscriptText: {
    ...globalStyles.small,
    fontWeight: '600',
    color: colors.white,
  },
  actionButtonsContainer: {
    ...globalStyles.centerHorizontally,
    marginVertical: 10,
    gap: 10,
  },
  cancelButton: {
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    maxHeight: verticalScale(120),
  },
});
