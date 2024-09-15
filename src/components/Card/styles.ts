import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {moderateScale as ms} from 'react-native-size-matters';
import {globalStyles} from '../../styles/common';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: ms(10),
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.005,
    shadowRadius: 0,

    // Android elevation set to zero
    elevation: 0,
  },

  cardTitleContainer: {
    borderBottomColor: colors.appBgColor3,
    borderBottomWidth: 1,
    padding: ms(10),
  },
  actionBottonsContainer: {
    borderTopColor: colors.appBgColor3,
    borderTopWidth: 2,
  },
  leftTitle: {
    ...globalStyles.heading5Bold,
    color: colors.black,
    fontWeight: 'bold',
    width: ms(500),
  },
});
