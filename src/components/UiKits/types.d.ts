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

export type CustomDropdownProps = {
  label?: string;
  name: string;
  defaultValue?: any;
  control?: Control<FieldValues>;
  placeholder?: string;
  color?: string;
  iconColor?: string;
  data: any[];
  style?: any;
  search?: boolean;
  disabled?: boolean;
  suffix?: JSX.Element;
  errors?: FieldErrors<FieldValues> | any;
  isFocus?: boolean;
  setIsFocus?: (isFocus: boolean) => void;
  onPress?: () => void;
};

export type CustomDropdownMenuProps = {
  data: {
    value: string | number;
    label: string;
  }[];
  iconColor?: string;
  handleBlur?: () => void;
  handleChange: (value: any) => void;
  selectedTextStyle?: any;
  value?: any;
  placeholder?: string;
  style?: any;
  search?: boolean;
  disabled?: boolean;
  setIsFocus?: (isFocus: boolean) => void;
  // onPress?: () => void;
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

export type CustomCheckboxProps = {
  label?: string;
  disabled?: boolean;
  name: string;
  defaultValue?: any;
  isChecked: boolean;
  control?: Control<FieldValues>;
  errors?: FieldErrors<FieldValues> | any;
  color?: string;
  style?: any;
  onPress?: () => void;
};
