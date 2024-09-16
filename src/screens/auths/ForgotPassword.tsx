import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Realm from 'realm';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {forgotPasswordValidationSchema} from '../../validation-schemas/auth-schema';
import useAuthtStore from '../../store/auth/signup.store';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/UiKits/CustomButton/CustomButton';
import FormInputController from '../../components/UiKits/CustomInput/FormController';
import {colors} from '../../styles/colors';
import {LOGIN_TOKEN, TOKEN} from '../../utils/constants';
import {saveLocalState} from '../../utils/localstorage';
import LogoIcon from '../../assets/icons/logoicon-white.svg';
import {styles} from './login/login-styles';
import {routes} from '../../navigation/routes/routesData';
import {globalStyles} from '../../styles/common';
import {moderateScale, scale} from 'react-native-size-matters';

const ForgotPassword: React.FC<any> = props => {
  const {updateStoreData} = useAuthtStore();

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  const onSubmit = async (values: {emailAddress: string}) => {
    setIsLoading(true);

    console.log('Val', values);

    updateStoreData({
      isLoggedIn: true,
    });
    await saveLocalState(LOGIN_TOKEN, TOKEN);
    props.navigation.navigate('app', {screen: routes.home});
  };
  // await saveLocalState('token', '1234567789');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.headerCont}>
        <LogoIcon width={scale(300)} height={moderateScale(100)} />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>Enter your emailAddress</Text>
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

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Continue"
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoading}
            />
          </View>

          <TouchableOpacity
            style={globalStyles.centerHorizontally}
            onPress={() => props.navigation.navigate(routes.login)}>
            <Text style={styles.registerText}>Login?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;
