import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {InputProps} from '../types';
import {moderateScale as ms} from 'react-native-size-matters';
import {colors} from '../../../styles/colors';
import {globalStyles} from '../../../styles/common';
import {Controller} from 'react-hook-form';

const FormInputController: React.FC<InputProps> = ({
  label,
  defaultValue,
  name,
  errors,
  control,
  placeholder,
  suffix,
  style,
  textInputProps,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          style ? style : {},
        ]}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input]}
              value={value}
              placeholder={placeholder}
              returnKeyType={'done'}
              onFocus={handleFocus}
              onBlur={() => {
                handleBlur();
                onBlur(); // make sure to call the original onBlur from react-hook-form
              }}
              onChangeText={onChange}
              {...textInputProps}
            />
          )}
        />

        {suffix}
      </View>

      {errors && errors[name] ? (
        errors[name]?.value ? (
          <Text style={styles.textError}>
            {errors[name]?.value?.message as string}
          </Text>
        ) : (
          <Text style={styles.textError}>
            {errors[name]?.message as string}
          </Text>
        )
      ) : (
        <Text style={styles.textError}>{errors?.message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    marginBottom: ms(3),
    ...globalStyles.paragraph,
    color: colors.black,
    fontWeight: '600',
  },
  inputContainer: {
    ...globalStyles.input,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: colors.black,
    backgroundColor: 'transparent',
    // padding: ms(10),
  },
  inputFocused: {
    borderColor: colors.primary, // example color
    borderWidth: 2, // example width
  },
  textError: {
    color: colors.danger,
  },
});

export default FormInputController;
