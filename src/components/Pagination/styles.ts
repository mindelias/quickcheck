import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/common';
import {moderateScale as ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  paginationContainer: {
    ...globalStyles.centerHorizontalBetween,
  },
  btnsContainer: {
    ...globalStyles.centerHorizontalBetween,
  },
  btn: {
    backgroundColor: colors.white,
    gap: ms(5),
  },
  btnText: {
    color: colors.charcoal,
    fontSize: ms(9),
  },
  previousBtn: {
    marginHorizontal: ms(6),
  },
  disabledText: {
    color: colors.semiTransparentCharcoal,
  },
  itemsPerPage: {
    fontSize: ms(9),
  },
  currentPage: {
    ...globalStyles.paragraph,
    color: colors.primary,
    marginRight: 10,
  },
});
