import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, Alert} from 'react-native';
import BackArrow from '../../components/BackArrow/BackArrow';
import {AxiosResponse, AxiosError} from 'axios';
import {useMutation} from 'react-query';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/UiKits/CustomButton/CustomButton';
import FormInputController from '../../components/UiKits/CustomInput/FormController';
import {routes} from '../../navigation/routes/routesData';
import {generateOtp} from '../../services/auth';
import useAuthtStore from '../../store/auth/signup.store';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/common';
import {forgotPasswordValidationSchema} from '../../validation-schemas/auth-schema';
import {styles} from './auth-style';

const ForgotPassword: React.FC<any> = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });
  const {updateFormData} = useAuthtStore();
  const {mutateAsync, isLoading} = useMutation(generateOtp, {
    onSuccess: (_response: AxiosResponse) => {
      // props.navigation.navigate(routes.enterOtp);
    },
    onError: (error: AxiosError) => {
      console.log('Error', error);
      Alert.alert('Auth Error', error.message);
    },
  });

  const onSubmit = (values: {emailAddress: string}) => {
    props.navigation.navigate(routes.resetPassword);
    mutateAsync({emailAddress: values.emailAddress});
    updateFormData({...values});
  };

  return (
    <View style={globalStyles.wFull}>
      <View style={inlineStyles.backButtonWrapper}>
        <BackArrow onPress={() => props.navigation.goBack()} />
      </View>

      <View style={styles.headerCont}>
        <Text style={styles.title}>Forgot password ?</Text>
        <View style={styles.authHeaderTextWrapper}>
          <Text style={styles.subText}>
            Enter the email address linked to your account and we will send you
            a one time password{' '}
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

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Send email"
            color={colors.primary}
            onPress={handleSubmit(onSubmit)}
            isLoading={isLoading}
          />
        </View>
      </View>
    </View>
  );
};
const inlineStyles = StyleSheet.create({
  backButtonWrapper: {
    height: 100,
    marginBottom: 20,
  },
});
export default ForgotPassword;
