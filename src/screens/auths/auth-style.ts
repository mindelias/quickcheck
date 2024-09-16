import {StyleSheet} from 'react-native';
import {moderateScale as ms} from 'react-native-size-matters';
import {globalStyles} from '../../styles/common';
import {colors} from '../../styles/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: '100%',
  },

  authScreenContainer: {
    width: '100%',
    height: '80%',
  },
  leftColumnExpanded: {
    width: '100%',
  },
  authContentWrapper: {
    flex: 1,
    width: '75%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authContentWrapperExpanded: {
    width: '90%',
  },
  formContainer: {
    width: '100%',
    // height: '50%',
  },
  headerCont: {
    width: '100%',
    marginBottom: ms(40),

    // alignItems: 'center',
  },

  title: {
    ...globalStyles.heading2,
    // fontSize: ms(20),
    fontWeight: '600',
    color: colors.black,
  },
  subText: {
    ...globalStyles.paragraph,
    color: colors.black,
    opacity: 0.5,
  },
  authHeaderTextWrapper: {
    marginTop: ms(5),
    flexDirection: 'row',
    alignItems: 'center',
  },

  signUpText: {
    ...globalStyles.paragraph,
    color: colors.primary,
  },
  rightColumn: {
    flex: 2,
    width: '40%',
    height: hp('100%'),
  },
  hide: {
    display: 'none',
  },

  backgroundImage: {
    // flex: 1,
    height: hp('100%'),
    resizeMode: 'cover', // or 'contain' or 'stretch'
    justifyContent: 'center',
  },

  forgotPasswordTextCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: ms(30),
  },

  forgotPasswordText: {
    ...globalStyles.paragraph,
    color: colors.primary,
  },
  loginWithPinCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendTimerCount: {
    ...globalStyles.paragraph,
    color: colors.black,
  },
  buttonContainer: {
    marginVertical: ms(10),
  },
});
