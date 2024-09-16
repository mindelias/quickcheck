import {FieldErrors, FieldValues} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type InputProps = {
  label?: string;
  name: string;
  defaultValue?: string;
  style?: any;
  placeholder?: string;
  isError?: boolean;
  control?: Control<FieldValues>;
  suffix?: JSX.Element;
  errors?: FieldErrors<FieldValues> | any;
  prefix?: JSX.Element;
  textInputProps: TextInputProps;
  //   label?: string;
  //   placeholder?: string;
  //   value: string;
  //   suffixIcon: JSX.Element;
  //   onChangeText?: (text: string) => void;
  //   secureTextEntry?: boolean;
};

export type CustomButtonProps = {
  title: string;
  color?: string;
  style?: any;
  textColor?: string;
  subscriptText?: string;
  disabled?: boolean;
  disabledBtnStyle?: any;
  disabledTextStyle?: any;
  btnStyle?: any;
  icon?: JSX.Element;
  isLoading?: boolean;
  rightIcon?: JSX.Element;
  onPress: () => void;
};
