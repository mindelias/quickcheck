import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Realm from 'realm';
import {View, Text, Alert} from 'react-native';
import {loginValidationSchema} from '../../validation-schemas/auth-schema';
import {globalStyles} from '../../styles/common';
import useAuthtStore from '../../store/auth/signup.store';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/UiKits/CustomButton/CustomButton';
import FormInputController from '../../components/UiKits/CustomInput/FormController';
import {routes} from '../../navigation/routes/routesData';
import {colors} from '../../styles/colors';
import {LOGIN_TOKEN, TOKEN} from '../../utils/constants';
import {saveLocalState} from '../../utils/localstorage';
import {styles} from './auth-style';
import UserService from '../../services/db-services';
// import * as yup from 'yup';

const LoginForm: React.FC<any> = props => {
  // const navigation = useNavigation();
  const userService = UserService();
  const [isLoading, setIsLoading] = useState(false);

  const [loginWithPin, setLoginWithPin] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Add this line
  const {updateStoreData, updateFormData} = useAuthtStore();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await userService.login(values);
      console.log('response', response);
      if (response && response?.length > 0) {
        await saveLocalState(LOGIN_TOKEN, TOKEN);
        updateStoreData({
          userData: response[0],
          isLoggedIn: true,
        });
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } catch (error) {
      console.log('Error Locally', error);
    }
  };
  // await saveLocalState('token', '1234567789');

  return (
    <View style={styles.authScreenContainer}>
      {/* <View style={inlineStyles.backButtonWrapper}>
        <BackArrow onPress={() => props.navigation.goBack()} />
      </View> */}
      <View style={styles.headerCont}>
        <Text style={styles.title}>Welcome back</Text>
        <View style={styles.authHeaderTextWrapper}>
          <Text style={styles.subText}>Don’t have an account? </Text>

          <Text
            style={[styles.signUpText]}
            onPress={() => props.navigation.navigate(routes.signUp)}>
            Sign up
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <FormInputController
          label="Email address"
          control={control}
          name="emailAddress"
          errors={errors}
          textInputProps={{
            placeholder: 'johndoe@email.com',
            keyboardType: 'email-address',
          }}
        />

        {/* show password if there is internet connection */}

        <FormInputController
          label="Password"
          control={control}
          name="password"
          errors={errors}
          textInputProps={{
            placeholder: 'Password',
            secureTextEntry: !showPassword,
          }}
          suffix={
            <Ionicons
              name={!showPassword ? 'eye-off' : 'eye'}
              size={25}
              color={colors.darkGrey}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <View
          style={(styles.forgotPasswordTextCont, {justifyContent: 'flex-end'})}>
          <Text
            style={styles.forgotPasswordText}
            onPress={() => props.navigation.navigate(routes.forgotPassword)}>
            Forgot password?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Login"
            onPress={handleSubmit(onSubmit)}
            isLoading={isLoading}
          />
        </View>

        <View style={globalStyles.centerHorizontally}>
          <Text
            style={styles.forgotPasswordText}
            onPress={() => setLoginWithPin(!loginWithPin)}>
            {'Login with password'}
          </Text>
        </View>
      </View>
    </View>
  );
};
// const inlineStyles = StyleSheet.create({
//   backButtonWrapper: {
//     height: 50,
//     marginBottom: 20,
//   },
// });
export default LoginForm;
