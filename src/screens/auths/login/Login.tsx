import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {loginValidationSchema} from '../../../validation-schemas/auth-schema';
import useAuthtStore from '../../../store/auth/signup.store';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../../components/UiKits/CustomButton/CustomButton';
import FormInputController from '../../../components/UiKits/CustomInput/FormController';
import {colors} from '../../../styles/colors';
import {LOGIN_TOKEN, TOKEN} from '../../../utils/constants';
import {saveLocalState} from '../../../utils/localstorage';
import LogoIcon from '../../../assets/icons/logoicon-white.svg';
// import {styles} from './auth-style';

import {loginService} from '../../../services/db-services/user';
import {styles} from './login-styles';
import {routes} from '../../../navigation/routes/routesData';
import {globalStyles} from '../../../styles/common';
import {moderateScale, scale} from 'react-native-size-matters';
// import * as yup from 'yup';

const LoginForm: React.FC<any> = props => {
  // const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Add this line
  const {updateStoreData} = useAuthtStore();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (values: User) => {
    setIsLoading(true);
    try {
      const response = await loginService(values);
      if (response && response.id) {
        await saveLocalState(LOGIN_TOKEN, TOKEN);
        updateStoreData({
          userData: response,
          isLoggedIn: true,
        });
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } catch (error) {
      console.log('Error Locally', error);
    }
    setIsLoading(false);
  };

  // const getUsers = async () => {
  //   const users = await getAllUsers();

  // };

  // getUsers();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.headerCont}>
        <LogoIcon width={scale(300)} height={moderateScale(100)} />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
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

          <TouchableOpacity
            onPress={() => props.navigation.navigate(routes.forgotPassword)}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Login"
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoading}
            />
          </View>

          <TouchableOpacity
            style={globalStyles.centerHorizontally}
            onPress={() => props.navigation.navigate(routes.signUp)}>
            <Text style={globalStyles.paragraph}>Don't have account?</Text>
            <Text style={styles.registerText}> Create a new account </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginForm;
