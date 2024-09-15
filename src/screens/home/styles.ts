import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {moderateScale as ms, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: ms(8),
    // height: '100%',
  },
  leftColumn: {
    padding: ms(20),
    flex: 4,
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  leftColumnExpanded: {
    width: '100%',
    // flex: 1,
  },
  rightColumn: {
    flex: 2,
    width: '30%',
    // height: hp('100%'),
  },
  hide: {
    display: 'none',
  },
  cartegoryListContainer: {
    // flex: 1,
    // flexDirection: 'row',
    marginVertical: 10,
    // flexWrap: 'wrap',
    padding: 10,
    // gap: 10,
    // width: '100%',
    borderRadius: 12,
    borderColor: colors.appBgColor3,
    backgroundColor: colors.white,
    height: verticalScale(60),
  },
  flatListContent: {
    flexDirection: 'row',
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures that the content expands to fill the screen vertically
    // justifyContent: 'flex-start', // Aligns content at the top of the screen
    // width: '100%',
  },

  productListContainer: {
    // flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    flexWrap: 'wrap',
    // padding: 10,
    gap: ms(10),
    // width: '100%',
  },
  minimizedCartCont: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    bottom: 5,
    flex: 1,
  },
  showCartBtnCont: {
    paddingHorizontal: ms(15),
    borderColor: '#f1f1f1',
  },
});
