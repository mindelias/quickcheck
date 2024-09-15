import {yupResolver} from '@hookform/resolvers/yup';
import {AxiosResponse, AxiosError} from 'axios';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Alert, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useMutation} from 'react-query';
import CustomButton from '../../components/UiKits/CustomButton/CustomButton';
import FormInputController from '../../components/UiKits/CustomInput/FormController';
import {routes} from '../../navigation/routes/routesData';
import {resetPassword} from '../../services/auth';
import useAuthtStore from '../../store/auth/signup.store';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/common';
import {resetPasswordValidationSchema} from '../../validation-schemas/auth-schema';
import {styles} from './auth-style';

const ResetPassword: React.FC<any> = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(resetPasswordValidationSchema),
  });
  const {formData} = useAuthtStore();
  const [showPassword, setShowPassword] = useState(false); // Add this line
  const [showToast, setShowToast] = useState(false);

  const {mutateAsync, isLoading} = useMutation(resetPassword, {
    onSuccess: (_response: AxiosResponse) => {
      setShowToast(true);
      // props.navigation.navigate(routes.login);
    },
    onError: (error: AxiosError) => {
      console.log('Error', error);
      Alert.alert('Auth Error', error.message);
    },
  });

  const onSubmit = (data: {password: string; confirmPassword: string}) => {
    // You can perform validation or send login request here
    const payload = {
      password: data.password,
      emailAddress: formData.emailAddress,
    };

    console.log(' data', payload);

    mutateAsync(payload);
  };

  return (
    <View style={globalStyles.wFull}>
      <View style={styles.headerCont}>
        <Text style={styles.title}>Reset password</Text>
        <View style={styles.authHeaderTextWrapper}>
          <Text style={styles.subText}>
            {' '}
            You are almost done. Enter your new password and you are good to go{' '}
          </Text>
        </View>
      </View>

      <CustomToast
        showToast={showToast}
        type="action"
        handleClose={() => setShowToast(false)}>
        <View style={globalStyles.flexHorizontal}>
          <Text style={inlineStyles.textStyle}>
            Password reset successfully |
          </Text>
          <Text
            style={[inlineStyles.textStyle, inlineStyles.loginTextStyle]}
            onPress={() => props.navigation.navigate(routes.login)}>
            Go back to login
          </Text>
        </View>
      </CustomToast>
      <View style={styles.formContainer}>
        <FormInputController
          label="New Password"
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

        <FormInputController
          label="Retype new password"
          control={control}
          name="confirmPassword"
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

        <View style={styles.buttonContainer}>
          {showToast ? null : (
            <CustomButton
              title="Reset password"
              color={colors.primary}
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoading}
            />
          )}
        </View>

        <View style={[globalStyles.centerHorizontally, globalStyles.gutterSm]}>
          <Ionicons name="return-up-back" color={colors.primary} size={25} />

          <Text
            style={styles.forgotPasswordText}
            onPress={() => props.navigation.navigate(routes.login)}>
            Return to login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;
const inlineStyles = StyleSheet.create({
  textStyle: {
    ...globalStyles.paragraph,
    color: colors.success,
  },
  loginTextStyle: {
    textDecorationLine: 'underline',
  },
});
