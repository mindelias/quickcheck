import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../../components/UiKits/CustomButton/CustomButton';
import FormInputController from '../../../components/UiKits/CustomInput/FormController';
import {routes} from '../../../navigation/routes/routesData';
import useAuthtStore from '../../../store/auth/signup.store';
import {colors} from '../../../styles/colors';
import {globalStyles} from '../../../styles/common';
import {LOGIN_TOKEN, TOKEN} from '../../../utils/constants';
import {saveLocalState} from '../../../utils/localstorage';
import {loginValidationSchema} from '../../../validation-schemas/auth-schema';
import {createUser} from '../../../services/db-services/user';

const SignUp = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      const response = await createUser(values);
      console.log('response', JSON.stringify(response));
      if (response && response?.length > 0 && response[0].insertId) {
        await saveLocalState(LOGIN_TOKEN, TOKEN);
        updateStoreData({
          userData: response[0],
          isLoggedIn: true,
        });
      } else {
        Alert.alert('Error', ' ');
      }
    } catch (error) {
      console.log('Error Locally', error);
    } finally {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.headerCont}>
        <Text style={styles.title}>Create New Account</Text>
        <TouchableOpacity
          style={globalStyles.centerHorizontally}
          onPress={() => props.navigation.navigate(routes.login)}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <Text style={styles.loginText}> Login </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} > */}
        <View style={styles.inputContainer}>
          <FormInputController
            label="First Name"
            control={control}
            name="firstName"
            errors={errors}
            textInputProps={{
              placeholder: 'First Name',
            }}
          />
          <FormInputController
            label="Last Name"
            control={control}
            name="lastName"
            errors={errors}
            textInputProps={{
              placeholder: 'Last Name',
            }}
          />
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

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Register"
              onPress={handleSubmit(onSubmit)}
              isLoading={isLoading}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
