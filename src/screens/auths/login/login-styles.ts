import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {globalStyles} from '../../../styles/common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollViewContent: {
    width: '100%',
    // height: '100%',
    // justifyContent: 'flex-end',
    // flex: 1,

    flexGrow: 1,
  },

  headerCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPercentageToDP('5%'),
    marginBottom: moderateVerticalScale(10),
    gap: moderateVerticalScale(5),
    height: verticalScale(150),
  },

  logo: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 10,
  },
  title: {
    ...globalStyles.heading2,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    ...globalStyles.paragraph,
    // fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },

  inputContainer: {
    flex: 1,
    width: '100%',
    // height: heightPercentageToDP('40%'),
    // height: '100%',
    backgroundColor: colors.white,
    // justifyContent: 'center',
    // borderRadius: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: moderateScale(30),
    // marginBottom: 10,
  },

  forgotPasswordText: {
    color: colors.primary,
    textAlign: 'right',
    marginTop: -20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#482ff7',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    ...globalStyles.paragraph,
    color: colors.primary,
    // fontSize: 16,
  },
  buttonContainer: {
    marginVertical: moderateScale(10),
  },
});
