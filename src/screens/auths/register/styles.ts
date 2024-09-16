import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import {moderateScale} from 'react-native-size-matters';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {globalStyles} from '../../../styles/common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 20,
  },

  headerCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    // marginTop: 40,
    marginBottom: 20,
    gap: 10,
    height: heightPercentageToDP('30%'),
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
    backgroundColor: colors.white,
    // borderRadius: 10,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
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
  loginText: {
    ...globalStyles.paragraph,
    color: colors.white,
    // fontSize: 16,
  },
  buttonContainer: {
    marginVertical: moderateScale(10),
  },
  scrollViewContent: {
    width: '100%',
  },
});
